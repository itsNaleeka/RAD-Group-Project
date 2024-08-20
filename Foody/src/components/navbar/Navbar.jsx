import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
	const [menu, setMenu] = useState("home")

  return (
	<div className="navbar row">
		<img src={assets.logo} alt="" className='logo' />
		<ul className="navbar-menu capitalize row">
			<Link to="/" onClick={() => setMenu("home")} className={menu == 'home' ? 'active' : ''}>Home</Link>
			<a href='#explore-menu' onClick={() => setMenu("menu")} className={menu == 'menu' ? 'active' : ''}>Menu</a>
			<a href='#' onClick={() => setMenu("about")} className={menu == 'about' ? 'active' : ''}>About us</a>
			<a href='#footer' onClick={() => setMenu("contact")} className={menu == 'contact' ? 'active' : ''}>Contact Us</a>
		</ul>
		<div className="navbar-btns row">
			<img src={assets.search_icon} alt="search icon" />
			<div className="navbar-cart-icon">
				<img src={assets.basket_icon} alt="cart" />
				<div className="dot"></div>
			</div>
			<button onClick={() => setShowLogin(true)} className='primaryBtn'>log in</button>
		</div>
	</div>
  )
}

export default Navbar
