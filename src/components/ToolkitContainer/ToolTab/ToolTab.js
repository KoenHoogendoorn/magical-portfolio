import React from "react";
import classes from "./ToolTab.module.scss";

const ToolTab = (props) => {
  let tabClasses = `${classes.ToolTab} `;
  if (props.active) {
    tabClasses += `${classes.Active} `;
  }

  return (
    <button className={tabClasses} onClick={props.clicked}>
      {props.active ? null : <div className={classes.DarkLayer}></div>}
      <img alt="icon" className={classes.Icon} src={props.icon} />
      <h3 className={classes.ToolkitName}>{props.children}</h3>
    </button>
  );
};

export default ToolTab;
