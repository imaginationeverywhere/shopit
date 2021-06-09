const Product = require('../models/product')

// Create new product   =>   /api/v1/admin/product/new
exports.newProduct = async (req, res, next) => {

    // let images = []
    // if (typeof req.body.images === 'string') {
    //     images.push(req.body.images)
    // } else {
    //     images = req.body.images
    // }

    // let imagesLinks = [];

    // for (let i = 0; i < images.length; i++) {
    //     const result = await cloudinary.v2.uploader.upload(images[i], {
    //         folder: 'products'
    //     });

    //     imagesLinks.push({
    //         public_id: result.public_id,
    //         url: result.secure_url
    //     })
    // }

    // req.body.images = imagesLinks
    // req.body.user = req.user.id;

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}

// Get all products => /api/v1/products
exports.getProducts = async (req, res, next) => {

    const products = await Product.find();

    res.status(200).json({
        success: true,
        count: products.length,
        products
    })
}

// Get single product details   =>   /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    // if (!product) {
    //     return next(new ErrorHandler('Product not found', 404));
    // }

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }


    res.status(200).json({
        success: true,
        product
    })

}
