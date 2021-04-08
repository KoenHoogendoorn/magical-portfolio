import React from "react";
import classes from "./Taskbar.module.scss";

import ArrowLeft from "../../Arrows/ArrowLeft";
import ArrowRight from "../../Arrows/ArrowRight";

const Taskbar = (props) => (
  <div className={classes.Taskbar}>
    <ArrowLeft clickedLeft={props.clickedLeft} />
    <div className={classes.ToolName}>{props.activeToolName}</div>
    <ArrowRight clickedRight={props.clickedRight} />
  </div>
);

export default Taskbar;
