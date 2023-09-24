import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img className="main-logo" src={logo} alt="logo" />
      <nav>
        <Link className="desktopMenu">Home</Link>
        <Link className="desktopMenu">About</Link>
        <Link className="desktopMenu">Portfolio</Link>
        <Link className="desktopMenu">Clients</Link>
      </nav>
      <p className="contact-btn">
        <img src={contactImg} alt="contactimg" /> Contact Me
      </p>
    </nav>
  );
};

export default NavBar;
