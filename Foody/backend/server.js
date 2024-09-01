import express from "express"
import cors from "cors"
import mongoose from "mongoose"

//app config
const app = express();
const port = process.env.port || 4000;

//middleware
app.use(express.json())  // request from backend to front will pass through this middleware
app.use(cors()) // to access backend from frontend  

mongoose.connect("mongodb://localhost:27017/Foody")     //Foody is the database name
.then(()=>{
    console.log("Connected to DB")
    app.listen(port, ()=>console.log(`Server started on http://localhost:${port}`))
})
.catch((err)=>console.log(err))





// ***************************************Receptionist******************************************************



// -----------------------------------------------Model------------------------------------------
//Schema      This is like initialize a table structure in SQL
const foodSchema = mongoose.Schema({
    name: String,
    description: String,
    price: String,        
    category: String, 
},{
    timestamps: true
})

const userModel = mongoose.model("foods",foodSchema)   //Food is the collection name like table name in SQL

// read data from the server
// http://localhost:4000/
app.get("/",async(req,res)=>{
    const data = await userModel.find({})
    res.json({success: true, data :data})
   // res.send("API Working now")
})   //getting data from the server



//create data and save data in mongodb
 // http://localhost:4000/Add
 // requesst from frontend to backend
 /*
 {
     name: "Amila",
     description: " message ",
     price: "1000",
    category: "salad"

 }
 */
app.post("/Add",async(req,res)=>{
    console.log(req.body)
    const data = new userModel(req.body)
    await data.save()
    res.send({success: true, message: "Data save successfully", data : data})
})



// update data 
// http://localhost:4000/Update
 // requesst from frontend to backend
 /*
 {
     id: "66d2aaee10e399e589105f69",
     name: "Amila",
 }
 */
app.put("/Update",async(req,res)=>{
   console.log(req.body)
   const{ _id, ...rest} = req.body
   console.log(rest)
   const data = await userModel.updateOne({_id : _id},rest);
   res.send({success: true, message: "Data updated successfully", data : data})
})



// delete data
// http://localhost:4000/Delete/66d2aaee10e399e589105f39
app.delete("/Delete/:id",async(req,res)=>{
    const id = req.params.id
    console.log(id)
    const data = await userModel.deleteOne({_id: id})
    res.send({success: true, message: "Data deleted successfully", data : data})
})
// -----------------------------------------------Model End------------------------------------------






// *************************************** End Receptionist******************************************************