import { useState } from "react";
import "./application.css";
import axios from "axios";

export function EmployeeUpdate() {
    const url = "http://localhost:5000";
    const [IsSet, SetVal] = useState(false);

    // State for handling form data
    const [formdata, setformData] = useState({
        employee_id: "",
        name: "",
        email: "",
        phoneNumber: "",
        salary: "",
        salarypay: false,
    });

    // State for handling update data
    
    // For creating a new employee
    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setformData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlecheckBox = (e) => {
        const { checked, name } = e.target;
        setformData((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    // For updating an existing employee
    

    // Submit handler for creating a new employee
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const requestData = {};
    for (const key in formdata) {
        if (formdata[key] !== "") {
            requestData[key] = formdata[key];
        }
    }
        
            
        
            try {
                const response = await axios.put(`${url}/api/employee/update/${formdata.employee_id}`,requestData);
                console.log("Response Data:", response.data);
                // Check if the response data contains the expected fields
                if (response.data && response.data._id) {
                    // Success
                    setformData({
                        employee_id: "",
                        name: "",
                        email: "",
                        phoneNumber: "",
                        salary: "",
                        salarypay: false,
                    });
                    console.log("Employee updated successfully:", response.data);
                } else {
                    // Unexpected response structure
                    console.error("Error: Unexpected response structure", response.data);
                }
            } catch (error) {
                // Handle errors in the API request
                if (error.response) {
                    // Request made and server responded with status other than 2xx
                    console.error("Error response:", error.response.data);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error("Error request:", error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error("Error message:", error.message);
                }
            }
        };
        

        
    
    return (
        <div className={`container ${IsSet ? "active" : ""}`} id="container">
            {/* Form for creating a new employee */}
            <div className="form-container sign-up">
                <form onSubmit={onSubmitHandler}>
                    <h1>Register Employee</h1>
                    <input type="text" placeholder="Employee ID" name="employee_id" onChange={handleOnChange} value={formdata.employee_id} />
                    <input type="text" placeholder="Name" name="name" onChange={handleOnChange} value={formdata.name} />
                    <input type="email" placeholder="Email" name="email" onChange={handleOnChange} value={formdata.email} />
                    <input type="text" placeholder="Phone Number" name="phoneNumber" onChange={handleOnChange} value={formdata.phoneNumber} />
                    <input type="text" placeholder="Salary" name="salary" onChange={handleOnChange} value={formdata.salary} />
                    <label htmlFor="sstatus">Salary Payment Status</label>
                    <input type="checkbox" id="sstatus" name="salarypay" onChange={handlecheckBox} checked={formdata.salarypay} />
                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* Form for updating an existing employee */}
            <div className="form-container sign-in">
            
            <h1>Welcome to Foody!</h1>


            </div>

            {/* Toggle between forms */}
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Foody Restaurant</h1>
                        <button onClick={() => SetVal(false)}>Welcome</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Foody Restaurant</h1>
                        <button onClick={() => SetVal(true)}>Update Employee</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
