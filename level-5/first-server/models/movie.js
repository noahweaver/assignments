const mongoose = require("mongoose")
const Schema = mongoose.Schema

//check mongoose documentation for all possible keys and properties for schemas

//Movie Blueprint
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ['action', 'fantasy', 'horror'],
        require: true
    },
    releaseYear: Number,
    
})


module.exports = mongoose.model("Movie", movieSchema)