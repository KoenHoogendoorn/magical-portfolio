import React from "react";
import classes from "./Arrow.module.scss";

const ArrowLeft = (props) => (
  <button className={classes.ArrowButton}>
    <i
      className="fas fa-arrow-alt-circle-right"
      onClick={props.clickedRight}
    ></i>
  </button>
);

export default ArrowLeft;
