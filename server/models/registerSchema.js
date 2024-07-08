let mongoose=require("mongoose")

let dataSchema=new mongoose.Schema({
    name:String,
    email:String,
    Password:String
})

let registerData= mongoose.model("registeredUsers",dataSchema)

module.exports=registerData