const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const Constants = require('./utils/constants');

// const dotenv = require('dotenv');
const path = require('path')
const cors = require('cors')

const errorMiddleware = require('./middlewares/errors')

// Setting up config file
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' })
// dotenv.config({ path: 'backend/config/config.env' })

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser())
app.use(fileUpload());


// Import all routes
const products = require('./routes/products');
const auth = require('./routes/auth');
const payment = require('./routes/payment');
const order = require('./routes/order');
const shipment = require('./routes/shipment');
const webhooks = require('./routes/webhooks');
const templates = require('./routes/templates');

app.use(Constants.BASE_URL, products);
app.use(Constants.BASE_URL, auth)
app.use(Constants.BASE_URL, payment)
app.use(Constants.BASE_URL, order)
app.use(Constants.BASE_URL, shipment);
app.use(Constants.BASE_URL, webhooks)
app.use(Constants.BASE_URL, templates)

if (process.env.NODE_ENV === 'PRODUCTION') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
  })
}

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
