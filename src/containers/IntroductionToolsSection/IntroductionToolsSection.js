import React from "react";
import classes from "./IntroductionToolsSection.module.scss";
import AvatarRight from "../../assets/home/KoenWizardCircle-right-big.png";

import FullWidthTextBubble from "../../components/FullWidthTextBubble/FullWidthTextBubble";
import ToolSelector from "../../components/ToolSelector/ToolSelector";

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
      <img src={AvatarRight} alt="Wizard with robe and staff" />
      <ToolSelector />
    </div>
  </React.Fragment>
);

export default IntroductionToolsSection;
