
import { useEffect,useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'
import './newtable.css'

export const NewTable = () => {
   const url ="http://localhost:5000";
   const  [list,setList] = useState([])
   const  [searchId,setSearchId] = useState('')
   const  [filteredEmployee,setFilteredEmployee] = useState({})

   const fetchList = async () => {
    try{
        const response = await axios.get(`${url}/api/employee/read`)
        console.log(response.data)
        if(response.data.success){
            setList(response.data.data)
            toast.success("Data fetched successfully")
        }else{
            toast.error("Error Fetching data")
        }
    }catch(error){
        console.error("Error",error)
        toast.error("Failed to fetch Data")
    }
   }
   const fetchEmployee = async (employee_id) => {
    try{
        const response = await axios.get(`${url}/api/employee/read/${employee_id}`) 
        if(response.data.success){
            setFilteredEmployee(response.data.data)
        toast.success('Employee Found')
        }else{
            toast.error("Error",error)
            setFilteredEmployee({})
        }
    }catch{
        console.error("Error",error)
        toast.error("Failed to fetch data")
        setFilteredEmployee({})
    }
   }
   const handleDelete = async (employeeId)=>{
    try{
        const response = await axios.delete(`${url}/api/employee/delete/${employeeId}`)
        if(response.data.success){
            toast.success("Employee deleted successfully")
            setList(list.filter(item => item.employee_id !== employeeId))
        }else{
            toast.error("Error Deleting Employee")
        }
    }catch(error){
        console.error("Error",error)
        toast.error("Failed to Delete Employee")
    }
   }
   useEffect(()=>{
    fetchList()
   },[])

   const handleSearch = (e) => {
    setSearchId(e.target.value)
   }
   const KeyPress = (e) => {
    if(e.key === "Enter"){
        if(searchId){
        fetchEmployee(searchId)
            fetchEmployee(searchId);
        } else {
            setSearchId('')
            setFilteredEmployee({})
            fetchList()
            toast.info("Search cleared and data refreshed")
        }
    }
   }
   const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0
   }

   return(
       <main className="table">
        <section className="table_header">
            <h1>Employee Table</h1>
            <div className="input-group">
                <input
                type="search"
                placeholder='Enter Employee ID'
                onChange={handleSearch}
                onKeyDown={KeyPress}/>
            </div>
            </section>
            <section className="table_body">
                <table>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Salary</th>
                            <th>Status</th>
                            <th>Hire Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!isObjectEmpty(filteredEmployee)? (
                            <tr className="list-table-format">
                                <td>{filteredEmployee.employee_id}</td>
                                <td>{filteredEmployee.name}</td>
                                <td>{filteredEmployee.email}</td>
                                <td>{filteredEmployee.phoneNumber}</td>
                                <td><strong>{filteredEmployee.salary}</strong></td>
                                
                                <td>{filteredEmployee.salarypay ? "Paid":"Not Paid"}</td>
                                <td>{filteredEmployee.hireDate?.split('T')[0]}</td>
                                <td><button onClick={()=> handleDelete(filteredEmployee.employee_id)}
                                className='delete-button'
                                >
                                    Delete
                                    </button>
                                    </td>
                            </tr>):( list.map((item,index)=> (
                                <tr key = {index}className="list-table-format">
                                <td>{item.employee_id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNumber}</td>
                                <td><strong>{item.salary}</strong></td>
                                
                                <td>{item.salarypay ? "Paid":"Not Paid"}</td>
                                <td>{item.hireDate?.split('T')[0]}</td>
                                <td><button onClick={()=> handleDelete(item.employee_id)}
                                className='delete-button'
                                >
                                    Delete
                                    </button>
                                    </td>
                            </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </section>
       </main>
   )

}