import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    orderItem: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orderItems'
    }],
    orderDate: {
        type: Date,
        required: true,
    },
    deliveryDate: {
        type: Date,
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'addresses'
    },
    paymentDetail: {
        paymentMethod: {
            type: String,
        },
        transactionID: {
            type: String,
        },
        paymentID: {
            type: String,
        },
        paymentStatus: {
            type: String,
        },
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    totalDiscountPrice: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    orderStatus: {
        type: String,
        required: true,
        default: "PENDING"
    },
    totalItem: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
})

export const Order = mongoose.model('orders', OrderSchema)