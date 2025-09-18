import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function MissionSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-back',
      once: true,
      mirror: false,
      offset: 50
    });
    
    // Custom animation for mission items
    const missionItems = document.querySelectorAll('.mission-list li');
    missionItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
      });
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
      });
    });
  }, []);

  return (
    <section className="mission-section" id="Mission">
      <div className="mission-wrapper">
        {/* Left: Text */}
        <div 
          className="mission-text"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 
            className="mission-title"
            data-aos="flip-down"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Mission & Impact
          </h2>
          <p 
            className="mission-intro"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Chief Godlove's mission is to create a world where no one is left behind. He strives to:
          </p>
          
          <ul className="mission-list">
            <li 
              data-aos="fade-right" 
              data-aos-delay="400"
              data-aos-offset="0"
              data-aos-anchor-placement="center-bottom"
            >
              <span className="mission-icon">🎯</span> <strong>Eradicate poverty</strong> among vulnerable communities
            </li>
            <li 
              data-aos="fade-right" 
              data-aos-delay="500"
              data-aos-offset="0"
              data-aos-anchor-placement="center-bottom"
            >
              <span className="mission-icon">💡</span> <strong>Motivate youth</strong> to become independent and socially responsible
            </li>
            <li 
              data-aos="fade-right" 
              data-aos-delay="600"
              data-aos-offset="0"
              data-aos-anchor-placement="center-bottom"
            >
              <span className="mission-icon">🙏</span> <strong>Offer spiritual healing</strong> and restore hope
            </li>
            <li 
              data-aos="fade-right" 
              data-aos-delay="700"
              data-aos-offset="0"
              data-aos-anchor-placement="center-bottom"
            >
              <span className="mission-icon">⚖️</span> <strong>Champion human rights</strong> and inclusive governance
            </li>
          </ul>
        </div>

        {/* Right: Image with layered animation */}
        <div 
          className="mission-image"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1200"
        >
          <div 
            className="image-container"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="800"
          >
            <img src="./img/mission.png" alt="Mission Godlove" />
          </div>
          <div 
            className="image-overlay"
            data-aos="fade-in"
            data-aos-delay="800"
            data-aos-duration="1000"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;