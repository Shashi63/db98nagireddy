const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({ 
    dogType: String, 
    price: { type: Number, min: 100, max: 10000 }, 
    weight:{ type: String, minLength: 5 } 
}) 
 
module.exports = mongoose.model("dog", 
dogSchema)