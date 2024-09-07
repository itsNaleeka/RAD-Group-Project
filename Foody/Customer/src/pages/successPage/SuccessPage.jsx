import React from "react";
import "./successPage.css";
import { useNavigate } from "react-router-dom";

function SuccessPage() {
    const navigate = useNavigate();
    return (
        <div className="successPage">
            <h1>Payment Successful!</h1>
            <p>Your order has been placed successfully.</p>
            <button onClick={() => navigate("/")} className="redirect capitalize">redirect to home</button>
            <img src="foods.png" alt="" className="suc-bg-img" />
            <div className="circle-bg"></div>
        </div>
    );
}

export default SuccessPage;
