import React, { useState } from "react";
import classes from "./ToolkitContainer.module.scss";

import BrushIcon from "../../assets/home/tab-icons/brushIcon.svg";
import BrushIconActive from "../../assets/home/tab-icons/brushIconYellow.svg";
import CodeIcon from "../../assets/home/tab-icons/codeIcon.svg";
import CodeIconActive from "../../assets/home/tab-icons/codeIconYellow.svg";

import ToolList from "./ToolList/ToolList";
import ToolTab from "./ToolTab/ToolTab";

const ToolkitContainer = (props) => {
  const [activeTab, setActiveTab] = useState("Design");
  const [designTools, setDesignTools] = useState([
    { name: "Sketch", icon: <i className="fab fa-sketch"></i> },
    { name: "Figma", icon: <i className="fab fa-figma"></i> },
    { name: "Illustrator", icon: "Ai" },
    { name: "Photoshop", icon: "Ps" },
    {
      name: "Pen & paper",
      icon: <i className="fas fa-pencil-ruler"></i>
    }
  ]);

  const [developmentTools, setDevelopmentTools] = useState([
    { name: "HTML", icon: <i className="fab fa-html5"></i> },
    { name: "CSS", icon: <i className="fab fa-css3-alt"></i> },
    { name: "React", icon: <i className="fab fa-react"></i> },
    {
      name: "JavaScript",
      icon: <i className="fab fa-js-square"></i>
    }
  ]);

  const tools = activeTab === "Design" ? designTools : developmentTools;

  const checkActiveTab = (tabName) => {
    if (activeTab === tabName) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={classes.ToolkitContainer}>
      <div className={classes.ToolKit}>
        <h3>
          <span className={classes.Subheader}>TOOLKIT</span>
          {activeTab}
        </h3>
        <ToolList tools={tools} />
      </div>
      <ToolTab
        active={checkActiveTab("Design")}
        clicked={() => setActiveTab("Design")}
        icon={checkActiveTab("Design") ? BrushIconActive : BrushIcon}
      >
        Design
      </ToolTab>
      <ToolTab
        active={checkActiveTab("Development")}
        clicked={() => setActiveTab("Development")}
        icon={checkActiveTab("Development") ? CodeIconActive : CodeIcon}
      >
        Development
      </ToolTab>
    </div>
  );
};

export default ToolkitContainer;
