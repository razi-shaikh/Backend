import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true,'Please enter uniqued ID and In lower case'],
        uniqued:true,
        lowercase:true,
    },
    emailId:{
        type:String,
        required:true,
        uniqued:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})

export const UserModel = mongoose.Model('UserModel',userSchema)