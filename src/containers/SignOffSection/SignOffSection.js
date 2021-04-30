import React from "react";
import { Link } from "react-router-dom";
import classes from "./SignOffSection.module.scss";

import AvatarRight from "../../assets/home/KoenWizardCircle-right-big.png";

import FullWidthTextBubble from "../../components/FullWidthTextBubble/FullWidthTextBubble";

const SignOffSection = (props) => {
  return (
    <div className={classes.SignOffSection} style={props.style}>
      <FullWidthTextBubble pointPosition="center">
        <h1>I'm currently looking for new opportunities</h1>
        <p>
          You can contact me at:{" "}
          <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#104;&#111;&#111;&#103;&#101;&#110;&#100;&#111;&#111;&#114;&#110;&#107;&#111;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
            &#104;&#111;&#111;&#103;&#101;&#110;&#100;&#111;&#111;&#114;&#110;&#107;&#111;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
          </a>
        </p>
        <p>
          Read more about me here: <Link to={"/about"}>About</Link>
          {" / "}
          <a
            href="https://linkedin.com/in/koen-hoogendoorn-0853a290"
            target="_blank"
          >
            LinkedIn
          </a>
          {" / "}
          <a href="https://github.com/KoenHoogendoorn" target="_blank">
            GitHub
          </a>
        </p>
      </FullWidthTextBubble>
      <img
        className={classes.AvatarImage}
        src={AvatarRight}
        alt="Wizard with robe and staff"
      />
    </div>
  );
};
export default SignOffSection;
