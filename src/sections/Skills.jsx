import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = [
    {
      number: "01",
      title: "React Native",
      level: "PRIMARY",
      description:
        "Building responsive mobile applications for Android and iOS using React Native.",
      technologies: "ANDROID • IOS • MOBILE UI"
    },
    {
      number: "02",
      title: "React",
      level: "FRONTEND",
      description:
        "Creating reusable components and responsive interfaces using modern React.",
      technologies: "COMPONENTS • ROUTING • STATE"
    },
    {
      number: "03",
      title: "JavaScript",
      level: "CORE",
      description:
        "Writing clean application logic and interactive functionality with JavaScript.",
      technologies: "ES6+ • LOGIC • DOM"
    },
    {
      number: "04",
      title: "HTML & CSS",
      level: "FRONTEND",
      description:
        "Designing structured, responsive and user-friendly web interfaces.",
      technologies: "HTML5 • CSS3 • RESPONSIVE"
    },
    {
      number: "05",
      title: "REST API",
      level: "BACKEND INTEGRATION",
      description:
        "Integrating APIs, handling responses and connecting application data with UI.",
      technologies: "API • JSON • HTTP"
    },
    {
      number: "06",
      title: "Git & Bitbucket",
      level: "VERSION CONTROL",
      description:
        "Managing source code, branches and project changes using version control.",
      technologies: "GIT • BRANCHING • COLLABORATION"
    }
  ];

  return (
    <section className="skillsPage">

      <div className="skillsHeader">
        <div>
          <p>WHAT I WORK WITH</p>
          <h1>Skills</h1>
        </div>

        <span>03 / 05</span>
      </div>

      <div className="skillsIntro">

        <div className="skillsIntroTitle">
          <span>MY TOOLKIT</span>

          <h2>
            Technologies I use to
            <strong>build better.</strong>
          </h2>
        </div>

        <p>
          I work with modern frontend and mobile development technologies
          to create clean, responsive and practical digital experiences.
          My focus is on writing maintainable code and building interfaces
          that are simple to use.
        </p>

      </div>

      <div className="skillsGrid">

        {skills.map((skill) => (
          <div className="skillCard" key={skill.number}>

            <div className="skillCardTop">
              <span>{skill.number}</span>
              <b>↗</b>
            </div>

            <div className="skillLevel">
              {skill.level}
            </div>

            <h3>{skill.title}</h3>

            <p>{skill.description}</p>

            <div className="skillCardBottom">
              <span>{skill.technologies}</span>
            </div>

          </div>
        ))}

      </div>

      <div className="skillsBottom">

        <div className="skillsBottomNumber">
          10+
        </div>

        <div>
          <span>TECHNOLOGIES & TOOLS</span>

          <h2>
            Always learning.
            <strong>Always improving.</strong>
          </h2>
        </div>

        <p>
          I continuously explore new tools and technologies to improve
          my development skills and create better solutions.
        </p>

      </div>

    </section>
  );
}