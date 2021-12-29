const Order = require('../models/order');
const Product = require('../models/product');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const OrderService = require('../services/orderService');
const ShipmentService = require('../services/shipmentService');


// Create a new order   =>  /api/v1/order/new
exports.draftOrder = catchAsyncErrors(async (req, res, next) => {
    const {
        orderItems,
        shippingInfo,
        totalPrice,
        userDetails,
    } = req.body;

    //validation ??
    try {
        const order = await OrderService.createDraftOrder({
            orderItems,
            shippingInfo,
            totalPrice,
            userDetails,
        })
        res.status(200).json({
            success: true,
            order
        })
    } catch (error) {
        console.log('Error is creating order-----', error)
        res.status(422).json({ success: false, message: 'Something went wrong' })
    }
})


exports.finalizeOrder = catchAsyncErrors(async (req, res, next) => {
    const {
        orderId,
        paymentIntentId
    } = req.body;

    //validation ??
    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        const order = await Order.findById(orderId)
        if (String(paymentIntent.metadata.orderId) === String(orderId) && order){
            //finalize order
            order.paymentInfo = {
                id: paymentIntentId,
                status: paymentIntent.status
            }
            order.paidAt = paymentIntent.created
            
            const updatedOrder = await order.save()

            res.status(200).json({
                success: true,
                order: updatedOrder
              });
        }
        res.status(422).json({ success: false, message: 'ssSomething went wrong' })
        


    } catch (error) {
        console.log('Error is creating order-----', error)
        res.status(422).json({ success: false, message: 'Something went wrong' })
    }
})



// Create a new order   =>  /api/v1/order/new
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    const {
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        selectedCarrier,
        paymentInfo
    } = req.body;

    try {
        const order = await OrderService.createOrder({
            orderItems,
            shippingInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            paymentInfo,
            selectedCarrier,
            paidAt: Date.now(),
            user: req.user._id
        }, ShipmentService)
        res.status(200).json({
            success: true,
            order
        })
    } catch (error) {
        console.log('Error is creating order-----', error)
        res.status(422).json({ success: false, message: 'Something went wrong' })
    }
})

// Get single order   =>   /api/v1/order/:id
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.orderId).populate({
        path: "user",
        select: ['email', 'name', 'password', 'phone']
    })

    if (!order) {
        return next(new ErrorHandler('No Order found with this ID', 404))
    }

    res.status(200).json({
        success: true,
        order
    })
})

// Get logged in user orders   =>   /api/v1/orders/me
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find({ user: req.user.id })

    res.status(200).json({
        success: true,
        orders
    })
})


// Get all orders - ADMIN  =>   /api/v1/admin/orders/
exports.allOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find()

    let totalAmount = 0;

    orders.forEach(order => {
        totalAmount += order.totalPrice
    })

    res.status(200).json({
        success: true,
        totalAmount,
        orders
    })
})

// Update / Process order - ADMIN  =>   /api/v1/admin/order/:id
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id)

    if (order.orderStatus === 'Delivered') {
        return next(new ErrorHandler('You have already delivered this order', 400))
    }

    order.orderItems.forEach(async item => {
        await updateStock(item.product, item.quantity)
    })

    order.orderStatus = req.body.status,
        order.deliveredAt = Date.now()

    await order.save()

    res.status(200).json({
        success: true,
    })
})

async function updateStock(id, quantity) {
    const product = await Product.findById(id);

    product.stock = product.stock - quantity;

    await product.save({ validateBeforeSave: false })
}

// Delete order   =>   /api/v1/admin/order/:id
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id)

    if (!order) {
        return next(new ErrorHandler('No Order found with this ID', 404))
    }

    await order.remove()

    res.status(200).json({
        success: true
    })
})