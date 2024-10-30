import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import route from './routes/user.route.js';
import cors from 'cors'

dotenv.config()

const app = express();
// app.use(bodyParser.json());
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5001
const MONGODB_URL = process.env.MONGODB_URL
const MONGO_ATLAS_URL = process.env.MONGO_ATLAS_URL

mongoose.connect(MONGO_ATLAS_URL)
.then(()=>{
    console.log(`Mongo DataBase Connected Successfully ...`);

    app.listen(PORT,()=>{
        console.log(`Server is running on Port is ${PORT}`);
    })
})
.catch((error)=>{
    console.log('Unable to connect Mongo DataBase !!!');
})

app.use('/api',route)