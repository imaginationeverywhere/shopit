const express = require("express");
const router = express.Router();

const { getCarriers } = require("../controllers/shipmentController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/shipment/carriers").get(isAuthenticatedUser, getCarriers);

module.exports = router;
