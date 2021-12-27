const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const ShippoService = require('../services/shippo');

const addressFrom = {
  name: 'Shawn Ippotle',
  street1: '777 Brockton Avenue',
  city: 'Abington',
  state: 'MA',
  zip: '2351',
  country: 'US',
};
const addressTo = {
  name: 'Mr Hippo',
  street1: '4133 Veterans Memorial Drive',
  city: 'Batavia',
  state: 'NY',
  zip: '14020',
  country: 'US',
};
const parcels = [
  {
    length: '5',
    width: '5',
    height: '5',
    distance_unit: 'in',
    weight: '2',
    mass_unit: 'lb',
  },
  {
    length: '10',
    width: '10',
    height: '10',
    distance_unit: 'in',
    weight: '2',
    mass_unit: 'lb',
  },
];

exports.getCarriers = catchAsyncErrors(async (req, res) => {
  /**
   * Ideally addressTo would come from req.body, so as parcel details
   */
  // const { addressFrom, addressTo, parcels } = req.body;

  const carriers =
    (await ShippoService.getCarriers(addressFrom, addressTo, parcels)) || [];

  res.status(200).json({ success: true, carriers });
});
