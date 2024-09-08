// State for handling update data
const [updateData, setUpdateData] = useState({
    employee_id: "",
    name: "",
    email: "",
    phoneNumber: "",
    salary: "",
    salarypay: false,
});
const handlOnChange = (e) => {
    const { value, name } = e.target;
    setUpdateData((prev) => ({
        ...prev,
        [name]: value,
    }));
};

const handlcheckBox = (e) => {
    const { checked, name } = e.target;
    setUpdateData((prev) => ({
        ...prev,
        [name]: checked,
    }));
};
const onUpdateHandler = async (event) => {
    event.preventDefault();

    const updateDataSend = new FormData();
    updateDataSend.append("employee_id", updateData.employee_id);
    updateDataSend.append("name", updateData.name);
    updateDataSend.append("email", updateData.email);
    updateDataSend.append("phoneNumber", updateData.phoneNumber);
    updateDataSend.append("salary", updateData.salary);
    updateDataSend.append("salarypay", updateData.salarypay);

    const response = await axios.put(`${url}/api/employee/update/${updateData.employee_id}`, updateDataSend);
    if (response.data.success) {
        setUpdateData({
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


<form onSubmit={onUpdateHandler}> {/* Correctly reference the onUpdateHandler function */}
    <h1>Update Employee</h1>
    <input type="text" placeholder="Employee ID" name="employee_id" onChange={handlOnChange} value={updateData.employee_id} />
    <input type="text" placeholder="Name" name="name" onChange={handlOnChange} value={updateData.name} />
    <input type="email" placeholder="Email" name="email" onChange={handlOnChange} value={updateData.email} />
    <input type="text" placeholder="Phone Number" name="phoneNumber" onChange={handlOnChange} value={updateData.phoneNumber} />
    <input type="text" placeholder="Salary" name="salary" onChange={handlOnChange} value={updateData.salary} />
    <label htmlFor="sstatus">Salary Payment Status</label>
    <input type="checkbox" id="ssstatus" name="salarypay" onChange={handlcheckBox} checked={updateData.salarypay} />
    <button type="submit">Update</button>
</form>
import { useState } from "react";
import "./application.css";
import axios from "axios";

export function EmployeeUpdate() {
    const url = "http://localhost:5000";
    const [IsSet, SetVal] = useState(false);
    const [updateData, setUpdateData] = useState({
        employee_id: "",
        name: "",
        email: "",
        phoneNumber: "",
        salary: "",
        salarypay: false,
    });
    const handlOnChange = (e) => {
        const { value, name } = e.target;
        setUpdateData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    const handlcheckBox = (e) => {
        const { checked, name } = e.target;
        setUpdateData((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };
    const onUpdateHandler = async (event) => {
        event.preventDefault();
    
        const updateDataSend = new FormData();
        updateDataSend.append("employee_id", updateData.employee_id);
        updateDataSend.append("name", updateData.name);
        updateDataSend.append("email", updateData.email);
        updateDataSend.append("phoneNumber", updateData.phoneNumber);
        updateDataSend.append("salary", updateData.salary);
        updateDataSend.append("salarypay", updateData.salarypay);
    
        const response = await axios.put(`${url}/api/employee/update/${updateData.employee_id}`, updateDataSend);
        if (response.data.success) {
            setUpdateData({
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
    
    
    return (
        <div className={`container ${IsSet ? "active" : ""}`} id="container">
            {/* Form for creating a new employee */}
            <div className="form-container sign-up">
                <h1>About Us</h1>
                <p>fufiuyfiuyfgiyuiouygoiglkjbkjhljkfiukjg,kkibkiulijl
                    gyiyugkigkgiygkbhkkgkbmnbjbjhnjhgvjvjhvjhjbvhvjvkjh
                    jbkjhgiuykbhjydjdfmgjhbfnbvmngmjnb,mjdfhgnmvdnb,db,fmn
                    fndjghkfvbmfnghkf,mfnbmbvjh,b,mfd,m,ndmnd,v
                </p>
            </div>

            {/* Form for updating an existing employee */}
            <div className="form-container sign-in">
            <form onSubmit={onUpdateHandler}> {/* Correctly reference the onUpdateHandler function */}
    <h1>Update Employee</h1>
    <input type="text" placeholder="Employee ID" name="employee_id" onChange={handlOnChange} value={updateData.employee_id} />
    <input type="text" placeholder="Name" name="name" onChange={handlOnChange} value={updateData.name} />
    <input type="email" placeholder="Email" name="email" onChange={handlOnChange} value={updateData.email} />
    <input type="text" placeholder="Phone Number" name="phoneNumber" onChange={handlOnChange} value={updateData.phoneNumber} />
    <input type="text" placeholder="Salary" name="salary" onChange={handlOnChange} value={updateData.salary} />
    <label htmlFor="sstatus">Salary Payment Status</label>
    <input type="checkbox" id="ssstatus" name="salarypay" onChange={handlcheckBox} checked={updateData.salarypay} />
    <button type="submit">Update</button>
</form>

            </div>

            {/* Toggle between forms */}
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Foody Restaurant</h1>
                        <button onClick={() => SetVal(false)}>Update Employee</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Foody Restaurant</h1>
                        <button onClick={() => SetVal(true)}>Register Employee</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
const formDataSend = new FormData();
        formDataSend.append("employee_id", formdata.employee_id);
        formDataSend.append("name", formdata.name);
        formDataSend.append("email", formdata.email);
        formDataSend.append("phoneNumber", formdata.phoneNumber);
        formDataSend.append("salary", formdata.salary);
        formDataSend.append("salarypay", formdata.salarypay);

        const response = await axios.put(`${url}/api/employee/update/${formdata.employee_id}`, formDataSend);
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
            console.error("Error:", response.data?.message || "Unexpected error");
        }
    };
    try {
        const formDataSend = new FormData();
        formDataSend.append("employee_id", formdata.employee_id);
        formDataSend.append("name", formdata.name);
        formDataSend.append("email", formdata.email);
        formDataSend.append("phoneNumber", formdata.phoneNumber);
        formDataSend.append("salary", formdata.salary);
        formDataSend.append("salarypay", formdata.salarypay);

        const response = await axios.put(`${url}/api/employee/update/${formdata.employee_id}`, formDataSend);
        
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
            // Check if response.data exists and has message
            console.error("Error:", response.data?.message || "Unexpected error");
        }
    } catch (error) {
        // Handle network or unexpected errors
        console.error("Error occurred while submitting:", error.response?.data?.message || error.message);
    }
    try {
        const formDataSend = new FormData();
        formDataSend.append("employee_id", formdata.employee_id);
        formDataSend.append("name", formdata.name);
        formDataSend.append("email", formdata.email);
        formDataSend.append("phoneNumber", formdata.phoneNumber);
        formDataSend.append("salary", formdata.salary);
        formDataSend.append("salarypay", formdata.salarypay);

        const response = await axios.put(`${url}/api/employee/update/${formdata.employee_id}`, formDataSend);
        
        console.log("Full response object:", response);

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
            console.error("Error:", response.data?.message || "Unexpected error");
        }
    } catch (error) {
        console.error("Error object:", error);
        console.error("Error response:", error.response);
        console.error("Error details:", error.response?.data?.message || error.message || "Unknown error");
    }
