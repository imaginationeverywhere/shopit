
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
 
const Template = require('../models/template');



exports.getTemplates = catchAsyncErrors(async (req, res) => {
    const templates = await Template.find();

    res.status(200).json({
        success: true,
        templates
    })
});

exports.setActiveTemplate = catchAsyncErrors(async (req, res) => {
    await Template.updateOne({isActive:true}, {$set: {isActive: false}})

    await Template.updateOne({templateId: req.body.templateId},{$set: {isActive: true}} )


    const templates = await Template.find();
    
    res.status(200).json({
        success: true,
        templates
    })
});
