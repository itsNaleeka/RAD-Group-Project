import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    name: {type:String,required: true},
    description: {type:String,required: true},
    price: {type:String,required: true},        
    category: {type:String, required: true} 
})

const foodModel = mongoose.model.food || mongoose.model("Food",foodSchema);   //Food is the collection name like table name in SQL

export default foodModel;