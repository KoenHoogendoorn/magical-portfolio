import React, { useState, useEffect } from "react";
import classes from "./DndSection.module.scss";

import DragonsQuillLogo from "../../assets/home/dnd-projects-logos/DragonsQuillLogo.png";
import HitpointCalculatorLogo from "../../assets/home/dnd-projects-logos/HitpointCalculatorLogo.png";
import isometricMap from "../../assets/home/isometric-Illustration/isometric-selector.png";

import DndProjectSelector from "../../components/DndProjectSelector/DndProjectSelector";
import IsometricMapDots from "../../components/IsometricMapDots/IsometricMapDots";

const DndSection = (props) => {
  const [activeProjectId, setActiveProjectId] = useState("dnd-dq");
  const [dndProjects, setDndProjects] = useState([
    {
      id: "dnd-dq",
      name: "Dragon's Quill",
      logo: DragonsQuillLogo,
      alt: "Dragon's Quill logo",
      tagline: "Helps people write structured RPG adventures",
      position: "center",
      development: true,
      hidden: false
    },
    {
      id: "dnd-hc",
      name: "Hitpoint Calculator",
      logo: HitpointCalculatorLogo,
      alt: "Hitpoint Calculator logo",
      tagline:
        "Helps people who suck at math to track hitpoints in D&D battles",
      position: "right",
      development: false,
      hidden: false
    }
  ]);

  useEffect(() => {
    let projects = [...dndProjects];

    let clonedProjectsBefore = [];
    let clonedProjectsAfter = [];

    projects.forEach((project) => {
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

    projects = clonedProjectsBefore.concat(projects, clonedProjectsAfter);
    //eerste en laatste onzichtbaar maken
    projects[0].hidden = true;
    projects[projects.length - 1].hidden = true;

    setDndProjects(projects);
  }, []);

  const clickedLeft = () => {
    let projects = [...dndProjects];

    const currentActiveIdIndex = projects.findIndex(
      (project) => project.id === activeProjectId
    );

    switch (currentActiveIdIndex) {
      case 3:
        projects[0].hidden = true;
        projects[0].position = "right";
        // --
        projects[currentActiveIdIndex + 2].hidden = false;
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
        projects[currentActiveIdIndex + 3].hidden = true;
        projects[currentActiveIdIndex + 3].position = "right";
        // --
        projects[currentActiveIdIndex + 2].hidden = false;
        break;
    }

    // setting new id
    let newActiveIdIndex;
    if (currentActiveIdIndex === projects.length - 1) {
      newActiveIdIndex = 0;
    } else {
      newActiveIdIndex = currentActiveIdIndex + 1;
    }
    const newActiveId = projects[newActiveIdIndex].id;
    setActiveProjectId(newActiveId);

    // sliding cards
    projects[currentActiveIdIndex].position = "left";
    projects[newActiveIdIndex].position = "center";
    setDndProjects(projects);
  };

  const clickedRight = () => {
    let projects = [...dndProjects];

    const currentActiveIdIndex = projects.findIndex(
      (project) => project.id === activeProjectId
    );

    // cant clone & unshift because transform doesn't work  if indexes change
    // active index - 3 -> change position to left and make hidden
    // active index - 2 -> make visible
    switch (currentActiveIdIndex) {
      case 2:
        projects[projects.length - 1].hidden = true;
        projects[projects.length - 1].position = "left";
        // --
        projects[currentActiveIdIndex - 2].hidden = false;
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
        projects[currentActiveIdIndex - 3].hidden = true;
        projects[currentActiveIdIndex - 3].position = "left";
        // --
        projects[currentActiveIdIndex - 2].hidden = false;
        break;
    }

    // setting new id
    let newActiveIdIndex;
    if (currentActiveIdIndex === 0) {
      newActiveIdIndex = projects.length - 1;
    } else {
      newActiveIdIndex = currentActiveIdIndex - 1;
    }
    const newActiveId = projects[newActiveIdIndex].id;
    setActiveProjectId(newActiveId);

    // sliding cards
    projects[currentActiveIdIndex].position = "right";
    projects[newActiveIdIndex].position = "center";
    setDndProjects(projects);
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
        dndProjects={dndProjects}
        clickedLeft={() => clickedLeft()}
        clickedRight={() => clickedRight()}
      />
    </div>
  );
};

export default DndSection;
