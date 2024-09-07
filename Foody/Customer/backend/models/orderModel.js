import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema( {
    userID : {type:String, required:true},
    items: {type:Array, required: true},
    amount: {type:Number, required:true},
    Address: {type:Object, required:true},
    Status: {type:String, default: 'food processing'},
    date: {type:Date, default: Date.now},
    payment:{type:Boolean, default:false}
})

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema)

export default orderModel;