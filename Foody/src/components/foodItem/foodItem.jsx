import React, { useContext, useState } from "react";
import "./foodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";

function FoodItem({ id, name, price, desc, img }) {
	const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

	return (
		<div className="food-item">
			<div className="food-item-img-container">
				<img src={img} alt="" className="food-item-img" />
				<div className="options-btns row">
					{!cartItems[id] ? (
						<button
							className="add"
							onClick={() => addToCart(id)}
						>
							buy
						</button>
					) : (
						<>
							<button
								className="remove"
								onClick={() => removeFromCart(id)}
							>
								remove
							</button>
							<span>{cartItems[id]}</span>
							<button
								className="add"
								onClick={() => addToCart(id)}
							>
								buy
							</button>
						</>
					)}
				</div>
			</div>
			<div className="food-item-details col">
				<div className="name row">
					<p>{name}</p>
					<img src={assets.rating_starts} className="rating" alt="" />
				</div>
				<p className="descriptiom">{desc}</p>
				<p className="price">${price}</p>
			</div>
		</div>
	);
}

export default FoodItem;
