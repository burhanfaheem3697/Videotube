import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js';
import express from 'express'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongo db connected !! DB host : ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("mongo db connection error: ",error);
        process.exit(1)
        
    }
}

export default connectDB
