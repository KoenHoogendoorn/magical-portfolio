import React from "react";
import classes from "./ToolList.module.scss";

import Tool from "./Tool/Tool";

const ToolList = (props) => {
  const tools = props.tools.map((tool) => (
    <Tool name={tool.name} icon={tool.icon} />
  ));

  return <div className={classes.ToolList}>{tools}</div>;
};

export default ToolList;
