const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
const errorMiddleware = require('./middlewares/errors')
const fileUpload = require('express-fileupload')

app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }));
app.use(cookieParser())
app.use(fileUpload());


// Import all routes
const products = require('./routes/products');
const auth = require('./routes/auth');
const order = require('./routes/order');

app.use('/api/v1', products);
app.use('/api/v1', auth)
app.use('/api/v1', order)

if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
