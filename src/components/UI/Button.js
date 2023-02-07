import React from "react";
import classes from "./Button.module.css";

const Button = ({ onClickHandle, children }) => {
	return (
		<button 
		className={classes.button}
		onClick={onClickHandle}
		>
			{children}
		</button>
	)
}

export default Button;