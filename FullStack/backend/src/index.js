import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRouter } from './routes/user.route.js';
import { authRouter } from './routes/auth.route.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter)
app.use("/api/users", userRouter)

export { app };
