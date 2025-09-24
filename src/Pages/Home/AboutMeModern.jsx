import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaAward, FaUsers, FaHeart } from "react-icons/fa";

export default function AboutMeModern() {
  const achievements = [
    { icon: <FaAward />, label: "10+ Awards", description: "Recognition for leadership" },
    { icon: <FaUsers />, label: "50K+ Followers", description: "Social media reach" },
    { icon: <FaHeart />, label: "1000+ Lives", description: "Directly transformed" }
  ];

  return (
    <section id="AboutMe" className="about-modern">
      <div className="container">
        <div className="about-grid">
          {/* Left Column - Image and Stats */}
          <motion.div 
            className="about-image-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-container">
              <motion.img 
                src="./img/hero33.jpg" 
                alt="Chief Godlove" 
                className="about-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="image-decoration"></div>
              
              {/* Floating achievement cards */}
              <motion.div 
                className="achievement-card card-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="achievement-number">15+</span>
                <span className="achievement-text">Years Experience</span>
              </motion.div>

              <motion.div 
                className="achievement-card card-2"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <span className="achievement-number">3</span>
                <span className="achievement-text">Businesses Founded</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="about-content-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="content-wrapper">
              <span className="section-label">Get to Know Me</span>
              <h2 className="section-title">
                I'm Chief Godlove
                <span className="text-gradient"> Mwakibete</span>
              </h2>

              <div className="quote-block">
                <FaQuoteLeft className="quote-icon" />
                <p className="lead-text">
                  A visionary leader dedicated to transforming lives through faith, 
                  purpose, and unwavering commitment to social impact.
                </p>
              </div>

              <div className="about-description">
                <p>
                  Godlove Jackob Mwakibete, widely recognized as <strong>Chief Godlove</strong>, 
                  is a dynamic philanthropist, visionary spiritual healer, award-winning 
                  motivational speaker, and a respected prophet. He is the founder and 
                  driving force behind transformative ventures that uplift marginalized 
                  communities, empower youth, and inspire hope across Tanzania and beyond.
                </p>

                <p>
                  From humble beginnings in Mbeya, Chief Godlove has risen to national 
                  and continental prominence through relentless dedication to social impact, 
                  spiritual guidance, and economic empowerment. His journey is one of faith, 
                  vision, and action — touching thousands of lives through his ministry, 
                  charitable efforts, and public engagements.
                </p>
              </div>

              {/* Achievement Grid */}
              <div className="achievements-grid">
                {achievements.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="achievement-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="achievement-icon">{item.icon}</div>
                    <div className="achievement-content">
                      <h4>{item.label}</h4>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about-modern {
          padding: 6rem 0;
          background: linear-gradient(135deg, #fafafa 0%, #fff 100%);
          position: relative;
          overflow: hidden;
        }

        .about-modern::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 60%;
          height: 150%;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.05) 0%, transparent 70%);
          z-index: 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .image-container {
          position: relative;
        }

        .about-image {
          width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .image-decoration {
          position: absolute;
          top: -20px;
          left: -20px;
          right: 20px;
          bottom: 20px;
          border: 3px solid #dc2626;
          border-radius: 20px;
          z-index: -1;
        }

        .achievement-card {
          position: absolute;
          background: white;
          padding: 1rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 10;
        }

        .card-1 {
          top: 10%;
          right: -30px;
        }

        .card-2 {
          bottom: 10%;
          left: -30px;
        }

        .achievement-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #dc2626;
        }

        .achievement-text {
          font-size: 0.75rem;
          color: #64748b;
          text-align: center;
        }

        .section-label {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(220, 38, 38, 0.1);
          color: #dc2626;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #1e293b;
          line-height: 1.2;
        }

        .text-gradient {
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .quote-block {
          position: relative;
          padding-left: 3rem;
          margin-bottom: 2rem;
        }

        .quote-icon {
          position: absolute;
          left: 0;
          top: 0;
          font-size: 2rem;
          color: #dc2626;
          opacity: 0.2;
        }

        .lead-text {
          font-size: 1.25rem;
          color: #475569;
          font-weight: 500;
          line-height: 1.6;
        }

        .about-description {
          margin-bottom: 2rem;
        }

        .about-description p {
          color: #64748b;
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .about-description strong {
          color: #dc2626;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .achievement-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .achievement-item:hover {
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.15);
        }

        .achievement-icon {
          width: 40px;
          height: 40px;
          background: rgba(220, 38, 38, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #dc2626;
          font-size: 1.25rem;
        }

        .achievement-content h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }

        .achievement-content p {
          font-size: 0.75rem;
          color: #64748b;
        }

        .about-cta {
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .achievement-card {
            display: none;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 2rem;
          }

          .quote-block {
            padding-left: 2rem;
          }
        }
      `}</style>
    </section>
  );
}