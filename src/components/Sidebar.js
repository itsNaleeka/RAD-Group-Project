import React from 'react';
import { FaUserShield, FaBox, FaUsers, FaBoxOpen } from 'react-icons/fa';
import { Route, Routes, NavLink } from 'react-router-dom';
import './Sidebar.css';
import Deliver from './Deliver';
import Order from './Order';
import Customer from './Customer';
import Rider from './Rider';

const Sidebar = () => {
  return (
    <div className="content2">
      <div className="sidebar">
        <h5 className="admin">Admin</h5>
        <nav>
          <ul className="menu">
            <li>
              <NavLink to="Rider" className={({ isActive }) => (isActive ? 'active' : '')} >
                <FaUserShield className="icon" /><span className='name'>Rider Management</span> 
              </NavLink>
            </li>
            <li>
              <NavLink to="Order" className={({ isActive }) => (isActive ? 'active' : '')}>
                <FaBox className="icon" /><span className='name'>Order Management</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="Customer" className={({ isActive }) => (isActive ? 'active' : '')}>
                <FaUsers className="icon" /><span className='name'>Customer Management</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="Delivery" className={({ isActive }) => (isActive ? 'active' : '')}>
                <FaBoxOpen className="icon" /><span className='name'>Delivered Orders</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
        <div className="tablecontent">
          <Routes>
            <Route path="Rider" element={<Rider />} />
            <Route path="Order" element={<Order />} />
            <Route path="Customer" element={<Customer />} />
            <Route path="Delivery" element={<Deliver />} />
          </Routes>
        </div>
    
    </div>
   
  );
};

export default Sidebar;
