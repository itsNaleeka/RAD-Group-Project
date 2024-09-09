import React, { useContext } from "react";
import "./successPage.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../components/context/StoreContext";

function SuccessPage() {
	const navigate = useNavigate();
	const { setMenu } = useContext(StoreContext);
	setMenu("success");

	return (
		<div className="successPage">
			<h1>Payment Successful!</h1>
			<p>Your order has been placed successfully.</p>
			<button
				onClick={() => {navigate("/"); setMenu("home")}}
				className="redirect capitalize"
			>
				redirect to home
			</button>
			<img src="foods.png" alt="" className="suc-bg-img" />
			<div className="circle-bg"></div>
		</div>
	);
}

export default SuccessPage;
