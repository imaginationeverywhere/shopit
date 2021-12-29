const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Order = require('../models/order');

// Process stripe payments   =>   /api/v1/payment/process
exports.processPayment = catchAsyncErrors(async (req, res, next) => {

    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'usd',

        metadata: { integration_check: 'accept_a_payment' }
    });

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    })

})

// Send stripe API Key   =>   /api/v1/stripeapi
exports.sendStripApi = catchAsyncErrors(async (req, res, next) => {

    res.status(200).json({
        stripeApiKey: process.env.STRIPE_API_KEY
    })

})

exports.createPaymentIntent = catchAsyncErrors(async (req, res, next) => {
    //get order amount 
    const order = await Order.findById(req.body.orderId).populate({
        path: "user",
        select: ['email']
    })
    if (!order) {
        return next(new ErrorHandler('No Order found with this ID', 404))
    }
    const paymentIntent = await stripe.paymentIntents.create({
        amount: Number(order.totalPrice) * 100,
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true,
        },
        receipt_email: order.user.email,
        metadata: {
            orderId: req.body.orderId,
        }
    });

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    })

})



