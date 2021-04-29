import React from "react";
import classes from "./FeaturedProject.module.scss";

import Tag from "../../Tag/Tag";

const FeaturedProject = (props) => {
  let FeaturedProjectClasses = `${classes.FeaturedProject} `;

  if (props.activeProjectId === "fp-jk") {
    switch (props.id) {
      case "fp-ki":
        FeaturedProjectClasses += `${classes.Left} `;
        break;
      case "fp-sk":
        FeaturedProjectClasses += `${classes.Right} `;
        break;
      case "fp-jk":
        FeaturedProjectClasses += `${classes.Center} `;
        break;
      default:
        break;
    }
  }

  if (props.activeProjectId === "fp-sk") {
    switch (props.id) {
      case "fp-jk":
        FeaturedProjectClasses += `${classes.Left} `;
        break;
      case "fp-ki":
        FeaturedProjectClasses += `${classes.Right} `;
        break;
      case "fp-sk":
        FeaturedProjectClasses += `${classes.Center} `;
        break;
      default:
        break;
    }
  }

  if (props.activeProjectId === "fp-ki") {
    switch (props.id) {
      case "fp-sk":
        FeaturedProjectClasses += `${classes.Left} `;
        break;
      case "fp-jk":
        FeaturedProjectClasses += `${classes.Right} `;
        break;
      case "fp-ki":
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
