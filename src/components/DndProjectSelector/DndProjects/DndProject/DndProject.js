import React from "react";
import classes from "./DndProject.module.scss";

import Tag from "../../../Tag/Tag";

const DndProject = (props) => {
  let dndProjectClasses = `${classes.DndProject} `;

  switch (props.position) {
    case "left":
      dndProjectClasses += `${classes.Left} `;
      break;

    case "right":
      dndProjectClasses += `${classes.Right} `;
      break;

    case "center":
      dndProjectClasses += `${classes.Center} `;
      break;

    default:
      break;
  }

  if (props.hidden) {
    dndProjectClasses += `${classes.Hidden} `;
  }

  return (
    <div id={props.id} className={dndProjectClasses}>
      <img src={props.logo} alt={props.alt} />
      <p>{props.tagline}</p>
      <div className={classes.Tags}>
        <Tag bgLight={false}>Design</Tag>
        {props.development ? <Tag bgLight={false}>Development</Tag> : null}
      </div>
    </div>
  );
};

export default DndProject;
