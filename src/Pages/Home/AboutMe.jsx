import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section id="AboutMe" className="aboutme-section" data-aos="fade-up">
      <div className="aboutme-container">
        {/* Left column: photo */}
        <div className="aboutme-image-col">
          <img src="./img/hero33.jpg" alt="Chief Godlove" className="aboutme-photo" />
        </div>

        {/* Right column: floating card */}
        <div className="aboutme-card-col">
          <div className="aboutme-card">
            <p className="aboutme-subtitle">About Me!</p>
            <h2 className="aboutme-name">Chief Godlove</h2>

            <p className="aboutme-text">
              Godlove Jackob Mwakibete, widely recognized as <strong>Chief Godlove</strong>, is a dynamic philanthropist, visionary spiritual healer, award-winning motivational speaker, and a respected prophet. He is the founder and driving force behind transformative ventures that uplift marginalized communities, empower youth, and inspire hope across Tanzania and beyond.
            </p>

            <p className="aboutme-text">
              From humble beginnings in Mbeya, Chief Godlove has risen to national and continental prominence through relentless dedication to social impact, spiritual guidance, and economic empowerment. His journey is one of faith, vision, and action — touching thousands of lives through his ministry, charitable efforts, and public engagements.
            </p>

            {/* Visible Keywords */}
            <div className="aboutme-keywords" style={{ marginTop: "15px", fontSize: "0.9rem", color: "#666" }}>
              <strong>Tags:</strong> Freemason, Illuminati, Devil worshiper, Tanzania freemason, Tanzania illuminati, 
              Nguvu ya pesa na jicho la tatu, Chief godlove, Chiefgodlovebillionaire, 666
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
