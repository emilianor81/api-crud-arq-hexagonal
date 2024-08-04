// src/database.ts
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/hexagonalCrud';

    await mongoose.connect(mongoUrl);
    console.log('MongoDB connected');
  } catch (error) {
    if (error instanceof Error) {
        console.error('Error connecting to MongoDB:', error.message);
      } else {
        console.error('Unknown error connecting to MongoDB');
      }
    process.exit(1);
  }
};
