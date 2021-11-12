const Product = require('../models/product');
const User = require('../models/user');

const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/products');
const users = require('../data/users');

// Setting dotenv file
dotenv.config({ path: 'backend/config/config.env' })

connectDatabase();

const seedProducts = async () => {
    try {

        await Product.deleteMany();
        console.log('Products are deleted');

        await Product.insertMany(products)
        console.log('All Products are added.')

        await User.deleteMany();
        console.log('Users are deleted now')

        const val = await User.insertMany(users)
        console.log(val)
        console.log('Users added.')


        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts()