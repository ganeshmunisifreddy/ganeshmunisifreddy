import React from "react";
import { EmailOutline } from "mdi-material-ui";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="content">
        <p className="greeting">
          Hello <span className="hand-emoji">👋</span>, I'm
        </p>
        <p className="name">Ganesh Munisifreddy</p>
        <p className="description">
          A Freelance Web Developer based in Bangalore, India.
        </p>
        <div className="hero-btn-float">
          <div className="hero-btn-wrapper">
            <a href="mailto:hello@ganesh.pw" className="lets-talk-btn">
              <span className="talk-text">Say Hello!</span>
              <span className="mail-icon">
                <EmailOutline style={{ fontSize: 28 }} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
