import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({            // this is like table structure in SQL
    name: {type:String,required: true},
    description: {type:String,required: true},
    price: {type:String,required: true},        
    category: {type:String, required: true}
  //  image: {type: String, required: true}
})

const foodModel = mongoose.model.Food || mongoose.model("Food",foodSchema);   //Food is the collection name like table name in SQL
// in this part of the code it will check whether food model is already created or not from  'mongoose.model.Food' if available use it other wise create new model name "Food" using given schema
// in mongoDB  model names it will automatically pluralize and turn in to lowarcase  so this will be "foods"
// ex: person -> people
// ex: Car -> cars   

export default foodModel;