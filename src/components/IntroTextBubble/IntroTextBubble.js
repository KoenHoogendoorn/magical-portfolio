import React from "react";

import classes from "./IntroTextBubble.module.scss";

const IntroTextBubble = () => {
  let IntroTextBubbleClasses = `${classes.IntroTextBubble} ${classes.TextBubbleRectangle}`;
  return (
    <div className={IntroTextBubbleClasses}>
      <h1>Well met, traveller. I’m Koen</h1>
      <p>
        I design &#38; develop digital products. Below are some of my favorite
        MAGICAL tools.
      </p>
    </div>
  );
};
export default IntroTextBubble;
