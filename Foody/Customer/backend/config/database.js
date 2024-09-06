import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://sineth:admin123@cluster0.qzc79.mongodb.net?retryWrites=true&w=majority&appName=Cluster0").then(() => {console.log("Database Connceted Successfully")})
    // await mongoose.connect("mongodb://localhost:27017/food-del").then(() => {console.log("Database Connceted Successfully")})
}





