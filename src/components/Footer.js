  import React from "react";
  import "./Footer.css";

  const nav = {
    Company: ["About Us", "Our Team", "Careers", "Press & Media"],
    Services: ["Architecture", "Consulting", "Technology", "Sustainability"],
    Resources: ["Case Studies", "White Papers", "Blog", "Events"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
  };

  export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer__top container">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="logo-mark">N</span>
              <span>North</span>
            </div>
            <p className="footer__tagline">
              Built on principle. Driven by purpose.<br />Delivered with excellence.
            </p>
            <div className="footer__cert">
              <span>ISO 9001:2015 Certified</span>
              <span>B-Corp Member</span>
              <span>GreenBuild Partner</span>
            </div>
          </div>

          <div className="footer__nav">
            {Object.entries(nav).map(([section, links]) => (
              <div className="footer__col" key={section}>
                <h5>{section}</h5>
                <ul>
                  {links.map((l) => <li key={l}><a href="#!">details</a> </li>)}



                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom container">
          <p>© {new Date().getFullYear()} North Group. All rights reserved.</p>
          <p className="footer__made">
            Designed & built with intention — serving the North since 2006.
          </p>
        </div>
      </footer>
    );
  }











