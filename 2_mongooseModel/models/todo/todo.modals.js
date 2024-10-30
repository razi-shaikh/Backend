import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    subTodo:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
        }
    ]
},{timestamps:true})

export const TodoModal = mongoose.Model('TodoModal',todoSchema)