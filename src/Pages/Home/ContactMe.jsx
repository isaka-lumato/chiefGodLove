import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";

function AchievementsSection() {
  const awards = [
    { title: "Best Motivational Speaker in Africa", year: "2025", desc: "Honored for inspiring transformation across the continent.", icon: <FaTrophy /> },
    { title: "Excellence in Leadership", year: "2024", desc: "For outstanding contribution to youth empowerment.", icon: <FaMedal /> },
    { title: "Community Impact Award", year: "2023", desc: "Recognized for building sustainable support systems.", icon: <FaStar /> },
  ];

  return (
    <section className="achievements-luxury" id="Achievements">
      <div className="container-luxury">
        <div className="achievements-grid">
          {/* Left: Content */}
          <motion.div
            className="achievements-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label-luxury">Excellence</span>
            <h2 className="section-title-luxury">
              Recognition & <span className="text-gold">Honors</span>
            </h2>

            <div className="awards-list">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="award-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                >
                  <div className="award-icon">{award.icon}</div>
                  <div className="award-details">
                    <span className="award-year">{award.year}</span>
                    <h4>{award.title}</h4>
                    <p>{award.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="achievements-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-frame-luxury-alt">
              <img src="./img/car.png" alt="Achievements" />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .achievements-luxury {
          padding: 8rem 0;
          background: #080808;
          position: relative;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 6rem;
          align-items: center;
        }

        .award-item {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          background: rgba(255, 255, 255, 0.02);
          padding: 1.5rem;
          border-left: 1px solid rgba(212, 175, 55, 0.3);
          transition: all 0.3s ease;
        }

        .award-item:hover {
          background: rgba(212, 175, 55, 0.05);
          border-left-color: var(--color-gold-500);
        }

        .award-icon {
          font-size: 2rem;
          color: var(--color-gold-500);
          margin-top: 5px;
        }

        .award-year {
          display: block;
          font-family: var(--font-serif);
          color: var(--color-text-muted);
          margin-bottom: 0.5rem;
        }

        .award-details h4 {
          font-size: 1.25rem;
          color: var(--color-white);
          margin-bottom: 0.5rem;
        }

        .award-details p {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .image-frame-luxury-alt {
          position: relative;
          border: 10px solid rgba(255, 255, 255, 0.05);
        }

        .image-frame-luxury-alt img {
          width: 100%;
          display: block;
          filter: sepia(20%) contrast(1.1);
        }

        @media (max-width: 960px) {
          .achievements-grid {
            grid-template-columns: 1fr;
          }
          
          .achievements-image {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}

export default AchievementsSection;