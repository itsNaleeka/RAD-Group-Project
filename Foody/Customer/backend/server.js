import express from "express"
import cors from "cors"
import { connectDB } from "./config/database.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config"
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRoute.js";


//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json())  // request from backend to front will pass through this middleware
app.use(cors())

// DB config
connectDB();


// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})   //getting data from the server

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})