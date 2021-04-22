import React from "react";
import ReactMarkdown from "react-markdown";
import classes from "./ProjectPage.module.scss";

import Jkcontent from "../../assets/JelleKuiper/JelleKuiper-content.md";

const ProjectPage = (props) => {
  const [markdownContent, setMarkdownContent] = useState({ content: "test" });

  useEffect(() => {
    fetch(Jkcontent)
      .then((response) => response.text())
      .then((text) => {
        setMarkdownContent({ content: text });
      });
  }, []);

  return (
    <div className={classes.ProjectPage}>
      {" "}
      <ReactMarkdown>{markdownContent.content}</ReactMarkdown>
    </div>
  );
};

export default ProjectPage;
