import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./AdditionalProjectsSection.module.scss";

import DragonCircle from "../../assets/home/dragon-game/DragonCircle.svg";

import TextBubbleAvatar from "../../components/TextBubbleAvatar/TextBubbleAvatar";
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

  return (
    <React.Fragment>
      <TextBubbleAvatar avatarLeft={false}>
        <h2>
          Darn, a dragon is blockin the other projects I want to show you.
        </h2>
        <p>Help me fight the dragon to free them. </p>
      </TextBubbleAvatar>
      <div className={classes.AdditionalProjectsSection}>
        <div className={classes.GameSection}>
          <div className={classes.GameMenu}>
            <img className={classes.DragonCircle} src={DragonCircle}></img>
            <div className={classes.MenuButtonsContainer}>
              <Button
                priority={"primary"}
                onClick={() => setGameState("running")}
              >
                Fight the dragon
              </Button>
              <Button
                priority={"secondary"}
                onClick={() => setGameState("skipped")}
              >
                Skip the fight
              </Button>
            </div>
          </div>
        </div>
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
