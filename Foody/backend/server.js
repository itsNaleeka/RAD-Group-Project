import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";


//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json())  // request from backend to front will pass through this middleware
app.use(cors())

//db conneciton
connectDB();

//api endpoint
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API Working")
})   //getting data from the server

app.listen(port, ()=>{ //run the express server
    console.log(`Server started on http://localhost:${port}`)
})


//mongodb+srv://sgamage149:<db_password>@cluster0.xlyxn.mongodb.net/?