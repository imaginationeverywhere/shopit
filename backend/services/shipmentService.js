const OrderService = require('./orderService');
const Shipment = require('../models/shipment');
const ShippoService = require('./shippo');

const updateShipmentTracking = async ({
  trackingNo,
  status,
  trackingHistory,
}) => {
  try {
    // const shipment = await Shipment.findOne({ trackingNo }) // NOTE: please uncomment me whenever in production mode

    const shipment = await Shipment.findById('60e34bd029980591a26de19a'); //NOTE: this only for testing the order status update, please remove once in prod
    shipment.status = status;
    shipment.trackingHistory = trackingHistory;

    await shipment.save();
    await OrderService.updateOrderStatus(shipment.order, status.status);
  } catch (error) {
    console.log('Error in update shipment tracking ----', error);
  }
};

const createShipment = async ({ order, selectedCarrier }) => {
  const { carrierId, shipmentId, serviceLevelToken } = selectedCarrier;
  const {
    tracking_number: trackingNo,
    tracking_url_provider: trackingUrl,
    label_url: labelUrl,
    rate: { provider } = {},
  } = await ShippoService.createShipment({
    carrierId,
    shipmentId,
    serviceLevelToken,
  });

  await Shipment.create({
    shipmentId,
    order,
    carrierId,
    serviceLevelToken,
    trackingNo,
    trackingUrl,
    labelUrl,
    carrier: provider,
  });
  return { carrier: provider, trackingNo };
};

const ShipmentService = {
  updateShipmentTracking,
  createShipment,
};

module.exports = ShipmentService;
