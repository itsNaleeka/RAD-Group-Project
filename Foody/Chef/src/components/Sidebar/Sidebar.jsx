import React from 'react'
import { assets } from '../../assets/assets'
import './sidebar.css'
import { NavLink } from 'react-router-dom'



const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-options">
        <NavLink to='/' className="sidebar-item">
            <img src={assets.order_icon} className='order' />
            <p>Orders</p>
          </NavLink>
          <NavLink to ='/add' className="sidebar-item">
            <img src={assets.add_icon} />
            <p>Add Menu Item</p>
          </NavLink>
          <NavLink to='/list'className="sidebar-item">
            <img src={assets.menu_icon} />
            <p>Menu Items</p>
          </NavLink>
          
        </div>
      </div>
    </div>
  )
}

export default Sidebar
