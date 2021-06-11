import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../store/actions/actionIndex";
import classes from "./FeaturedProjects.module.scss";

import FeaturedProject from "./FeaturedProject/FeaturedProject";
import ArrowSelector from "../ArrowSelector/ArrowSelector";

const FeaturedProjects = (props) => {
  const [activeProjectId, setActiveProjectId] = useState("fp-ki");
  const [selectedProjectPath, setSelectedProjectPath] = useState("/kinder");

  const history = useHistory();

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

  // ---- mouse/touch gestures ---- //
  let x0 = null;

  const lock = (e) => {
    //locks on to start of tap
    x0 = e.changedTouches[0].clientX;
  };

  const move = (e) => {
    e.preventDefault();
    //gets difference and see's if x axis increased or decreased
    let dx = e.changedTouches[0].clientX - x0;
    let s = Math.sign(dx);

    if (s === 0 && e.currentTarget.id === activeProjectId) {
      history.push(selectedProjectPath);
    } else if (s === -1) {
      clickRightArrowHandler();
    } else if (s === 1) {
      clickLeftArrowHandler();
    }
  };

  const projects = props.featuredProjects.map((project, index) => (
    <FeaturedProject
      key={project.id}
      id={project.id}
      clicked={() => setActiveProject(index)}
      selectedProjectPath={selectedProjectPath}
      name={project.name}
      tagline={project.tagline}
      image={project.image}
      position={project.position}
      active={project.active}
      activeProjectId={activeProjectId}
      featuredProjects={props.featuredProjects}
      onTouchStart={lock}
      onTouchEnd={move}
    />
  ));

  return (
    <div className={classes.FeaturedProjects}>
      <div className={classes.PreviewImages}>{projects}</div>
      <ArrowSelector
        featuredProjects={true}
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
