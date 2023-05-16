const mongoose=require('mongoose')


const schema=mongoose.schema({
    firstName:String,
    lastName:String,
    username:String,
    password:String,
    email:String,
    isAdmin:Boolean,
    cart:Array
})

const user=mongoose.model("user",schema)

module.exports=user