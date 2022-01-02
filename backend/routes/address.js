const express = require('express');
const router = express.Router();

const {
  newShippingInfo,
  updateShippingInfo,
} = require('../controllers/addressController');

const { isAuthenticatedUser } = require('../middlewares/auth');

router.route('/address/new').post(isAuthenticatedUser, newShippingInfo);

router.route('/address/update').put(isAuthenticatedUser, updateShippingInfo);

module.exports = router;
