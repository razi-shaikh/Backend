import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true,
    }
},{timestamps:true})

export const categoryModal = mongoose.Model('categoryModal',categorySchema)