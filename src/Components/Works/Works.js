import React from "react";
import "./Works.css";
import Pokedex from "../../Assets/Pokedex.png";
import Cinedex from "../../Assets/Cinedex.png";
import Meet from "../../Assets/Meet.png";
import Chatterbox from "../../Assets/Chatterbox.png";
import CinedexAngular from "../../Assets/Cinedex-Angular.png";
import APIicon from "../../Assets/RestAPI1.png";
import CinedexCaseStudy from "../../Assets/CineDEX Case Study.pdf";
import MeetCaseStudy from "../../Assets/Meet App Case Study.pdf";
import CinedexAngularCaseStudy from "../../Assets/Cinedex-Angular Case Study.pdf";
import ChatterboxCaseStudy from "../../Assets/Chatterbox App Case Study.pdf";
import MoviesAPICaseStudy from "../../Assets/Movies API Case Study.pdf";
import PokedexCaseStudy from "../../Assets/Pokedex Case Study.pdf";
import ChatterboxDemo from "../../Assets/ChatterboxDemo.webm";

const Project = ({
  image,
  alt,
  title,
  description,
  liveSiteLink,
  githubLink,
  caseStudyLink,
  demoLink,
}) => {
  return (
    <div className="worksItem">
      <div className="worksCard">
        <img src={image} alt={alt} className="worksImg" />
        <div className="projectInfo">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="projectLinks">
          {liveSiteLink && (
            <a
              href={liveSiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="worksLink"
            >
              Live Site
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="worksLink"
            >
              Demo
            </a>
          )}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="worksLink"
          >
            GitHub
          </a>
          <a
            href={caseStudyLink}
            className="worksButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Case Study
          </a>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDescription">
        I've worked hard to complete several projects through the CareerFoundry
        web development program to begin my personal portfolio.
      </span>
      <div className="worksImgs">
        <Project
          image={Pokedex}
          alt="Pokédex"
          title="Pokédex Project"
          description={
            <>
              This small web application loads data from an external API and
              allows users to browse through approximately 150 different Pokémon
              by name using a filtered search.
              <br />
              <br />
              <strong>Technologies used:</strong>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
              </ul>
            </>
          }
          liveSiteLink="https://jlt717.github.io/JT-Pokedex/"
          githubLink="https://github.com/jlt717/JT-Pokedex"
          caseStudyLink={PokedexCaseStudy}
        />
        <Project
          image={APIicon}
          alt="Movie API"
          title="Movie API Project"
          description={
            <>
              The server-side component of the CineDEX web application that
              provides users with access to information about different movies,
              genres, and directors. Users have the ability to register, create
              and update profiles, and create a list of favorite movies.
              <br />
              <br />
              <strong>Technologies used:</strong>
              <ul>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Node.js</li>
                <li>REST API</li>
              </ul>
            </>
          }
          githubLink="https://github.com/jlt717/movie_api"
          caseStudyLink={MoviesAPICaseStudy}
        />
        <Project
          image={Cinedex}
          alt="Cinedex"
          title="CineDEX Project"
          description={
            <>
              This single-paged responsive app uses routing and multiple
              interface views to provide a number of features to film lovers.
              CineDEX users can register, login, update their profiles, search
              for movies by title, genre, or director and even create a favorite
              movie list where they can add or remove favorites.
              <br />
              <br />
              <strong>Technologies used:</strong>
              <ul>
                <li>MERN Stack</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>SCSS</li>
                <li>React Bootstrap</li>
              </ul>
            </>
          }
          liveSiteLink="https://jt-cinedex.netlify.app/login"
          githubLink="https://github.com/jlt717/Cinedex-client"
          caseStudyLink={CinedexCaseStudy}
        />
        <Project
          image={Meet}
          alt="Meet App"
          title="Meet App Project"
          description={
            <>
              This serverless, progressive web application (PWA) was built with
              React using a test-driven development (TDD) technique. The
              application uses the Google Calendar API to fetch upcoming events
              for a user based on their location.
              <br />
              <br />
              <strong>Technologies used:</strong>
              <ul>
                <li>React</li>
                <li>React Bootstrap</li>
                <li>React Testing Library</li>
                <li>Jest</li>
                <li>Puppeteer</li>
                <li>AWS</li>
              </ul>
            </>
          }
          liveSiteLink="https://jlt717.github.io/meet/"
          githubLink="https://github.com/jlt717/meet"
          caseStudyLink={MeetCaseStudy}
        />
        <Project
          image={Chatterbox}
          alt="Chat App"
          title="Chat App Project"
          description={
            <>
              A chatting app that allows users to communicate with friends and
              family via sending text, images, and location data.
              <br />
              <br />
              <strong>Technologies used:</strong>
              <ul>
                <li>React Native</li>
                <li>Expo</li>
                <li>Android Studio</li>
                <li>Google Firebase/Firestore</li>
              </ul>
            </>
          }
          githubLink="https://github.com/jlt717/Chat-App/tree/master"
          caseStudyLink={ChatterboxCaseStudy}
          demoLink={ChatterboxDemo}
        />
        <Project
          image={CinedexAngular}
          alt="Cinedex Angular"
          title="CineDEX Angular Project"
          description={
            <>
              This single-paged responsive app uses routing and multiple
              interface views to provide a number of features to film lovers.
              CineDEX users can register, login, update their profiles, search
              for movies by title, genre, or director and even create a favorite
              movie list where they can add or remove favorites.
              <br />
              <br />
              <strong>Technologies used:</strong>
              <ul>
                <li>Angular CLI</li>
                <li>Angular Material</li>
              </ul>
            </>
          }
          liveSiteLink="https://jlt717.github.io/Cinedex-Angular-client/welcome"
          githubLink="https://github.com/jlt717/Cinedex-Angular-client/tree/master"
          caseStudyLink={CinedexAngularCaseStudy}
        />
      </div>
    </section>
  );
};

export default Works;
