import React from "react";
import classes from "./AdditionalProjectsSection.module.scss";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button";

const AdditionalProjectsSection = (props) => {
  const additionalProjects = [
    {
      id: "ap-fo",
      name: "Financial Offices",
      tagline: "A center for financial offices in Amsterdam",
      development: false
    },
    {
      id: "ap-st",
      name: "Streepgedicht",
      tagline: "A tool to create blackout poems by censoring the news",
      development: false
    },
    {
      id: "ap-th",
      name: "Titia Hoogendoorn",
      tagline: "An artistic content creator",
      development: true
    },
    {
      id: "ap-mk",
      name: "Martin Koolhoven",
      tagline: "A director that loves westerns",
      development: false
    }
  ];

  const projects = additionalProjects.map((project) => (
    <div className={classes.AdditionalProject}>
      <ProjectCard
        key={project.id}
        name={project.name}
        id={project.id}
        tagline={project.tagline}
        development={project.development}
        dndSection={false}
      />
      <Button>Read more</Button>
    </div>
  ));

  return (
    <div className={classes.AdditionalProjectsSection}>
      <div className={classes.AdditionalProjects}>{projects}</div>
    </div>
  );
};

export default AdditionalProjectsSection;
