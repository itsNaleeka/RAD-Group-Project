import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";	
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import "./App.css";
import LoginPopup from "./components/loginPopup/LoginPopup";

const App = () => {
	const [showLogin, setShowLogin] = useState(false);


	return (
		<>
		{showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
			<div className="app">
				<Navbar setShowLogin={setShowLogin} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/order" element={<PlaceOrder /> } />
				</Routes>
			</div>
			<Footer />
		</>
	);
};

export default App;
