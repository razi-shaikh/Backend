import mongoose from 'mongoose'

const CartSchema = mongoose.Schema({
    totalPrice: {
        type: Number,
        default: 0,
    },
    totalItem: {
        type: Number,
        default: 0,
    },
    totalDiscountPrice: {
        type: Number,
        default: 0,
    },
    discount: {
        type: Number,
        default: 0,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    cartItem: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "cartItems",
        required: true,
    }],
})

export const Cart = mongoose.model("cart", CartSchema) 