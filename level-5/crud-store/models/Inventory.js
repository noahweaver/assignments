const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Blueprint
const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    color: {
        type: String
    },
    size: {
        type: String,
        enum: ['micro preemie', 'preemie', 'NB', '0-3 mos', '3-6 mos', '6-9 mos', '9-12 mos', '12 mos', '12-18 mos', '18 mos', '18-24 mos', '24 mos', '2T', '3T', '4T', '5T', 'YXS', 'YS', 'YM', 'YL', 'YXL', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']
    },
    measurements: {
        type: String
    }
    

})

module.exports = mongoose.model("Inventory", itemSchema)