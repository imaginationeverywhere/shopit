const express = require('express');
const router = express.Router();

const {
  newOrder,
  getSingleOrder,
  myOrders,
  allOrders,
  updateOrder,
  deleteOrder,
  draftOrder,
  finalizeOrder,
} = require('../controllers/orderController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/order/draft').post(draftOrder);
router.route('/order/:orderId').get(getSingleOrder);
router.route('/order/finalize').post(finalizeOrder);
router.route('/order/new').post(isAuthenticatedUser, newOrder);

router.route('/orders/me').get(isAuthenticatedUser, myOrders);

router
  .route('/admin/orders/')
  .get(isAuthenticatedUser, authorizeRoles('admin'), allOrders);
router
  .route('/admin/order/:id')
  .put(isAuthenticatedUser, authorizeRoles('admin'), updateOrder)
  .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteOrder);

module.exports = router;
