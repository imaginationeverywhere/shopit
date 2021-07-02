const OrderService = require('./orderService')
const Shipment = require('../models/shipment')
const ShippoService = require('./shippo')

const updateShipmentTracking = async ({ trackingNo, status, trackingHistory }) => {
  try {
    // const shipment = await Shipment.findOne({ trackingNo })

    const shipment = await Shipment.findById('60df522f2cff7408d7e3e6f1') // testing the order status update
    shipment.status = status
    shipment.trackingHistory = trackingHistory

    await shipment.save()
    await OrderService.updateOrderStatus(shipment.order, status.status)
  } catch (error) {
    console.log('Error in update shipment tracking ----', error)
  }
}

const createShipment = async ({ order, selectedCarrier }) => {
  const { carrierId, shipmentId, serviceLevelToken } = selectedCarrier
  const {
    tracking_number: trackingNo,
    tracking_url_provider: trackingUrl,
    label_url: labelUrl,
    rate: { provider } = {}
  } = await ShippoService.createShipment({ carrierId, shipmentId, serviceLevelToken })

  await Shipment.create({
    shipmentId,
    order,
    carrierId,
    serviceLevelToken,
    trackingNo,
    trackingUrl,
    labelUrl,
    carrier: provider
  })
  return { carrier: provider, trackingNo }
}

const ShipmentService = {
  updateShipmentTracking,
  createShipment
}

module.exports = ShipmentService
