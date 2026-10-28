import React from "react";
import "./Projects.css";
import { NavLink } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      number: "01",
      category: "MOBILE APPLICATION",
      title: "Zinger",
      subtitle: "Jewellery ERP",
      description:
        "A mobile-based jewellery management application designed for saving schemes, retail operations and e-commerce functionality.",
      technologies: "REACT NATIVE • REST API • ANDROID",
      type: "Featured Project",
      link: "https://zinger.co.in/"
    },
    {
      number: "02",
      category: "MOBILE APPLICATION",
      title: "enProject",
      subtitle: "Project Management",
      description:
        "A project management application for handling tickets, attendance, tasks, client interactions and financial reports.",
      technologies: "REACT NATIVE • JAVASCRIPT • API",
      type: "Project Management",
      link: "https://enproject.in/"
    },
    {
      number: "03",
      category: "WEB APPLICATION",
      title: "SaaS",
      subtitle: "Management Dashboard",
      description:
        "A responsive SaaS dashboard with user management, subscriptions, plans, usage, revenue and analytics.",
      technologies: "REACT • JAVASCRIPT • CSS",
      type: "Dashboard",
      link: "https://saas-management-rosy.vercel.app/"
    },
    {
      number: "04",
      category: "WEB APPLICATION",
      title: "VÉNORA",
      subtitle: "Fitness Dashboard",
      description:
        "A modern gym management dashboard for managing members, trainers, memberships, attendance, workouts and payments.",
      technologies: "REACT • CSS • CRUD",
      type: "Dashboard",
      link: "https://ecom-gym-dashboard.vercel.app/"
    },
    {
      number: "05",
      category: "WEB APPLICATION",
      title: "Tourist",
      subtitle: "Travel Management",
      description:
        "A travel-focused web application designed for exploring destinations, managing trips, bookings and customer information.",
      technologies: "REACT • JAVASCRIPT • CSS",
      type: "Travel Application",
      link: "https://tourist-web-page-one.vercel.app/"
    },
    {
      number: "06",
      category: "WEB APPLICATION",
      title: "RealEstate",
      subtitle: "Property Management",
      description:
        "A real estate platform for showcasing properties, managing property details and creating a smooth browsing experience.",
      technologies: "REACT • JAVASCRIPT • CSS",
      type: "Real Estate",
      link: "https://real-estate-dashboard-two-nu.vercel.app/"
    },
    {
      number: "07",
      category: "WEB APPLICATION",
      title: "JewelleryShop",
      subtitle: "Jewellery E-Commerce",
      description:
        "A jewellery shopping application featuring product browsing, categories, product details and a responsive shopping experience.",
      technologies: "REACT • JAVASCRIPT • CSS",
      type: "E-Commerce",
      link: "https://jewellery-shop-lilac.vercel.app/"
    },
    {
      number: "08",
      category: "WEB APPLICATION",
      title: "Ecom",
      subtitle: "E-Commerce Platform",
      description:
        "A responsive e-commerce application for browsing products, managing shopping experiences and presenting products through a modern interface.",
      technologies: "REACT • JAVASCRIPT • CSS",
      type: "E-Commerce",
      link: "https://ecom-lime-zeta.vercel.app/"
    },
    {
      number: "09",
      category: "WEB APPLICATION",
      title: "Authentication",
      subtitle: "User Access Dashboard",
      description:
        "An authentication and user access dashboard with login, registration, password recovery, profile management and user administration.",
      technologies: "REACT • JAVASCRIPT • CSS • LOCAL STORAGE",
      type: "Authentication Dashboard",
      link: "https://authentication-dashboard-phi.vercel.app/login"
    }
  ];

  return (
    <section className="projectsPage">

      <div className="projectsHeader">
        <div>
          <p>SELECTED WORK</p>
          <h1>Projects</h1>
        </div>

        <span>04 / 05</span>
      </div>

      <div className="projectsIntro">

        <div className="projectsIntroTitle">
          <span>WHAT I'VE BUILT</span>

          <h2>
            Turning ideas into
            <strong>real products.</strong>
          </h2>
        </div>

        <p>
          Here are some of the applications and dashboards I have worked
          on using React Native, React, JavaScript and modern frontend
          technologies.
        </p>

      </div>

      <div className="projectsList">

        {projects.map((project) => (
          <article className="projectCard" key={project.number}>

            <div className="projectNumber">
              {project.number}
            </div>

            <div className="projectMain">

              <div className="projectMeta">
                <span>{project.category}</span>
                <small>{project.type}</small>
              </div>

              <h2>{project.title}</h2>

              <h3>{project.subtitle}</h3>

              <p>{project.description}</p>

              <div className="projectTechnology">
                {project.technologies}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="projectLink"
              >
                View Project
                <span>↗</span>
              </a>

            </div>

            <div className="projectArrow">
              ↗
            </div>

          </article>
        ))}

      </div>

      <div className="projectsBottom">

        <div className="projectsBottomNumber">
          09+
        </div>

        <div>
          <span>PROJECT EXPERIENCE</span>

          <h2>
            More ideas.
            <strong>More to build.</strong>
          </h2>
        </div>

        <div className="projectsBottomAction">
          <p>
            Interested in working together or have a project idea?
          </p>

          <NavLink to="/contact">
            Let's Talk
            <span>↗</span>
          </NavLink>
        </div>

      </div>

    </section>
  );
}