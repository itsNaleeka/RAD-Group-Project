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
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:true,message:"Error"})
    }
}

export {addFood, listFood};
