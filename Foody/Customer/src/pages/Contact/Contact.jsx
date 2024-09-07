import React from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<div className="contact-container">
			<div className="content">
				<div className="contact">Contact Us</div>
				<h3>For Any Further Questions.</h3>
				<div className="detail-drop">
					<div className="drop capitalize">submit to newsletter!</div>
					<div className="form">
						<input type="email" placeholder="Enter your email Address" />
						<button type="submit">Submit</button>

						<div className="socials row">
							<div className="col">
								<h2>Email :</h2>
								<p>contact@foody.com</p>
							</div>
							<div className="col">
								<h2>Phone Number :</h2>
								<p>+94 123 456 789</p>
							</div>
							<div className="col">
								<h2>Website Link :</h2>
								<p>www.foody.com</p>
							</div>
						</div>
					</div>
				</div>
				<div className="detail-drop col">
					<p>
						We’d love to hear from you! Whether you have questions,
						feedback, or just want to say hello, we’re here to
						listen. Our team is dedicated to providing you with the
						best dining experience, and your input helps us improve
						every day. Feel free to reach out to us
					</p>
				</div>
			</div>
			<img src="/contact.png" alt="" className="bg-img" />
		</div>
	);
};

export default Contact;
