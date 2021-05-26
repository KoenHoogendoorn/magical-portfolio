import React from "react";
import classes from "./FireBall.module.scss";

const FireBall = (props) => {
  let fireBallClasses = `${classes.FireBall} `;
  if (props.dragonAttacked) {
    fireBallClasses += `${classes.FireBallDragon} `;
  }

  let fireClasses = `${classes.Fire} `;
  if (props.dragonAttacked) {
    fireClasses += `${classes.FireDragon} `;
  }

  let flameClasses = `${classes.Flame} `;
  if (props.spellMiss || props.dragonMissed) {
    fireClasses += `${classes.FireMiss} `;
    flameClasses += `${classes.FlameMiss} `;
    fireBallClasses += `${classes.FireBallMiss} `;
  }

  if (props.dragonMissed) {
    fireBallClasses += `${classes.FireBallDragonMiss} `;
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
