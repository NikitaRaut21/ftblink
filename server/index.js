import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { PostLink,getSlugRedirect ,getallLink, } from './controllers/link.js';
 import {PostSignup , postLogin}from'./controllers/user.js';
const  app = express();
app.use(express.json());
app.use(cors());
//connect mongodb

const connectDB = async()=>{
    const conn =await mongoose.connect(process.env.MONGO_URI)
    if(conn){
        console.log(`mongodb connected successfully✅`)
    }
}
connectDB();

app.get("/health",(req,res)=>{
    res.json({
      success:true,
      message:"welcome to ftb link"
    })
})

app.post("/link", PostLink)
 app.get("/links",getallLink)
app.get("/:slug",getSlugRedirect)
app.post("/signup",PostSignup)
app.post("/login", postLogin)

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running or port ${PORT}`)
})