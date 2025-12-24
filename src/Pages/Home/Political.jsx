import React from "react";
import { motion } from "framer-motion";

function PoliticalSection() {
  return (
    <section className="political-luxury" id="Politics">
      <div className="container-luxury political-container-luxury">
        {/* Left: Text */}
        <motion.div
          className="political-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label-luxury">The Future</span>
          <h2 className="section-title-luxury">
            New Political <span className="text-gold">Ambition</span>
          </h2>
          <h3 className="political-subtitle text-white">Standing for MP 2025</h3>

          <div className="text-body-luxury">
            <p>
              <strong>Chief Godlove</strong> has officially declared his candidacy for Member of Parliament (MP) with a vision to revolutionize governance.
            </p>
            <ul className="luxury-list">
              <li>Fight for human rights and justice for all</li>
              <li>Uplift the poor and voiceless</li>
              <li>Drive inclusive policies that protect dignity</li>
            </ul>
          </div>

          <motion.div
            className="quote-luxury-small"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p>
              “I believe that by entering government, I can bring the voice of the people to power.”
            </p>
            <span className="quote-author">– Chief Godlove</span>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="political-image-wrap"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-frame-gold">
            <img src="./img/poli.png" alt="Chief Godlove MP 2025" />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .political-luxury {
          padding: 8rem 0;
          background: linear-gradient(135deg, #101010 0%, #050505 100%);
          color: white;
        }

        .political-container-luxury {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .political-subtitle {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: var(--color-text-main);
          font-weight: 400;
          border-left: 3px solid var(--color-gold-500);
          padding-left: 1rem;
        }

        .luxury-list {
          list-style: none;
          margin: 2rem 0;
        }

        .luxury-list li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 1rem;
          color: var(--color-text-secondary);
        }

        .luxury-list li::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: var(--color-gold-500);
        }

        .quote-luxury-small {
          background: rgba(212, 175, 55, 0.1);
          padding: 1.5rem;
          border-radius: 8px;
          border-left: 2px solid var(--color-gold-500);
        }

        .quote-luxury-small p {
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--color-gold-100);
          margin-bottom: 0.5rem;
        }

        .quote-author {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-gold-500);
        }

        .image-frame-gold {
          border: 1px solid rgba(212, 175, 55, 0.3);
          padding: 1rem;
          position: relative;
        }

        .image-frame-gold::after {
          content: '';
          position: absolute;
          top: -10px;
          right: -10px;
          width: 50px;
          height: 50px;
          border-top: 2px solid var(--color-gold-500);
          border-right: 2px solid var(--color-gold-500);
        }

         .image-frame-gold::before {
          content: '';
          position: absolute;
          bottom: -10px;
          left: -10px;
          width: 50px;
          height: 50px;
          border-bottom: 2px solid var(--color-gold-500);
          border-left: 2px solid var(--color-gold-500);
        }

        .image-frame-gold img {
          width: 100%;
          display: block;
          filter: grayscale(100%);
          transition: filter 0.5s ease;
        }

        .political-image-wrap:hover img {
          filter: grayscale(0%);
        }

        @media (max-width: 960px) {
          .political-container-luxury {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          
          .political-image-wrap {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}

export default PoliticalSection;