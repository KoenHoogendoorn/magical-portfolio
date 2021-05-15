import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./AdditionalProjectsSection.module.scss";

import TextBubbleAvatar from "../../components/TextBubbleAvatar/TextBubbleAvatar";
import GameMenu from "../../components/GameComponents/GameMenu/GameMenu";
import GameContainer from "../../components/GameComponents/GameContainer/GameContainer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button";

const AdditionalProjectsSection = (props) => {
  const [gameState, setGameState] = useState("unplayed"); // options: unplayed/skipped/running/closed/won/lost

  const [dragonLives, setDragonLives] = useState(10);
  const [wizardLives, setWizardLives] = useState(5);

  const wizardAttacksInfo = {
    fireBall: {
      hitChance: 0.7,
      damage: 2
    },
    lighteningBolt: {
      hitChance: 0.9,
      damage: 1
    }
  };

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

  if (gameState === "unplayed" || gameState === "running") {
    AdditionalProjectClasses += `${classes.Darkened} `;
  }

  if (gameState === "running") {
    AdditionalProjectClasses += `${classes.ExtraSpace} `;
  }

  let textBubbleContent = (
    <React.Fragment>
      <h2>Darn, a dragon is blocking the other projects I want to show you.</h2>
      <p>Help me fight the dragon to free them. </p>
    </React.Fragment>
  );

  let gameElement = (
    <GameMenu
      clickedPrimary={() => setGameState("running")}
      clickedSecondary={() => setGameState("skipped")}
    />
  );

  const castFireBall = () => {
    const chance = Math.random();

    if (chance < wizardAttacksInfo.fireBall.hitChance) {
      //hits
      setDragonLives(dragonLives - wizardAttacksInfo.fireBall.damage);
      console.log("fireball hit");
    } else {
      console.log("fireball miss");
    }
  };

  const castLighteningBolt = () => {
    const chance = Math.random();

    if (chance < wizardAttacksInfo.lighteningBolt.hitChance) {
      //hits
      setDragonLives(dragonLives - wizardAttacksInfo.lighteningBolt.damage);
      console.log("lighteningBolt hit");
    } else {
      console.log("lighteningBolt miss");
    }
  };

  switch (gameState) {
    case "running":
      textBubbleContent = (
        <React.Fragment>
          <h2>Cast spells to defeat the dragon!</h2>
        </React.Fragment>
      );
      gameElement = (
        <GameContainer
          clickedCloseIcon={() => setGameState("unplayed")}
          dragonLives={dragonLives}
          wizardLives={wizardLives}
          wizardAttacksInfo={wizardAttacksInfo}
          clickedFireBall={() => castFireBall()}
          clickedLighteningBolt={() => castLighteningBolt()}
        />
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
