import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";

const titles = [
  "Visionary Leader",
  "Motivational Speaker",
  "Spiritual Mentor",
  "Global influencer"
];

export default function HeroMinimal() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titleRef = useRef(null);

  const heroContentRef = useRef(null);
  const welcomeTextRef = useRef(null);
  const mainTitleRef = useRef(null);
  const actionsRef = useRef(null);
  const statsRef = useRef(null);
  const imageContainerRef = useRef(null);
  const dynamicTitleRef = useRef(null);

  useEffect(() => {
    // Initial Animation Timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(heroContentRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 }
    )
      .fromTo([welcomeTextRef.current, mainTitleRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(dynamicTitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.4"
      )
      .fromTo(actionsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.2"
      )
      .fromTo(statsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(imageContainerRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
        "-=1.2"
      );

    // Dynamic Title Rotation
    const interval = setInterval(() => {
      gsap.to(dynamicTitleRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          gsap.fromTo(dynamicTitleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.3 }
          );
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="heroSection" className="hero-luxury">
      <div className="hero-bg-overlay"></div>

      <div className="container-luxury hero-container">
        {/* Left Content */}
        <div
          className="hero-content"
          ref={heroContentRef}
          style={{ opacity: 0 }} // Prevent FOUC
        >
          <div
            className="hero-welcome text-gold"
            ref={welcomeTextRef}
          >
            WELCOME TO THE WORLD OF
          </div>

          <h1
            className="hero-title"
            ref={mainTitleRef}
          >
            CHIEF <br /> <span className="text-gradient-gold">GODLOVE</span>
          </h1>

          <div className="hero-subtitle-wrapper">
            <h2
              className="hero-dynamic-title"
              ref={dynamicTitleRef}
            >
              {titles[currentTitleIndex]}
            </h2>
          </div>

          <p className="hero-description" style={{ opacity: 0, animation: "fadeIn 1s forwards 0.8s" }}>
            Empowering lives through faith, leadership, and unwavering purpose.
            Join me on a journey of transformation and discover the power within.
          </p>

          <div
            className="hero-actions"
            ref={actionsRef}
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
          </div>

          <div
            className="hero-stats"
            ref={statsRef}
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
          </div>
        </div>

        {/* Right Image */}
        <div
          className="hero-image-container"
          ref={imageContainerRef}
          style={{ opacity: 0 }}
        >
          <div className="hero-image-frame">
            <img src="./img/hero43.png" alt="Chief Godlove" className="hero-img" />
            <div className="frame-border-1"></div>
            <div className="frame-border-2"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

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
          display: inline-block;
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