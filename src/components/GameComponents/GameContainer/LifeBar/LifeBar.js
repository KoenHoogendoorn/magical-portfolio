import React from "react";
import classes from "./LifeBar.module.scss";

const LifeBar = (props) => {
  const liveHearts = [...Array(props.numberOfLives)].map(() => (
    <i className={`fas fa-heart ${classes.HeartIcon}`}></i>
  ));

  return <div className={classes.LifeBar}>{liveHearts}</div>;
};
export default LifeBar;
