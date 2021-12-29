const express = require("express");
const router = express.Router();

const {
    processPayment,
    sendStripApi,
    createPaymentIntent
} = require('../controllers/paymentController')

const { isAuthenticatedUser } = require("../middlewares/auth");

router.route('/payment/create-intent').post(createPaymentIntent);
router.route('/payment/process').post(isAuthenticatedUser, processPayment);
router.route('/stripeapi').get(isAuthenticatedUser, sendStripApi);

module.exports = router;
