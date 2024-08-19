import React, { useState } from "react";
import "./foodItem.css";
import { assets } from "../../assets/assets";

function FoodItem({ id, name, price, desc, img }) {
	const [itemCount, setItemCount] = useState(0);

	return (
		<div className="food-item">
			<div className="food-item-img-container">
				<img src={img} alt="" className="food-item-img" />
				<div className="options-btns row">
					{!itemCount ? (
						<button
							className="add"
							onClick={() => setItemCount((prev) => prev + 1)}
						>
							buy
						</button>
					) : (
						<>
							<button
								className="remove"
								onClick={() => setItemCount((prev) => prev - 1)}
							>
								remove
							</button>
							<span>{itemCount}</span>
							<button
								className="add"
								onClick={() => setItemCount((prev) => prev + 1)}
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
