import React from "react";
import { connect } from "react-redux";
import classes from "./AdditionalProjectsSection.module.scss";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button";

const AdditionalProjectsSection = (props) => {
  const projects = props.additionalProjects.map((project) => (
    <div key={`div-${project.id}`} className={classes.AdditionalProject}>
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

const mapStateToProps = (state) => {
  return {
    additionalProjects: state.additionalProjects
  };
};

export default connect(mapStateToProps)(AdditionalProjectsSection);
