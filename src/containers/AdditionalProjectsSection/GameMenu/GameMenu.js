import React from "react";
import classes from "./GameMenu.module.scss";

import DragonCircle from "../../../assets/home/dragon-game/DragonCircle.svg";

import Button from "../../../components/Button/Button";

const GameMenu = (props) => (
  <div className={classes.GameMenu}>
    <img
      alt="Illustration of a dragon flying in a moonlit sky."
      className={classes.DragonCircle}
      src={DragonCircle}
    ></img>
    <div className={classes.MenuButtonsContainer}>
      <Button priority={"primary"} clicked={props.clickedPrimary}>
        Fight the dragon
      </Button>
      <Button priority={"secondary"} clicked={props.clickedSecondary}>
        Skip the fight
      </Button>
    </div>
  </div>
);

export default GameMenu;
