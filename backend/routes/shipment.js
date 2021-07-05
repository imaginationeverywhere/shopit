const express = require("express");
const router = express.Router();

const { getCarriers } = require("../controllers/shipmentController");
const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/shipment/carriers").post(isAuthenticatedUser, getCarriers);

module.exports = router;
