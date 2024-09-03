import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/Foody")     //Foody is the database name
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>console.log(err))
}