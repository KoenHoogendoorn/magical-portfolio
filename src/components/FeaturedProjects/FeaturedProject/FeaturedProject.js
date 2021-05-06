import React from "react";
import classes from "./FeaturedProject.module.scss";

import FeaturedProjectsSelector from "../../../assets/home/FeaturedProjectsSelector.svg";
import Tag from "../../Tag/Tag";

const FeaturedProject = (props) => {
  const FeaturedProjects = [...props.featuredProjects];

  let FeaturedProjectClasses = `${classes.FeaturedProject} `;

  if (props.activeProjectId === FeaturedProjects[0].id) {
    switch (props.id) {
      case FeaturedProjects[2].id:
        FeaturedProjectClasses += `${classes.Left} `;
        break;
      case FeaturedProjects[1].id:
        FeaturedProjectClasses += `${classes.Right} `;
        break;
      case FeaturedProjects[0].id:
        FeaturedProjectClasses += `${classes.Center} `;
        break;
      default:
        break;
    }
  }

  if (props.activeProjectId === FeaturedProjects[1].id) {
    switch (props.id) {
      case FeaturedProjects[0].id:
        FeaturedProjectClasses += `${classes.Left} `;
        break;
      case FeaturedProjects[2].id:
        FeaturedProjectClasses += `${classes.Right} `;
        break;
      case FeaturedProjects[1].id:
        FeaturedProjectClasses += `${classes.Center} `;
        break;
      default:
        break;
    }
  }

  if (props.activeProjectId === FeaturedProjects[2].id) {
    switch (props.id) {
      case FeaturedProjects[1].id:
        FeaturedProjectClasses += `${classes.Left} `;
        break;
      case FeaturedProjects[0].id:
        FeaturedProjectClasses += `${classes.Right} `;
        break;
      case FeaturedProjects[2].id:
        FeaturedProjectClasses += `${classes.Center} `;
        break;
      default:
        break;
    }
  }

  let svgClass = `${classes.SelectorSvg} ${classes.ActiveSvg} `;

  if (props.activeProjectId !== props.id) {
    FeaturedProjectClasses += `${classes.Inactive} `;
    svgClass += `${classes.InactiveSvg} `;
  }

  return (
    <div
      id={props.id}
      className={FeaturedProjectClasses}
      onClick={props.clicked}
    >
      <div className={classes.ProjectInformationContainer}>
        <h3>{props.name}</h3>
        <p>{props.tagline}</p>
        <Tag bgLight={true}>Design</Tag>
      </div>
      <img
        src={props.image}
        alt={props.imageAlt}
        className={classes.FeaturedProjectImage}
      ></img>
      <img
        src={FeaturedProjectsSelector}
        className={svgClass}
        alt="Selector around a project"
      />
    </div>
  );
};

export default FeaturedProject;
