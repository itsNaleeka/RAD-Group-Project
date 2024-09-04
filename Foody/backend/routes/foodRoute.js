// Adding routes to the fucnitons

import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer";

//creating the router
const foodRouter = express.Router();

//image storing engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const uplaod = multer({storage:storage})

//send data to the server
foodRouter.post("/add",uplaod.single("image"),addFood)




export default foodRouter;
