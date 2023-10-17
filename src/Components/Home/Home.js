import React from "react";
import "./Home.css";
import { Link } from "react-scroll";
//import background from
import Briefcase from "../../Assets/briefcase-1.png";
const Home = () => {
  return (
    <section id="home">
      <div className="homeContent">
        <span className="hello">Hello, </span>
        <span className="homeText">
          I'm
          <span className="homeName"> Jamie</span>
          <br />
          Full-stack Developer
        </span>
        <p className="homeParagraph">
          I am a web developer based in Houston, TX. I'm passionate about
          turning challenges <br /> into opportunities and am committed to
          streamlining and simplifying. With a knack for <br /> multitasking and
          a love for innovation, I bring a fresh perspective to every endeavor.
        </p>
        <Link>
          <button className="btn">
            <img src={Briefcase} alt="hire me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={""} alt="" className="background" />
    </section>
  );
};

export default Home;
