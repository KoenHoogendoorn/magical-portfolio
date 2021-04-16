import React from "react";
import classes from "./FeaturedProject.module.scss";

import Tag from "../../Tag/Tag";

const FeaturedProject = (props) => {
  let FeaturedProjectClasses = `${classes.FeaturedProject} `;

  if (props.activeProjectId === "fp0") {
    switch (props.id) {
      case "fp2":
        FeaturedProjectClasses += `${classes.Left} `;
        break;
      case "fp1":
        FeaturedProjectClasses += `${classes.Right} `;
        break;
      case "fp0":
        FeaturedProjectClasses += `${classes.Center} `;
        break;
      default:
        break;
    }
  }

  if (props.activeProjectId === "fp1") {
    switch (props.id) {
      case "fp0":
        FeaturedProjectClasses += `${classes.Left} `;
        break;
      case "fp2":
        FeaturedProjectClasses += `${classes.Right} `;
        break;
      case "fp1":
        FeaturedProjectClasses += `${classes.Center} `;
        break;
      default:
        break;
    }
  }

  if (props.activeProjectId === "fp2") {
    switch (props.id) {
      case "fp1":
        FeaturedProjectClasses += `${classes.Left} `;
        break;
      case "fp0":
        FeaturedProjectClasses += `${classes.Right} `;
        break;
      case "fp2":
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
