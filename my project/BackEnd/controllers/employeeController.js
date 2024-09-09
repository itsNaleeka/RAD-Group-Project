import employeeModel from "../models/employeeModel.js";

const addEmployee = async (req,res)=>{
    try{
        const checkEmployee = await employeeModel.findOne({
            $or:[
                { employee_id:req.body.employee_id},
                {email:req.body.email,}
            ],
        })
        if(checkEmployee){
            return res.status(400).json({
                success:false,
                message:"Invalid input"
            })
        }
    
    const employee = new employeeModel({
        employee_id:req.body.employee_id,
        name:req.body.name,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        hireDate:req.body.hireDate,
        salary:req.body.salary,
        slarypay:req.body.salarypay,
    })
         await employee.save()
        res.json({success:true,message:"Employee ADD"})
    } catch (error) {
        console.log(error)
        req.json({success:false,message:z})
    }        
}

//get Employees
const readEmployee = async (req,res)=>{
    try{
    const employeeList =  await employeeModel.find({})
    res.json({success:true,data:employeeList})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

const readidEmployee = async (req,res)=>{
    try{
    const employeeId = req.params.employee_id
    const employee = await employeeModel.findOne({employee_id:employeeId})
    if(!employee){
        return res.json({success:false,message:"Not found"})
    }
    res.json({success:true,data:employee})
}catch(error){
    console.log(error)
    res.json({success:false,message:"Error"})
}
}
const deleteidEmployee = async (req,res)=>{
    try{
    const employeeId = req.params.employee_id
    const employee = await employeeModel.findOneAndDelete({employee_id:employeeId})
    if(!employee){
        return res.json({success:false,message:"Not found"})
    }
    res.json({success:true,data:employee})
}catch(error){
    console.log(error)
    res.json({success:false,message:"Error"})
}
}

const updateidEmployee = async (req,res)=>{
    const employee = await employeeModel.findOne({employee_id:Number(req.params.employee_id)})
    if(!employee){
        res.status(404)
        throw new Error("we can't find the user according to this id")}
        const updateContact = await employeeModel.findOneAndUpdate(
            
                {employee_id:Number(req.params.employee_id)},
                req.body,
                { new : true}
            
        )
        res.status(200).json(updateContact)




    }
export {addEmployee,readEmployee,readidEmployee,deleteidEmployee,updateidEmployee}