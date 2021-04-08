import React from "react";
import classes from "./Toolbar.module.scss";

import ToolButton from "./ToolButton/ToolButton";

const Toolbar = (props) => {
  let toolButtons;

  if (props.activeTab === "Design") {
    toolButtons = props.designTools.map((tool, index) => {
      return (
        <ToolButton
          key={tool.name}
          active={tool.active}
          clicked={() => props.setActiveTool(index)}
        >
          {tool.icon}
        </ToolButton>
      );
    });
  }
  if (props.activeTab === "Development") {
    toolButtons = props.developmentTools.map((tool, index) => {
      return (
        <ToolButton
          key={tool.name}
          active={tool.active}
          clicked={() => props.setActiveTool(index)}
        >
          {tool.icon}
        </ToolButton>
      );
    });
  }

  return <div className={classes.Toolbar}>{toolButtons}</div>;
};

export default Toolbar;
