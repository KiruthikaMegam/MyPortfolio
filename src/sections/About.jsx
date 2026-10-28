import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="aboutPage">

      <div className="aboutHeader">
        <div>
          <p>GET TO KNOW ME</p>
          <h1>About Me</h1>
        </div>

        <span>02 / 05</span>
      </div>

      <div className="aboutMain">

        <div className="aboutIntro">
          <span className="aboutLabel">A LITTLE ABOUT ME</span>

          <h2>
            Building with
            <span>purpose & curiosity.</span>
          </h2>
        </div>

        <div className="aboutDescription">

          <p>
            I am a dedicated developer interested in creating clean,
            responsive and user-friendly digital experiences. I enjoy
            turning ideas into practical applications and continuously
            improving the way people interact with technology.
          </p>

          <p>
            My professional journey started with mobile application
            development using React Native. Through real-world projects,
            I gained experience in building interfaces, integrating APIs,
            handling application logic and solving development challenges.
          </p>

          <p>
            I am currently expanding my skills into web development,
            exploring modern frontend technologies and looking forward
            to working on challenging projects where I can learn,
            contribute and grow.
          </p>

        </div>

      </div>

      <div className="aboutCards">

        <div className="aboutCard">
          <div className="aboutCardTop">
            <span>01</span>
            <b>↗</b>
          </div>

          <h3>Mobile Development</h3>

          <p>
            Building practical mobile applications with React Native
            for Android and iOS platforms.
          </p>

          <div className="aboutCardLine"></div>

          <span className="aboutTechnology">REACT NATIVE</span>
        </div>

        <div className="aboutCard">
          <div className="aboutCardTop">
            <span>02</span>
            <b>↗</b>
          </div>

          <h3>Web Development</h3>

          <p>
            Creating responsive interfaces using React, JavaScript,
            HTML and CSS with a focus on usability.
          </p>

          <div className="aboutCardLine"></div>

          <span className="aboutTechnology">REACT / JAVASCRIPT</span>
        </div>

        <div className="aboutCard">
          <div className="aboutCardTop">
            <span>03</span>
            <b>↗</b>
          </div>

          <h3>Continuous Learning</h3>

          <p>
            Exploring new technologies, improving development skills
            and learning through real-world projects.
          </p>

          <div className="aboutCardLine"></div>

          <span className="aboutTechnology">ALWAYS LEARNING</span>
        </div>

      </div>

      <div className="aboutBottom">

        <div>
          <span>MY APPROACH</span>

          <h2>
            Simple ideas.
            <strong>Meaningful experiences.</strong>
          </h2>
        </div>

        <p>
          I believe good development is about more than writing code.
          It is about understanding the problem, keeping the experience
          simple and creating something useful.
        </p>

      </div>

    </section>
  );
}