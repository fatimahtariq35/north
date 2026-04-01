import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <img 
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1800&q=80"
          alt="Northern cityscape skyline"
          className="hero__img"
        />
        <div className="hero__overlay" />
        <div className="hero__grain" />
      </div>

      <div className="hero__content container">
        <div className="hero__badge fade-up d1">
          <span className="badge-dot" />
          Established in the Heart of the North
        </div>

        <h1 className="hero__title fade-up d2">
          Where Vision Meets <br />
          <em>Northern Excellence</em>
        </h1>

        <p className="hero__desc fade-up d3">
          North delivers world-class solutions crafted for those who refuse to
          compromise. From bold architecture to refined experiences — we build what
          others only imagine.
        </p>

        <div className="hero__actions fade-up d4">
          <a href="#services" className="btn btn-primary">Explore Services</a>
          <a href="#about" className="btn btn-outline hero-outline">Our Story</a>
        </div>

        <div className="hero__stats fade-up d4">
          {[
            { number: "340+", label: "Projects Delivered" },
            { number: "18 yrs", label: "Industry Experience" },
            { number: "92%", label: "Client Retention" },
          ].map((s) => (
            <div className="hero__stat" key={s.label}>
              <strong>{s.number}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}