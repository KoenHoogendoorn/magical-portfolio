import React from "react";
import classes from "./FireBall.module.scss";

const FireBall = (props) => (
  <div className={props.spellCasted ? classes.FireBall : null}>
    <div className={classes.Fire}>
      <div className={classes.Flame}></div>
      <div className={classes.Flame}></div>
      <div className={classes.Flame}></div>
    </div>
  </div>
);

export default FireBall;
