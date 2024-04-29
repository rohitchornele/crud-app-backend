import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000 ;
const MONGODB_URI = process.env.MONGODB_URI 

mongoose.connect(MONGODB_URI).then(() => {
        console.log("Database Connected Successfully");
    
        app.listen(PORT, () => {
            console.log(`Server is runnning on port ${PORT}`);
        })
    
    })



app.use("/api", route);