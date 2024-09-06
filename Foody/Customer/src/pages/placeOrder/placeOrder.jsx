import React, { useContext } from "react";
import "./placeOrder.css";
import { StoreContext } from "../../components/context/StoreContext";

function PlaceOrder() {
	const { getTotalCartAmount } = useContext(StoreContext);

	return (
		<form className="placeOrder">
			<div className="delivery-info">
				<h3 className="title">delivery information</h3>
				<div className="multi-fields">
					<input
						type="text"
						id="info-fname"
						placeholder="First Name"
					/>
					<input
						type="text"
						id="info-lname"
						placeholder="Last Name"
					/>
				</div>
				<input
					type="email"
					id="info-email"
					placeholder="email address"
				/>
				<div className="multi-fields">
					<input
						type="text"
						id="info-house-no"
						placeholder="house no/name"
					/>
					<input type="text" id="info-street" placeholder="Street" />
				</div>
				<div className="multi-fields">
					<input type="text" id="info-city" placeholder="City" />
					<input type="number" id="info-zip" placeholder="zip code" />
				</div>
				<input
					type="number"
					id="info-cNumber"
					placeholder="phone number"
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
						onClick={() => navigate("/order")}
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
