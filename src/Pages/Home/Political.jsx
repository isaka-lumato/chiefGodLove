import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function PoliticalSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-back',
      once: true,
      mirror: false,
      offset: 50
    });
  }, []);

  return (
    <section className="political-section" id="Politics">
      <div className="political-container">
        {/* Left: Text with sequential animations */}
        <div className="political-text">
          <h2 
            className="political-heading" 
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-anchor-placement="top-center"
          >
            New Political Ambition
          </h2>
          
          <h3 
            className="political-subheading"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
          >
            Standing for MP 2025
          </h3>
          
          <p 
            className="political-description"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="700"
          >
            <strong>Chief Godlove</strong> has officially declared his candidacy for Member of Parliament (MP) with the
            vision of bringing real change within government systems. His aim is to:
          </p>

          <ul className="political-goals">
            <li 
              data-aos="fade-right" 
              data-aos-delay="400"
              data-aos-offset="20"
            >
              <strong>Fight for human rights and justice for all</strong>
            </li>
            <li 
              data-aos="fade-right" 
              data-aos-delay="450"
              data-aos-offset="20"
            >
              <strong>Uplift the poor and voiceless</strong>
            </li>
            <li 
              data-aos="fade-right" 
              data-aos-delay="500"
              data-aos-offset="20"
            >
              <strong>Drive inclusive policies that protect dignity for all people</strong>
            </li>
          </ul>

          <div 
            className="political-quote"
            data-aos="zoom-in-up"
            data-aos-delay="600"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          >
            <p>
              “I believe that by entering government, I can bring the voice of the people to power, stand up for equality, and ensure every Tanzanian is treated with fairness and dignity.”
            </p>
            <span>– Chief Godlove</span>
          </div>
        </div>

        {/* Right: Image with parallax effect */}
        <div 
          className="political-image"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
        >
          <img 
            src="./img/poli.png" 
            alt="Chief Godlove MP 2025" 
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="800"
          />
        </div>
      </div>
    </section>
  );
}

export default PoliticalSection;