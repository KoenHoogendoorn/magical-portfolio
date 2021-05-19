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
  const [clawMissAnimation, setClawMissAnimation] = useState(false);
  const [clawAnimation, setClawAnimation] = useState(false);
  const [fireBreathAnimation, setFireBreathAnimation] = useState(false);
  const [fireBreathMissAnimation, setFireBreathMissAnimation] = useState(false);

  const wizardAttacksInfo = {
    fireBall: {
      hitChance: 0.7, // 0.7
      damage: 2
    },
    lightningBolt: {
      hitChance: 0.9, // 0.9
      damage: 1
    }
  };

  const dragonAttacksInfo = {
    fireBreath: {
      hitChance: 0.4, // 0.4
      damage: 2,
      attackChance: 0.3 // 0.3
    },
    claw: {
      hitChance: 0.5, //0.5
      damage: 1,
      attackChance: 0.7 //0.7
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
      notPlayersTurn={gameEvent !== "WizardTurn" ? true : false}
      clawCasted={clawAnimation}
      clawMissed={clawMissAnimation}
      fireBreathCasted={fireBreathAnimation}
      fireBreathMissed={fireBreathMissAnimation}
      fireBallCasted={fireBallAnimation}
      fireBallMissed={fireBallMissAnimation}
      lightningBoltCasted={lightningBoltAnimation}
      lightningBoltMissed={lightningBoltMissAnimation}
    />
  );

  // DRAGON ATTACKS
  const attackDamageHandler = (currentAttack, currentAttackType) => {
    if (wizardLives <= currentAttack.damage) {
      //dragon wins
      setGameState("lost");
    } else {
      setWizardLives(wizardLives - currentAttack.damage);
      console.log(currentAttackType + " hit");
    }
  };

  const fireBreathMissHandler = () => {
    setGameEvent("DragonAttackAnimation");
    setFireBallAnimation(true);
    setFireBreathAnimation(true);
    // setFireBallMissAnimation(true);
    setFireBreathMissAnimation(true);

    setTimeout(() => {
      setFireBallAnimation(false);
      setFireBreathAnimation(false);
      setFireBreathMissAnimation(false);
      setGameEvent("WizardTurn");
    }, 900);
  };

  const fireBreathHitHandler = (currentAttack, currentAttackType) => {
    setGameEvent("DragonAttackAnimation");
    setFireBallAnimation(true);
    setFireBreathAnimation(true);

    setTimeout(() => {
      setFireBreathAnimation(false);
      setFireBallAnimation(false);
      attackDamageHandler(currentAttack, currentAttackType);
      setGameEvent("WizardTurn");
    }, 900);
  };

  const clawMissHandler = () => {
    setGameEvent("DragonAttackAnimation");
    setClawAnimation(true);
    setClawMissAnimation(true);

    setTimeout(() => {
      setClawAnimation(false);
      setClawMissAnimation(false);
      setGameEvent("WizardTurn");
    }, 900);
  };

  const clawHitHandler = (currentAttack, currentAttackType) => {
    setGameEvent("DragonAttackAnimation");
    setClawAnimation(true);

    setTimeout(() => {
      setClawAnimation(false);
      attackDamageHandler(currentAttack, currentAttackType);
      setGameEvent("WizardTurn");
    }, 900);
  };

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
      currentAttackType === "fireBreath"
        ? fireBreathHitHandler(currentAttack, currentAttackType)
        : clawHitHandler(currentAttack, currentAttackType);
    } else {
      //miss
      currentAttackType === "fireBreath"
        ? fireBreathMissHandler(currentAttack, currentAttackType)
        : clawMissHandler(currentAttack, currentAttackType);

      console.log(currentAttackType + " miss");
    }
  };

  // END DRAGON ATTACKS

  // WIZARD SPELLS

  const spellDamageHandler = (spell, spellName) => {
    if (dragonLives <= spell.damage) {
      //wizard wins
      setGameState("won");
    } else {
      setDragonLives(dragonLives - spell.damage);
      console.log(spellName + " hit");
    }
  };

  const fireBallMissHandler = () => {
    setGameEvent("WizardAttackAnimation");
    setFireBallAnimation(true);
    setFireBallMissAnimation(true);

    setTimeout(() => {
      setFireBallAnimation(false);
      setFireBallMissAnimation(false);
      dragonAttack();
    }, 900);
  };

  const fireBallHitHandler = (spell, spellName) => {
    setGameEvent("WizardAttackAnimation");
    setFireBallAnimation(true);

    setTimeout(() => {
      setFireBallAnimation(false);
      spellDamageHandler(spell, spellName);
      dragonAttack();
    }, 900);
  };

  const lightningBoltMissHandler = () => {
    setGameEvent("WizardAttackAnimation");
    setLightningBoltAnimation(true);
    setLightningBoltMissAnimation(true);

    setTimeout(() => {
      setLightningBoltAnimation(false);
      setLightningBoltMissAnimation(false);
      dragonAttack();
    }, 900);
  };

  const lightningboltHandler = (spell, spellName) => {
    setGameEvent("WizardAttackAnimation");
    setLightningBoltAnimation(true);

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
