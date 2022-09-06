var mongoose = require("mongoose")

var FoodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String,
    created: {
        type: Date,
        default: Date.now
    }
})
var Food = mongoose.model("Food", FoodSchema)
module.exports = Food;