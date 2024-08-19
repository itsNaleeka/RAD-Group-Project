import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
	const [menu, setMenu] = useState("home")

  return (
	<div className="navbar row">
		<img src={assets.logo} alt="" />
		<ul className="navbar-menu capitalize row">
			<li onClick={() => setMenu("home")} className={menu == 'home' ? 'active' : ''}>Home</li>
			<li onClick={() => setMenu("menu")} className={menu == 'menu' ? 'active' : ''}>Menu</li>
			<li onClick={() => setMenu("about")} className={menu == 'about' ? 'active' : ''}>About us</li>
			<li onClick={() => setMenu("contact")} className={menu == 'contact' ? 'active' : ''}>Contact Us</li>
		</ul>
		<div className="navbar-btns row">
			<img src={assets.search_icon} alt="search icon" />
			<div className="navbar-cart-icon">
				<img src={assets.basket_icon} alt="cart" />
				<div className="dot"></div>
			</div>
			<button className='primaryBtn'>log in</button>
		</div>
	</div>
  )
}

export default Navbar
