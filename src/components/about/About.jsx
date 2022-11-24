import React from "react";
import "./about.css";
import Me from "../../images/me-4.PNG";
import { FaAward, FaCertificate, FaFolder} from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Hello, I'm</h5>
        <h2>Annah Tumworobere</h2>
        <h5 className="text-light"> Full-stack Developer</h5> 
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>
            <article className="about_card">
              <FaCertificate className="about_icon" />
              <h5>Certificates</h5>
              <small>10+</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>35+ projects completed</small>
            </article>
          </div>
          <p>I am an enthusiastic Full-Stack Web Developer with a passion for creating and fixing applications in React & Redux, Ruby on Rails,
        JavaScript, and HTML/CSS.
            <br />
            <br />
            I am also a technical mentor at Microverse.
            <br />
            <br />
            I have been working remotely with developers from across the globe,
        I have excellent communication and collaboration skills and I have developed applications in teams and individually.
          </p>
          <a href="#project" className="btn btn-primary"> See my projects</a>
        </div>
      </div>
    </section>
  );
};

export default About;
