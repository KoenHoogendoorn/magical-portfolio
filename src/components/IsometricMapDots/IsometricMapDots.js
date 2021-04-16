import React from "react";
import classes from "./IsometricMapDots.module.scss";

import isometricUnselected from "../../assets/home/isometric-Illustration/isometric-unselected.png";
import isometricSelected from "../../assets/home/isometric-Illustration/isometric-selected.png";

const IsometricMapDots = (props) => {
  let SelectedClasses = `${classes.IsometricSelected} `;

  //   if (props.left) {
  //     SelectedClasses += `${classes.Visible} `;
  //     if (props.activeProjectId.substring(4, 6) === "dq"){

  //     }
  //   } else {
  //     SelectedClasses += `${classes.Invisible} `;
  //   }

  if (props.activeProjectId.substring(4, 6) === "dq" && props.left) {
    SelectedClasses += `${classes.Visible} `;
  } else if (props.activeProjectId.substring(4, 6) === "hc" && !props.left) {
    SelectedClasses += `${classes.Visible} `;
  } else {
    SelectedClasses += `${classes.Invisible} `;
  }

  return (
    <div className={classes.IsometricMapDots}>
      <img
        className={classes.SlightOpacity}
        src={isometricUnselected}
        alt="Unselected dot over isometric map."
      />
      <img
        className={SelectedClasses}
        src={isometricSelected}
        alt="Selected dot over isometric map."
      />
    </div>
  );
};

export default IsometricMapDots;
