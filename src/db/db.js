import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("MongoDB Connected...");
    } catch (e) {
        console.error("Error connecting to MongoDB:", e);
    }
}

export default connectDb;
