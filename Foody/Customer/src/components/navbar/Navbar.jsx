import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
	// const [menu, setMenu] = useState("home");
	const { getTotalCartAmount, token, setToken, menu, setMenu } = useContext(StoreContext);

	const navigate = useNavigate();

	const logOut = () => {
		localStorage.removeItem("token")
		setToken("")
		navigate("/")
	}

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
					onClick={() => 
						{setMenu("menu")
						navigate("/")}}
					className={menu == "menu" ? "active" : ""}
				>
					Menu
				</a>
				<a
					href="#aboutus"
					onClick={() => {
						setMenu("about");
						navigate("/");
					}}
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
				
				{!token ? (
					<button
						onClick={() => setShowLogin(true)}
						className="primaryBtn"
					>
						log in
					</button>
				) : (
					<>
					<div className="navbar-cart-icon">
						<Link to="/cart">
							<img src={assets.basket_icon} alt="cart" />
						</Link>
						<div
							className={getTotalCartAmount() === 0 ? "" : "dot"}
						></div>
					</div>
					<button
						className="primaryBtn-2"
						onClick={logOut}
					>
						log out
					</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Navbar;
