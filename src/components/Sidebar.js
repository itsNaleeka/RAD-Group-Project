import React from 'react';
import { FaUserShield, FaBox, FaUsers, FaBoxOpen } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import RiderForm from './RiderForm';
import './Sidebar.css';
import axios from 'axios';

function Deliver() {
  const deliveries = [
    { id: 1, orderNumber: 'ORD123', deliveryDate: '2024-08-17', deliveryAddress: '123 Main St', deliveryStatus: 'Completed' },
    { id: 2, orderNumber: 'ORD124', deliveryDate: '2024-08-18', deliveryAddress: '456 Elm St', deliveryStatus: 'In Progress' },
  ];

  return (
    <div>
      <h4>Delivered Orders</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Order Number</th>
            <th>Delivery Date</th>
            <th>Delivery Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery.id}>
              <td>{delivery.id}</td>
              <td>{delivery.orderNumber}</td>
              <td>{delivery.deliveryDate}</td>
              <td>{delivery.deliveryAddress}</td>
              <td>{delivery.deliveryStatus}</td>
              <td>
                <button className="add">View</button>
                <button className="delete">Delete</button>
                <button className="edit">Edit</button>
              </td>
            </tr>
          ))
       }
        </tbody>
      </table>
    </div>
  );
}


function Order() {
const orders = [
  {}
];

  return (
    <div>
      <h4>Order Management</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Address</th>
            <th>Customer Phone Number</th>
            <th>OrderNumber</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.address}</td>
              <td>{order.customerNumber}</td>
              <td>{order.orderNumber}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                <button className="delete">Delete</button>
                <button className="edit">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


function Customer() {
  const customers = [
    { id: 1, name: 'John Doe', phone: '0987654321',order: 'orde45',date:'2024/12/05', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', phone: '1234567890',order: 'order67',date:'2024/12/05', address: '456 Elm St' },
  ];

  return (
    <div>
      <h4>Customer Management</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Order Number</th>
            <th>Order Date</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.order}</td>
              <td>{customer.date}</td>
              <td>{customer.address}</td>
              <td>
                <button className="add">View</button>
                <button className="delete">Delete</button>
                <button className="edit">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


function Rider() {
  
  const [addSelection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    nic: "",
    phone:"",
    vehicleType:"",
    vehicleNumber: "",
  });

const [ridersList,setDataList] = useState([]);

  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    address: "",
    nic: "",
    phone:"",
    vehicleType:"",
    vehicleNumber: "",
    _id: ""
  });



// Handle form input changes
const handleOnChange = (e) => {
  const { value, name } = e.target;
  setFormData((preve) => {
    return{
      ...preve,
      [name] : value
    }
  });
};

// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  const data = await axios.post("/create", formData)
  console.log(data)
  if(data.data.success){
    setAddSection(false);
    setEditSection(true);
    alert(data.data.message)
    getfetchData()
  }
}

// Fetch data from the server
const getfetchData = async () => {
  try {
    const response = await axios.get("/");
    console.log("Fetched Data:", response.data); 
    if (response.data.success) {
      setDataList(response.data.data);
    } else {
      alert("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("An error occurred while fetching data.");
  }
};

useEffect(() => {
  // Fetch data when the component is mounted
  getfetchData();
}, []);

// Handle delete
const handleDelete = async (id) => {
  try {
    const response = await axios.delete("/delete/" + id);
    if (response.data.success) {
      alert("Data deleted successfully");
      getfetchData(); // Refresh the table data
    } else {
      alert("Failed to delete data");
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    alert("An error occurred while deleting data.");
  }
};

// Handle update
const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.put("/update", formDataEdit);
    if (response.data.success) {
      alert("Data updated successfully");
      setEditSection(false);
      getfetchData(); // Refresh the table data
    } else {
      alert("Failed to update data");
    }
  } catch (error) {
    console.error("Error updating data:", error);
    alert("An error occurred while updating data.");
  }
};

// Handle form input changes for editing
const handleEditOnChange = (e) => {
  const { value, name } = e.target;
  setFormDataEdit((prev) => ({
    ...prev,
    [name]: value
  }));
};

// Set form data for editing
const handleEdit = (el) => {
  setFormDataEdit(el);
  setEditSection(true);
  setAddSection(false);
};


  return (
    <div>
       <h4>Rider Management</h4>
       <button className="add" onClick={() => {setAddSection(true); setEditSection(false)}}>Add</button>
       <div className="container">
          
        {
          addSelection && (
            <RiderForm
              handleSubmit={handleSubmit}
              handleOnChange={handleOnChange}
              handleClose={() => setAddSection(false)}
              reset={formData}
          />
          )
        }

        {editSection && (
          <RiderForm
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleClose={() => setEditSection(false)}
            reset={formDataEdit}
          />
        )}
      
     
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>NIC</th>
            <th>Phone</th>
            <th>Vehicle Type</th>
            <th>Vehicle Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ridersList.length > 0 ? (
          ridersList.map((rider) => (
            <tr key={rider._id}>
              <td>{rider.id}</td>
              <td>{rider.name}</td>
              <td>{rider.address}</td>
              <td>{rider.nic}</td>
              <td>{rider.phone}</td>
              <td>{rider.vehicleType}</td>
              <td>{rider.vehicleNumber}</td>
              <td>
              <button className="edit" onClick={() => handleEdit(rider)}>Edit</button>
              <button className="delete" onClick={() => handleDelete(rider._id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
              <td colSpan="8" style={{ textAlign: "center" }}>No data</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  </div>
  );
}

const Sidebar = () => {
  return (
    <div className= "content2">
    <div className="sidebar">
      <h5 className="admin">Admin</h5>
      <nav>
        <ul className="menu">
          <li>
            <NavLink to="Rider" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaUserShield className="icon" /><h7 className='name'>Rider Management</h7> 
            </NavLink>
          </li>
          <li>
            <NavLink to="Order" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaBox className="icon" /><h7 className='name'> Order Management </h7>
            </NavLink>
          </li>
          <li>
            <NavLink to="Customer" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaUsers className="icon" /> <h7 className='name'>Customer Management</h7>
            </NavLink>
          </li>
          <li>
            <NavLink to="Delivery" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaBoxOpen className="icon" /> <h7 className='name'>Delivered Orders</h7>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <div className= "content2">
      <div className= "tablecontent">
          <Routes>
            <Route path="Rider" element={<Rider />} />
            <Route path="Order" element={<Order />} />
            <Route path="Customer" element={<Customer />} />
            <Route path="Delivery" element={<Deliver />} />
        </Routes>
      </div>
    </div> 
  </div>
  );
};

export default Sidebar;
