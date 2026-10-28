import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Menu from '../assets/menu.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="logo">
        <h1>Kiruthika</h1>
      </div>

      <button
        className="menuIcon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img src={Menu} alt="Menu" />
      </button>

      <ul className={`list ${menuOpen ? "showMenu" : ""}`}>

        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "active" : "inactive"}
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? "active" : "inactive"}
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) => isActive ? "active" : "inactive"}
            onClick={closeMenu}
          >
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? "active" : "inactive"}
            onClick={closeMenu}
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? "active" : "inactive"}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>

      </ul>

    </nav>
  );
}