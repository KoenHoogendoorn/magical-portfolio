import React from "react";
import classes from "./DragonTeeth.module.scss";

import DragonTeethTop from "../../../../assets/home/dragon-game/DragonTeeth-Top.svg";
import DragonTeethBot from "../../../../assets/home/dragon-game/DragonTeeth-Bottom.svg";

const DragonTeeth = (props) => {
  let DragonTeethContainerClasses = `${classes.DragonTeethContainer} `;
  let DragonTeethClasses = `${classes.DragonTeeth} `;
  let TopTeethClasses;
  let BotTeethClasses;

  if (props.attackCasted) {
    TopTeethClasses = `${classes.TopTeeth} `;
    BotTeethClasses = `${classes.BotTeeth} `;

    if (props.attackMiss) {
      DragonTeethContainerClasses += `${classes.BiteMiss} `;
    }
  } else {
    DragonTeethContainerClasses = `${classes.NotActive} `;
  }

  return (
    <div className={DragonTeethContainerClasses}>
      <img
        src={DragonTeethTop}
        alt="Dragon teeth top part"
        className={`${DragonTeethClasses} ${TopTeethClasses} `}
      ></img>
      <img
        src={DragonTeethBot}
        alt="Dragon teeth bottom part"
        className={`${DragonTeethClasses} ${BotTeethClasses} `}
      ></img>
    </div>
  );
};

export default DragonTeeth;
