import foodModel from "../models/foodModel.js";
import fs from 'fs'          // fs is file system in node.js
// logic are in here


// add food item

const addFood = async (req,res) => {  //asyncronous arrow function
; // Store that unique file name that variable /******* remove******** */
  
  const food = new foodModel({        // create food variable that is foodModel type and assign the values of each element of each part
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
 //   image: image_filename                 /******* remove***** */
  })
try{
    await food.save();     // this method save the values of food variable in the database
    res.json({success: true, message: "Food Added"})
} catch(error){
    console.log(error)
    res.json({success: false, message: "Error"})
}
}



// all food list

const listFood = async (req,res) => {
try {
    const foods = await foodModel.find({});   // {} empty object  in this 'foods' variable initialize all the values in foodModel(collection) in database
    res.json({success: true, data: foods})       // this will send the data to frontend
} catch (error) {
    console.log(error);
    res.json({suceess: false, message: "Error"})
}
}



// remove food item

/*
post request with json-row
{"id":"68787877878787878787"}
*/



const removeFood = async (req,res) => {
    try {
       // const food = await foodModel.findById(req.body.id)
    //    fs.unlink(`uploads/${food.image}`,()=>{})
    
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Food Removed"})
    } catch (error) {
       console.log(error);
       res.json({success: false, message: "Error"}) 
    }
}

// update food item

const updateFood = async (req,res) => {
    try {
     console.log(req.body)
     const{ id, ...rest} = req.body
     console.log(rest)
     const data = await foodModel.updateOne({_id: id},rest);
     res.json({success: true, message: "Food Updated"})
    } catch (error) {
    console.log(error)
    res.json({success: false, message: "Error"})
    }
}


export {addFood,listFood,removeFood,updateFood}
// using this function we can create route
 


/*

can use this also to remove food item

const removeFood = async (req,res) => {
    try {
        const food = await foodModel.findById(req.params.id);      // In this food item which has given id store in this variable
        fs.unlink(`uploads/${food.image}`,()=>{});
        await foodModel.deleteOne({_id:req.params.id});
        res.json({success: true, message: "Food Removed"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}


*/