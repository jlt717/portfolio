import React from "react";
import "./Skills.css";
import htmlCss from "../../Assets/html_1.png";
import ReactImg from "../../Assets/react.png";
import JSImg from "../../Assets/javascript.png";
import database from "../../Assets/database-1.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">Skills</span>
      <span className="skillDescription">
        I work well juggling multiple tasks, prioritizing, and meeting deadlines
        in fast-paced environments and have added full-stack development to my
        plate. I enjoy troubleshooting, problem-solving, simplifying, and
        spending time outdoors and with my family.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={htmlCss} alt="" className="skillBarImgHtml" />
          <h2>HTML/CSS</h2>
          <p></p>
        </div>
        <div className="skillBar">
          <img src={JSImg} alt="" className="skillBarImg" />
          <h2>JavaScript</h2>
          <p></p>
        </div>
        <div className="skillBar">
          <img src={ReactImg} alt="" className="skillBarImg" />
          <h2>React/React Native</h2>
          <p></p>
        </div>
        <div className="skillBar">
          <img src={database} alt="database" className="skillBarImg" />
          <h2>SQL/NoSQL Databases</h2>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
