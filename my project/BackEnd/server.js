import express from "express"
import cors from "cors"
import { connectDB } from "./config/connectdb.js"
import employeeRouter from "./routes/employeeRout.js"


//app.config
const app = express()
const port = 5000
 
//middleware 
app.use(express.json())
app.use(cors())

//connectDB
connectDB()

//api end point 
app.use("/api/employee",employeeRouter)

app.get("/",(req,res)=>{
    res.send("Api is working")
})

app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})