import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountedPrice: {
        type: Number,
    },
    discountPercent: {
        type: Number,
    },
    deliveryInDay: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
    },
    brand: {
        type: String,
    },
    color: {
        type: String,
    },
    sizes: [{
        sizeLabel: {
            type: String,
        },
        sizeQuantity: {
            type: Number,
        },
    }],
    image: [{
        type: String,
    }],
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categorys',
    }],
    numOfRatings: {
        type: Number,
        default: 0,
    },
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ratigs',
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reviews',
    }],
})

export const Product = mongoose.model('products', productSchema)