import React from "react";
import classes from "./ToolArrowSelector.module.scss";

import ArrowLeft from "../../Arrows/ArrowLeft";
import ArrowRight from "../../Arrows/ArrowRight";

const ToolArrowSelector = (props) => (
  <div className={classes.ToolArrowSelector}>
    <ArrowLeft clickedLeft={props.clickedLeft} />
    <div className={classes.ToolName}>{props.activeToolName}</div>
    <ArrowRight clickedRight={props.clickedRight} />
  </div>
);

export default ToolArrowSelector;
