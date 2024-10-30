import express from 'express'
import { login, register } from '../controllers/Auth.controller.js';

const authRouter = express.Router();

authRouter.post("/signup", register);
authRouter.post("/signin", login);

export {
    authRouter,
}