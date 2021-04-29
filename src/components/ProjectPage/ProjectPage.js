import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import classes from "./ProjectPage.module.scss";

import Button from "../Button/Button";
import Tag from "../Tag/Tag";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const ProjectPage = (props) => {
  const fprojects = [...props.featuredProjects];
  const dprojects = [...props.dndProjects];
  const aprojects = [...props.additionalProjects];

  let allProjects = fprojects.concat(dprojects.concat(aprojects));
  const links = allProjects.map((project) => (
    <React.Fragment key={`NL-${project.id}`}>
      <NavLink
        className={classes.ProjectLink}
        activeClassName={classes.ActiveProjectLink}
        to={`/${project.name.replace(/ +/g, "-").toLowerCase()}`}
      >
        {project.name}
      </NavLink>
      <span className={classes.Slash}> / </span>
    </React.Fragment>
  ));

  return (
    <div className={classes.ProjectPage}>
      <ScrollToTopOnMount />
      <Link to="/">
        <Button priority={"secondary"}>
          <i className="fas fa-arrow-left"></i> Home
        </Button>
      </Link>
      <div className={classes.ProjectContentContainer}>
        <h1>{props.name}</h1>
        <p>{props.tagline}</p>
        <div className={classes.Tags}>
          <Tag bgLight={true}>Design</Tag>
          {props.development ? <Tag bgLight={true}>Development</Tag> : null}
        </div>
        <ReactMarkdown className={classes.ProjectContent}>
          {props.content}
        </ReactMarkdown>
      </div>
      <nav>Projects: {links}</nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    featuredProjects: state.featuredProjects,
    dndProjects: state.dndProjects,
    additionalProjects: state.additionalProjects
  };
};

export default connect(mapStateToProps)(ProjectPage);
