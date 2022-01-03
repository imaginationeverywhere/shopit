const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Address = require('../models/address');

// Create a new shippingInfo  =>  /api/v1/address/new
exports.newShippingInfo = catchAsyncErrors(async (req, res) => {
  try {
    const shippingInfo = await Address.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      shippingInfo,
    });
  } catch (error) {
    res.status(422).json({ success: false, message: 'Something went wrong' });
  }
});

// Updates shippingInfo  =>  /api/v1/address/update
exports.updateShippingInfo = catchAsyncErrors(async (req, res) => {
  try {
    const shippingInfo = await Address.findByIdAndUpdate(
      { user: req.user._id },
      {
        ...req.body,
        user: req.user._id,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      },
    );
    res.status(201).json({
      success: true,
      shippingInfo,
    });
  } catch (error) {
    res.status(422).json({ success: false, message: 'Something went wrong' });
  }
});
