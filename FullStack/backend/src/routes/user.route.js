import express from 'express'
import { getAllUser, getUserByToken } from '../controllers/User.controller.js';

const userRouter = express.Router();

userRouter.post("/profile", getUserByToken);
userRouter.post("/", getAllUser);

export {
    userRouter,
}