import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footerTop">

        <div className="footerHeading">
          <p className="footerSmallTitle">LET'S CREATE TOGETHER</p>

          <h2>
            LET'S BUILD
            <span>SOMETHING GREAT.</span>
          </h2>

          <p className="footerDescription">
            Have an idea, project, or opportunity in mind?
            Let's turn it into something meaningful together.
          </p>

          <NavLink to="/contact" className="talkButton">
            Let's Talk <span>→</span>
          </NavLink>
        </div>

      </div>

      <div className="footerContent">

        <div className="footerBrand">
          <h3>KIRUTHIKA</h3>

          <p className="footerRole">
            React Native Developer
          </p>

          <p className="footerText">
            Creating clean, responsive and user-friendly
            digital experiences.
          </p>
        </div>

        <div className="footerLinks">
          <h4>EXPLORE</h4>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footerConnect">
          <h4>CONNECT</h4>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:yourmail@example.com">
            Email
          </a>
        </div>

        <div className="footerStatus">
          <span className="statusDot"></span>
          <span>AVAILABLE FOR</span>
          <strong>OPPORTUNITIES</strong>
        </div>

      </div>

      <div className="footerBottom">

        <p>
          © 2026 Kiruthika. All Rights Reserved.
        </p>

        <p>
          Built with <span>React</span>
        </p>

      </div>

    </footer>
  );
}