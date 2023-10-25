import React from "react";
import "./Contact.css";
import LinkedInIcon from "../../Assets/LinkedIn2.png";
import GitHubIcon from "../../Assets/GitHubIcon.png";
import MediumIcon from "../../Assets/mediumLogo.png";
import XIcon from "../../Assets/X-logo.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4yh1kbs",
        "template_5sfec9w",
        form.current,
        "B_Ort5mercDHEc4Rw"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message sent.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDescription">
          Please fill out the form below to reach out.
        </span>
        <form id="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/jamie-tracy-2b1b685a/"
              className="link"
            >
              <img src={LinkedInIcon} alt="LinkedIn" />{" "}
            </a>
            <a href="https://github.com/jlt717" className="link">
              <img src={GitHubIcon} alt="GitHub" />{" "}
            </a>
            <a href="https://medium.com/@jlt717" className="link">
              <img src={MediumIcon} alt="Medium" />{" "}
            </a>
            <a href="https://twitter.com/JamieTracy99067" className="link">
              <img src={XIcon} alt="Twitter" />{" "}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
