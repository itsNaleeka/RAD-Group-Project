//---creating APIs---

import foodModel from "../models/foodModel.js"; //import food model
import fs from 'fs'; //import file system


//add food item

const addFood  = async(req,res) => {
    let image_filename = `${req.file.filename}`;

    // creating a new food item
    const food = new foodModel ({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try {
        await food.save(); //savig food item in the database
        res.json({success:true, message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

// list food items

const listFood = async(req,res) => {
    try {
        const foods = await foodModel.find({}); //find all the foods in db
        res.json({success:true,data:foods}) //send the response as the data
    } catch (error) {
        console.log(error);
        res.json({success:true,message:"Error"})
    }
}

//remove food item

const removeFood = async(req,res) =>{
    try {
        const food = await foodModel.findById(req.body.id); //getting the id of the food to be reomoved
        fs.unlink(`uploads/${food.image}`,()=>{}) //deleting image from the uploads folder

        await foodModel.findByIdAndDelete(req.body.id); //deleting food from the database
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Food doesn't exists"})
    }
}


//update food item

const updateFood = async(req,res) =>{
    try{
        console.log(req.body)
        const  { id, ...rest } = req.body;
        //updateOne - fisrt para=> which data to be updated(ID)/ sec para=> data to be updated
        const data = await foodModel.updateOne({_id:id},{$set:rest}) //$set updates only the field specificed in rest
        res.json({success:true,message:"Updated Successfully"})
    }
    catch{
        res.json({success:false,message:"Update Unsuccessfull"})
    }
}



export {addFood, listFood, removeFood, updateFood};
