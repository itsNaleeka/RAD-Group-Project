import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";

function Footer() {
	return (
		<div className="footer capitalize col" id="footer">
			<div className="footer-content row">
				<div className="company col">
					<img src={assets.logo} alt="Foody logo" />
                    <p>Discover flavor-packed dishes at Foody. From savory to sweet, our menu delights every craving</p>
				</div>
				<div className="sitemap col">
					<h3>Sitemap</h3>
					<ul className="col">
						<li>Home</li>
						<li>menu</li>
						<li>about us</li>
						<li>contact us</li>
					</ul>
				</div>
				<div className="contacts col">
					<h3>get in touch</h3>
					<ul className="col">
						<li>+94 123 456 789</li>
						<li>contact@foody.com</li>
					</ul>
				</div>
			</div>
			<hr />
			<div className="copyrights">
				copyright 2024 &copy; Foody.com - all rights reserved
			</div>
		</div>
	);
}

export default Footer;
