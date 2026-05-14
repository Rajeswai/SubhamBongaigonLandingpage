import React, { useState } from "react";
import "../App.css";
import logo from "../assets/images/logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Overview",
    "Amenities",
    "Walkthrough",
    "Gallery",
    "Plan",
    "Location",
    "About Us",
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-box">
          <img src={logo} alt="Subham Park Bongaigaon Logo" className="navbar-logo" />

          <div className="brand-text">
            <h1>Subham Park</h1>
            <p>Bongaigaon</p>
          </div>
        </div>

        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="navbar-btn">
          Enquire Now
        </a>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;