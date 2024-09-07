import React, { useContext, useEffect, useState } from "react";
import "./loginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

function LoginPopup({ setShowLogin }) {
	const [currState, setCurrState] = useState("login");
	const [data, setData] = useState({
		"name":"",
		"email": "",
		"password": ""
	})
	const {url, setToken} = useContext(StoreContext) 

	const onChangeHandler = (event) => {
		const name = event.target.name
		const value = event.target.value
		setData(data=>({...data, [name]:value}))
	}

	const onLogin = async (event) => {
		event.preventDefault();
		let newUrl = url

		if(currState === 'login'){
			newUrl += "/api/user/login"
		} else {
			newUrl += "/api/user/register"
		}

		const response = await axios.post(newUrl, data);

		if(response.data.success){
			setToken(response.data.token)
			localStorage.setItem("token", response.data.token)
			setShowLogin(false)
		} else {
			alert(response.data.message)
		}
	}




	return (
		<div className="login-popup">
			<form onSubmit={onLogin} className="login-popup-container col">
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
								name='email'
								value={data.email}
								onChange={onChangeHandler}
								placeholder="Enter your email"
								required
							/>
							<input
								type="password"
								name='password'
								value={data.password}
								onChange={onChangeHandler}
								placeholder="Enter password"
								required
							/>
						</>
					) : (
						<>
							<input
								type="text"
								name='name'
								onChange={onChangeHandler}
								value={data.name}
								placeholder="Enter your name"
								required
							/>
							<input
								type="email"
								name='email'
								onChange={onChangeHandler}
								value={data.email}
								placeholder="Enter your email"
								required
							/>
							<input
								type="password"
								name='password'
								onChange={onChangeHandler}
								value={data.password}
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
				<button type="submit">
					{currState === "login" ? "Login" : "create account"}
				</button>
				<div className="popupState capitalize">
					<hr />
					{currState === "login" ? (
						<p>
							Don't have an account?{" "}
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
