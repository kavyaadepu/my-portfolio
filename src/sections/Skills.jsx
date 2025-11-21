import React from "react";
import "./Skills.css";
import javascript from "../assets/icons/java-script.png";
import react from "../assets/icons/react.png";
import nodejs from "../assets/icons/nodejs.png";
import python from "../assets/icons/python.png";
import tailwind from "../assets/icons/tailwind-css.webp";
import sql from "../assets/icons/sql.png";
import docker from "../assets/icons/docker.png";
import aws from "../assets/icons/aws.png";
import git from "../assets/icons/github.png";
import figma from "../assets/icons/figma.png";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <div className="my-skills">
          <h3>My Skills</h3>
        </div>
        <div className="skills-box">
          <ul>
            <li>
              <img src={javascript} />
              JavaScript
            </li>
            <li>
              <img src={react} />
              React
            </li>
            <li>
              <img src={nodejs} />
              NodeJs
            </li>
            <li>
              <img src={python} />
              Python
            </li>
            <li>
              <img src={tailwind} />
              Tailwind.Css
            </li>
            <li>
              <img src={sql} />
              PostgreSQL
            </li>
            <li>
              <img src={docker} />
              Docker
            </li>
            <li>
              <img src={aws} />
              AWS
            </li>
            <li>
              <img src={git} />
              Git
            </li>
            <li>
              <img src={figma} />
              Figma
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Skills;
