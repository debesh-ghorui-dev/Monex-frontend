import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { positions } from '../data/data.js'
import positionsModel from '../model/positionsModel.js'

// Load environment variables from .env file
dotenv.config();

const URL = process.env.MONGO_URL;

// Validate URL exists
if (!URL) {
    console.error('ERROR: MONGO_URL is not defined in environment variables');
    process.exit(1);
}

async function initializePositionsData() {
    try {
        // Connect to MongoDB
        await mongoose.connect(URL);
        console.log('MongoDB connected');

        // Insert documents after successful connection
        const docs = await positionsModel.insertMany(positions);
        console.log('Documents inserted successfully:', docs.length, 'documents');

        // Close connection after insertion
        await mongoose.connection.close();
        console.log('Connection closed');

        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

initializePositionsData();