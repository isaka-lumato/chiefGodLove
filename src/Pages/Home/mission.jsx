import React from "react";
import { motion } from "framer-motion";

function MissionSection() {
  const missionPoints = [
    { title: "Eradicate Poverty", text: "Empowering vulnerable communities through sustainable economic initiatives." },
    { title: "Youth Empowerment", text: "Mentoring the next generation of leaders to be independent and socially responsible." },
    { title: "Spiritual Healing", text: "Restoring hope and purpose through faith-based guidance." },
    { title: "Human Rights", text: "Championing dignity and inclusive governance for all." }
  ];

  return (
    <section className="mission-luxury" id="Mission">
      <div className="container-luxury">
        <div className="mission-grid">
          {/* Left: Image */}
          <motion.div
            className="mission-image-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mission-img-wrap">
              <img src="./img/mission.png" alt="Mission Godlove" />
              <div className="mission-overlay-text">
                <h3>IMPACT</h3>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="mission-content-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="section-label-luxury">The Mission</span>
            <h2 className="section-title-luxury">
              Creating a World Where <br />
              <span className="text-gold">No One is Left Behind</span>
            </h2>

            <div className="mission-points">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="mission-point"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                >
                  <span className="point-marker">0{index + 1}</span>
                  <div className="point-text">
                    <h4>{point.title}</h4>
                    <p>{point.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .mission-luxury {
          padding: 8rem 0;
          background-color: var(--color-black-light);
          position: relative;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 6rem;
          align-items: center;
        }

        .mission-img-wrap {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
        }

        .mission-img-wrap img {
          width: 100%;
          display: block;
          filter: grayscale(100%);
          transition: filter 0.5s ease;
        }

        .mission-img-wrap:hover img {
          filter: grayscale(0%);
        }

        .mission-overlay-text {
          position: absolute;
          bottom: 2rem;
          left: -2rem;
          background: var(--color-gold-500);
          padding: 1rem 3rem;
          color: var(--color-black-rich);
          font-family: var(--font-serif);
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .mission-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 3rem;
        }

        .mission-point {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1.5rem;
        }

        .point-marker {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: var(--color-gold-500);
          display: block;
          margin-bottom: 0.5rem;
        }

        .point-text h4 {
          font-size: 1rem;
          color: var(--color-white);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .point-text p {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 960px) {
          .mission-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          
          .mission-points {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}

export default MissionSection;