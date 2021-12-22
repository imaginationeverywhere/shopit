const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        default: 0.0
    },
    shortDesc: {
        type: String,
        required: [true, 'Please enter product description'],
    },
    ratings: {
        type: Number,
        default: 0
    },
    reviews: {
        type: Number,
        default: 0
    },
    top: {
        type: Boolean,
        default: false
    },
    imageLinks: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    pictures: [
        {
            type: String,
            required: true
        }
    ],
    smPictures: [
        {
            type: String,
            required: true
        }
    ],
    brands: [
        {
            type: String,
            required: true
        }
    ],
    category: [
        {
            type: String,
            required: [true, 'Please select category for this product'],
            enum: {
                values: [
                    'Electronics',
                    'Cameras',
                    'Laptops',
                    'Accessories',
                    'Headphones',
                    'Food',
                    "Books",
                    'Clothes/Shoes',
                    'Beauty/Health',
                    'Sports',
                    'Outdoor',
                    'Home'
                ],
                message: 'Please select correct category for product'
            }
       }
    ],
    variants: [
        {
            color: {
                type: String,
                required: true
            }
        }
    ],
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema);
