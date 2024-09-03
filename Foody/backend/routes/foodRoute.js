import express from 'express'
import  {addFood,listFood,removeFood,updateFood} from '../controllers/foodController.js'
import multer from 'multer'
// multer for image storing system

const foodRouter = express.Router();
// using this router we can create get,post,updatd,delete request/methods
 

//image storage system
const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)  // this Date.now() method add date and time for every image name begin. So every file name become unique from that. 
    }
})
                                //our created one
const upload = multer({storage: storage})


//foodRouter.post("/Add",upload.single("image"),addFood)   // image is add for the filter part
foodRouter.post("/Add",addFood)
foodRouter.get("/list",listFood)
//foodRouter.delete("/remove/:id",removeFood);
foodRouter.put("/update",updateFood);
foodRouter.post("/remove",removeFood);

export default foodRouter;