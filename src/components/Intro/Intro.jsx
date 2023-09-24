import React from "react";
import "./Intro.css";
import introImg from "../../assets/image.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-content">
        <span>Hello,</span> <br />
        <span>I'm Shihab</span>
        <br />
        <span>Front-End Developer</span>
        <br />
        <span>
          I'm passinote about creating experiences that are easy to
          use,accessible, and that meet the user's need
        </span>
      </div>
      <img src={introImg} alt="" />
    </section>
  );
};

export default Intro;
