import React from "react";
import classes from "./HomeWrapper.module.scss";

import IntroductionToolsSection from "../IntroductionToolsSection/IntroductionToolsSection";
import TextBubbleAvatar from "../../components/TextBubbleAvatar/TextBubbleAvatar";

const HomeWrapper = (props) => (
  <div className={classes.Body}>
    <div className={classes.HomeWrapper}>
      <IntroductionToolsSection />
      <TextBubbleAvatar avatarLeft={false}>
        <h2>These are some of the projects I’m proud of</h2>
      </TextBubbleAvatar>
    </div>
  </div>
);

export default HomeWrapper;
