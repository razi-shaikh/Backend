import User from '../model/user.model.js'

export const fetch = async(req,res)=>{
    try {
        const users = await User.find();
        if(users.length === 0){
            return res.status(400).json({message : "There is no user"})
        }
        else{
            res.status(200).json(users)
        }
    } catch (error) {
        res.status(500).json({error:"Internet server error"})
    }
}

export const create = async(req,res)=>{
    try {
        const userData = new User(req.body)
        const {email} = userData
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message : "User already exist"})
        }
        const savedUser = await userData.save();
        res.status(200).json({message : "User created successfully",savedUser})
    } catch (error) {
        res.status(500).json({error:"Unable to create a user"})
    }
}

export const update = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message : "User not exist"})
        }
        const userUpdate = await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(201).json({message : "User updated successfully",userUpdate})
    } catch (error) {
        res.status(500).json({error:"Unable to update a user"})
    }
}

export const deleteUser = async (req,res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message : "User not exist"})
        }
        const deleteUser = await User.findByIdAndDelete(id)
        res.status(201).json({message : "User deleted successfully",deleteUser})
    } catch (error) {
        res.status(500).json({error:"Unable to delete a user"})
    }
}

export const getOne = async (req,res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id)
        if(!userExist){
            return res.status(404).json({message : "User not exist"})
        }
        res.status(200).json(userExist)
    } catch (error) {
        res.status(500).json({error:"Internet server error"})
    }
}