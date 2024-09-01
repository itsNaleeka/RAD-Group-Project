//import React from 'react'
import './Navbar.css'
import {assets} from "../../assets/assets"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo-content">
      <img className="logo" src={assets.logo} alt="" />
      <h4>Reciptionist Dashboard</h4>
      </div>
      <div className='nameProfile'>
      <img className="profile" src={assets.profile_image} alt="" />
      <h5>Mr.Navarathne</h5>
      </div>
    </div>
  )
}

export default Navbar
