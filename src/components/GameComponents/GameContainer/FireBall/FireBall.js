import React from "react";
import classes from "./FireBall.module.scss";

const FireBall = (props) => {
  let fireClasses = `${classes.Fire} `;
  if (props.spellMiss) {
    fireClasses += `${classes.FireMiss} `;
  }

  let flameClasses = `${classes.Flame} `;
  if (props.spellMiss) {
    flameClasses += `${classes.FlameMiss} `;
  }

  return (
    <div className={props.spellCasted ? classes.FireBall : null}>
      <div className={fireClasses}>
        <div className={flameClasses}></div>
        <div className={flameClasses}></div>
        <div className={flameClasses}></div>
      </div>
    </div>
  );
};

export default FireBall;
