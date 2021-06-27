const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const shippoService = require("../services/shippo");

const addressFrom = {
  name: "Shawn Ippotle",
  street1: "215 Clayton St.",
  city: "San Francisco",
  state: "CA",
  zip: "94117",
  country: "US",
};
const addressTo = {
  name: "Mr Hippo",
  street1: "Broadway 1",
  city: "New York",
  state: "NY",
  zip: "10007",
  country: "US",
};
const parcel = {
  length: "5",
  width: "5",
  height: "5",
  distance_unit: "in",
  weight: "2",
  mass_unit: "lb",
};

exports.getCarriers = catchAsyncErrors(async (req, res) => {
  const carriers = await shippoService.getCarriers(
    addressFrom,
    addressTo,
    parcel
  );
  res.status(200).json({ success: true, carriers });
});
