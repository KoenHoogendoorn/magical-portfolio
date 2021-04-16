import React from "react";
import classes from "./HomeWrapper.module.scss";

import IntroductionToolsSection from "../IntroductionToolsSection/IntroductionToolsSection";
import TextBubbleAvatar from "../../components/TextBubbleAvatar/TextBubbleAvatar";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import DndSection from "../DndSection/DndSection";

const HomeWrapper = (props) => (
  <div className={classes.Body}>
    <div className={classes.HomeWrapper}>
      <IntroductionToolsSection />
      <TextBubbleAvatar avatarLeft={false}>
        <h2>These are some of the projects I’m proud of</h2>
      </TextBubbleAvatar>
      <FeaturedProjects />
      <TextBubbleAvatar avatarLeft={true}>
        <h2>In my time off, I love to play Dungeons &#38; Dragons</h2>
        <p>So I made these tools to help me</p>
      </TextBubbleAvatar>
      <DndSection />
    </div>
  </div>
);

export default HomeWrapper;
