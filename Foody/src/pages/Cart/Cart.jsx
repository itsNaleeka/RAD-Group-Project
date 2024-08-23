import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../components/context/StoreContext";
import { useNavigate } from "react-router-dom";

function Cart() {
	const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
	const navigate = useNavigate();

	return (
		<div className="cart">
			<div className="cart-items">
				<div className="cart-items-title cart-table capitalize">
					<p>Items</p>
					<p>Title</p>
					<p>Price</p>
					<p>quantity</p>
					<p>total</p>
					<p>remove item</p>
				</div>
				<br />
				<hr />
				{food_list.map((item, index) => {
					if (cartItems[item._id] > 0) {
						return (
							<>
								<div className="cart-item cart-table">
									<img
										src={item.image}
										alt={item.name}
										className="item-img"
									/>
									<div className="item-name">{item.name}</div>
									<div className="item-price">
										${item.price}
									</div>
									<div className="item-amount">
										{cartItems[item._id]}
									</div>
									<div className="item-total">
										${item.price * cartItems[item._id]}
									</div>
									<button
										onClick={() => removeFromCart(item._id)}
										className="remove-item"
									>
										Remove
									</button>
								</div>
								<hr />
							</>
						);
					}
				})}
			</div>
			<div className="cart-total">
				<h3 className="title">Checkout</h3>
				<div className="checkout-content col capitalize">
					<div className="subt row">
						<span className="text">sub total</span>
						<span className="price">${getTotalCartAmount()}</span>
					</div>
					<div className="deliveryFee row">
						<span className="text">delivery fee</span>
						<span className="price">${getTotalCartAmount()===0 ? 0 : 2}</span>
					</div>
					<div className="total row">
						<span className="text">total</span>
						<span className="price">${getTotalCartAmount() + (getTotalCartAmount()===0 ? 0 : 2)}</span>
					</div>
					<button onClick={()=>navigate('/order')} className="checkout">proceed to Checkout</button>
				</div>
			</div>
		</div>
	);
}

export default Cart;
