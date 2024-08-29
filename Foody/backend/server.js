import express from "express"
import cors from "cors"


//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json())  // request from backend to front will pass through this middleware
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API Working")
})   //getting data from the server

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})