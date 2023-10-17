import React from "react";
import "./Works.css";
import Pokedex from "../../Assets/Pokedex.png";
import Cinedex from "../../Assets/Cinedex.png";
import Meet from "../../Assets/Meet.png";
import Chatterbox from "../../Assets/Chatterbox.png";
import CinedexAngular from "../../Assets/Cinedex-Angular.png";
import APIicon from "../../Assets/RestAPI1.png";
import CinedexCaseStudy from "../../Assets/CineDEX Case Study.pdf";

const Project = ({
  image,
  alt,
  title,
  description,
  liveSiteLink,
  githubLink,
  caseStudyLink,
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
          <a
            href={liveSiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="worksLink"
          >
            Live Site
          </a>
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
              </ul>
            </>
          }
          liveSiteLink="https://jlt717.github.io/JT-Pokedex/"
          githubLink="https://github.com/jlt717/JT-Pokedex"
          caseStudyLink="https://example.com/pokedex-case-study"
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
          githubLink="https://github.com/jlt717/JT-Pokedex"
          caseStudyLink="https://example.com/pokedex-case-study"
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
          caseStudyLink="https://example.com/meet-app-case-study"
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
          caseStudyLink="https://example.com/chat-app-case-study"
        />
        <Project
          image={CinedexAngular}
          alt="Cinedex Angular"
          title="Cinedex Angular Project"
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
          caseStudyLink="https://example.com/cinedex-angular-case-study"
        />
      </div>
    </section>
  );
};

export default Works;
