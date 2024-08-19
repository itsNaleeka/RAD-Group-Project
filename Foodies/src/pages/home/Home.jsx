import React, { useState } from "react";
import Header from "../../components/header/Hero";
import ExploreMenu from "../../components/exploreMenu/ExploreMenu";
import FoodDisplay from "../../components/foodDisplay/foodDisplay";

function Home() {
  const [category, setCategory] = useState("All")

	return (
		<>
			<Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
		</>
	);
}

export default Home;
