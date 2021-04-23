import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => (
  <button
    style={props.style}
    className={classes.Button}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;
