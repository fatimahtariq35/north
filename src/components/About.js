import React from "react";
import "./About.css";

const pillars = [
  { icon: "◈", title: "Integrity First", desc: "Every decision we make is grounded in transparency and trust — with our clients, our partners, and our community." },
  { icon: "◉", title: "Northern Roots", desc: "Born and raised in the North, we carry a deep understanding of the land, the people, and the opportunities unique to this region." },
  { icon: "◌", title: "Relentless Quality", desc: "We hold every project to the highest standard, delivering outcomes that exceed expectations and endure the test of time." },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__grid">
        <div className="about__visual">
          <div className="about__img-frame">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
              alt="Modern northern office interior"
            />
          </div>
          <div className="about__accent-card">
            <strong>18+</strong>
            <span>Years of Northern Excellence</span>
          </div>
          <div className="about__img-sm">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
              alt="Team collaboration"
            />
          </div>
        </div>

        <div className="about__content">
          <span className="section-label">About Us</span>
          <h2 className="section-title">Built on Principle,<br />Driven by Purpose</h2>
          <div className="divider" />
          <p className="about__body">
            North was founded on the belief that great work requires more than
            skill — it demands a deep sense of responsibility. Since our founding,
            we have partnered with clients across industries to transform ambition
            into tangible results. We are not simply a service provider; we are a
            long-term partner invested in your success.
          </p>
          <p className="about__body">
            Our team brings together strategists, designers, engineers, and
            advisors who share a singular commitment: to deliver work that matters.
            Every project we take on reflects who we are and what we stand for.
          </p>

          <div className="about__pillars">
            {pillars.map((p) => (
              <div className="pillar" key={p.title}>
                <span className="pillar__icon">{p.icon}</span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary">Work With Us</a>
        </div>
      </div>
    </section>
  );
}