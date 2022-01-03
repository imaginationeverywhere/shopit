const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const ShippoService = require('../services/shippo');

exports.getCarriers = catchAsyncErrors(async (req, res) => {
  /**
   * Ideally addressTo would come from req.body, so as parcel details
   */
  const { addressFrom, addressTo, parcels } = req.body;
  const carriers =
    (await ShippoService.getCarriers(addressFrom, addressTo, parcels)) || [];

  res.status(200).json({ success: true, carriers });
});
