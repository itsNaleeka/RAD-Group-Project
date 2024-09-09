import mongoose from "mongoose"

const employeeSchema = mongoose.Schema({
    employee_id:{
        type:Number,
        unique:[true,"This index is already exhits"]

    },
    name:{
        type:String,
        required:[true, "Your name is compulsory"]

    },
    email:{
        type:String,
        required:[true, "Your Email is compulsory"],
        unique:[true,"Email should unique"],
        validate: {
            validator: function(v) {
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
            },
            message: 'Invalid email format'
        }

    },
    phoneNumber:{
        type:String,
        required:[true, "Your phonenumber is compulsory"],
        

    },
    hireDate:{
        type:Date,
        default:Date.now

    },
    salary:{
        type:String,
        required:[true, "Salary is compulsory"]

    },
    salarypay:{
        type:Boolean,
        default:false
    },
}
)

const employeeModel = mongoose.models.employee || mongoose.model("Employee",employeeSchema ) 
export default employeeModel