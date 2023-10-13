import React from "react";
import "./Works.css";
import Cinedex from "../../Assets/Cinedex.png";
import CinedexAngular from "../../Assets/Cinedex-Angular.png";
import Meet from "../../Assets/Meet.png";
import Chatterbox from "../../Assets/Chat_Start_Screen.png";
import Pokedex from "../../Assets/Pokedex.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDescription">I worked hard to blah blah blah</span>
      <div className="worksImgs">
        <img src={Pokedex} alt="Pokedex" className="worksImg" />
        <img src={Cinedex} alt="Cinedex React" className="worksImg" />
        <img src={Meet} alt="Meet App" className="worksImg" />
        <img src={Chatterbox} alt="Chat App" className="worksImg" />
        <img src={CinedexAngular} alt="Cinedex Angular" className="worksImg" />
      </div>
    </section>
  );
};

export default Works;
