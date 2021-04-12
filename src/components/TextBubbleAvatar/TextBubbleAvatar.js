import React from "react";

import classes from "./TextBubbleAvatar.module.scss";
import AvatarFacingLeft from "../../assets/home/KoenWizardCircle-left-small.png";
import AvatarFacingRight from "../../assets/home/KoenWizardCircle-right-small.png";

const TextBubbleAvatar = (props) => {
  let content;

  if (props.avatarLeft) {
    content = (
      <React.Fragment>
        <img
          className={`${classes.Avatar} ${classes.FacingRight}`}
          src={AvatarFacingRight}
          alt="Wizard with robe and staff"
        />
        <div
          className={`${classes.TextBubbleRectangle} ${classes.PointerLeft}`}
        >
          {props.children}
        </div>
      </React.Fragment>
    );
  } else {
    content = (
      <React.Fragment>
        <div
          className={`${classes.TextBubbleRectangle} ${classes.PointerRight}`}
        >
          {props.children}
        </div>
        <img
          className={`${classes.Avatar} ${classes.FacingLeft}`}
          src={AvatarFacingLeft}
          alt="Wizard with robe and staff"
        />
      </React.Fragment>
    );
  }

  return <div className={classes.TextBubbleAvatar}>{content}</div>;
};
export default TextBubbleAvatar;
