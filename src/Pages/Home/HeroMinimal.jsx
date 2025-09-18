import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const titles = [
  "Motivational Speaker",
  "Spiritual Healer",
  "Respected Prophet",
  "Visionary Leader"
];

export default function HeroMinimal() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="heroSection" className="hero-minimal">
      <div className="hero-container">
        {/* Left Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtle Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="badge-dot"></span>
            <span>Transforming Lives Since 2010</span>
          </motion.div>

          {/* Welcome Text */}
          <motion.p 
            className="hero-welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Welcome! I'm Godlove Mwakibete
          </motion.p>

          {/* Dynamic Title */}
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTitleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {titles[currentTitleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Empowering lives through faith, purpose, and leadership. 
            Standing for hope, transformation, and the dignity of all people. 
            Join me in creating positive change across Tanzania and beyond.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Link
              to="footer"
              smooth={true}
              duration={500}
              className="btn-primary"
            >
              <span>Get In Touch</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            
            <Link
              to="AboutMe"
              smooth={true}
              duration={500}
              className="btn-secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M14.752 11.168L11.518 13.882C10.918 14.382 10 13.967 10 13.197V6.803C10 6.033 10.918 5.618 11.518 6.118L14.752 8.832C15.368 9.347 15.368 10.653 14.752 11.168Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Watch My Story</span>
            </Link>
          </motion.div>

          {/* Simple Stats */}
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <div className="stat">
              <h3>10K+</h3>
              <p>Lives Transformed</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Speaking Events</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="image-wrapper">
            <div className="image-frame">
              <img 
                src="./img/hero43.png" 
                alt="Chief Godlove" 
              />
            </div>
            {/* Subtle decoration */}
            <div className="image-decoration"></div>
          </div>
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div 
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M19 14L12 21L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .hero-minimal {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 100px 0 80px;
          background: linear-gradient(to bottom, #ffffff, #fafafa);
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* Content Styles */
        .hero-content {
          max-width: 540px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(220, 38, 38, 0.08);
          border-radius: 30px;
          margin-bottom: 24px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #dc2626;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .hero-badge span:last-child {
          font-size: 13px;
          font-weight: 500;
          color: #dc2626;
          letter-spacing: -0.2px;
        }

        .hero-welcome {
          font-size: 18px;
          color: #64748b;
          margin-bottom: 16px;
          font-weight: 400;
          letter-spacing: -0.3px;
        }

        .hero-title {
          font-size: clamp(42px, 5vw, 56px);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -2px;
          color: #0f172a;
        }

        .hero-title span {
          background: linear-gradient(135deg, #dc2626, #7f1d1d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .hero-description {
          font-size: 17px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 40px;
          letter-spacing: -0.2px;
        }

        /* Buttons */
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 500;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .btn-primary {
          background: #dc2626;
          color: white;
          border: 2px solid transparent;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-primary:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.25);
        }

        .btn-primary svg {
          transition: transform 0.3s ease;
        }

        .btn-primary:hover svg {
          transform: translateX(3px);
        }

        .btn-secondary {
          background: transparent;
          color: #dc2626;
          border: 2px solid #dc2626;
        }

        .btn-secondary:hover {
          background: rgba(220, 38, 38, 0.05);
          transform: translateY(-2px);
        }

        /* Stats */
        .hero-stats {
          display: flex;
          gap: 48px;
        }

        .stat h3 {
          font-size: 32px;
          font-weight: 700;
          color: #dc2626;
          margin-bottom: 4px;
          letter-spacing: -1px;
        }

        .stat p {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
          letter-spacing: -0.2px;
        }

        /* Image */
        .hero-image {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .image-wrapper {
          position: relative;
        }

        .image-frame {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(135deg, #fef2f2, #fecaca);
          padding: 4px;
        }

        .image-frame img {
          width: 100%;
          max-width: 420px;
          height: auto;
          display: block;
          border-radius: 20px;
        }

        .image-decoration {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.1), transparent);
          border-radius: 50%;
          filter: blur(40px);
        }

        /* Scroll Hint */
        .scroll-hint {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          color: #94a3b8;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .hero-minimal {
            padding: 90px 0 60px;
          }

          .hero-container {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 0 24px;
            text-align: center;
          }

          .hero-content {
            order: 2;
            max-width: 100%;
          }

          .hero-image {
            order: 1;
          }

          .image-frame img {
            max-width: 280px;
          }

          .hero-badge {
            margin: 0 auto 20px;
          }

          .hero-title {
            font-size: 36px;
            letter-spacing: -1px;
          }

          .hero-description {
            font-size: 16px;
          }

          .hero-actions {
            justify-content: center;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }

          .hero-stats {
            justify-content: space-around;
            width: 100%;
            gap: 20px;
          }

          .stat h3 {
            font-size: 24px;
          }

          .stat p {
            font-size: 12px;
          }

          .scroll-hint {
            display: none;
          }

          .image-decoration {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-minimal {
            padding: 80px 0 40px;
          }

          .hero-container {
            padding: 0 20px;
          }

          .hero-title {
            font-size: 32px;
          }

          .image-frame img {
            max-width: 240px;
          }

          .hero-welcome {
            font-size: 16px;
          }

          .stat h3 {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}