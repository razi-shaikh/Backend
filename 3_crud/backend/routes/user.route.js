import express from 'express'
import { create, deleteUser, fetch, getOne, update } from '../controller/user.controller.js';

const route = express.Router();

// route.get('/fetch',(req,res)=>{
//     res.json('hello world')
// })
route.get('/fetch',fetch)//fetching all data
route.post('/create',create)//creating a new user
route.put('/update/:id',update)//updating a user
route.get('/getone/:id',getOne)//updating a user
route.delete('/delete/:id',deleteUser)//updating a user

export default route