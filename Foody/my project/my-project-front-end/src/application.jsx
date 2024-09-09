import { useState } from "react";
import "./application.css";
import bike from "./assets/bike.png"
import axios from "axios";

export function Application() {
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

        const formDataSend = new FormData();
        formDataSend.append("employee_id", formdata.employee_id);
        formDataSend.append("name", formdata.name);
        formDataSend.append("email", formdata.email);
        formDataSend.append("phoneNumber", formdata.phoneNumber);
        formDataSend.append("salary", formdata.salary);
        formDataSend.append("salarypay", formdata.salarypay);

        const response = await axios.post(`${url}/api/employee/add`, formDataSend);
        if (response.data.success) {
            setformData({
                employee_id: "",
                name: "",
                email: "",
                phoneNumber: "",
                salary: "",
                salarypay: false,
            });
        } else {
            console.error("Error:", response.data.message);
        }
    };

    // Submit handler for updating an existing employee
    
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
            <h1>Welcome  to Foody!</h1>
            <img src = {bike} alt="Foody Welcome" className="welcome-image" />
            <h3>Meet the team behind your <br/>Taste</h3>
            



            </div>

            {/* Toggle between forms */}
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Foody Restaurant</h1>
                        <button onClick={() => SetVal(false)}>Welcome</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Foody Restaurant</h1><br/><br/>
                        <h4>Experience our exceptional service and make every meal unforgettable at Foody Restaurant!</h4>
                        <button onClick={() => SetVal(true)}>Register Employee</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
