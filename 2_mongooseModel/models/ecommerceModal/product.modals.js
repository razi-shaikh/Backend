import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    productDescription:{
        type:String,
        required:true,
    },
    productPrice:{
        type:Number,
        default:0,
    },
    productStock:{
        type:Number,
        default:0,
    },
    productImage:{
        type:String,
        required:true,
    },
    productCategory: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'categoryModal',
        required:true,
    },
},{timestamps:true})

export const productModal = mongoose.Model('productModal',productSchema)