import * as React from "react";
import "../css/style.scss";
import Header from "../components/Header";
import Home from './Home'
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const IndexPage = () => {
  return (
    <>
      <Header/>
      <main>
        <div className="container">
          <Home/>
          <About/>
          <Work/>
          <Contact/>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
