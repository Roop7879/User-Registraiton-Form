import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv'
dotenv.config()

const db = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    });
    
    console.log('MongoDB connected !!')
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
};

export default db
