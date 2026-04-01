import React, { useState } from "react";
import "./Contact.css";

const offices = [
  {
    city: "North Bay",
    addr: "12 Harbour Avenue, North Bay, ON P1B 2L3",
    phone: "+1 705 495 0200",
  },
  {
    city: "Edmonton",
    addr: "860 Jasper Ave, Edmonton, AB T5J 3R8",
    phone: "+1 780 412 0560",
  },
  {
    city: "Reykjavik",
    addr: "Austurstræti 17, 101 Reykjavík, Iceland",
    phone: "+354 520 7200",
  },
];

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Twitter / X", url: "https://twitter.com" },
  { name: "Instagram", url: "https://instagram.com" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => setSent(false), 4000);

    setForm({
      name: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact__grid">

        {/* LEFT SIDE */}
        <div className="contact__info">
          <span className="section-label">Get in Touch</span>

          <h2 className="section-title">
            Let's Build Something <br />
            Worth Remembering
          </h2>

          <div className="divider" />

          <p className="contact__intro">
            Whether you have a clear brief or a vague idea, we would love to
            hear from you. Our team typically responds within one business day.
          </p>

          {/* OFFICES */}
          <div className="contact__offices">
            {offices.map((o) => (
              <div className="office" key={o.city}>
                <span className="office__city">{o.city}</span>
                <p>{o.addr}</p>

                {/* FIXED tel link */}
                <a href={`tel:${o.phone.replace(/\s/g, "")}`}>
                  {o.phone}
                </a>
              </div>
            ))}
          </div>

          {/* SOCIAL LINKS (FIXED WARNING) */}
          <div className="contact__socials">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                {s.name} ↗
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <div className="success-icon">✓</div>
              <h3>Message Received</h3>
              <p>
                Thank you for reaching out. A member of our team will be in
                touch shortly.
              </p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service of Interest</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  <option>Architecture & Development</option>
                  <option>Strategic Consulting</option>
                  <option>Technology Solutions</option>
                  <option>Sustainable Development</option>
                  <option>Brand & Design</option>
                  <option>Logistics & Operations</option>
                  <option>Other / General Enquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project or challenge..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary contact-submit">
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
