import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaPlay, FaPhone, FaMicrophone, FaMagic, FaStar } from "react-icons/fa";
import { Link } from "react-scroll";

const titles = [
  "Motivational Speaker",
  "Spiritual Healer",
  "Respected Prophet",
  "Visionary Leader",
  "Social Entrepreneur"
];

export default function HeroSectionModern() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="heroSection" className="hero-modern">
      {/* Animated Background Elements */}
      <div className="hero-bg-animation">
        <motion.div 
          className="bg-gradient-circle circle-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="bg-gradient-circle circle-2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="bg-gradient-circle circle-3"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-badge"
          >
            <span className="badge-dot"></span>
            <span>Transforming Lives Since 2010</span>
          </motion.div>

          {/* Main Title */}
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Welcome! I'm Godlove Mwakibete
          </motion.p>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTitleIndex}
                className="hero-title-animated"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {titles[currentTitleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Empowering lives through faith, purpose, and leadership.
            Standing for hope, transformation, and the dignity of all people.
            Join me in creating positive change across Tanzania and beyond.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Link
              to="footer"
              smooth={true}
              duration={500}
              className="btn-modern btn-primary-modern"
            >
              <FaPhone />
              Get In Touch
              <FaArrowRight className="btn-icon-right" />
            </Link>
            
            <Link
              to="AboutMe"
              smooth={true}
              duration={500}
              className="btn-modern btn-outline-modern"
            >
              <FaPlay />
              Watch My Story
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="stat-item">
              <h4>10K+</h4>
              <p>Lives Transformed</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h4>50+</h4>
              <p>Speaking Events</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h4>15+</h4>
              <p>Years Experience</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        >
          <motion.div 
            className="hero-image-wrapper"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="image-glow"></div>
            <img 
              src="./img/hero43.png" 
              alt="Chief Godlove" 
              className="hero-main-image"
            />
            
            {/* Floating Elements */}
            <motion.div
              className="floating-card card-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="card-icon"><FaMicrophone /></span>
              <span>Speaker</span>
            </motion.div>

            <motion.div
              className="floating-card card-2"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <span className="card-icon"><FaMagic /></span>
              <span>Healer</span>
            </motion.div>

            <motion.div
              className="floating-card card-3"
              animate={{
                y: [0, -25, 0],
                rotate: [0, 3, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              <span className="card-icon"><FaStar /></span>
              <span>Leader</span>
            </motion.div>
          </motion.div>

          {/* Sparkle Effects Removed */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="mouse">
          <span className="wheel"></span>
        </span>
        <p>Scroll to explore</p>
      </motion.div>

      <style jsx>{`
        .hero-modern {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(135deg, #fff 0%, #fef2f2 100%);
        }

        .hero-bg-animation {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .bg-gradient-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
        }

        .circle-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #dc2626 0%, #fbbf24 100%);
          top: -100px;
          left: -100px;
          opacity: 0.3;
        }

        .circle-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #991b1b 0%, #dc2626 100%);
          bottom: -50px;
          right: -50px;
          opacity: 0.2;
        }

        .circle-3 {
          width: 250px;
          height: 250px;
          background: linear-gradient(135deg, #fbbf24 0%, #dc2626 100%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.2;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(220, 38, 38, 0.1);
          border-radius: 50px;
          margin-bottom: 1.5rem;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #dc2626;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .stat-item h4 {
          font-size: 2rem;
          color: #dc2626;
          margin-bottom: 0.25rem;
        }

        .stat-item p {
          font-size: 0.875rem;
          color: #64748b;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(0, 0, 0, 0.1);
        }

        .hero-image-wrapper {
          position: relative;
        }

        .image-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.2) 0%, transparent 70%);
          z-index: -1;
        }

        .hero-main-image {
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .floating-card {
          position: absolute;
          background: white;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          z-index: 10;
        }

        .card-1 {
          top: 10%;
          left: -20px;
        }

        .card-2 {
          bottom: 20%;
          right: -20px;
        }

        .card-3 {
          top: 40%;
          right: -40px;
        }

        .card-icon {
          font-size: 1.25rem;
        }

        /* Sparkle styles removed for cleaner look */

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          z-index: 10;
        }

        .mouse {
          display: inline-block;
          width: 26px;
          height: 40px;
          border: 2px solid #dc2626;
          border-radius: 15px;
          position: relative;
        }

        .wheel {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 8px;
          background: #dc2626;
          border-radius: 2px;
          animation: scroll 2s infinite;
        }

        @keyframes scroll {
          0% { opacity: 1; top: 8px; }
          50% { opacity: 0.5; top: 16px; }
          100% { opacity: 1; top: 8px; }
        }

        .scroll-indicator p {
          margin-top: 0.5rem;
          font-size: 0.875rem;
          color: #64748b;
        }

        .btn-icon-right {
          transition: transform 0.3s;
        }

        .btn-modern:hover .btn-icon-right {
          transform: translateX(5px);
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .hero-modern {
            padding-top: 100px;
            min-height: 100vh;
            background: linear-gradient(135deg, #fff 0%, #fef2f2 100%);
          }

          .hero-container {
            padding: 0 20px;
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-content {
            order: 2;
          }

          .hero-image {
            order: 1;
            margin: 0 auto;
            max-width: 300px;
          }

          .hero-badge {
            margin: 0 auto 20px;
          }

          .hero-subtitle {
            font-size: 16px;
            padding: 8px 16px;
          }

          .hero-title {
            font-size: 32px;
            margin-bottom: 20px;
          }

          .hero-description {
            font-size: 16px;
            line-height: 1.6;
            padding: 0 10px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 12px;
            width: 100%;
          }

          .btn-modern {
            width: 100%;
            max-width: 280px;
            padding: 14px 24px;
            font-size: 16px;
          }

          .hero-stats {
            flex-direction: row;
            justify-content: space-around;
            gap: 20px;
            padding-top: 30px;
            margin-top: 30px;
          }

          .stat-item h4 {
            font-size: 24px;
          }

          .stat-item p {
            font-size: 12px;
          }

          .stat-divider {
            display: none;
          }

          .floating-card {
            display: none;
          }

          .hero-image-wrapper {
            border-radius: 16px;
          }

          .hero-main-image {
            border-radius: 16px;
          }

          .scroll-indicator {
            display: none;
          }

          .bg-gradient-circle {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-modern {
            padding-top: 80px;
          }

          .hero-title {
            font-size: 28px;
          }

          .hero-image {
            max-width: 250px;
          }

          .hero-stats {
            gap: 15px;
          }

          .stat-item h4 {
            font-size: 20px;
          }

          .stat-item p {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}