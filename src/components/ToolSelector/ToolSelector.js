import React, { useState, useEffect } from "react";
import classes from "./ToolSelector.module.scss";

import ToolTab from "./ToolTab/ToolTab";
import Toolbar from "./Toolbar/Toolbar";
import ToolArrowSelector from "./ToolArrowSelector/ToolArrowSelector";

const ToolSelector = (props) => {
  const [activeTab, setActiveTab] = useState("Design");
  const [designTools, setDesignTools] = useState([
    { name: "Sketch", icon: <i className="fab fa-sketch"></i>, active: true },
    { name: "Figma", icon: <i className="fab fa-figma"></i>, active: false },
    { name: "Illustrator", icon: "Ai", active: false },
    { name: "Photoshop", icon: "Ps", active: false },
    {
      name: "Pen and paper",
      icon: <i className="fas fa-pencil-ruler"></i>,
      active: false
    }
  ]);

  const [developmentTools, setDevelopmentTools] = useState([
    { name: "HTML", icon: <i className="fab fa-html5"></i>, active: true },
    { name: "CSS", icon: <i className="fab fa-css3-alt"></i>, active: false },
    { name: "React", icon: <i className="fab fa-react"></i>, active: false },
    {
      name: "JavaScript",
      icon: <i className="fab fa-js-square"></i>,
      active: false
    }
  ]);
  const [activeToolName, setActiveToolName] = useState("Sketch");

  const setActiveTool = (index) => {
    let tools;
    if (activeTab === "Design") {
      tools = [...designTools];
      tools.forEach((tool) => (tool.active = false));
      const clickedTool = { ...tools[index] };
      clickedTool.active = true;
      tools[index] = clickedTool;
      setDesignTools(tools);
    }
    if (activeTab === "Development") {
      tools = [...developmentTools];
      tools.forEach((tool) => (tool.active = false));
      const clickedTool = { ...tools[index] };
      clickedTool.active = true;
      tools[index] = clickedTool;
      setDevelopmentTools(tools);
    }

    setActiveToolName(tools[index].name);
  };

  const checkActiveTab = (tabName) => {
    if (activeTab === tabName) {
      return true;
    } else {
      return false;
    }
  };

  // Sets the name in the ToolArrowSelector below. This useEffect is needed so it also changes when changing tabs or using arrows
  useEffect(() => {
    if (activeTab === "Design") {
      const activeTool = designTools.find((tool) => tool.active === true);
      setActiveToolName(activeTool.name);
    }
    if (activeTab === "Development") {
      const activeTool = developmentTools.find((tool) => tool.active === true);
      setActiveToolName(activeTool.name);
    }
  }, [activeTab, designTools, developmentTools]);

  const clickLeftArrowHandler = () => {
    if (activeTab === "Design") {
      const activeTool = designTools.findIndex((tool) => tool.active === true);
      let newActiveTool;
      if (activeTool > 0) {
        newActiveTool = activeTool - 1;
      } else {
        newActiveTool = designTools.length - 1;
      }
      setActiveTool(newActiveTool);
    }
    if (activeTab === "Development") {
      const activeTool = developmentTools.findIndex(
        (tool) => tool.active === true
      );
      let newActiveTool;
      if (activeTool > 0) {
        newActiveTool = activeTool - 1;
      } else {
        newActiveTool = developmentTools.length - 1;
      }
      setActiveTool(newActiveTool);
    }
  };

  const clickRightArrowHandler = () => {
    if (activeTab === "Design") {
      const activeTool = designTools.findIndex((tool) => tool.active === true);
      let newActiveTool;
      if (activeTool < designTools.length - 1) {
        newActiveTool = activeTool + 1;
      } else {
        newActiveTool = 0;
      }
      setActiveTool(newActiveTool);
    }
    if (activeTab === "Development") {
      const activeTool = developmentTools.findIndex(
        (tool) => tool.active === true
      );
      let newActiveTool;
      if (activeTool < developmentTools.length - 1) {
        newActiveTool = activeTool + 1;
      } else {
        newActiveTool = 0;
      }
      setActiveTool(newActiveTool);
    }
  };

  return (
    <div className={classes.ToolSelector}>
      <ToolTab
        active={checkActiveTab("Design")}
        clicked={() => setActiveTab("Design")}
      >
        Design
      </ToolTab>
      <ToolTab
        active={checkActiveTab("Development")}
        clicked={() => setActiveTab("Development")}
      >
        Development
      </ToolTab>
      <Toolbar
        designTools={designTools}
        developmentTools={developmentTools}
        setActiveTool={(index) => setActiveTool(index)}
        activeTab={activeTab}
      />
      <ToolArrowSelector
        activeToolName={activeToolName}
        clickedLeft={() => clickLeftArrowHandler()}
        clickedRight={() => clickRightArrowHandler()}
      />
    </div>
  );
};

export default ToolSelector;
