import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    emailID: {
        type: Number,
        required: true,
    },
    mobileNo: {
        type: Number,
        required: true,
    },
    homeAddress: {
        type: String,
        required: true,
    },
    Country: {
        type: String,
        required: true,
    },
    pinCode: {
        type: String,
        required: true,
    },
    saveThis: {
        type: Boolean,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

export const Address = mongoose.model("addresses", addressSchema)