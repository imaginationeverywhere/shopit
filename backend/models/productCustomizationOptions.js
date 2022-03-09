const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name: String,
    optionType: {
        type: String,
        enum: {
            values: [
                'ARRAY',
                'MULTI_ARRAY',
                'STRING',
                'NUMBER'
            ]
        },
        value: String 
    }
});

module.exports = mongoose.model('Product', productSchema);
