import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose"


const connectDB=async ()=>{
    try{
        await mongoose.connect("mongodb+srv://root:root@cluster0.9cdxe4s.mongodb.net/ZARAM")
        console.log("Connected to MongoDB.")
    }
    catch(err){
        console.log(err)
    }
}

export default connectDB