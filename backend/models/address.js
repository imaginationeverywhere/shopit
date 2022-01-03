const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please enter your first name'],
      trim: true,
      maxLength: [100, 'First name cannot exceed 100 characters'],
    },
    lastName: {
      type: String,
      required: [true, 'Please enter your last name'],
      trim: true,
      maxLength: [100, 'Last name cannot exceed 100 characters'],
    },
    company: {
      type: String,
      required: false,
      trim: true,
      maxLength: [300, 'Company name cannot exceed 300 characters'],
    },
    street1: {
      type: String,
      required: [true, 'Please enter street name'],
      trim: true,
      maxLength: [100, 'Street name cannot exceed 300 characters'],
    },
    street2: {
      type: String,
      required: false,
      trim: true,
      maxLength: [100, 'Street name cannot exceed 300 characters'],
    },
    city: {
      type: String,
      required: [true, 'Please enter street name'],
      trim: true,
      maxLength: [100, 'Street name cannot exceed 300 characters'],
    },
    zip: {
      type: Number,
      default: 0,
      required: true,
    },
    country: {
      type: String,
      required: [true, 'Please enter country name'],
      trim: true,
      maxLength: [100, 'Street name cannot exceed 300 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Please enter phone number'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please enter email'],
      trim: true,
    },
    metadata: {
      type: String,
      required: false,
      trim: true,
    },
    type: {
      type: String,
      enum: ['pickup', 'delivery', 'billing'],
      default: 'delivery',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Address', addressSchema);
