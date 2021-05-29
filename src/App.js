import React, { useState, useEffect, Suspense } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import classes from "./App.module.scss";

import LoadingVideo from "./assets/home/Loading.mp4";
import NavigationBar from "./containers/NavigationBar/NavigationBar";

const DetailPage = React.lazy(() =>
  import("./components/DetailPage/DetailPage")
);

const HomePage = React.lazy(() => import("./containers/HomePage/HomePage"));

function App(props) {
  const [projectsTexts, setProjectsTexts] = useState(null);

  // get projects markdown content
  const importAll = (r) => r.keys().map(r);
  const markdownFiles = importAll(
    require.context("./assets/ProjectsContent", false, /\.md$/)
  );

  useEffect(() => {
    if (projectsTexts === null) {
      const fetchFiles = async () => {
        const files = await Promise.all(
          markdownFiles.map((file) =>
            fetch(file.default).then((res) => res.text())
          )
        ).catch((err) => console.error(err));

        setProjectsTexts(files);
      };
      fetchFiles();
    }
  }, [markdownFiles, projectsTexts]);

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

  const loadingVideo = (
    <video className={classes.LoadingGif} autoplay="autoplay" loop="loop">
      <source src={LoadingVideo} type="video/mp4" />
    </video>
  );

  if (projectsTexts !== null) {
    content = (
      <div className="App">
        <NavigationBar />
        <Suspense fallback={loadingVideo}>
          <Switch>
            {projects}
            <Route path="/" exact component={HomePage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  } else {
    content = <div className="App">{loadingVideo}</div>;
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
