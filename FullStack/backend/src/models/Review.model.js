import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    reviews: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export const Review = mongoose.model('reviews', reviewSchema)