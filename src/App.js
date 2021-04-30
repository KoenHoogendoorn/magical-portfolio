import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import classes from "./App.module.scss";

import HomePage from "./containers/HomePage/HomePage";
import DetailPage from "./components/DetailPage/DetailPage";
import LoadingGif from "./assets/home/Loading.gif";
import NavigationBar from "./containers/NavigationBar/NavigationBar";

function App(props) {
  const [projectsTexts, setProjectsTexts] = useState(null);

  // get projects markdown content
  const importAll = (r) => r.keys().map(r);
  const markdownFiles = importAll(
    require.context("./assets/ProjectsContent", false, /\.md$/)
  );

  useEffect(() => {
    const fetchFiles = async () => {
      const files = await Promise.all(
        markdownFiles.map((file) =>
          fetch(file.default).then((res) => res.text())
        )
      ).catch((err) => console.error(err));

      setProjectsTexts(files);
    };
    fetchFiles();
  }, [markdownFiles]);

  // get projects metadata
  const fprojects = [...props.featuredProjects];
  const dprojects = [...props.dndProjects];
  const aprojects = [...props.additionalProjects];
  const pages = [...props.pages];

  let allProjects = fprojects.concat(dprojects.concat(aprojects.concat(pages)));
  let projects;

  if (projectsTexts !== null) {
    allProjects.forEach(
      (project, index) => (project.content = projectsTexts[index])
    );

    projects = allProjects.map((project) => (
      <Route
        key={`R-${project.id}`}
        path={`/${project.name
          .replace(/ +/g, "-")
          .replace(/'/g, "")
          .toLowerCase()}`}
        exact
      >
        <DetailPage
          key={project.id}
          id={project.id}
          name={project.name}
          tagline={project.tagline}
          development={project.development}
          content={project.content}
        />
      </Route>
    ));
  }

  let content;

  if (projectsTexts !== null) {
    content = (
      <div className="App">
        <NavigationBar />
        <Switch>
          {projects}
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  } else {
    content = (
      <div className="App">
        <img
          className={classes.LoadingGif}
          src={LoadingGif}
          alt={"Loading..."}
        ></img>
      </div>
    );
  }

  return content;
}

const mapStateToProps = (state) => {
  return {
    featuredProjects: state.featuredProjects,
    dndProjects: state.dndProjects,
    additionalProjects: state.additionalProjects,
    pages: state.pages
  };
};

export default withRouter(connect(mapStateToProps)(App));
