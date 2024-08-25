import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
	const [menu, setMenu] = useState("home");
	const { getTotalCartAmount } = useContext(StoreContext);

	return (
		<div className="navbar row">
			<Link to="/">
				<img src={assets.logo} alt="" className="logo" />
			</Link>
			<ul className="navbar-menu capitalize row">
				<Link
					to="/"
					onClick={() => setMenu("home")}
					className={menu == "home" ? "active" : ""}
				>
					Home
				</Link>
				<a
					href="#explore-menu"
					onClick={() => setMenu("menu")}
					className={menu == "menu" ? "active" : ""}
				>
					Menu
				</a>
				<a
					href="#"
					onClick={() => setMenu("about")}
					className={menu == "about" ? "active" : ""}
				>
					About us
				</a>
				<Link
					to="/contact"
					onClick={() => setMenu("contact")}
					className={menu == "contact" ? "active" : ""}
				>
					Contact Us
				</Link>
			</ul>
			<div className="navbar-btns row">
				<img src={assets.search_icon} alt="search icon" />
				<div className="navbar-cart-icon">
					<Link to="/cart">
						<img src={assets.basket_icon} alt="cart" />
					</Link>
					<div
						className={getTotalCartAmount() === 0 ? "" : "dot"}
					></div>
				</div>
				<button
					onClick={() => setShowLogin(true)}
					className="primaryBtn"
				>
					log in
				</button>
			</div>
		</div>
	);
};

export default Navbar;
