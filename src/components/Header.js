import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import { Menu, Close } from "mdi-material-ui";

const metaTags = () => (
  <Helmet>
    <title>Ganesh Munisifreddy</title>
  </Helmet>
);

const handleScrollHighlight = () => {
  let sections = document.querySelectorAll("section[id]");
  let header = document.querySelector("header");
  let letsTalkBtn = document.querySelector(".lets-talk-btn");
  document.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 128;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document
          .querySelector(`.nav-list a[href*=${sectionId}]`)
          .classList.add("nav-link-active");
      } else {
        document
          .querySelector(`.nav-list a[href*=${sectionId}]`)
          .classList.remove("nav-link-active");
      }
    });
    if (scrollY > 200) header.classList.add("header-active");
    else header.classList.remove("header-active");

    if (scrollY > 350) letsTalkBtn.classList.add("lets-talk-fab");
    else letsTalkBtn.classList.remove("lets-talk-fab");
  });
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    handleScrollHighlight();
    return () => {};
  }, []);

  const toggleMenu = () => {
    let nav = document.querySelector(".nav");
    let heroFloat = document.querySelector(".hero-btn-float");
    if (menuOpen) {
      nav.classList.remove("nav-active");
      heroFloat.style.zIndex = 0;
    } else {
      nav.classList.add("nav-active");
      heroFloat.style.zIndex = -1;
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      {metaTags()}
      <div className="container">
        <StaticImage
          className="logo"
          src="../images/icon.png"
          alt="Ganesh Munisifreddy"
        />
        <div className="nav">
          <div className="nav-list">
            <a className="nav-link-active" href="#home">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <span className="ham-icon" onClick={toggleMenu}>
          {menuOpen ? <Close /> : <Menu />}
        </span>
      </div>
    </header>
  );
};

export default Header;
