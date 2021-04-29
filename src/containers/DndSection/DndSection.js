import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import classes from "./DndSection.module.scss";

import isometricMap from "../../assets/home/isometric-Illustration/isometric-selector.png";
import DndProjectSelector from "../../components/DndProjectSelector/DndProjectSelector";
import IsometricMapDots from "../../components/IsometricMapDots/IsometricMapDots";

const DndSection = (props) => {
  const [activeProjectId, setActiveProjectId] = useState("dnd-dq");
  const [selectedProjectPath, setSelectedProjectPath] = useState(
    "/dragons-quill"
  );
  const [dndProjectsCopy, setDndProjectsCopy] = useState([]);

  useEffect(() => {
    //create 2 copies before and after the actual content
    let dndProjects = [...props.dndProjects];

    let clonedProjectsBefore = [];
    let clonedProjectsAfter = [];

    //give them id's and add them to array
    dndProjects.forEach((project) => {
      const newIdBefore = project.id + "A";
      const beforeClone = { ...project };
      beforeClone.id = newIdBefore;
      beforeClone.position = "left";
      clonedProjectsBefore.push(beforeClone);

      const newIdAfter = project.id + "B";
      const afterClone = { ...project };
      afterClone.id = newIdAfter;
      afterClone.position = "right";
      clonedProjectsAfter.push(afterClone);
    });

    dndProjects = clonedProjectsBefore.concat(dndProjects, clonedProjectsAfter);

    //make first and last one hidden
    dndProjects[0].hidden = true;
    dndProjects[dndProjects.length - 1].hidden = true;

    //create a local state to not influence the reducer store
    setDndProjectsCopy(dndProjects);
  }, [props.dndProjects]);

  const clickedLeft = () => {
    let projects = [...dndProjectsCopy];

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

    const newActiveProject = projects[newActiveProjectIndex];
    setActiveProjectId(newActiveProject.id);
    setSelectedProjectPath(
      `/${newActiveProject.name
        .replace(/ +/g, "-")
        .replace(/'/g, "")
        .toLowerCase()}`
    );

    switch (activeProjectIndex) {
      case 2:
        projects[projects.length - 1].hidden = true;
        projects[projects.length - 1].position = "left";
        // --
        projects[activeProjectIndex - 2].hidden = false;
        break;
      case 1:
        projects[projects.length - 2].hidden = true;
        projects[projects.length - 2].position = "left";
        // --
        projects[projects.length - 1].hidden = false;
        break;
      case 0:
        projects[projects.length - 3].hidden = true;
        projects[projects.length - 3].position = "left";
        // --
        projects[projects.length - 2].hidden = false;
        break;

      default:
        projects[activeProjectIndex - 3].hidden = true;
        projects[activeProjectIndex - 3].position = "left";
        // --
        projects[activeProjectIndex - 2].hidden = false;
        break;
    }

    // sliding cards
    projects[activeProjectIndex].position = "right";
    projects[newActiveProjectIndex].position = "center";
    setDndProjectsCopy(projects);
  };

  const clickedRight = () => {
    let projects = [...dndProjectsCopy];

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

    const newActiveProject = projects[newActiveProjectIndex];
    setActiveProjectId(newActiveProject.id);
    setSelectedProjectPath(
      `/${newActiveProject.name
        .replace(/ +/g, "-")
        .replace(/'/g, "")
        .toLowerCase()}`
    );

    switch (activeProjectIndex) {
      case 3:
        projects[0].hidden = true;
        projects[0].position = "right";
        // --
        projects[activeProjectIndex + 2].hidden = false;
        break;
      case 4:
        projects[1].hidden = true;
        projects[1].position = "right";
        // --
        projects[0].hidden = false;
        break;
      case 5:
        projects[2].hidden = true;
        projects[2].position = "right";
        // --
        projects[1].hidden = false;
        break;

      default:
        projects[activeProjectIndex + 3].hidden = true;
        projects[activeProjectIndex + 3].position = "right";
        // --
        projects[activeProjectIndex + 2].hidden = false;
        break;
    }

    // sliding cards
    projects[activeProjectIndex].position = "left";
    projects[newActiveProjectIndex].position = "center";
    setDndProjectsCopy(projects);
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
        selectedProjectPath={selectedProjectPath}
        dndProjects={dndProjectsCopy}
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

export default connect(mapStateToProps)(DndSection);
