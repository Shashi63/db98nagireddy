const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({ 
    dogType: String, 
    price: Number, 
    weight: String 
}) 
 
module.exports = mongoose.model("dogs", 
dogSchema)