import React from "react";
import classes from "./GameContainer.module.scss";

import GameBackgroundImage from "../../../assets/home/dragon-game/GameBackground.svg";
import DragonIllustration from "../../../assets/home/dragon-game/Dragon.svg";
import DragonIllustrationRed from "../../../assets/home/dragon-game/Dragon-Red.svg";
import WizardIllustration from "../../../assets/home/dragon-game/Wizard.svg";
import WizardIllustrationRed from "../../../assets/home/dragon-game/Wizard-Red.svg";
import GameWinScreen from "../../../assets/home/dragon-game/GameWinScreen.svg";
import GameLoseScreen from "../../../assets/home/dragon-game/GameLoseScreen.svg";

import LifeBar from "./LifeBar/LifeBar";
import FireBall from "./FireBall/FireBall";
import LightningBolt from "./LightningBolt/LightningBolt";
import WizardAttack from "./WizardAttack/WizardAttack";
import Button from "../../Button/Button";
import DragonTeeth from "./DragonTeeth/DragonTeeth";

const GameContainer = (props) => {
  const wizardIllustrationClasses = `${classes.CharacterIllustration} ${classes.WizardIllustration}`;
  const dragonIllustrationClasses = `${classes.CharacterIllustration} ${classes.DragonIllustration}`;

  let activeCharacter;

  if (
    props.gameEvent === "WizardTurn" ||
    props.gameEvent === "WizardAttackAnimation"
  ) {
    activeCharacter = "Your turn";
  } else {
    activeCharacter = "Dragon's turn";
  }

  let wizardGotHitAnimationClasses = `${classes.Invisible} `;
  let dragonGotHitAnimationClasses = `${classes.Invisible} `;

  if (props.wizardGotHit) {
    wizardGotHitAnimationClasses += `${classes.HitAnimation} `;
  }

  if (props.dragonGotHit) {
    dragonGotHitAnimationClasses += `${classes.HitAnimation} `;
  }

  let content;
  switch (props.gameState) {
    case "won":
      content = (
        <div className={classes.GameContainer}>
          <img
            alt="Game background with 'You Win' written on it."
            src={GameWinScreen}
            className={classes.BackgroundImage}
          />
          <div className={classes.ButtonsBar}>
            <Button priority="primary" clicked={props.clickedContinue}>
              Continue
            </Button>
          </div>
        </div>
      );
      break;

    case "lost":
      content = (
        <div className={classes.GameContainer}>
          <img
            alt="Game background with 'You Lose' written on it."
            src={GameLoseScreen}
            className={classes.BackgroundImage}
          />
          <div className={classes.ButtonsBar}>
            <Button priority="primary" clicked={props.clickedAgain}>
              Play again
            </Button>
            <Button priority="secondary" clicked={props.clickedSkip}>
              Skip fight
            </Button>
          </div>
        </div>
      );
      break;

    default:
      content = (
        <div className={classes.GameContainer}>
          <div className={classes.GameHeader}>
            <div className={classes.TurnIndicator}>{activeCharacter}</div>
            <i
              onClick={props.clickedCloseIcon}
              className={`fas fa-times-circle ${classes.CloseIcon}`}
            ></i>
          </div>
          <div className={classes.GameScreen}>
            <div className={classes.CharactersContainer}>
              <div className={classes.GameScreenHalf}>
                <div className={classes.CharacterContainer}>
                  <div class={classes.Circle}>
                    <div class={classes.Rotate}>
                      <div class={classes.CounterRotate}>
                        <img
                          className={wizardIllustrationClasses}
                          alt="Wizard illustration."
                          src={WizardIllustration}
                        />
                        <img
                          className={`${wizardIllustrationClasses} ${wizardGotHitAnimationClasses} `}
                          alt="Red filter over wizard illustration."
                          src={WizardIllustrationRed}
                        />
                      </div>
                    </div>
                  </div>
                  <DragonTeeth
                    attackCasted={props.biteCasted}
                    attackMiss={props.biteMissed}
                  />
                  <FireBall
                    spellCasted={props.fireBallCasted}
                    spellMiss={props.fireBallMissed}
                    dragonAttacked={props.fireBreathCasted}
                    dragonMissed={props.fireBreathMissed}
                  />
                  <LightningBolt
                    spellCasted={props.lightningBoltCasted}
                    spellMiss={props.lightningBoltMissed}
                  />
                  <LifeBar maxLives={5} currentLives={props.wizardLives} />
                </div>
              </div>
              <div className={classes.GameScreenHalf}>
                <div className={classes.CharacterContainer}>
                  <div className={classes.DragonIllustrationContainer}>
                    <img
                      className={dragonIllustrationClasses}
                      alt="Dragon illustration."
                      src={DragonIllustration}
                    />
                    <img
                      className={`${dragonIllustrationClasses} ${dragonGotHitAnimationClasses} `}
                      alt="Red filter over dragon illustration."
                      src={DragonIllustrationRed}
                    />
                  </div>
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
              notPlayersTurn={props.notPlayersTurn}
            />
            <WizardAttack
              icon={<i className="fas fa-bolt"></i>}
              name={"Lightning Bolt"}
              hitChance={props.wizardAttacksInfo.lightningBolt.hitChance}
              damage={props.wizardAttacksInfo.lightningBolt.damage}
              clicked={props.clickedlightningBolt}
              notPlayersTurn={props.notPlayersTurn}
            />
          </div>
        </div>
      );
      break;
  }

  return content;
};

export default GameContainer;
