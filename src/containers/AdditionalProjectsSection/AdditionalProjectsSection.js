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
  const initialDragonLives = 10;
  const initialWizardLives = 5;

  const [gameState, setGameState] = useState("unplayed"); // options: unplayed/skipped/running/won/lost/played
  const [gameEvent, setGameEvent] = useState("WizardTurn"); // options: WizardTurn/WizardAttackAnimation/DragonTurn/DragonAttackAnimation
  const [dragonLives, setDragonLives] = useState(initialDragonLives);
  const [wizardLives, setWizardLives] = useState(initialWizardLives);
  const [fireBallMissAnimation, setFireBallMissAnimation] = useState(false);
  const [fireBallAnimation, setFireBallAnimation] = useState(false);
  const [lightningBoltAnimation, setLightningBoltAnimation] = useState(false);
  const [lightningBoltMissAnimation, setLightningBoltMissAnimation] =
    useState(false);

  const wizardAttacksInfo = {
    fireBall: {
      hitChance: 0.7,
      damage: 2
    },
    lightningBolt: {
      hitChance: 0.9,
      damage: 1
    }
  };

  const dragonAttacksInfo = {
    fireBreath: {
      hitChance: 0.4,
      damage: 2,
      attackChance: 0.3
    },
    claw: {
      hitChance: 0.5,
      damage: 1,
      attackChance: 0.7
    }
  };

  const restartGameHandler = () => {
    setGameState("unplayed");
    setDragonLives(initialDragonLives);
    setWizardLives(initialWizardLives);
  };

  const gameContainer = (
    <GameContainer
      clickedCloseIcon={() => setGameState("unplayed")}
      dragonLives={dragonLives}
      wizardLives={wizardLives}
      wizardAttacksInfo={wizardAttacksInfo}
      clickedFireBall={() => castSpell("fireBall")}
      clickedlightningBolt={() => castSpell("lightningBolt")}
      gameState={gameState}
      gameEvent={gameEvent}
      clickedContinue={() => setGameState("played")}
      clickedAgain={() => restartGameHandler()}
      clickedSkip={() => setGameState("skipped")}
      fireBallCasted={fireBallAnimation}
      fireBallMissed={fireBallMissAnimation}
      lightningBoltCasted={lightningBoltAnimation}
      lightningBoltMissed={lightningBoltMissAnimation}
    />
  );

  // DRAGON ATTACKS

  const dragonAttack = () => {
    setGameEvent("DragonTurn");
    const attackChance = Math.random();
    let currentAttackType;
    if (attackChance < dragonAttacksInfo.fireBreath.attackChance) {
      currentAttackType = "fireBreath";
    } else {
      currentAttackType = "claw";
    }

    const hitChance = Math.random();
    const currentAttack = dragonAttacksInfo[currentAttackType];
    if (hitChance < currentAttack.hitChance) {
      //hits
      if (wizardLives <= currentAttack.damage) {
        //win
        setGameState("lost");
      } else {
        setWizardLives(wizardLives - currentAttack.damage);
        console.log(currentAttackType + " hit");
      }
    } else {
      //miss
      console.log(currentAttackType + " miss");
    }
    setGameEvent("WizardTurn");
  };

  // END DRAGON ATTACKS

  // WIZARD SPELLS

  const spellDamageHandler = (spell, spellName) => {
    if (dragonLives <= spell.damage) {
      //win
      setGameState("won");
    } else {
      setDragonLives(dragonLives - spell.damage);
      console.log(spellName + " hit");
    }
  };

  const fireBallMissHandler = () => {
    setFireBallAnimation(true);
    setFireBallMissAnimation(true);

    setGameEvent("WizardAttackAnimation");

    setTimeout(() => {
      setFireBallAnimation(false);
      setFireBallMissAnimation(false);
      dragonAttack();
    }, 900);
  };

  const fireBallHitHandler = (spell, spellName) => {
    setFireBallAnimation(true);
    setGameEvent("WizardAttackAnimation");

    setTimeout(() => {
      setFireBallAnimation(false);
      spellDamageHandler(spell, spellName);
      dragonAttack();
    }, 900);
  };

  const lightningBoltMissHandler = () => {
    setLightningBoltAnimation(true);
    setLightningBoltMissAnimation(true);

    setGameEvent("WizardAttackAnimation");

    setTimeout(() => {
      setLightningBoltAnimation(false);
      setLightningBoltMissAnimation(false);
      dragonAttack();
    }, 900);
  };

  const lightningboltHandler = (spell, spellName) => {
    setLightningBoltAnimation(true);
    setGameEvent("WizardAttackAnimation");

    setTimeout(() => {
      setLightningBoltAnimation(false);
      spellDamageHandler(spell, spellName);
      dragonAttack();
    }, 900);
  };

  const castSpell = (spellName) => {
    const chance = Math.random();
    const spell = wizardAttacksInfo[spellName];
    if (chance < spell.hitChance) {
      //hits
      spellName === "fireBall"
        ? fireBallHitHandler(spell, spellName)
        : lightningboltHandler(spell, spellName);
    } else {
      //miss

      spellName === "fireBall"
        ? fireBallMissHandler()
        : lightningBoltMissHandler();
      console.log(spellName + " miss");
    }
  };

  // END WIZARD SPELLS

  let textBubbleContent = (
    //unplayed
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

  switch (gameState) {
    case "running":
      textBubbleContent = (
        <React.Fragment>
          <h2>Cast spells to defeat the dragon!</h2>
        </React.Fragment>
      );
      gameElement = gameContainer;
      break;

    case "skipped":
      textBubbleContent = (
        <React.Fragment>
          <h2>Some more projects I worked on that I really like</h2>
          <p>
            Changed your mind on fighting the dragon? No worries, you can always{" "}
            <button
              className={classes.TextLinkButton}
              onClick={() => restartGameHandler()}
            >
              go back
            </button>
            .
          </p>
        </React.Fragment>
      );
      gameElement = null;
      break;

    case "won":
      textBubbleContent = (
        <React.Fragment>
          <h2>Finally, the dragon is defeated! Congratulations!</h2>
        </React.Fragment>
      );
      gameElement = gameContainer; //win screen is embedded.
      break;

    case "lost":
      textBubbleContent = (
        <React.Fragment>
          <h2>Stupid dragon, when will we ever beat it?</h2>
        </React.Fragment>
      );
      gameElement = gameContainer;
      break;

    case "played":
      textBubbleContent = (
        <React.Fragment>
          <h2>
            You won, the dragon is gone! Now it's save show you my projects
          </h2>
          <p>
            Want to fight the dragon again?{" "}
            <button
              className={classes.TextLinkButton}
              onClick={() => restartGameHandler()}
            >
              Click here
            </button>
            .
          </p>
        </React.Fragment>
      );
      gameElement = null;
      break;

    default:
      //unplayed
      <React.Fragment>
        <h2>
          Darn, a dragon is blocking the other projects I want to show you.
        </h2>
        <p>Help me fight the dragon to free them. </p>
      </React.Fragment>;
      break;
  }

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
