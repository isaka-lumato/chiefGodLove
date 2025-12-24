import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaAward, FaUsers, FaHeart } from "react-icons/fa";

export default function AboutMeModern() {
  const achievements = [
    { number: "15+", label: "Years Experience" },
    { number: "50K+", label: "Followers Reach" },
    { number: "1K+", label: "Lives Changed" }
  ];

  return (
    <section id="AboutMe" className="about-luxury">
      <div className="container-luxury">
        <div className="about-grid">
          {/* Left Column - Image */}
          <motion.div
            className="about-image-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="image-frame-luxury">
              <img
                src="./img/hero33.jpg"
                alt="Chief Godlove"
                className="about-img"
              />
              <div className="frame-border"></div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="about-content-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="content-wrapper">
              <span className="section-label-luxury">The Story</span>

              <h2 className="section-title-luxury">
                Driven by <span className="text-gold">Faith</span>,<br />
                Defined by <span className="text-gold">Purpose</span>.
              </h2>

              <div className="quote-luxury">
                <FaQuoteLeft className="quote-icon-gold" />
                <p>
                  "True leadership isn't about power; it's about empowering others to find their own strength and walk in their divine purpose."
                </p>
              </div>

              <div className="about-text-luxury">
                <p>
                  I am <strong className="text-gold">Chief Godlove Mwakibete</strong>, a visionary leader, spiritual mentor, and entrepreneur dedicated to uplifting humanity. My mission is simple yet profound: to awaken the dormant potential within every individual I encounter.
                </p>
                <p>
                  Through years of service, I have witnessed the transformative power of faith and focused action. Whether through large-scale speaking engagements, intimate mentorship, or philanthropic ventures, I strive to leave a legacy of hope, dignity, and tangible progress for the people of Tanzania and the world.
                </p>
              </div>

              <div className="achievements-row-luxury">
                {achievements.map((item, index) => (
                  <div key={index} className="achievement-item-luxury">
                    <span className="ach-number">{item.number}</span>
                    <span className="ach-label">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="about-cta">
                <button className="btn-luxury">Read My Full Journey</button>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about-luxury {
          padding: 8rem 0;
          background-color: var(--color-black-light);
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        /* Image Styling */
        .image-frame-luxury {
          position: relative;
          padding: 20px;
        }

        .about-img {
          width: 100%;
          height: auto;
          display: block;
          filter: grayscale(100%) contrast(1.1); /* Artistic B&W look */
          transition: filter 0.5s ease;
          position: relative;
          z-index: 2;
        }

        .about-img:hover {
          filter: grayscale(0%) contrast(1); /* Color on hover */
        }

        .frame-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 1px solid var(--color-gold-500);
          z-index: 1;
          transform: translate(-20px, 20px);
          transition: transform 0.5s ease;
        }

        .image-frame-luxury:hover .frame-border {
          transform: translate(-10px, 10px);
        }

        /* Content Styling */
        .section-label-luxury {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          color: var(--color-gold-500);
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--color-gold-500);
          padding-bottom: 5px;
        }

        .section-title-luxury {
          font-family: var(--font-serif);
          font-size: 3.5rem;
          line-height: 1.1;
          color: var(--color-white);
          margin-bottom: 3rem;
        }

        .quote-luxury {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 3rem;
          border-left: 2px solid rgba(212, 175, 55, 0.3);
        }

        .quote-icon-gold {
          position: absolute;
          top: -10px;
          left: 10px;
          font-size: 1.5rem;
          color: var(--color-gold-500);
          opacity: 0.5;
        }

        .quote-luxury p {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-style: italic;
          color: var(--color-text-main);
          line-height: 1.6;
        }

        .about-text-luxury {
          margin-bottom: 3rem;
        }

        .about-text-luxury p {
          margin-bottom: 1.5rem;
          color: var(--color-text-secondary);
          line-height: 1.8;
          font-weight: 300;
        }

        /* Achievements */
        .achievements-row-luxury {
          display: flex;
          gap: 4rem;
          margin-bottom: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
        }

        .achievement-item-luxury {
          display: flex;
          flex-direction: column;
        }

        .ach-number {
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--color-gold-500);
          font-weight: 700;
        }

        .ach-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-text-muted);
          margin-top: 5px;
        }

        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .about-image-col {
            order: 2; /* Image below content on mobile? Or above? Let's keep above for now usually */
            order: 1; 
          }
          
          .about-content-col {
            order: 2;
          }

          .section-title-luxury {
            font-size: 2.5rem;
          }

          .quote-luxury {
            padding-left: 1.5rem;
          }

          .achievements-row-luxury {
            gap: 2rem;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}