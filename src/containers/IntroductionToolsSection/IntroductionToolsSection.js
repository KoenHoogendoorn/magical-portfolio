import React from "react";
import classes from "./IntroductionToolsSection.module.scss";
import AvatarRight from "../../assets/home/KoenWizardCircle-right-big.png";

import IntroTextBubble from "../../components/IntroTextBubble/IntroTextBubble";
import ToolSelector from "../../components/ToolSelector/ToolSelector";

const IntroductionToolsSection = (props) => (
  <React.Fragment>
    <IntroTextBubble />
    <div className={classes.BottomContainer}>
      <img src={AvatarRight} alt="Wizard with robe and staff" />
      <ToolSelector />
    </div>
  </React.Fragment>
);

export default IntroductionToolsSection;
