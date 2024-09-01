import React from "react";
import "./aboutus.css";
import Button1 from "../Button1/button1";

function AboutUs() {
	return (
		<div className="aboutus" id="aboutus">
			<h1 className="title capitalize">
				about <span>us</span>
			</h1>
			<div className="container row" >
				<div className="img-container">
					<div className="bg"></div>
					<img src="./bike.png" alt="" />
				</div>
				<div className="content col">
                    <h3 className="title capitalize">
                    Meet the Team Behind the Taste
                    </h3>
					<p>Welcome to our restaurant, where a group of passionate undergraduates has come together to bring you a unique dining experience. Our journey started with a shared love for food and a dream to create a space where flavors, creativity, and community come together. Each dish we serve is crafted with care, using fresh, locally-sourced ingredients to ensure the highest quality. Join us as we embark on this exciting adventure, and let us share our love for culinary arts with you. Your satisfaction is our greatest reward, and we can’t wait to welcome you to our table.</p>
                    {/* <Button1>explore menu</Button1> */}
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
