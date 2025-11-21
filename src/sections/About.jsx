import React from "react";
import "./About.css";
import avthar2 from "../assets/image/avthar-2.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-head">
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <div className="about-left">
          <img src={avthar2}></img>
        </div>
        <div className="about-right">
          <h3>A brief introduction about myself</h3>
          <p>
            I'm a passionate full-stack developer with a knack for
            problem-solving and creating intuitive, high-performance user
            experiences. My journey into technology started with a simple
            curiosity that has grown into a full-fledged career. I thrive in
            collaborative environments, enjoy turning complex problems into
            beautiful, functional code, and am always eager to leam new
            technologies to stay at the forefront of web development
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
