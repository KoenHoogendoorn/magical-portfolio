import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import classes from "./DetailPage.module.scss";

import Tag from "../Tag/Tag";
import SignOffSection from "../../containers/SignOffSection/SignOffSection";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const DetailPage = (props) => {
  const fprojects = [...props.featuredProjects];
  const dprojects = [...props.dndProjects];
  const aprojects = [...props.additionalProjects];

  let allProjects = fprojects.concat(dprojects.concat(aprojects));
  const links = allProjects.map((project) => (
    <React.Fragment key={`NL-${project.id}`}>
      <NavLink
        className={classes.ProjectLink}
        activeClassName={classes.ActiveProjectLink}
        to={`/${project.name
          .replace(/ +/g, "-")
          .replace(/'/g, "")
          .toLowerCase()}`}
      >
        {project.name}
      </NavLink>
      <span className={classes.Slash}> / </span>
    </React.Fragment>
  ));

  const [enlargedImageSrc, setEnlargedImageSrc] = useState("");

  const closeModal = () => {
    setEnlargedImageSrc("");
    document.body.classList.remove(classes.StopScroll);
  };

  const openModal = (event) => {
    setEnlargedImageSrc(event.currentTarget.attributes[0].nodeValue);
    document.body.classList.add(classes.StopScroll);
  };

  const imageElement = ({ node, ...props }) => {
    // const currentSrc = node.currentTarget.attributes[0].nodeValue;
    const enlargedImage = (
      <div className={classes.BlackLayerModal} onClick={() => closeModal()}>
        <img className={classes.EnlargedImage} {...props} />
        <button className={classes.CloseIcon}>
          <i className="fas fa-times" onClick={() => closeModal()}></i>
        </button>
      </div>
    );

    const normalSizedImage = (
      <img onClick={(event) => openModal(event)} {...props} />
    );

    let image = normalSizedImage;

    if (enlargedImageSrc === props.src) {
      image = enlargedImage;
    }

    return image;
  };

  const projectContent = (
    <React.Fragment>
      <ScrollToTopOnMount />
      <div className={classes.ContentContainer}>
        <h1>{props.name}</h1>
        <p>{props.tagline}</p>
        <div className={classes.Tags}>
          <Tag bgLight={true}>Design</Tag>
          {props.development ? <Tag bgLight={true}>Development</Tag> : null}
        </div>
        <ReactMarkdown
          remarkPlugins={[gfm]}
          className={classes.Content}
          components={{
            img: ({ node, ...props }) => imageElement({ node, ...props })
          }}
        >
          {props.content}
        </ReactMarkdown>
      </div>
      <nav>Projects: {links}</nav>
    </React.Fragment>
  );

  const aboutContent = (
    <React.Fragment>
      <div className={classes.ContentContainer}>
        <h1>{props.name}</h1>
        <p>{props.tagline}</p>
        <ReactMarkdown remarkPlugins={[gfm]} className={classes.Content}>
          {props.content}
        </ReactMarkdown>
      </div>
      <SignOffSection aboutPage={true} />
    </React.Fragment>
  );

  return (
    <div className={classes.DetailPage}>
      {props.id === "p-about" ? aboutContent : projectContent}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    featuredProjects: state.featuredProjects,
    dndProjects: state.dndProjects,
    additionalProjects: state.additionalProjects
  };
};

export default connect(mapStateToProps)(DetailPage);
