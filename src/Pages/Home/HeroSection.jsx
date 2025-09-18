import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const titles = [
  "Motivational Speaker",
  "Spiritual Healer",
  "Respected Prophet",
];

export default function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Godlove Mwakibete</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color fade-text">
              {titles[currentTitleIndex]}
            </span>
          </h1>
          <p className="hero--section-description">
          Empowering lives through faith, purpose, and leadership.
          Standing for hope, transformation, and the dignity of all people.
          </p>
        </div>
        <Link to="footer" smooth={true} duration={500} className="btn btn-primary">Get In Touch</Link>
      </div>

      <div className="hero--section--img modern-hero-img">
        <div className="image-background-shape">
          <img className="hero-person-image" src="./img/hero43.png" alt="Hero Section" />
          <img className="sparkle sparkle-top-left" src="./img/sparkl.png" alt="" />
          <img className="sparkle sparkle-bottom-right" src="./img/sparkl.png" alt="" />
        </div>
      </div>
    </section>
  );
}
