const Product = require('../models/product');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');
const cloudinary = require('cloudinary');
const { getPublicId, getOldImagesFromProduct } = require('../utils/helpers');

// Create new product   =>   /api/v1/admin/product/new
exports.newProductOld = catchAsyncErrors(async (req, res, next) => {
	let images = [];
	if (typeof req.body.images === 'string') {
		images.push(req.body.images);
	} else {
		images = req.body.images;
	}

	let imagesLinks = [];

	for (let i = 0; i < images.length; i++) {
		const result = await cloudinary.v2.uploader.upload(images[i], {
			folder: 'products',
		});

		imagesLinks.push({
			public_id: result.public_id,
			url: result.secure_url,
		});
	}

	req.body.images = imagesLinks;
	req.body.user = req.user.id;

	const product = await Product.create(req.body);

	res.status(201).json({
		success: true,
		product,
	});
});

exports.newProduct = catchAsyncErrors(async (req, res, next) => {
	req.user = {
		avatar: {
			public_id: 'avatars/wqogidodejlqlkqizpjj',
			url: 'https://res.cloudinary.com/imagination-everywhere-inc/image/upload/v1638956971/avatars/wqogidodejlqlkqizpjj.jpg',
		},
		role: 'admin',
		_id: '61b07fab20ead018cf8e90d0',
		name: 'kelvin esegbona',
		email: 'kevoesegbona@gmail.com',
		createdAt: ' 2021-12-08T09:49:31.390Z',
		__v: 0,
	};
	// default State of Small and large Pictures
	req.body.pictures = [];
	req.body.smPictures = [];
	req.body.category =
		(req.body.category && req.body.category.split(', ')) || [];
	req.body.brands = (req.body.brands && req.body.brands.split(', ')) || [];
	req.body.variants =
		req.body.variants &&
		req.body.variants.length &&
		req.body.variants.split(', ').map((ele) => ({ color: ele }));
	req.body.imagesLinks = [];
  req.body.user = req.user.id;
	const parcel = {
		distance: req.body.distance,
		weight: req.body.weight,
		width: req.body.width,
		height: req.body.height,
		length: req.body.length,
		mass: req.body.mass,
	};
	req.body.parcel = parcel;

  const imgObj = {
    picture1: req.body.picture1 || '',
    picture2: req.body.picture2 || '',
    picture3: req.body.picture3 || '',
    picture4: req.body.picture4 || '',
    smPicture1: req.body.smPicture1 || '',
    smPicture2: req.body.smPicture2 || '',
    smPicture3: req.body.smPicture3 || '',
    smPicture4: req.body.smPicture4 || '',
  };

  const keysArr = Object.keys(imgObj);
   
  for (let i = 0; i < keysArr.length; i++) {
    const pictureKey = keysArr[i];
    const isSmallPictureType = pictureKey.includes('smPicture');
    const isLargePictureType = pictureKey.includes('picture');

    
    if(req.files && req.files[pictureKey]) {
      // its a file
      const tempPath = req.files[pictureKey].tempFilePath;
      const result = await cloudinary.v2.uploader.upload(tempPath, {
        folder: 'products',
      });
      if (isSmallPictureType) {
        req.body.smPictures.push(result.secure_url);
      } else if (isLargePictureType) {
        req.body.pictures.push(result.secure_url);
      }
    } else {
        if(isSmallPictureType) {
          req.body.smPictures.push(imgObj[pictureKey]);
        } else {
          req.body.pictures.push(imgObj[pictureKey]);
        }
    }
  
  }


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
	req.user = {
		avatar: {
			public_id: 'avatars/wqogidodejlqlkqizpjj',
			url: 'https://res.cloudinary.com/imagination-everywhere-inc/image/upload/v1638956971/avatars/wqogidodejlqlkqizpjj.jpg',
		},
		role: 'admin',
		_id: '61b07fab20ead018cf8e90d0',
		name: 'kelvin esegbona',
		email: 'kevoesegbona@gmail.com',
		createdAt: ' 2021-12-08T09:49:31.390Z',
		__v: 0,
	};

	req.body.pictures = [];
	req.body.smPictures = [];
	req.body.category =
		(req.body.category && req.body.category.split(', ')) || [];
	req.body.brands = (req.body.brands && req.body.brands.split(', ')) || [];
	req.body.variants =
		req.body.variants &&
		req.body.variants.length &&
		req.body.variants.split(', ').map((ele) => ({ color: ele }));
	req.body.imagesLinks = [];

	req.body.user = req.user._id;
	const parcel = {
		distance: req.body.distance,
		weight: req.body.weight,
		width: req.body.width,
		height: req.body.height,
		length: req.body.length,
		mass: req.body.mass,
	};
	req.body.parcel = parcel;

  const imgObj = {
    picture1: req.body.picture1 || '',
    picture2: req.body.picture2 || '',
    picture3: req.body.picture3 || '',
    picture4: req.body.picture4 || '',
    smPicture1: req.body.smPicture1 || '',
    smPicture2: req.body.smPicture2 || '',
    smPicture3: req.body.smPicture3 || '',
    smPicture4: req.body.smPicture4 || '',
  };

   const oldImgObj = getOldImagesFromProduct(oldProduct);
    const keysArr = Object.keys(imgObj);
   
		for (let i = 0; i < keysArr.length; i++) {
			const pictureKey = keysArr[i];
	    const isSmallPictureType = pictureKey.includes('smPicture');
			const isLargePictureType = pictureKey.includes('picture');

       
       if(oldImgObj[pictureKey] && !imgObj[pictureKey]){
          // remove delete images from cloudinarry
          const publicId = getPublicId(oldImgObj[pictureKey]);
          publicId && await cloudinary.v2.uploader.destroy(publicId);
       }

      if(req.files && req.files[pictureKey]) {
        // its a file
        const tempPath = req.files[pictureKey].tempFilePath;
        const result = await cloudinary.v2.uploader.upload(tempPath, {
					folder: 'products',
				});
				if (isSmallPictureType) {
					req.body.smPictures.push(result.secure_url);
				} else if (isLargePictureType) {
					req.body.pictures.push(result.secure_url);
				}
      } else {
          if(isSmallPictureType) {
            req.body.smPictures.push(imgObj[pictureKey] || "");
          } else {
            req.body.pictures.push(imgObj[pictureKey] || "");
          }
      }
		
		}

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

// Get all products => /api/v1/products
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
	// return next(new ErrorHandler('My Error', 400))

	const resPerPage = 15;

	const productsCount = await Product.countDocuments();

	const apiFeatures = new APIFeatures(Product.find(), req.query)
		.search()
		.filter();

	let products = await apiFeatures.query;
	let filteredProductsCount = products.length;

	apiFeatures.pagination(resPerPage);
	products = await apiFeatures.query;

	// test delay for loading products
	// setTimeout(() => {
	//   res.status(200).json({
	//     success: true,
	//     productsCount,
	//     products,
	//   });
	// }, 2000);
	//   console.log('====================================');
	//   console.log({ products });
	//   console.log('====================================');
	products = products.map(
		({ _id, _doc: { numOfReviews, user, createdAt, ...rest } }, index) => {
			return {
				id: _id,
				...rest,
			};
		}
	);

	res.status(200).json({
		success: true,
		productsCount,
		resPerPage,
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

// Update Product   =>   /api/v1/admin/product/:id
exports.updateProductOld = catchAsyncErrors(async (req, res, next) => {
	let product = await Product.findById(req.params.id);

	if (!product) {
		return next(new ErrorHandler('Product not found', 404));
	}

	let images = [];
	if (typeof req.body.images === 'string') {
		images.push(req.body.images);
	} else {
		images = req.body.images;
	}

	if (images !== undefined) {
		// Deleting images associated with the product
		for (let i = 0; i < product.images.length; i++) {
			const result = await cloudinary.v2.uploader.destroy(
				product.images[i].public_id
			);
		}

		let imagesLinks = [];

		for (let i = 0; i < images.length; i++) {
			const result = await cloudinary.v2.uploader.upload(images[i], {
				folder: 'products',
			});

			imagesLinks.push({
				public_id: result.public_id,
				url: result.secure_url,
			});
		}

		req.body.images = imagesLinks;
	}

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

// Delete Product   =>   /api/v1/admin/product/:id
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
	const product = await Product.findById(req.params.id);

	if (!product) {
		return next(new ErrorHandler('Product not found', 404));
	}

	// Deleting images associated with the product
	for (let i = 0; i < product.images.length; i++) {
		const result = await cloudinary.v2.uploader.destroy(
			product.images[i].public_id
		);
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
		(r) => r.user.toString() === req.user._id.toString()
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
		(review) => review._id.toString() !== req.query.id.toString()
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
		}
	);

	res.status(200).json({
		success: true,
	});
});

// Get all products (Admin)  =>   /api/v1/admin/products
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
	const products = await Product.find();

	res.status(200).json({
		success: true,
		products,
	});
});

/*

[
  'https://res.cloudinary.com/imagination-everywhere-inc/image/upload/v1639478290/products/fy9v9lbbfvcdv6r3rz8j.jpg',
  'https://res.cloudinary.com/imagination-everywhere-inc/image/upload/v1639478291/products/srnqeljdstlja6zpvrrr.jpg',
  'https://res.cloudinary.com/imagination-everywhere-inc/image/upload/v1639478292/products/pvgj9dxa8o4kktxsceti.jpg',
  'https://res.cloudinary.com/imagination-everywhere-inc/image/upload/v1639478293/products/szktytp4z2j4dbbmnezl.jpg'
] [
  'https://res.cloudinary.com/imagination-everywhere-inc/image/upload/v1639478294/products/bttc9f5t9t6m3axguoio.jpg',
  'https://res.cloudinary.com/imagination-everywhere-inc/image/upload/v1639478295/products/ori4ouk0i63lqwxeebe8.jpg',
  'https://res.cloudinary.com/imagination-everywhere-inc/image/upload/v1639478297/products/epjslt6t8emrnvyzdeh8.jpg',
  'https://res.cloudinary.com/imagination-everywhere-inc/image/upload/v1639478298/products/cvzyynkw9xx8jlcazntw.jpg'
]

*/
