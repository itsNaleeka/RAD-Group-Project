import React, { useContext, useState } from "react";
import "./placeOrder.css";
import { StoreContext } from "../../components/context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
	const navigate = useNavigate()
	const { getTotalCartAmount, token, food_list, cartItems, url, clearCart } =
		useContext(StoreContext);

	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		houseNo: "",
		street: "",
		city: "",
		zipcode: "",
		country: "",
		phone: "",
	});

	const onChangeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setData((data) => ({ ...data, [name]: value }));
	};

	const placeOrder = async (event) => {
		event.preventDefault();
		let orderItems = [];
		food_list.map((item) => {
			if (cartItems[item._id] > 0) {
				let itemInfo = item;
				itemInfo["quantity"] = cartItems[item._id];
				orderItems.push(itemInfo);
			}
		});
		let orderData = {
			Address: data,
			items: orderItems,
			amount: getTotalCartAmount() + 2,
			// userId added
			userID: token,
		};
		let response = await axios.post(url + "/api/order/place", orderData, {
			headers: { token },
		});

		if (response.data.success) {
			console.log("Order placed successfully");
			// window.location.replace(session_url);
			clearCart();
			navigate("/success");
		} else {
			console.log(response.data);
		}
	};

	return (
		<form onSubmit={placeOrder} className="placeOrder">
			<div className="delivery-info">
				<h3 className="title">delivery information</h3>
				<div className="multi-fields">
					<input
						required
						type="text"
						name="firstName"
						onChange={onChangeHandler}
						value={data.firstName}
						id="info-fname"
						placeholder="First Name"
					/>
					<input
						required
						type="text"
						name="lastName"
						onChange={onChangeHandler}
						value={data.lastName}
						id="info-lname"
						placeholder="Last Name"
					/>
				</div>
				<input
					required
					type="email"
					name="email"
					onChange={onChangeHandler}
					value={data.email}
					id="info-email"
					placeholder="email Address"
				/>
				<div className="multi-fields">
					<input
						required
						type="text"
						name="houseNo"
						onChange={onChangeHandler}
						value={data.houseNo}
						id="info-house-no"
						placeholder="house no/name"
					/>
					<input
						required
						type="text"
						name="street"
						onChange={onChangeHandler}
						value={data.street}
						id="info-street"
						placeholder="Street"
					/>
				</div>
				<div className="multi-fields">
					<input
						required
						type="text"
						name="city"
						onChange={onChangeHandler}
						value={data.city}
						id="info-city"
						placeholder="City"
					/>
					<input
						required
						type="number"
						name="zipcode"
						onChange={onChangeHandler}
						value={data.zipcode}
						id="info-zip"
						placeholder="zip code"
					/>
				</div>
				<input
					required
					type="number"
					id="info-cNumber"
					placeholder="phone number"
					name="phone"
					onChange={onChangeHandler}
					value={data.phone}
				/>
			</div>
			<div className="order-details">
				<h3 className="title">Checkout</h3>
				<div className="checkout-content col capitalize">
					<div className="subt row">
						<span className="text">sub total</span>
						<span className="price">${getTotalCartAmount()}</span>
					</div>
					<div className="deliveryFee row">
						<span className="text">delivery fee</span>
						<span className="price">
							${getTotalCartAmount() === 0 ? 0 : 2}
						</span>
					</div>
					<div className="total row">
						<span className="text">total</span>
						<span className="price">
							$
							{getTotalCartAmount() +
								(getTotalCartAmount() === 0 ? 0 : 2)}
						</span>
					</div>
					<button
						type="submit"
						// onClick={() => navigate("/order")}
						className="checkout"
					>
						proceed to payment
					</button>
				</div>
			</div>
		</form>
	);
}

export default PlaceOrder;
