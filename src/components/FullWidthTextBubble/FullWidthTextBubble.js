import React from "react";

import classes from "./FullWidthTextBubble.module.scss";

const FullWidthTextBubble = (props) => {
  let fullWidthTextBubbleClasses = `${classes.FullWidthTextBubble} `;

  switch (props.pointPosition) {
    case "left":
      fullWidthTextBubbleClasses += `${classes.Left} `;
      break;
    case "center":
      fullWidthTextBubbleClasses += `${classes.Center} `;
      break;

    default:
      break;
  }

  return <div className={fullWidthTextBubbleClasses}>{props.children}</div>;
};
export default FullWidthTextBubble;
