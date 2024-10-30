import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    firstName : {
        type:String,
        required:true,
    },
    lastName : {
        type:String,
    },
    email : {
        type:String,
        required:true,
        uniqued:true,
        // lowercase:true,
    },
    password : {
        type:String,
        required:true,
    }
},
{
    timestamps:true
})

userSchema.pre('save',async function (next){
    if(!this.isModified('password')){
        return next()
    }

    this.password = await bcrypt.hash(this.password,10)
    next()
    
})

export default mongoose.model("user",userSchema);