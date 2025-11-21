import React from "react";
import "./Footer.css";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Jane Doe. All rights reserved.</p>

      <div className="footer-last">
        <div className="footer-icons">
          <img src={github} />
        </div>
        <div className="footer-icons2">
          <img src={linkedin} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
