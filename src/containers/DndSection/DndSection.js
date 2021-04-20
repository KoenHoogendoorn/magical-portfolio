import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actionIndex";

import classes from "./DndSection.module.scss";

import isometricMap from "../../assets/home/isometric-Illustration/isometric-selector.png";

import DndProjectSelector from "../../components/DndProjectSelector/DndProjectSelector";
import IsometricMapDots from "../../components/IsometricMapDots/IsometricMapDots";

const DndSection = (props) => {
  const [activeProjectId, setActiveProjectId] = useState("dnd-dq");

  const { cloneDndProjectsHandler } = props;

  useEffect(() => {
    cloneDndProjectsHandler();
  }, [cloneDndProjectsHandler]);

  const clickedLeft = () => {
    let projects = [...props.dndProjects];

    const activeProjectIndex = projects.findIndex(
      (project) => project.id === activeProjectId
    );

    // setting new active id
    let newActiveProjectIndex;
    if (activeProjectIndex === 0) {
      newActiveProjectIndex = projects.length - 1;
    } else {
      newActiveProjectIndex = activeProjectIndex - 1;
    }
    const newActiveId = projects[newActiveProjectIndex].id;
    setActiveProjectId(newActiveId);

    props.clickedLeftDndHandler(activeProjectIndex, newActiveProjectIndex);
  };

  const clickedRight = () => {
    let projects = [...props.dndProjects];

    const activeProjectIndex = projects.findIndex(
      (project) => project.id === activeProjectId
    );

    // setting new active id
    let newActiveProjectIndex;
    if (activeProjectIndex === projects.length - 1) {
      newActiveProjectIndex = 0;
    } else {
      newActiveProjectIndex = activeProjectIndex + 1;
    }
    const newActiveId = projects[newActiveProjectIndex].id;
    setActiveProjectId(newActiveId);

    props.clickedRightDndHandler(activeProjectIndex, newActiveProjectIndex);
  };

  return (
    <div className={classes.DndSection}>
      <IsometricMapDots left={true} activeProjectId={activeProjectId} />
      <IsometricMapDots left={false} activeProjectId={activeProjectId} />
      <img
        className={classes.IsometricMapImage}
        src={isometricMap}
        alt="Isometric illustration with glowing dot."
      />
      <DndProjectSelector
        dndProjects={props.dndProjects}
        clickedLeft={() => clickedLeft()}
        clickedRight={() => clickedRight()}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dndProjects: state.dndProjects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cloneDndProjectsHandler: () => dispatch(actions.cloneDndProjects()),
    clickedLeftDndHandler: (activeProjectIndex, newActiveProjectIndex) =>
      dispatch(
        actions.clickedLeftDnd(activeProjectIndex, newActiveProjectIndex)
      ),
    clickedRightDndHandler: (activeProjectIndex, newActiveProjectIndex) =>
      dispatch(
        actions.clickedRightDnd(activeProjectIndex, newActiveProjectIndex)
      )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DndSection);
