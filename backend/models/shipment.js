const mongoose = require('mongoose')

const shipmentSchema = new mongoose.Schema({
  shipmentId: {
    type: String,
    required: true
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Order'
  },
  carrierId: {
    type: String,
    required: true
  },
  serviceLevelToken: {
    type: String,
    required: true
  },
  trackingNo: String,
  trackingUrl: String,
  labelUrl: String,
  carrier: String,
  status: Object,
  trackingHistory: Array
})

/**
 * NOTE:
 * keeping labelUrl and shippo specific fields(trackingInfo etc) as not-required, because
 * shippo might be down sometime and if we keep it as required, the record will not get saved
 * to the db and we will loose all the info. By keeping it not-required, we have an option of retry.
 */

module.exports = mongoose.model('Shipment', shipmentSchema)
