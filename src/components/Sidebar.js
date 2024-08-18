import React from 'react';
import { FaUserShield, FaBox, FaUsers, FaBoxOpen } from 'react-icons/fa';
import './Sidebar.css';
import { Route, Routes, NavLink } from 'react-router-dom';

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
          ))}
        </tbody>
      </table>
    </div>
  );
}


function Order() {
  const orders = [
    { id: 1, customerName: 'John Doe',address : '12/b,kirulapan',customerNumber:'077843567090', orderNumber: 'ORD123', orderDate: '2024-08-17', status: 'Delivered' },
    { id: 2, customerName: 'Jane Smith',address : '12/b,kirulapan',customerNumber:'077843567090', orderNumber: 'ORD124', orderDate: '2024-08-18', status: 'Pending' },
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
  const riders = [
    { id: 1, name: 'Pabodya', nic: '12342234567', address:'31/a,kirulapna', phone: '0987654', vehicleType: 'Car', vehicleNumber: 'AB-1234' },
    { id: 2, name: 'Pabodya3', nic: '1234523456', address:'31/a,kirulapna', phone: '09876548', vehicleType: 'Bike', vehicleNumber: 'CD-5678' },
  ];

  return (
    <div>
      <h4>Rider Management</h4>
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
          {riders.map((rider) => (
            <tr key={rider.id}>
              <td>{rider.id}</td>
              <td>{rider.name}</td>
              <td>{rider.address}</td>
              <td>{rider.nic}</td>
              <td>{rider.phone}</td>
              <td>{rider.vehicleType}</td>
              <td>{rider.vehicleNumber}</td>
              <td>
                <button className="add">Add</button>
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
