const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const errorMiddleware = require('./middlewares/errors')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Import all routes
const products = require('./routes/products');

app.use('/api/v1', products);

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
