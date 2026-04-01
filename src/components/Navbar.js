import React, { useState } from "react";
import "./Navbar.css";

const links = ["About", "Services", "Gallery", "Testimonials", "Contact"];

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">
          <span className="logo-mark">N</span>
          <span className="logo-text">North</span>
        </a>

        <ul className={`navbar__links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
                {l}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </li>
        </ul>

        <button
          className={`navbar__burger ${open ? "active" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}