import React from "react";
import classes from "./ProjectCard.module.scss";

import Tag from "../Tag/Tag";

const ProjectCard = (props) => {
  let projectCardClasses = `${classes.ProjectCard} `;

  //Start Dnd section classes
  if (props.dndSection) {
    projectCardClasses += `${classes.DndProjectCard} `;

    switch (props.position) {
      case "left":
        projectCardClasses += `${classes.Left} `;
        break;

      case "right":
        projectCardClasses += `${classes.Right} `;
        break;

      case "center":
        projectCardClasses += `${classes.Center} `;
        break;

      default:
        break;
    }

    if (props.hidden) {
      projectCardClasses += `${classes.Hidden} `;
    }
  } else {
  }
  //End Dnd section classes

  const title = props.dndSection ? (
    <img className={classes.DndLogo} src={props.logo} alt={props.alt} />
  ) : (
    <h3>{props.name}</h3>
  );

  return (
    <div id={props.id} className={projectCardClasses}>
      {title}
      <p>{props.tagline}</p>
      <div className={classes.Tags}>
        <Tag bgLight={false}>Design</Tag>
        {props.development ? <Tag bgLight={false}>Development</Tag> : null}
      </div>
    </div>
  );
};

export default ProjectCard;
