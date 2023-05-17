import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.uri as string);
        console.log("Connected to MongoDB.");
    }
    catch (err) {
        console.log(err);
    }
};

export default connectDB;
