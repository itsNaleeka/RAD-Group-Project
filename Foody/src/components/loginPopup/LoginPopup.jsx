import React, { useState } from "react";
import "./loginPopup.css";
import { assets } from "../../assets/assets";

function LoginPopup({ setShowLogin }) {
	const [currState, setCurrState] = useState("login");

	return (
		<div className="login-popup">
			<form className="login-popup-container col">
				<div className="popup-title capitalize row">
					<h2>{currState}</h2>
					<img
						onClick={() => setShowLogin(false)}
						src={assets.cross_icon}
						alt="close popup"
					/>
				</div>
				<div className="popup-inputs col">
					{currState === "login" ? (
						<>
							<input
								type="email"
								placeholder="Enter your email"
								required
							/>
							<input
								type="password"
								placeholder="Enter password"
								required
							/>
						</>
					) : (
						<>
							<input
								type="text"
								placeholder="Enter your name"
								required
							/>
							<input
								type="email"
								placeholder="Enter your email"
								required
							/>
							<input
								type="password"
								placeholder="Enter password"
								required
							/>
						</>
					)}
				</div>
				{currState === "signup" ? (
					<div className="signup-popup-condition row">
						<input type="checkbox" id="loginCondition" required />
						<label htmlFor="loginCondition">
							By continuing, I agree to the terms of use & Privacy
							Policy
						</label>
					</div>
				) : null}
				<button>
					{currState === "login" ? "Login" : "create account"}
				</button>
				<div className="popupState">
					{currState === "login" ? (
						<p>
							Doesn't have an account?{" "}
							<span onClick={() => setCurrState("signup")}>
								Sign up
							</span>
						</p>
					) : (
						<p>
							Already have an account?{" "}
							<span onClick={() => setCurrState("login")}>
								Login
							</span>
						</p>
					)}
				</div>
			</form>
		</div>
	);
}

export default LoginPopup;
