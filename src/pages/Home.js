import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Linkedin, Github, Codepen, Twitter } from "mdi-material-ui";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="left">
        <StaticImage
          className="hero-img"
          src="../images/gm.jpg"
          alt="Ganesh Munisifreddy"
          style={{ objectPosition: "top" }}
        />
      </div>
      <div className="right">
        <div className="content">
          <p className="greeting">
            Hello <span className="hand-emoji">👋</span>, I'm
          </p>
          <p className="name">Ganesh Munisifreddy</p>
          <p className="description">
            A Freelance Web Developer with 5+ years of experience in front-end
            technologies.
          </p>
          <a href="mailto:hello@ganesh.pw" className="lets-talk-btn">
            Say Hello!
          </a>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/ganeshmunisifreddy/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/ganeshmunisifreddy"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="github" />
            </a>
            <a
              href="https://codepen.io/ganeshmunisifreddy"
              target="_blank"
              rel="noreferrer"
            >
              <Codepen className="codepen" />
            </a>
            <a
              href="https://twitter.com/GaneshMunisif"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="twitter" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
