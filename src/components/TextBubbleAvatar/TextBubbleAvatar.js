import React from "react";

import classes from "./TextBubbleAvatar.module.scss";

import AvatarFacingLeft180 from "../../assets/home/KoenWizardCircle-left-180.svg";
import AvatarFacingLeft86 from "../../assets/home/KoenWizardCircle-left-86.svg";

import AvatarFacingRight180 from "../../assets/home/KoenWizardCircle-right-180.svg";
import AvatarFacingRight86 from "../../assets/home/KoenWizardCircle-right-86.svg";

const TextBubbleAvatar = (props) => {
  let content;

  if (props.avatarLeft) {
    content = (
      <React.Fragment>
        <img
          className={`${classes.Avatar} ${classes.FacingRight} ${classes.Avatar180}`}
          src={AvatarFacingRight180}
          alt="Wizard with robe and staff"
        />
        <img
          className={`${classes.Avatar} ${classes.FacingRight} ${classes.Avatar86}`}
          src={AvatarFacingRight86}
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
          className={`${classes.Avatar} ${classes.FacingLeft} ${classes.Avatar180}`}
          src={AvatarFacingLeft180}
          alt="Wizard with robe and staff"
        />
        <img
          className={`${classes.Avatar} ${classes.FacingLeft} ${classes.Avatar86}`}
          src={AvatarFacingLeft86}
          alt="Wizard with robe and staff"
        />
      </React.Fragment>
    );
  }

  return <div className={classes.TextBubbleAvatar}>{content}</div>;
};
export default TextBubbleAvatar;
