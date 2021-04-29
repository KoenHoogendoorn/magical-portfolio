import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actionIndex";
import classes from "./FeaturedProjects.module.scss";

import FeaturedProject from "./FeaturedProject/FeaturedProject";
import ArrowSelector from "../ArrowSelector/ArrowSelector";

const FeaturedProjects = (props) => {
  const [activeProjectId, setActiveProjectId] = useState("fp-sk");
  const [selectedProjectPath, setSelectedProjectPath] = useState(
    "/stefano-keizers"
  );

  const setActiveProject = (index) => {
    props.setActiveFeaturedProjectHandler(index);
    const clickedProject = { ...props.featuredProjects[index] };
    setActiveProjectId(clickedProject.id);
    setSelectedProjectPath(
      `/${clickedProject.name.replace(/ +/g, "-").toLowerCase()}`
    );
  };

  const clickLeftArrowHandler = () => {
    const activeProjectIndex = props.featuredProjects.findIndex(
      (project) => project.active === true
    );
    let newActiveProjectIndex;

    if (activeProjectIndex > 0) {
      newActiveProjectIndex = activeProjectIndex - 1;
    } else {
      newActiveProjectIndex = props.featuredProjects.length - 1;
    }
    setActiveProject(newActiveProjectIndex);
  };

  const clickRightArrowHandler = () => {
    const activeProjectIndex = props.featuredProjects.findIndex(
      (project) => project.active === true
    );
    let newActiveProjectIndex;

    if (activeProjectIndex < props.featuredProjects.length - 1) {
      newActiveProjectIndex = activeProjectIndex + 1;
    } else {
      newActiveProjectIndex = 0;
    }
    setActiveProject(newActiveProjectIndex);
  };

  const projects = props.featuredProjects.map((project, index) => (
    <FeaturedProject
      key={project.id}
      id={project.id}
      clicked={() => setActiveProject(index)}
      name={project.name}
      tagline={project.tagline}
      image={project.image}
      position={project.position}
      active={project.active}
      activeProjectId={activeProjectId}
    />
  ));

  return (
    <div className={classes.FeaturedProjects}>
      <div className={classes.PreviewImages}>{projects}</div>
      <ArrowSelector
        style={{ width: "33%" }}
        selectedProjectPath={selectedProjectPath}
        clickedLeft={() => clickLeftArrowHandler()}
        clickedRight={() => clickRightArrowHandler()}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    featuredProjects: state.featuredProjects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveFeaturedProjectHandler: (index) =>
      dispatch(actions.setActiveFeaturedProject(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProjects);
