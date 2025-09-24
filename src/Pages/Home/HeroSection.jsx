import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const titles = [
  "Visionary Leader",
  "Transformational Speaker", 
  "Spiritual Guide",
  "Community Builder"
];

const stats = [
  { number: "10K+", label: "Lives Transformed" },
  { number: "50+", label: "Speaking Events" },
  { number: "15+", label: "Years Experience" }
];

export default function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="heroSection" className="hero--section modern-hero">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <div className="hero-greeting">
            <span className="greeting-text">Welcome!</span>
          </div>
          
          <div className="hero-intro">
            <p className="hero-name">I'm Godlove Mwakibete</p>
          </div>
          
          <h1 className="hero--section--title modern-title">
            <span className="hero--section-title--color dynamic-text">
              {titles[currentTitleIndex]}
            </span>
          </h1>
          
          <p className="hero--section-description modern-description">
            Empowering lives through faith, purpose, and leadership. Standing 
            for hope, transformation, and the dignity of all people. Join me in 
            creating positive change across Tanzania and beyond.
          </p>

          <div className="hero-actions">
            <Link 
              to="footer" 
              smooth={true} 
              duration={500} 
              className="btn btn-primary modern-btn"
            >
              Get In Touch
            </Link>
            <Link 
              to="AboutMe" 
              smooth={true} 
              duration={500} 
              className="btn btn-secondary modern-btn-outline"
            >
              <span className="play-icon">▶</span>
              Watch My Story
            </Link>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hero--section--img modern-hero-img">
        <div className="image-background-shape modern-bg-shape">
          <div className="hero-image-container">
            <img 
              className="hero-person-image modern-hero-image" 
              src="./img/hero43.png" 
              alt="Chief Godlove - Tanzanian Leader and Visionary" 
            />
            <div className="image-overlay"></div>
          </div>
          <div className="floating-elements">
            <div className="floating-card card-1">
              <span className="card-icon">🌟</span>
              <span className="card-text">Award Winner</span>
            </div>
            <div className="floating-card card-2">
              <span className="card-icon">💡</span>
              <span className="card-text">Innovative</span>
            </div>
            <div className="floating-card card-3">
              <span className="card-icon">🤝</span>
              <span className="card-text">Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
