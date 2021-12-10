const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Blueprint
const inventorySchema = new Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)