import express from "express";
import router from "./router/api.js";
import cors from 'cors'
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv"
dotenv.config()
import { MongoURL, PORT } from "./config/config.js";

const app = express()


mongoose.connect(MongoURL).then(()=>{
    console.log('MongoDB connected');
    
}).catch((err)=>{
    console.log('MongoDB disconnected');
    
})

const limiter = rateLimit({windowMs: 15*60*1000, max: 1000});
app.use(limiter)
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: true}))

app.use(cors())

app.use(cookieParser())
app.use(helmet())
app.use(hpp())


app.set('etag', false)
app.use("/api", router)

app.get("/", (req, res)=>{
    res.send({
        activeStatus: true,
        error: false
    })
})

app.listen(PORT, ()=>{
    console.log(    `Server is running on port ${PORT}`);
    
})




