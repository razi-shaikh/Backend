import mongoose from 'mongoose'

const orderQuatity = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'productModal',
    },
    quantity:{
        type:Number,
        required:true,
    }
})

const orderSchema = new mongoose.Schema({
    userName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userModal',
    },
    productName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'productModal',
    },
    prouctQuantity:{
        type:[quatity]
    },
    orderStatus:{
        type:String,
        enum:['PENDING','CANCELLED','DELIVERED'],
        default:'PENDING',
    }
},{timestamps:true})