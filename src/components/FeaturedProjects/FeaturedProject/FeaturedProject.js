import React from "react";
import classes from "./FeaturedProject.module.scss";
import { Link } from "react-router-dom";

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
    <Link
      id={props.id}
      className={FeaturedProjectClasses}
      to={
        props.id === props.activeProjectId ? props.selectedProjectPath : false
      }
      onClick={props.id === props.activeProjectId ? false : props.clicked}
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
      />

      <svg
        viewBox="0 0 100 175"
        width="264px"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgClass}
      >
        <path
          d="M83,2 
        h3
        a8,8 0 0 1 9,9 
        v3
      m0,141.8 
        v3 
        a8,8 0 0 1 -9,9 
        h-3 
      m-69.8,0 
        h-3 
        a8,8 0 0 1 -9,-9 
        v-3 
      m0,-141.8 
        v-3 
        a8,8 0 0 1 9,-9 
        h3"
          fill="none"
          stroke="#fffce8"
          strokeWidth="4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </Link>
  );
};

export default FeaturedProject;
