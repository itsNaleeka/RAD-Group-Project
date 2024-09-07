import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import PlaceOrder from "./pages/placeOrder/placeOrder";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPopup from "./components/loginPopup/LoginPopup";
import Footer from "./components/footer/Footer";
import SuccessPage from "./pages/successPage/SuccessPage";

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
					<Route path="/order" element={<PlaceOrder />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/success" element={<SuccessPage />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
};

export default App;
