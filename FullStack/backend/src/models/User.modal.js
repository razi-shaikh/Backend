import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileAvatar: {
        type: String,
    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses"
    }],
    rating: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "rating",
    }],
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "review",
    }],

}, { timestamps: true })

export const User = mongoose.model("users", userSchema)