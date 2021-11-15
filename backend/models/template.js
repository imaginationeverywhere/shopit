const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    isActive: {
        type: Boolean,
        default: false
    },
    templateId: {
        type: Number,
        required: true,
        
    }
})


module.exports = mongoose.model('Template', templateSchema);