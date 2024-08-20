import React, { useContext } from "react";
import "./foodDisplay.css";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "../foodItem/foodItem";

function FoodDisplay({ category }) {
	const { food_list } = useContext(StoreContext);

	return (
		<div className="food-display col" id="food-display">
			<h2 className="title capitalize">Top dishes <span>({category})</span></h2>
			<div className="food-display-list">
				{food_list.map((item, index) => {
					if ((category === "All" || (category === item.category))) {
						 return <FoodItem
							key={index}
							name={item.name}
							desc={item.description}
							id={item._id}
							price={item.price}
							img={item.image}
						/>;
					}
				})}
			</div>
		</div>
	);
}

export default FoodDisplay;
