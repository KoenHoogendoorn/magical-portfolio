import React from "react";
import classes from "./HomeWrapper.module.scss";

import IntroductionToolsSection from "../IntroductionToolsSection/IntroductionToolsSection";

const HomeWrapper = (props) => (
  <div className={classes.Body}>
    <div className={classes.HomeWrapper}>
      <IntroductionToolsSection />
    </div>
  </div>
);

export default HomeWrapper;
