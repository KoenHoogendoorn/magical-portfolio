import React from "react";
import classes from "./ArrowSelector.module.scss";
import { Link } from "react-router-dom";

import ArrowLeft from "./Arrows/ArrowLeft";
import ArrowRight from "./Arrows/ArrowRight";
import Button from "../Button/Button";

const ArrowSelector = (props) => {
  let linkClasses = ``;

  if (props.featuredProjects) {
    linkClasses += `${classes.FeaturedProjectsArrowSelector} `;
  }

  if (props.dndProjects) {
    linkClasses += `${classes.DndProjectsArrowSelector} `;
  }

  return (
    <div className={classes.ArrowSelector}>
      <ArrowLeft clickedLeft={props.clickedLeft} />
      <Link className={linkClasses} to={props.selectedProjectPath}>
        <Button className={classes.ReadMore} priority={"primary"}>
          Read more
        </Button>
      </Link>
      <ArrowRight clickedRight={props.clickedRight} />
    </div>
  );
};

export default ArrowSelector;
