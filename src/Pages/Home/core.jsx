import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaCrown, FaBalanceScale, FaHandHoldingHeart } from "react-icons/fa";

const values = [
  {
    title: "Compassion",
    description: "Serving with boundless love and restoring dignity to the brokenhearted.",
    icon: <FaHeart />
  },
  {
    title: "Leadership",
    description: "Inspiring transformative growth and guiding others to their potential.",
    icon: <FaCrown />
  },
  {
    title: "Integrity",
    description: "Walking in truth, honesty, and unwavering moral strength.",
    icon: <FaBalanceScale />
  },
  {
    title: "Empowerment",
    description: "Lifting others up to overcome obstacles and achieve greatness.",
    icon: <FaHandHoldingHeart />
  },
];

function CoreValuesSection() {
  return (
    <section className="core-values-luxury" id="CoreValues">
      <div className="container-luxury">
        <div className="core-header text-center">
          <span className="section-label-luxury">Our Foundation</span>
          <h2 className="section-title-luxury">
            Core <span className="text-gold">Values</span>
          </h2>
          <p className="section-desc-luxury">
            The principles that guide every decision, every action, and every mission.
          </p>
        </div>

        <div className="core-grid">
          {values.map((value, index) => (
            <motion.div
              className="value-card-luxury"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="value-icon-box">
                {value.icon}
              </div>
              <h3>{value.title}</h3>
              <div className="value-divider"></div>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .core-values-luxury {
          padding: 8rem 0;
          background-color: var(--color-black-rich);
          position: relative;
        }

        .core-header {
          margin-bottom: 5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-desc-luxury {
          color: var(--color-text-secondary);
          font-size: 1.1rem;
        }

        .core-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .value-card-luxury {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .value-card-luxury:hover {
          background: rgba(212, 175, 55, 0.05);
          border-color: var(--color-gold-500);
        }

        .value-icon-box {
          font-size: 2rem;
          color: var(--color-gold-500);
          margin-bottom: 1.5rem;
          height: 60px;
          width: 60px;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: auto;
          margin-right: auto;
          transition: all 0.4s ease;
        }

        .value-card-luxury:hover .value-icon-box {
          background: var(--color-gold-500);
          color: var(--color-black-rich);
          transform: scale(1.1);
        }

        .value-card-luxury h3 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: var(--color-white);
          margin-bottom: 1rem;
        }

        .value-divider {
          width: 40px;
          height: 2px;
          background: var(--color-gold-500);
          margin: 0 auto 1.5rem;
          transition: width 0.3s ease;
        }

        .value-card-luxury:hover .value-divider {
          width: 60px;
        }

        .value-card-luxury p {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        @media (max-width: 1100px) {
          .core-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .core-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

export default CoreValuesSection;
