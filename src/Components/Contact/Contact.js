import React from "react";
import "./Contact.css";
import LinkedInIcon from "../../Assets/LinkedIn.png";
import GitHubIcon from "../../Assets/GitHub-icon.png";
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
          Please fill out the form below to reach out to me.
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
            <img src={LinkedInIcon} alt="LinkedIn" className="link" />
            <img src={GitHubIcon} alt="GitHub" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
