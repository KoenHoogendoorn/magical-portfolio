import React from "react";
import classes from "./ToolTab.module.scss";

const ToolTab = (props) => {
  let tabClasses = `${classes.ToolTab} `;
  if (props.active) {
    tabClasses += `${classes.Active} `;
  }

  return (
    <button className={tabClasses} onClick={props.clicked}>
      <h3>{props.children}</h3>
    </button>
  );
};

export default ToolTab;
