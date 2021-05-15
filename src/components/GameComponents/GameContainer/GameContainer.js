import React from "react";
import classes from "./GameContainer.module.scss";

import GameBackgroundImage from "../../../assets/home/dragon-game/GameBackground.svg";
import DragonIllustration from "../../../assets/home/dragon-game/Dragon.svg";
import WizardIllustration from "../../../assets/home/dragon-game/Wizard.svg";

import LifeBar from "./LifeBar/LifeBar";
import WizardAttackInfo from "./WizardAttackInfo/WizardAttackInfo";

const GameContainer = (props) => {
  const cclasses = `${classes.CharacterIllustration} ${classes.WizardIllustration}`;
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
                className={classes.CharacterIllustration}
                alt="Dragon Illustration."
                src={DragonIllustration}
              />
              <LifeBar maxLives={10} currentLives={props.dragonLives} />
            </div>
          </div>
          <div className={classes.GameScreenHalf}>
            <div className={classes.CharacterContainer}>
              <img
                className={cclasses}
                alt="Wizard Illustration."
                src={WizardIllustration}
              />
              <LifeBar maxLives={5} currentLives={props.wizardLives} />
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
        <WizardAttackInfo
          icon={<i className="fas fa-fire"></i>}
          name={"Fireball"}
          hitChance={0.75}
          damage={4}
        />
        <WizardAttackInfo
          icon={<i className="fas fa-bolt"></i>}
          name={"Ligntening Bolt"}
          hitChance={0.9}
          damage={3}
        />
      </div>
    </div>
  );
};

export default GameContainer;
