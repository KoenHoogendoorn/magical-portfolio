import React from "react";
import classes from "./ClawMarks.module.scss";

import ClawMarksImg from "../../../../assets/home/dragon-game/ClawMarks.svg";

const ClawMarks = (props) => {
  let clawMarksClasses;

  if (props.attackCasted) {
    clawMarksClasses = `${classes.ClawMarks} `;
    if (props.duplicate) {
      clawMarksClasses += `${classes.Duplicate} `;
    }
    if (props.attackMiss) {
      clawMarksClasses += `${classes.ClawMiss} `;
    }
  } else {
    clawMarksClasses = `${classes.NotActive} `;
  }

  return (
    <img src={ClawMarksImg} alt="Claw Marks" className={clawMarksClasses}></img>
  );
};

export default ClawMarks;
