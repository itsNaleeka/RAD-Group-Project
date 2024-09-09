import React from 'react';
import './navbar.css';
import { Link,Outlet } from 'react-router-dom';
import {Footer} from './Footer.jsx'



export const Navbar = () => {
  return (
  <>
    <header className="header">
      <a href="/hero" className="logo">Foody</a>
      <nav className="navbar">
        <Link to="/hero" className='nav-link'>Home</Link>
        <Link to="/register" className='nav-link'>Register</Link>
        <Link to="/update" className='nav-link'>Update</Link>
        <Link to="/details" className='nav-link' >View</Link>

      </nav>
    </header>
    <Outlet/>
    <Footer/>
    </>
  );
}


