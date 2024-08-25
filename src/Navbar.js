import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import deliveryImage from './assests/delivery.png';
import './Navbar.css';


function Navbar() {
  return (
    <div>
        <nav className = "navbar">
            <div className = "navbar-container">
                <img src= {deliveryImage} className = "delivery" />
                <div className="navbar-menu">
                    <a href="/">HOME</a>
                    <a href="/About">ABOUT</a>
                    <a href="/Contact">CONTACT</a>
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