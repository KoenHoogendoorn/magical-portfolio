import React, { useState } from "react";
import classes from "./FeaturedProjects.module.scss";

import JelleKuiperImg from "../../assets/home/project-previews/JelleKuiper-selector.jpg";
import StefanoKeizersImg from "../../assets/home/project-previews/StefanoKeizers-selector.jpg";
import KinderImg from "../../assets/home/project-previews/Kinder-selector.jpg";

import FeaturedProject from "./FeaturedProject/FeaturedProject";
import FeaturedProjectsArrowSelector from "./FeaturedProjectsArrowSelector/FeaturedProjectsArrowSelector";

const FeaturedProjects = (props) => {
  const [activeProjectId, setActiveProjectId] = useState("id1");
  const [featuredProjects, setFeaturedProjects] = useState([
    {
      id: "id0",
      name: "Jelle Kuiper",
      tagline: "A theater producer and marriage officiant",
      image: JelleKuiperImg,
      imageAlt: "Jelle Kuiper officiating a wedding ceremony",
      position: "left",
      active: false
    },
    {
      id: "id1",
      name: "Stefano Keizers",
      tagline: "Comedian, TV host, writer and all-round artist",
      image: StefanoKeizersImg,
      imageAlt: "Stefano Keizers without shirt staring forward menacingly",
      position: "center",
      active: true
    },
    {
      id: "id2",
      name: "Kinder",
      tagline: "Improving the charitable sector and creating a Kinder world",
      image: KinderImg,
      imageAlt:
        "Koen Hoogendoorn wearing a Kinder shirt at a reception desk helping people",
      position: "right",
      active: false
    }
  ]);

  const setActiveProject = (index) => {
    let projects = [...featuredProjects];
    let clickedProject = { ...projects[index] };

    projects.forEach((project) => {
      project.active = false;
    });
    clickedProject.active = true;
    projects[index] = clickedProject;

    setActiveProjectId(clickedProject.id);
    setFeaturedProjects(projects);
  };

  const clickLeftArrowHandler = () => {
    const activeProjectIndex = featuredProjects.findIndex(
      (project) => project.active === true
    );
    let newActiveProjectIndex;

    if (activeProjectIndex > 0) {
      newActiveProjectIndex = activeProjectIndex - 1;
    } else {
      newActiveProjectIndex = featuredProjects.length - 1;
    }
    setActiveProject(newActiveProjectIndex);
  };

  const clickRightArrowHandler = () => {
    const activeProjectIndex = featuredProjects.findIndex(
      (project) => project.active === true
    );
    let newActiveProjectIndex;

    if (activeProjectIndex < featuredProjects.length - 1) {
      newActiveProjectIndex = activeProjectIndex + 1;
    } else {
      newActiveProjectIndex = 0;
    }
    setActiveProject(newActiveProjectIndex);
  };

  const projects = featuredProjects.map((project, index) => (
    <FeaturedProject
      key={project.id}
      id={project.id}
      clicked={() => setActiveProject(index)}
      featuredProjects={featuredProjects}
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
      <FeaturedProjectsArrowSelector
        clickedLeft={() => clickLeftArrowHandler()}
        clickedRight={() => clickRightArrowHandler()}
      />
    </div>
  );
};

export default FeaturedProjects;
