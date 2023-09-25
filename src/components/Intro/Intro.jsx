import React from "react";
import "./Intro.css";
import introImg from "../../assets/image.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-content">
        <span>Hello,</span> <br />
        <span style={{ color: "#FFBA01" }}>I'm Shihab</span>
        <br />
        <span className="position">Front-End Developer</span>
        <p>
          I'm passinote about creating experiences that are easy to
          use,accessible, and that meet the user's need.and that meet the user's
          need.
        </p>
      </div>
      <img className="intro-img" src={introImg} alt="" />
    </section>
  );
};

export default Intro;
