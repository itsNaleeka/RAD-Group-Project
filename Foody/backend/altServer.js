import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { connectDB } from "./config/db.js"

//app config
const app = express();
const port = process.env.port || 4000;

// db connection
connectDB();
app.listen(port, ()=>console.log(`Server started on http://localhost:${port}`))


//middleware
app.use(express.json())  // request from backend to front will pass through this middleware
app.use(cors()) // to access backend from frontend         



