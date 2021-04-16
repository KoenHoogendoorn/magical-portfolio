import React from "react";
import classes from "./Arrow.module.scss";

const ArrowLeft = (props) => (
  <button className={classes.ArrowButton}>
    <i className="fas fa-arrow-alt-circle-left" onClick={props.clickedLeft}></i>
  </button>
);

export default ArrowLeft;
