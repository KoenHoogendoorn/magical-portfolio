import React from "react";
import classes from "./LightningBolt.module.scss";

import LightningBoltHit from "../../../../assets/home/dragon-game/LightningBolt-Horizontal.svg";
import LightningBoltMiss from "../../../../assets/home/dragon-game/LightningBolt-Diagonal.svg";

const LightningBolt = (props) => {
  let lightningBoltClasses;
  if (props.spellCasted) {
    lightningBoltClasses = `${classes.LightningBolt} `;
    if (props.spellMiss) {
      lightningBoltClasses += `${classes.Miss} `;
    }
  } else {
    lightningBoltClasses = `${classes.NotActive} `;
  }
  return (
    <img
      src={props.spellMiss ? LightningBoltMiss : LightningBoltHit}
      alt="Lightning Bolt"
      className={lightningBoltClasses}
    ></img>
  );
};

export default LightningBolt;
