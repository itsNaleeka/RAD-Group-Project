import React, { useState } from "react";
import Header from "../../components/header/Hero";
import ExploreMenu from "../../components/exploreMenu/ExploreMenu";
import FoodDisplay from "../../components/foodDisplay/foodDisplay";
import AboutUs from "../../components/aboutUs/aboutUs";

function Home() {
	const [category, setCategory] = useState("All");

	return (
		<>
			<Header />
			<ExploreMenu category={category} setCategory={setCategory} />
			<FoodDisplay category={category} />
			<AboutUs />
		</>
	);
}

export default Home;
