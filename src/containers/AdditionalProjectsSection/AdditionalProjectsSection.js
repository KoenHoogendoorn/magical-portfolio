import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./AdditionalProjectsSection.module.scss";

import TextBubbleAvatar from "../../components/TextBubbleAvatar/TextBubbleAvatar";
import GameMenu from "./GameMenu/GameMenu";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button";

const AdditionalProjectsSection = (props) => {
  const [gameState, setGameState] = useState("unplayed"); // options: unplayed/skipped/running/closed/won/lost

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
      <Link to={`/${project.name.replace(/ +/g, "-").toLowerCase()}`}>
        <Button priority={"primary"}>Read more</Button>
      </Link>
    </div>
  ));

  let AdditionalProjectClasses = `${classes.AdditionalProjects} `;

  if (gameState === ("unplayed" || "running")) {
    AdditionalProjectClasses += `${classes.Darkened} `;
  }

  let textBubbleContent = (
    <React.Fragment>
      <h2>Darn, a dragon is blockin the other projects I want to show you.</h2>
      <p>Help me fight the dragon to free them. </p>
    </React.Fragment>
  );

  let gameElement = (
    <GameMenu
      clickedPrimary={() => setGameState("running")}
      clickedSecondary={() => setGameState("skipped")}
    />
  );

  switch (gameState) {
    case "running":
      textBubbleContent = (
        <React.Fragment>
          <h2>Cast spells to defeat the dragon!</h2>
        </React.Fragment>
      );
      gameElement = (
        <div className={classes.GameContainer}>
          <div className={classes.GameHeader}>
            <div className={classes.TurnIndicator}>Placeholder</div>
            <i
              onClick={() => setGameState("unplayed")}
              className={`fas fa-times-circle ${classes.CloseIcon}`}
            ></i>
          </div>
        </div>
      );
      break;

    case "skipped":
      textBubbleContent = (
        <React.Fragment>
          <h2>Some more projects I worked on that I really like</h2>
          <p>
            Changed your mind on fighting the dragon? No worries, you can always{" "}
            <button
              className={classes.TextLinkButton}
              onClick={() => setGameState("unplayed")}
            >
              go back
            </button>
            .
          </p>
        </React.Fragment>
      );
      gameElement = null;
      break;
    default:
      break;
  }

  return (
    <React.Fragment>
      <TextBubbleAvatar avatarLeft={false}>
        {textBubbleContent}
      </TextBubbleAvatar>
      <div className={classes.AdditionalProjectsSection}>
        <div className={classes.GameSection}>{gameElement}</div>
        <div className={AdditionalProjectClasses}>{projects}</div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalProjects: state.additionalProjects
  };
};

export default connect(mapStateToProps)(AdditionalProjectsSection);
