const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
const cloudinary = require('cloudinary');

const errorMiddleware = require('./middlewares/errors')

app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }));
app.use(cookieParser())

// setting up cloudinary config
cloudinary.config({ 
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

// Import all routes
const products = require('./routes/products');
const auth = require('./routes/auth');
const order = require('./routes/order');

app.use('/api/v1', products);
app.use('/api/v1', auth)
app.use('/api/v1', order)

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
