import React from "react";
import classes from "./Tool.module.scss";

const Tool = (props) => {
  return (
    <div className={classes.Tool}>
      <div className={classes.IconCircle}>{props.icon}</div>
      <p className={classes.ToolName}>{props.name}</p>
    </div>
  );
};

export default Tool;
