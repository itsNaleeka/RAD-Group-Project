import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

function Navbar() {

    const [menu, setMenu] = useState("home")

	return (
		<div className="navbar">
			<img src={assets.logo} alt="foody logo" className="logo"/>
			<ul className="navbar-menu row capitalize">
				<li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""} >Home</li>
				<li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""} >Menu</li>
				<li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""} >Contact us</li>
			</ul>
			<div className="navbar-right row">
				<img src={assets.search_icon} alt="search-icon" className="navbar-search-icon"/>
				<div className="navbar-cart-icon">
					<img src={assets.basket_icon} alt="cart" />
					<div className="dot"></div>
				</div>
                <button>Signup</button>
			</div>
		</div>
	);
}

export default Navbar;
