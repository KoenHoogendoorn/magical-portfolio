import React from "react";
import classes from "./FireBall.module.scss";

const FireBall = (props) => {
  let fireBallClasses = `${classes.FireBall} `;
  if (props.fromDragon) {
    fireBallClasses += `${classes.FireBallDragon} `;
  }

  let fireClasses = `${classes.Fire} `;
  if (props.spellMiss) {
    fireClasses += `${classes.FireMiss} `;
  }
  if (props.fromDragon) {
    fireClasses += `${classes.FireDragon} `;
  }

  let flameClasses = `${classes.Flame} `;
  if (props.spellMiss) {
    flameClasses += `${classes.FlameMiss} `;
  }

  return (
    <div className={props.spellCasted ? fireBallClasses : null}>
      <div className={fireClasses}>
        <div className={flameClasses}></div>
        <div className={flameClasses}></div>
        <div className={flameClasses}></div>
      </div>
    </div>
  );
};

export default FireBall;
