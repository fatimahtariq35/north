import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const reviews = [
  {
    name: "Margaret Linden",
    role: "CEO, Arctis Capital",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    quote:
      "North transformed how we think about growth. Their consulting team brought clarity to a situation that felt impossibly complex. We entered new markets in three countries within fourteen months — results we could not have achieved alone.",
    rating: 5,
  },
  {
    name: "James Okafor",
    role: "Director of Operations, PolarGrid Inc.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    quote:
      "The logistics framework North designed for us reduced our overhead by 23% in the first year. Beyond the numbers, they were genuine partners throughout — always available, always thoughtful.",
    rating: 5,
  },
  {
    name: "Sophia Brennan",
    role: "Head of Product, TundraLabs",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    quote:
      "I have worked with many agencies over my career, but North's technology team stands apart. They delivered a platform that performs beautifully under load and has scaled with us without incident.",
    rating: 5,
  },
  {
    name: "Erik Haugen",
    role: "Founder, Boreal Ventures",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    quote:
      "When we commissioned North for our headquarters design, we expected competence. What we received was brilliance. Every detail was considered. Our team now works in a space that genuinely inspires them.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = reviews.length;

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 5500);
    return () => clearInterval(t);
  }, [total]);

  const r = reviews[idx];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__bg">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=60"
          alt="Northern mountain landscape"
        />
        <div className="testimonials__overlay" />
      </div>

      <div className="container testimonials__inner">
        <div className="testimonials__left">
          <span className="section-label" style={{ color: "var(--gold-light)" }}>Client Voices</span>
          <h2 className="section-title" style={{ color: "#fff" }}>
            Trusted by Leaders<br />Across Industries
          </h2>
          <div className="divider" />
          <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 320, lineHeight: 1.8, fontSize: "0.95rem" }}>
            Our measure of success is simple: the success of those who trust us.
            Here is what they say.
          </p>

          <div className="testimonials__dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === idx ? "active" : ""}`}
                onClick={() => setIdx(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="testimonials__card-wrap">
          <div className="testimonials__card" key={idx}>
            <div className="stars">
              {"★".repeat(r.rating)}
            </div>
            <blockquote>"{r.quote}"</blockquote>
            <div className="reviewer">
              <img src={r.avatar} alt={r.name} />
              <div>
                <strong>{r.name}</strong>
                <span>{r.role}</span>
              </div>
            </div>
          </div>

          <div className="testimonials__nav">
            <button onClick={() => setIdx((idx - 1 + total) % total)} aria-label="Previous">←</button>
            <span>{String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
            <button onClick={() => setIdx((idx + 1) % total)} aria-label="Next">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}