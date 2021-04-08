import React from "react";
import classes from "./Taskbar.module.scss";

const Taskbar = (props) => (
  <div className={classes.Taskbar}>
    <button>
      <i
        className="fas fa-arrow-alt-circle-left"
        onClick={props.clickedLeft}
      ></i>
    </button>
    <div className={classes.ToolName}>{props.activeToolName}</div>
    <button>
      <i
        className="fas fa-arrow-alt-circle-right"
        onClick={props.clickedRight}
      ></i>
    </button>
  </div>
);

export default Taskbar;
