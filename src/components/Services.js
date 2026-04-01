import React, { useState } from "react";
import "./Services.css";

const services = [
  {
    num: "01",
    icon: "🏗",
    title: "Architecture & Development",
    desc: "From concept to completion, we design and build spaces that are structurally sound, aesthetically refined, and built to stand for generations.",
    features: ["Commercial Buildings", "Residential Design", "Urban Planning", "Renovation & Restoration"],
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
  {
    num: "02",
    icon: "📐",
    title: "Strategic Consulting",
    desc: "Our advisors bring decades of cross-industry experience to help organizations navigate complexity, seize opportunities, and build lasting competitive advantage.",
    features: ["Market Entry Strategy", "Operational Excellence", "Growth Advisory", "Risk Management"],
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
  },
  {
    num: "03",
    icon: "💡",
    title: "Technology Solutions",
    desc: "We engineer digital products and platforms that solve real problems, scale with ambition, and deliver measurable value from day one.",
    features: ["Custom Software", "Cloud Infrastructure", "Data & Analytics", "Cybersecurity"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    num: "04",
    icon: "🌿",
    title: "Sustainable Development",
    desc: "We integrate environmental responsibility into every project, ensuring that growth today does not compromise opportunity for tomorrow.",
    features: ["Green Building", "Carbon Footprint Audit", "Renewable Energy", "Eco-Certification"],
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
  },
  {
    num: "05",
    icon: "🎨",
    title: "Brand & Design",
    desc: "We craft visual identities and brand experiences that communicate authority, build recognition, and forge genuine emotional connections with your audience.",
    features: ["Brand Identity", "UI/UX Design", "Marketing Collateral", "Digital Campaigns"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
  {
    num: "06",
    icon: "📦",
    title: "Logistics & Operations",
    desc: "Optimised supply chains, streamlined logistics networks, and operational frameworks that keep your business moving — efficiently and reliably.",
    features: ["Supply Chain Design", "Warehouse Solutions", "Fleet Management", "Process Optimisation"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <div>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">A Complete Range of<br />Northern Expertise</h2>
          </div>
          <p className="section-subtitle">
            Six pillars of service, each led by specialists who have spent their careers
            mastering their craft — so you don't have to look elsewhere.
          </p>
        </div>

        <div className="divider" />

        <div className="services__grid">
          {services.map((s) => (
            <div
              key={s.num}
              className={`service-card ${active === s.num ? "active" : ""}`}
              onClick={() => setActive(active === s.num ? null : s.num)}
            >
              <div className="service-card__img">
                <img src={s.img} alt={s.title} />
                <div className="service-card__num">{s.num}</div>
              </div>
              <div className="service-card__body">
                <div className="service-card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-card__features">
                  {s.features.map((f) => (
                    <li key={f}><span className="feat-dot">▸</span>{f}</li>
                  ))}
                </ul>
                <span className="service-card__cta">Learn More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}