const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const ShipmentService = require('../services/shipmentService');

exports.trackShipment = catchAsyncErrors(async (req, res) => {
  const {
    tracking_number: trackingNo,
    metadata,
    tracking_status: status,
    tracking_history: trackingHistory,
  } = req.body.data;

  ShipmentService.updateShipmentTracking({
    trackingNo,
    metadata,
    status,
    trackingHistory,
  });
  res.status(200).send({});
});
