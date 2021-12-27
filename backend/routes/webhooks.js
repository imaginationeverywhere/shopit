const express = require("express");
const router = express.Router();

const { trackShipment } = require("../controllers/webhookController");
router.route("/webhooks/shippo/track-shipment").post(trackShipment);

module.exports = router;
