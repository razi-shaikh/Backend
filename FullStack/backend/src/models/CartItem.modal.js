import mongoose from 'mongoose'

const CartItemSchema = mongoose.Schema({
    size: {
        type: String,
        default: "S",
        required: true,
    },
    quantity: {
        type: Number,
        default: 1,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountedPrice: {
        type: Number,
        required: true,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart",
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart",
    },
})

export const CartItem = mongoose.model("cartItems", CartItemSchema) 