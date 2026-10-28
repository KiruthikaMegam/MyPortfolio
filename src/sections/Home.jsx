import React from "react";
import "./Home.css";
import Profile from "../assets/profile.jpg";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <section className="homePage">

      <div className="homeLeft">

        <div className="homeAvailable">
          <span></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <p className="homeWelcome">HELLO, I'M</p>

        <h1>
          Kiruthika
          <span>Developer</span>
        </h1>

        <h3>React Native & Web Developer</h3>

        <p className="homeDescription">
          I turn ideas into digital experiences. I combine creativity
          and technology to build responsive, interactive and
          user-friendly applications that solve real-world problems.
        </p>

        <div className="homeButtons">
          <NavLink to="/Projects" className="homeProjectBtn">
            View Projects
            <span>↗</span>
          </NavLink>

          <NavLink to="/Contact" className="homeContactBtn">
            Let's Talk
          </NavLink>
        </div>

        <div className="homeStats">

          <div className="homeStat">
            <strong>01+</strong>
            <span>Years Experience</span>
          </div>

          <div className="homeStatLine"></div>

          <div className="homeStat">
            <strong>03+</strong>
            <span>Projects</span>
          </div>

          <div className="homeStatLine"></div>

          <div className="homeStat">
            <strong>10+</strong>
            <span>Technologies</span>
          </div>

        </div>

        <div className="homeSocial">
          <span>CONNECT</span>

          <a
            href="https://github.com/KiruthikaMegam"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <i></i>

          <a href="mailto:kiruthisekar97@gmail.com">
            Email
          </a>
        </div>

      </div>

      <div className="homeRight">

        <div className="homeCircle"></div>

        <div className="homeImageNumber">
          01
        </div>

        <div className="homeImage">
          <img src={Profile} alt="Kiruthika" />
        </div>

        <div className="homeImageInfo">
          <span>BASED IN</span>
          <strong>INDIA</strong>
        </div>

      </div>

    </section>
  );
}