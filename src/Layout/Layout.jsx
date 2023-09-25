import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Intro from "../components/Intro/Intro";
import Works from "../components/Works/Works";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Intro></Intro>
      <Works></Works>
    </div>
  );
};

export default Layout;
