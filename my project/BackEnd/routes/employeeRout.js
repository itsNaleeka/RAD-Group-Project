import express from "express"
import { addEmployee,readEmployee,readidEmployee,deleteidEmployee,updateidEmployee } from "../controllers/employeeController.js"
import multer from "multer"


const upload = multer()

const employeeRouter = express.Router()

employeeRouter.post("/add",upload.none(),addEmployee)
employeeRouter.get("/read",readEmployee)
employeeRouter.get("/read/:employee_id",readidEmployee)
employeeRouter.delete("/delete/:employee_id",deleteidEmployee)
employeeRouter.put("/update/:employee_id",updateidEmployee)





export default employeeRouter