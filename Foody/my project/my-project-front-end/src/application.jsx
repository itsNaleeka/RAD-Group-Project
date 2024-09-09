
import { useState } from "react";
import './application.css'
import axios from "axios";
import bike from './assets/bike.png'

export function Application(){
 const url = "http://localhost:5000";
 const[IsSet,setVal] = useState(false)
 
 const[formData,setformData] = useState({
    employee_id :"",
    name:"",
    email:"",
    phoneNumber:"",
    salary:"",
    salarypay:false,
 })

 const handleonChange = (e)=>{
    const {value,name} = e.target
    setformData((prev)=>({
        ...prev,
        [name]:value,
    }))
 }

 const handlecheckBox=(e)=>{
   const {checked,name} =e.target
   setformData ((prev)=>({
    ...prev,
    [name]:checked,
   }))
 }
 const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formDataSend = new FormData();
    formDataSend.append("employee_id",formData.employee_id)
    formDataSend.append("name",formData.name)
    formDataSend.append("email",formData.email)
    formDataSend.append("phoneNumber",formData.phoneNumber)
    formDataSend.append("salary",formData.salary)
    formDataSend.append("salarypay",formData.salarypay)

    const response = await axios.post(`${url}/api/employee/add`,formDataSend)
    if(response.data.success){
        setformData({
           employee_id:"",
           name:"",
           email:"",
           phoneNumber:"",
           salary:"",
           salarypay:"",
        })
    }else{
        console.error("Error",response.data.message)
    }
 }

 return(
    <div className={`container ${IsSet ? "active":""}`} id="container">
        <div className="form-container sign-up">
            <form onSubmit={onSubmitHandler}>
                <h1>Register Employee</h1>
                <input type="text" placeholder="Employee ID" name="employee_id" onChange={handleonChange} value={formData.employee_id} />
                <input type="text" placeholder="Name" name="name" onChange={handleonChange} value={formData.name} />
                <input type="email" placeholder="E mail" name="email" onChange={handleonChange} value={formData.email} />
                <input type="text" placeholder="Phone Number" name="phoneNumber" onChange={handleonChange} value={formData.phoneNumber} />
                <input type="text" placeholder="Salary" name="salary" onChange={handleonChange} value={formData.salary} />
                <label htmlFor="sstatus">Salary Payment Status</label>
                <input type="checkbox" id="sstatus" name="salarypay" onChange={handlecheckBox} checked={formData.salarypay}/>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div className="form-container sign-in">
            <h1>Welcome to Foody!</h1>
            <img src={bike} alt="Foody Welcome" className="welcome-image"/>
            <h3>Meet the team behind your<br/> Taste</h3>
        </div>
        <div className = "toggle-container">
            <div className = "toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Food Resturant</h1>
                    <button onClick={()=> setVal(false)}>Welcome</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Foody Resturant</h1><br/><br/>
                    <h4>Experience our exceptional service and make every meal unforgettable at Foody Restaurant!</h4>
                     <button onClick={() => setVal(true)}>Register Employee</button>
                </div>
            </div>
        </div>
    </div>
    
 )  
}
