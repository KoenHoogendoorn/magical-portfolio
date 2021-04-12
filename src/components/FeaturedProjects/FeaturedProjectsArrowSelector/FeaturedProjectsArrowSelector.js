import React from "react";
import classes from "./FeaturedProjectsArrowSelector.module.scss";

import ArrowLeft from "../../Arrows/ArrowLeft";
import ArrowRight from "../../Arrows/ArrowRight";
import Button from "../../Button/Button";

const FeaturedProjectsArrowSelector = (props) => (
  <div className={classes.FeaturedProjectsArrowSelector}>
    <ArrowLeft clickedLeft={props.clickedLeft} />
    <Button id={classes.FeaturedProjectsButton} priority={"primary"}>
      Read more
    </Button>
    <ArrowRight clickedRight={props.clickedRight} />
  </div>
);

export default FeaturedProjectsArrowSelector;
