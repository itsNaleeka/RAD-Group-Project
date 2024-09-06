import React from "react";
import "./button1.css";

function Button1(props) {
	return (
		<div className="button1">
			<button> {props.children} </button>
		</div>
	);
}

export default Button1;
