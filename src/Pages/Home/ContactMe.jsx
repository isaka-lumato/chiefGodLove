import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function AchievementsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quad',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className="achievements-section" id="Achievements">
      <div className="achievements-container">
        {/* Left: Image with staggered animations */}
        <div 
          className="achievements-image-box"
          data-aos="fade-right"
          data-aos-delay="150"
        >
          <img 
            src="./img/car.png" 
            alt="Achievement" 
            className="achievement-img"
            data-aos="zoom-in"
            data-aos-delay="300"
          />
          <p 
            className="image-caption"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Turning Dreams into Reality
          </p>
        </div>

        {/* Right: Achievements Text with staggered animations */}
        <div 
          className="achievements-text-box"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <h2 data-aos="fade-down" data-aos-delay="250">
            🏆 Recognition & Achievements
          </h2>
          
          <ul className="achievement-list">
            <li data-aos="fade-up" data-aos-delay="350">
              <span>»</span> <strong>Winner of “Best Motivational Speaker in Africa” (2025):</strong>
              <br />
              Honored for inspiring transformation across the continent.
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <span>»</span> <strong>Hosted 100+ seminars:</strong> Delivered motivational workshops across Tanzania.
            </li>
            <li data-aos="fade-up" data-aos-delay="450">
              <span>»</span> <strong>Built a business empire:</strong> Offering solutions in multiple industries.
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              <span>»</span> <strong>Established a volunteer network:</strong> Supporting vulnerable communities.
            </li>
            <li data-aos="fade-up" data-aos-delay="550">
              <span>»</span> <strong>Created a multimedia platform:</strong> Influencing hearts and minds across Africa.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;