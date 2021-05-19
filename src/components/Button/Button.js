import React from "react";

import classes from "./Button.module.scss";

const Button = (props) => {
  let ButtonClasses = `${classes.Button} `;

  switch (props.priority) {
    case "primary":
      ButtonClasses += `${classes.Primary} `;
      break;
    case "secondary":
      ButtonClasses += `${classes.Secondary} `;
      break;
    default:
      break;
  }

  return (
    <button
      type="button"
      style={props.style}
      className={ButtonClasses}
      onClick={props.clicked}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
