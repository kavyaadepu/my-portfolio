import React from "react";
import githubIcon from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import avthar from "../assets/image/avthar.png";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>
          JaneDoe-Full
          <br />
          Stact
          <br /> Developer
        </h1>
        <p>
          I build dynamic and responsive web applications from concept to
          deployment.
        </p>
        <div className="hero-btn">
          <button className="hero-btn-primary">view my work</button>
          <button className="btn-icon">
            <img src={githubIcon} />
            {/* <img src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000"></img> */}
          </button>
          <button className="btn-icon">
            <img src={linkedin}></img>
          </button>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-img">
          <img src={avthar}></img>
        </div>
      </div>
    </section>
  );
}
export default Hero;
