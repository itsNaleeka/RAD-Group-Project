import express from "express"
import cors from "cors"
//import mongoose from "mongoose"
import { connectDB } from "./config/db.js"
//import foodRouter from "./routes/foodRoute.js"
import reservationRouter from "./routes/reservationRoute.js"

// In this server this structure is very important if it changes it can give errors


//app config
const app = express();
const port = process.env.port || 4000;

//middleware
app.use(express.json());  // request from backend to front will pass through this middleware
app.use(cors()); // to access backend from frontend  

// api endpoints
//app.use("/api/food",foodRouter) 
//app.use("/images",express.static('uploads'))
app.use("/api/reservation",reservationRouter)

// root endpoints
app.get("/",(req,res)=> {
    res.send("API Working");
})

// db connection
connectDB();
app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)}
)
