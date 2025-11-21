import React from "react";
import ecommerce from "../assets/image/e-com.png";
import task from "../assets/image/task.jpg";
import data from "../assets/image/data.jpg";
import "./Project.css";

function Project() {
  return (
    <section id="projects" className="projects">
      <div className="project-head">
        <h3>My Projects</h3>
      </div>
      <div className="project-content">
        <div className="project-img">
          <img src={ecommerce} />
          <h4>E-Commerece Platform</h4>
          <p>
            A full-stack e-commerce solution with features like product
            management, user authentication, and a Stripe-integrated checkout
            process.
          </p>
          <span class="tech">React</span>
          <span class="tech">Node.js</span>
          <span class="tech">PostgreSQL</span>
          <div className="links">
            <h6>LiveDemo</h6>
            <h6>SourceCode</h6>
          </div>
        </div>
        <div className="project-img">
          <img src={task} />
          <h4>Task Management App</h4>
          <p>
            A collaborative task management tool with drag-and-drop
            functionality, real-time updates, and user-specific dashboards.
          </p>
          <span class="tech">Vue.js</span>
          <span class="tech">Firebase</span>
          <span class="tech">Tailwind CSS</span>
          <div className="links">
            <h6>LiveDemo</h6>
            <h6>SourceCode</h6>
          </div>
        </div>
        <div className="project-img">
          <img src={data} />
          <h4>Data Visualization API</h4>
          <p>
            A RESTful API built with Python and Flask that serves processed data
            for a dynamic front-end charting library
          </p>
          <span class="tech">Python</span>
          <span class="tech">Flask</span>
          <span class="tech">D3.js</span>
          <div className="links">
            <h6>View on GitHub</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Project;
