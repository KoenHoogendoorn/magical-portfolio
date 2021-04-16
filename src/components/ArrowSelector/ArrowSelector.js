import React from "react";
import classes from "./ArrowSelector.module.scss";

import ArrowLeft from "./Arrows/ArrowLeft";
import ArrowRight from "./Arrows/ArrowRight";
import Button from "../Button/Button";

const ArrowSelector = (props) => (
  <div className={classes.ArrowSelector}>
    <ArrowLeft clickedLeft={props.clickedLeft} />
    <Button style={props.style} priority={"primary"}>
      Read more
    </Button>
    <ArrowRight clickedRight={props.clickedRight} />
  </div>
);

export default ArrowSelector;
