import React from "react";
import classes from "./IntroductionToolsSection.module.scss";

import AvatarRight230 from "../../assets/home/KoenWizardCircle-right-230.svg";
import AvatarRight160 from "../../assets/home/KoenWizardCircle-right-160.svg";

import FullWidthTextBubble from "../../components/FullWidthTextBubble/FullWidthTextBubble";
import ToolkitContainer from "../../components/ToolkitContainer/ToolkitContainer";

const IntroductionToolsSection = (props) => (
  <React.Fragment>
    <FullWidthTextBubble pointPosition="left">
      <h1>Well met, traveller. I’m Koen</h1>
      <p>
        I design &#38; develop digital products. Below are some of my favorite
        MAGICAL tools.
      </p>
    </FullWidthTextBubble>

    <div className={classes.BottomContainer}>
      <img
        className={`${classes.AvatarImage} ${classes.Avatar230}`}
        src={AvatarRight230}
        alt="Wizard with robe and staff"
      />
      <img
        className={`${classes.AvatarImage} ${classes.Avatar160}`}
        src={AvatarRight160}
        alt="Wizard with robe and staff"
      />
      <ToolkitContainer />
    </div>
  </React.Fragment>
);

export default IntroductionToolsSection;
