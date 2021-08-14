import * as React from "react";
import "../css/style.scss";
import Home from "./Home";
import MetaTags from "../components/MetaTags";

const IndexPage = () => {
  return (
    <>
      <MetaTags />
      <Home />
    </>
  );
};

export default IndexPage;
