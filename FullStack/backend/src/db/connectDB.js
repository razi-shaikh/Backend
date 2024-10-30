import mongoose from 'mongoose';

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('MongoDB connected Successfully');
    } catch (error) {
        console.log('Failed to connect MongoDB \n', error);
    }
}

export { connectDB };
