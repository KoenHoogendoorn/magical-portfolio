import React from "react";
import classes from "./FeaturedProject.module.scss";

import Tag from "../../Tag/Tag";

const FeaturedProject = (props) => {
  let FeaturedProjectClasses = `${classes.FeaturedProject} `;

  if (props.activeProjectId === "id0") {
    switch (props.id) {
      case "id2":
        FeaturedProjectClasses += `${classes.Left} `;
        break;
      case "id1":
        FeaturedProjectClasses += `${classes.Right} `;
        break;
      case "id0":
        FeaturedProjectClasses += `${classes.Center} `;
        break;
      default:
        break;
    }
  }

  if (props.activeProjectId === "id1") {
    switch (props.id) {
      case "id0":
        FeaturedProjectClasses += `${classes.Left} `;
        break;
      case "id2":
        FeaturedProjectClasses += `${classes.Right} `;
        break;
      case "id1":
        FeaturedProjectClasses += `${classes.Center} `;
        break;
      default:
        break;
    }
  }

  if (props.activeProjectId === "id2") {
    switch (props.id) {
      case "id1":
        FeaturedProjectClasses += `${classes.Left} `;
        break;
      case "id0":
        FeaturedProjectClasses += `${classes.Right} `;
        break;
      case "id2":
        FeaturedProjectClasses += `${classes.Center} `;
        break;
      default:
        break;
    }
  }

  if (props.activeProjectId !== props.id) {
    FeaturedProjectClasses += `${classes.Inactive} `;
  }

  return (
    <div
      className={FeaturedProjectClasses}
      id={props.id}
      onClick={props.clicked}
    >
      <div className={classes.ProjectInformationContainer}>
        <h3>{props.name}</h3>
        <p>{props.tagline}</p>
        <Tag bgLight={true}>Design</Tag>
      </div>
      <img src={props.image} alt={props.imageAlt}></img>
    </div>
  );
};

export default FeaturedProject;
