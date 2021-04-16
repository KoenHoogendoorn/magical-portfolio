import React from "react";
import classes from "./DndProjects.module.scss";

import DndProject from "./DndProject/DndProject";

const DndProjects = (props) => {
  const projects = props.dndProjects.map((project) => (
    <DndProject
      key={project.id}
      id={project.id}
      logo={project.logo}
      alt={project.alt}
      tagline={project.tagline}
      position={project.position}
      activeProjectId={props.activeProjectId}
    />
  ));

  return <div className={classes.DndProjects}>{projects}</div>;
};

export default DndProjects;
