import React from "react";
import classes from "./DndProjectSelector.module.scss";

import ArrowSelector from "../ArrowSelector/ArrowSelector";
// import DndProject from "./DndProjects/DndProject/DndProject";
import ProjectCard from "../ProjectCard/ProjectCard";

const DndProjectSelector = (props) => {
  const projects = props.dndProjects.map((project) => (
    <ProjectCard
      key={project.id}
      id={project.id}
      logo={project.logo}
      alt={project.alt}
      tagline={project.tagline}
      position={project.position}
      development={project.development}
      hidden={project.hidden}
      dndSection={true}
    />
  ));

  return (
    <div className={classes.DndProjectSelector}>
      <div className={classes.DndProjects}>{projects}</div>
      <div className={classes.ArrowSelector}>
        <ArrowSelector
          selectedProjectPath={props.selectedProjectPath}
          style={{ width: "100%" }}
          clickedLeft={props.clickedLeft}
          clickedRight={props.clickedRight}
        />
      </div>
    </div>
  );
};

export default DndProjectSelector;
