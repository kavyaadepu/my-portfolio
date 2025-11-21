import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <button></button>
          JaneDoe
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

          <li className="contact-button">Contact Me</li>
        </ul>

        {/* <button className="contact-btn">Contact Me</button> */}
      </div>
    </nav>
  );
}

export default Navbar;
