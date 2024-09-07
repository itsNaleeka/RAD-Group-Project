import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://sineth:admin123@cluster0.qzc79.mongodb.net?retryWrites=true&w=majority&appName=Cluster0")     //Foody is the database name
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>console.log(err))
}