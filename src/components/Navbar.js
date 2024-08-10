import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import delivery from '../assests/delivery.png';
import './Navbar.css';

function Navbar() {
  return (
    <div>
        <nav className = "navbar">
            <div className = "navbar-container">
                <img src= {delivery} className = "delivery" />
                <div className="navbar-menu">
                    <a href="/">HOME</a>
                    <a href="/manage">MANAGE</a>
                    <a href="/about">ABOUT</a>
                    <a href="/contact">CONTACT</a>
                </div> 
            <div className="navbar-end">
                <SearchIcon className="icon"/>
                <NotificationsIcon className="icon"/>             
            </div>
        </div> 
    </nav>
</div>
  )
}

export default Navbar