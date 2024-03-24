import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config()

const app = express();
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('MongoDb is connected!')
}).catch((err)=>{
    console.log(err)
});

app.listen(4000, () => {
  console.log("server is running on port 4000!!");
});

///Routes ..//
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
