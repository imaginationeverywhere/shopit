const Product = require('../models/product');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');
const cloudinary = require('cloudinary');
const { getPublicId, getOldImagesFromProduct } = require('../utils/helpers');

exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  // default State of Small and large Pictures
  req.body.user = req.user.id;
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let oldProduct = await Product.findById(req.params.id);

  if (!oldProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }

  // // check if user is admin or owner of product
  // if (req.user.id !== oldProduct.user) {
  //   return next(new ErrorHandler('Not Authorized. This is not your product', 401));
  // }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

const ArrayLowercase = (array) => {
  return array?.map?.((item) => item.toLowerCase()) || array;
};

const manageFilters = ({ size, brand, category, color, value } = {}) => {
  console.log(value, 'value');
  const filterObj = {};
  if (category?.length) {
    filterObj.category = { $in: ArrayLowercase(category) };
  }
  if (size?.length) {
    filterObj.size = { $in: size };
  }
  if (brand?.length) {
    filterObj.brand = { $in: brand };
  }
  if (color?.length) {
    filterObj['variant.color'] = { $in: brand };
  }
  if (!isNaN(value?.min) && !isNaN(value?.max)) {
    filterObj.price = { $gt: Number(value?.min), $lt: Number(value?.max) };
  }
  console.log(filterObj);
  return filterObj;
};

// Get all products => /api/v1/products
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  // return next(new ErrorHandler('My Error', 400))
  const filters = req.body.filters;
  const resPerPage = Number(req.query.pageSize) || 15;
  // console.log({ resPerPage });
  const productsCount = await Product.countDocuments();
  const sortBy = ['createdAt', 'price', 'stock', 'rating'].includes(
    filters?.sortBy,
  )
    ? filters?.sortBy
    : 'createdAt';
  const apiFeatures = new APIFeatures(
    Product.find({
      productImages: { $gt: [] },
      ...manageFilters(filters),
    }).sort({ [sortBy]: 1 }), // don't return products without images
    req.query,
  ).search();

  let products = await apiFeatures.query;
  let filteredProductsCount = products.length;

  apiFeatures.pagination(resPerPage);
  products = await apiFeatures.query;

  const pageCount = Math.ceil(productsCount / resPerPage);

  res.status(200).json({
    success: true,
    productsCount,
    resPerPage,
    pageCount,
    filteredProductsCount,
    products,
  });
});

// Get single product details   =>   /api/v1/product/:id
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product   =>   /api/v1/admin/product/:id
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  const allImages = product.productImages;
  // Deleting images associated with the product
  for (let i = 0; i < allImages.length; i++) {
    const publicId = allImages[i].public_id;
    publicId && (await cloudinary.v2.uploader.destroy(publicId));
  }
  await product.remove();

  res.status(200).json({
    success: true,
    message: 'Product is deleted.',
  });
});

// Create new review   =>   /api/v1/review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (r) => r.user.toString() === req.user._id.toString(),
  );

  if (isReviewed) {
    product.reviews.forEach((review) => {
      if (review.user.toString() === req.user._id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  product.ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get Product Reviews   =>   /api/v1/reviews
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Delete Product Review   =>   /api/v1/reviews
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);

  console.log(product);

  const reviews = product.reviews.filter(
    (review) => review._id.toString() !== req.query.id.toString(),
  );

  const numOfReviews = reviews.length;

  const ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    },
  );

  res.status(200).json({
    success: true,
  });
});

// Get all products (Admin)  =>   /api/v1/admin/products
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();
  const productsCount = await Product.countDocuments();

  res.status(200).json({
    success: true,
    products,
    productsCount,
  });
});

exports.addImageToProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }

  if (req.files && req.files.productImage) {
    const { productImage } = req.files;
    const image = await cloudinary.v2.uploader.upload(
      productImage.tempFilePath,
    );
    const imageObj = {
      url: image.secure_url,
      publicId: image.public_id,
      name: req.body.name,
    };
    product.productImages.push(imageObj);
    await product.save();
    res.status(200).json({
      success: true,
      product,
      imageObj,
    });
  } else {
    return next(new ErrorHandler('No file uploaded', 400));
  }
});

exports.removeImageFromProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }
  const image = product.productImages.find(
    (image) => image.publicId === req.body.imagePublicId,
  );
  if (!image) {
    return next(new ErrorHandler('Image not found', 404));
  }
  const publicId = image.publicId;
  const imageIndex = product.productImages.indexOf(image);
  product.productImages.splice(imageIndex, 1);
  await product.save();
  await cloudinary.v2.uploader.destroy(publicId);
  res.status(200).json({
    success: true,
    product,
  });
});

exports.updateImageOnProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }
  const publicId = req.body.imagePublicId;
  const imageIndex = product.productImages.findIndex(
    (image) => image.publicId === publicId,
  );
  if (imageIndex === -1) {
    return next(new ErrorHandler('Image not found', 404));
  }

  await cloudinary.v2.uploader.destroy(publicId);
  if (req.files && req.files.productImage) {
    const { productImage } = req.files;
    const image = await cloudinary.v2.uploader.upload(
      productImage.tempFilePath,
    );
    const imageObj = {
      url: image.secure_url,
      publicId: image.public_id,
      name: product.productImages[imageIndex].name,
    };
    product.productImages[imageIndex] = imageObj;
    await product.save();
    res.status(200).json({
      success: true,
      product,
      imageObj,
    });
  } else {
    return next(new ErrorHandler('No file uploaded', 400));
  }
});
