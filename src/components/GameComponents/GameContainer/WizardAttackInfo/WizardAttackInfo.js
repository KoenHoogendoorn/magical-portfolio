import React from "react";
import classes from "./WizardAttackInfo.module.scss";

const WizardAttackInfo = (props) => {
  const damageArray = Array(props.damage + 1)
    .join("d")
    .split("");

  const hearts = damageArray.map((heart, index) => {
    return <i key={index} className={`fas fa-heart ${classes.HeartIcon}`}></i>;
  });

  const hitChance = props.hitChance;
  const hitChanceArray = hitChance.toString().split("");
  hitChanceArray.splice(0, 2);
  const hitPercentage = hitChanceArray.join("") + "%";

  return (
    <div className={classes.WizardAttackInfo}>
      <h3 className={classes.AttackInfoName}>
        <span className={classes.AttackInfoIcon}>{props.icon}</span>
        {props.name}
      </h3>
      <div className={classes.HitChanceContainer}>
        <p>Hit chance:</p>
        <p>{hitPercentage}</p>
      </div>

      <div className={classes.DamageContainer}>
        <p>Damage:</p>
        <div className={classes.HeartsContainer}>{hearts}</div>
      </div>
    </div>
  );
};

export default WizardAttackInfo;
