import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    name: { type:String, required: true },
    email: { type:String, required: true },
    phone: { type:String, required: true },
    date: { type:String, required: true },
    time: { type:String, required: true },
    table: { type:Number, required: true },
    category: { type:String, required: true },
    price: { type:Number, required: true },
    description: { type:String, required: false} ,
    members: { type:Number, required: true}
});

const reservationModel = mongoose.model.Reservation || mongoose.model("Reservation",reservationSchema);

export default reservationModel;