import React from "react";
import { Link } from "react-router-dom";
import classes from "./SignOffSection.module.scss";

import AvatarRight230 from "../../assets/home/KoenWizardCircle-right-230.svg";
import AvatarRight160 from "../../assets/home/KoenWizardCircle-right-160.svg";

import FullWidthTextBubble from "../../components/FullWidthTextBubble/FullWidthTextBubble";

const SignOffSection = (props) => {
  let signOffSectionClasses = `${classes.SignOffSection} `;
  let aboutLink = (
    <React.Fragment>
      <Link to={"/about-me"}>About</Link>
      <span> / </span>
    </React.Fragment>
  );

  if (props.aboutPage) {
    signOffSectionClasses += `${classes.AboutPage} `;
    aboutLink = null;
  }

  return (
    <div className={signOffSectionClasses}>
      <FullWidthTextBubble pointPosition="center">
        <h1>I'm currently looking for new opportunities</h1>
        <p>
          You can contact me at:<span> </span>
          <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#104;&#111;&#111;&#103;&#101;&#110;&#100;&#111;&#111;&#114;&#110;&#107;&#111;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
            &#104;&#111;&#111;&#103;&#101;&#110;&#100;&#111;&#111;&#114;&#110;&#107;&#111;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
          </a>
        </p>
        <p>
          Read more about me here:<span> </span>
          {aboutLink}
          <a
            href="https://linkedin.com/in/koen-hoogendoorn-0853a290"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span> / </span>
          <a
            href="https://github.com/KoenHoogendoorn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </FullWidthTextBubble>
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
    </div>
  );
};
export default SignOffSection;
