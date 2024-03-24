import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const app = express();

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('MongoDb is connected!')
}).catch((err)=>{
    console.log(err)
});

app.listen(4000, () => {
  console.log("server is running on port 4000!!");
});
