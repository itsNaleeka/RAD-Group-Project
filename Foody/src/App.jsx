import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

const App = () => {
	return (
		<>
			<div className="app">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
};

export default App;
