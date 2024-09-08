import React from 'react';
import './navbar.css';
import { Link,Outlet } from 'react-router-dom';

export const Navbar = () => {
  return (
  <>
    <header className="header">
      <a href="/" className="logo">Foody</a>
      <nav className="navbar">
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/register" className='nav-link'>Register</Link>
        <Link to="/update" className='nav-link'>Update</Link>
        <Link to="/details" className='nav-link' >View</Link>
        
      </nav>
    </header>
    <Outlet/>
    </>
  );
}


