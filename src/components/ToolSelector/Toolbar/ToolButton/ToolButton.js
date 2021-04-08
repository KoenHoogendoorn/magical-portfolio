import React from "react";
import classes from "./ToolButton.module.scss";

const ToolButton = (props) => {
  let content;

  if (props.active) {
    content = (
      <React.Fragment>
        <button className={`${classes.ToolButton} ${classes.Active}`}>
          {props.children}
        </button>
        <svg viewBox="0 0 100 100" width="79px">
          <path
            d="M68,2 h12 a16,16 0 0 1 14,14 v12 m0,40 v12 a16,16 0 0 1 -14,14 h-12 m-40,0 h-12 a16,16 0 0 1 -14,-14 v-12 m0,-40 v-12 a16,16 0 0 1 14,-14 h12"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </React.Fragment>
    );
  } else {
    content = (
      <button className={classes.ToolButton} onClick={props.clicked}>
        {props.children}
      </button>
    );
  }

  return content;
};

export default ToolButton;
