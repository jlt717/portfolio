import React from "react";
import "./Skills.css";
import htmlCss from "../../Assets/html-css.png";
import ReactImg from "../../Assets/react.png";
import JSImg from "../../Assets/javascript.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDescription">I am a skilled web developer...</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={htmlCss} alt="" className="skillBarImg" />
          <h2>HTML/CSS</h2>
          <p>Fill in details here.</p>
        </div>
        <div className="skillBar">
          <img src={JSImg} alt="" className="skillBarImg" />
          <h2>Javascript</h2>
          <p>Fill in details here.</p>
        </div>
        <div className="skillBar">
          <img src={ReactImg} alt="" className="skillBarImg" />
          <h2>React/React Native</h2>
          <p>Fill in details here.</p>
        </div>
        <div className="skillBar">
          <img src={""} alt="" className="skillBarImg" />
          <h2>" "</h2>
          <p>Fill in details here.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
