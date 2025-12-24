import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const titles = [
  "Visionary Leader",
  "Motivational Speaker",
  "Spiritual Mentor",
  "Global influencer"
];

export default function HeroMinimal() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="heroSection" className="hero-luxury">
      <div className="hero-bg-overlay"></div>

      <div className="container-luxury hero-container">
        {/* Left Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero-welcome text-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            WELCOME TO THE WORLD OF
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            CHIEF <br /> <span className="text-gradient-gold">GODLOVE</span>
          </motion.h1>

          <div className="hero-subtitle-wrapper">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTitleIndex}
                className="hero-dynamic-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {titles[currentTitleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Empowering lives through faith, leadership, and unwavering purpose.
            Join me on a journey of transformation and discover the power within.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              to="footer"
              smooth={true}
              duration={1000}
              className="btn-luxury btn-luxury-filled"
            >
              Get In Touch
            </Link>

            <Link
              to="AboutMe"
              smooth={true}
              duration={1000}
              className="btn-luxury"
            >
              Discover More
            </Link>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Lives Touched</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Global Events</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-image-frame">
            <img src="./img/hero43.png" alt="Chief Godlove" className="hero-img" />
            <div className="frame-border-1"></div>
            <div className="frame-border-2"></div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-luxury {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
          background-color: var(--bg-primary);
          overflow: hidden;
        }

        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(5, 5, 5, 0.8) 0%, transparent 40%);
          z-index: 1;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-welcome {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .hero-title {
          font-family: var(--font-serif);
          font-size: clamp(3.5rem, 6vw, 6rem);
          line-height: 1;
          margin-bottom: 1.5rem;
          color: var(--color-white);
        }

        .hero-subtitle-wrapper {
          height: 3rem;
          margin-bottom: 2rem;
          overflow: hidden;
        }

        .hero-dynamic-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--color-text-muted);
          font-weight: 400;
          font-style: italic;
        }

        .hero-description {
          max-width: 500px;
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--color-text-secondary);
          margin-bottom: 3rem;
          border-left: 2px solid var(--color-gold-500);
          padding-left: 1.5rem;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          color: var(--color-white);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-gold-500);
          margin-top: 0.5rem;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Image Styling */
        .hero-image-container {
          display: flex;
          justify-content: center;
        }

        .hero-image-frame {
          position: relative;
          width: 100%;
          max-width: 500px;
        }

        .hero-img {
          width: 100%;
          height: auto;
          display: block;
          position: relative;
          z-index: 2;
          filter: contrast(1.1) brightness(0.9);
          border-radius: 4px;
        }

        .frame-border-1 {
          position: absolute;
          top: -20px;
          right: -20px;
          bottom: 20px;
          left: 20px;
          border: 2px solid var(--color-gold-500);
          z-index: 1;
          opacity: 0.5;
        }

        .frame-border-2 {
          position: absolute;
          top: 20px;
          right: 20px;
          bottom: -20px;
          left: -20px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          z-index: 0;
        }

        @media (max-width: 960px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-welcome {
            font-size: 0.8rem;
          }
          
          .hero-description {
            border-left: none;
            padding-left: 0;
          }

          .hero-stats {
            justify-content: center;
          }
          
          .hero-image-frame {
            max-width: 400px;
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          
          .btn-luxury {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}