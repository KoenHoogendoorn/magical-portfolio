import React from "react";
import classes from "./Tag.module.scss";

const Tag = (props) => {
  let tagClasses = `${classes.Tag} `;

  if (props.bgLight) {
    tagClasses += `${classes.BgLight} `;
  }

  return <div className={tagClasses}>{props.children}</div>;
};

export default Tag;
