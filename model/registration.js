const mongoose=require("mongoose")
const registrationScheme=mongoose.Schema({
    userName:String
})
module.exports=mongoose.model("registration",registrationScheme)