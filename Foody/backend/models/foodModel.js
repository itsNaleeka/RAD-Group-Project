import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String, required:true},
    Description: {type:String, required:true},
    Price: {type:Number, required:true},
    image: {type:String, required:true},
    category: {type:String, requied:true},
})