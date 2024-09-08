import React, { useEffect,useState } from "react";
import './table.css';
import axios from 'axios'
import {toast} from "react-toastify"

export const EmployeeList = () => {
    const url = "http://localhost:5000"
    const [list,setlist] = useState([])

    const fetchList = async()=>{
        const response = await axios.get(`${url}/api/employee/read`)
        console.log(response.data)
        if(response.data.success){
            setlist(response.data.data)
            toast.success("data passed Success")
        }
        else{
            toast.error("Error")
        }
    }
    useEffect(()=>{
        fetchList()
    },[])

    return(



<div className="tablecontainer" >  <table><thead><th>Employee ID</th>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Monthly Salary</th>
                <th>Status</th>
                <th>HireDate</th>
                <th>Action</th></thead>
                <tbody> {list.map((item,index)=>{
                            return(<tr key={index} className="list-table-format">
                                <td>{item.employee_id}</td>
                                <td>{item.name}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.salary}</td>
                                <td>{item.salarypay?"Paid":"Not Paid"}</td>
                                <td>{item.hireDate.split('T')[0]}</td>
                                <td><button 
                onClick={() => handleDelete(item.employee_id)} 
                className="delete-button"
              >
                Delete
              </button></td>
                                
                            </tr>)
                           })}</tbody></table>
            </div>             
                            
                       
    )
}


