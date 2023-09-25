import React from "react";
import "./Works.css";
import uiimg from "../../assets/ui-design.png";
import webimg from "../../assets/website-design.png";
import appimg from "../../assets/app-design.png";

const Works = () => {
  return (
    <section id="works">
      <div className="workes-heading">
        <h3>What i Do</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          sequi at! Quos fuga soluta architecto tempore assumenda veritatis,
          enim culpa?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Et, necessitatibus.
        </p>
      </div>
      <div className="works-card">
        <div className="card-img">
          <img src={uiimg} alt="" />
        </div>
        <div className="card-content">
          <h3>UI/UX Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            excepturi velit, praesentium unde saepe omnis quam quidem dolor
          </p>
        </div>
      </div>
      <div className="works-card">
        <div className="card-img">
          <img src={webimg} alt="" />
        </div>
        <div className="card-content">
          <h3>Website Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            excepturi velit, praesentium unde saepe omnis quam quidem dolor
          </p>
        </div>
      </div>
      <div className="works-card">
        <div className="card-img">
          <img src={appimg} alt="" />
        </div>
        <div className="card-content">
          <h3>App Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            excepturi velit, praesentium unde saepe omnis quam quidem dolor
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
