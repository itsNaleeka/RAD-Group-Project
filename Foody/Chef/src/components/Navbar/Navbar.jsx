import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo-content">
          <img className='logo' src={assets.logo}/>
          <h3>Chef Dashboard</h3>
        </div>
        <img className='profile' src={assets.profile_image}/>
      </div>
    </div>
  )
}

export default Navbar
