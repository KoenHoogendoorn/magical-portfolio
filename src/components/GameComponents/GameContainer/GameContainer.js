import React from "react";
import classes from "./GameContainer.module.scss";

import GameBackgroundImage from "../../../assets/home/dragon-game/GameBackground.svg";
import DragonIllustration from "../../../assets/home/dragon-game/Dragon.svg";
import WizardIllustration from "../../../assets/home/dragon-game/Wizard.svg";

import LifeBar from "./LifeBar/LifeBar";
import WizardAttack from "./WizardAttack/WizardAttack";

const GameContainer = (props) => {
  const wizardIllustrationClasses = `${classes.CharacterIllustration} ${classes.WizardIllustration}`;
  return (
    <div className={classes.GameContainer}>
      <div className={classes.GameHeader}>
        <div className={classes.TurnIndicator}>Placeholder</div>
        <i
          onClick={props.clickedCloseIcon}
          className={`fas fa-times-circle ${classes.CloseIcon}`}
        ></i>
      </div>
      <div className={classes.GameScreen}>
        <div className={classes.CharactersContainer}>
          <div className={classes.GameScreenHalf}>
            <div className={classes.CharacterContainer}>
              <img
                className={wizardIllustrationClasses}
                alt="Wizard Illustration."
                src={WizardIllustration}
              />
              <LifeBar maxLives={5} currentLives={props.wizardLives} />
            </div>
          </div>
          <div className={classes.GameScreenHalf}>
            <div className={classes.CharacterContainer}>
              <img
                className={classes.CharacterIllustration}
                alt="Dragon Illustration."
                src={DragonIllustration}
              />
              <LifeBar maxLives={10} currentLives={props.dragonLives} />
            </div>
          </div>
        </div>
        <img
          alt="Game background of a night sky."
          src={GameBackgroundImage}
          className={classes.BackgroundImage}
        />
      </div>
      <div className={classes.WizardAttackContainer}>
        <WizardAttack
          icon={<i className="fas fa-fire"></i>}
          name={"Fireball"}
          hitChance={props.wizardAttacksInfo.fireBall.hitChance}
          damage={props.wizardAttacksInfo.fireBall.damage}
          clicked={props.clickedFireBall}
        />
        <WizardAttack
          icon={<i className="fas fa-bolt"></i>}
          name={"Ligntening Bolt"}
          hitChance={props.wizardAttacksInfo.lighteningBolt.hitChance}
          damage={props.wizardAttacksInfo.lighteningBolt.damage}
          clicked={props.clickedLighteningBolt}
        />
      </div>
    </div>
  );
};

export default GameContainer;
