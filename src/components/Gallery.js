import React, { useState } from "react";
import "./Gallery.css";

const items = [
  { id: 1, src: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=800&q=80", label: "Northern Highlands Retreat", cat: "Architecture" },
  { id: 2, src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80", label: "Strategic Summit 2023", cat: "Consulting" },
  { id: 3, src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", label: "DataStream Platform", cat: "Technology" },
  { id: 4, src: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=800&q=80", label: "Aurora Eco Campus", cat: "Sustainability" },
  { id: 5, src: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80", label: "Meridian Brand Launch", cat: "Design" },
  { id: 6, src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80", label: "NorthRoute Logistics Hub", cat: "Operations" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__header">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Projects That Define<br />Our Legacy</h2>
          <div className="divider" />
          <p className="section-subtitle">
            A curated selection of completed engagements — each one a testament
            to what becomes possible when expertise meets ambition.
          </p>
        </div>

        <div className="gallery__grid">
          {items.map((item) => (
            <div
              className="gallery__item"
              key={item.id}
              onClick={() => setSelected(item)}
            >
              <img src={item.src} alt={item.label} />
              <div className="gallery__hover">
                <span className="gallery__cat">{item.cat}</span>
                <h4>{item.label}</h4>
                <span className="gallery__view">View Project ↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="gallery__lightbox" onClick={() => setSelected(null)}>
          <button className="lightbox__close" onClick={() => setSelected(null)}>✕</button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.label} />
            <div className="lightbox__info">
              <span className="section-label">{selected.cat}</span>
              <h3>{selected.label}</h3>
              <p>A flagship North project demonstrating our commitment to quality, sustainability, and lasting impact. Delivered on time, on budget, and beyond expectation.</p>
              <a href="#contact" className="btn btn-primary" onClick={() => setSelected(null)}>
                Start a Similar Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}