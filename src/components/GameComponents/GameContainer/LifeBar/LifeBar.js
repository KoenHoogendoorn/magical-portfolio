import React from "react";
import classes from "./LifeBar.module.scss";

const LifeBar = (props) => {
  //create max health array
  const maxLivesArray = Array(props.maxLives + 1 - props.currentLives)
    .join("m")
    .split("");

  //current lives
  const currentLivesArray = Array(props.currentLives + 1)
    .join("c")
    .split("");

  const liveHeartsArray = currentLivesArray.concat(maxLivesArray);

  const liveHearts = liveHeartsArray.map((life, index) => {
    if (life === "m") {
      return (
        <i key={index} className={`far fa-heart ${classes.HeartIcon}`}></i>
      );
    } else {
      return (
        <i key={index} className={`fas fa-heart ${classes.HeartIcon}`}></i>
      );
    }
  });

  return <div className={classes.LifeBar}>{liveHearts}</div>;
};
export default LifeBar;
