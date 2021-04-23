import React from "react";
import ReactMarkdown from "react-markdown";
import classes from "./ProjectPage.module.scss";

import MainWrapper from "../MainWrapper/MainWrapper";

const ProjectPage = (props) => {
  return (
    <MainWrapper>
      <div className={classes.ProjectPage}>
        <h1>{props.name}</h1>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </div>
    </MainWrapper>
  );
};

export default ProjectPage;
