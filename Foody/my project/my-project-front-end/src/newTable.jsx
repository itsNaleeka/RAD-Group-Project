import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './newtable.css';

export const NewTable = () => {
    const url = "http://localhost:5000";
    const [list, setList] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [filteredEmployee, setFilteredEmployee] = useState({});

    // Fetch list of employees
    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/employee/read`);
            console.log(response.data);
            if (response.data.success) {
                setList(response.data.data);
                toast.success("Data fetched successfully");
            } else {
                toast.error("Error fetching data");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to fetch data");
        }
    };

    // Fetch employee by ID
    const fetchEmployee = async (employee_id) => {
        try {
            const response = await axios.get(`${url}/api/employee/read/${employee_id}`);
            if (response.data.success) {
                setFilteredEmployee(response.data.data);  // Set the fetched employee data
                toast.success("Employee found");
            } else {
                toast.error("Employee not found");
                setFilteredEmployee({});
            }
        } catch (error) {
            console.error("Error", error);
            toast.error("Failed to fetch employee");
            setFilteredEmployee({});
        }
    };

    // Delete an employee
    const handleDelete = async (employeeId) => {
        try {
            const response = await axios.delete(`${url}/api/employee/delete/${employeeId}`);
            if (response.data.success) {
                toast.success("Employee deleted successfully");
                setList(list.filter(item => item.employee_id !== employeeId));
            } else {
                toast.error("Error deleting employee");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to delete employee");
        }
    };

    // Effect to load employee list on component mount
    useEffect(() => {
        fetchList();
    }, []);

    // Handle search input change
    const handleSearch = (e) => {
        setSearchId(e.target.value);
    };

    // Handle pressing Enter key to search by ID
    const KeyPress = (e) => {
        if (e.key === 'Enter') {
            if (searchId) {
                fetchEmployee(searchId);
            } else {
                setSearchId('');
                setFilteredEmployee({})
                fetchList()
                toast.info("Search cleared and data refreshed")
            }
        }
    };

    // Check if an object is empty
    const isObjectEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    };
   
    return (
        <main className='table'>
            <section className='table_header'>
                <h1>Employee Table</h1>
                <div className='input-group'>
                    <input
                        type="search"
                        placeholder='Enter employee ID'
                        onChange={handleSearch}
                        onKeyDown={KeyPress}
                    />
                    
                </div>
            </section>
            <section className='table_body'>
                <table>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
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
                        {/* If a specific employee is searched, show only that employee */}
                        {!isObjectEmpty(filteredEmployee) ? (
                            <tr className="list-table-format">
                                <td>{filteredEmployee.employee_id}</td>
                                <td>{filteredEmployee.name}</td>
                                <td>{filteredEmployee.email}</td>
                                <td>{filteredEmployee.phoneNumber}</td>
                                <td><strong>{filteredEmployee.salary}</strong></td>
                                <td>{filteredEmployee.salarypay ? "Paid" : "Not Paid"}</td>
                                <td>{filteredEmployee.hireDate?.split('T')[0]}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(filteredEmployee.employee_id)}
                                        className="delete-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ) : (
                            // If no search is performed, show all employees
                            list.map((item, index) => (
                                <tr key={index} className="list-table-format">
                                    <td>{item.employee_id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td><strong>{item.salary}</strong></td>
                                    <td>{item.salarypay ? "Paid" : "Not Paid"}</td>
                                    <td>{item.hireDate.split('T')[0]}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(item.employee_id)}
                                            className="delete-button"
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
    );
};
