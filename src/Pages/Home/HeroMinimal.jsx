import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlay } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const titles = [
  "Visionary Leader",
  "Motivational Speaker",
  "Spiritual Mentor",
  "Global influencer"
];

export default function HeroMinimal() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const sectionRef = useRef(null);
  const heroContentRef = useRef(null);
  const mainTitleRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageFrameRef = useRef(null); // For 3D Tilt
  const dynamicTitleRef = useRef(null);
  const shapesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Load (Cinematic)
      const loadTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      loadTl.fromTo(mainTitleRef.current,
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 100 },
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: 0, duration: 1.2, ease: "power4.out" }
      )
        .from(heroContentRef.current.children, {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8
        }, "-=0.5")
        .from(imageContainerRef.current, {
          scale: 1.2,
          opacity: 0,
          duration: 1.5,
          ease: "expo.out"
        }, "-=1");

      // 2. Scroll Interaction (Smoother & "Elastic")
      // Instead of disappearing, the text will "explode" outwards but stay partially visible
      gsap.to(mainTitleRef.current, {
        letterSpacing: "15px",
        scale: 1.1,
        filter: "blur(2px)", // Less blur
        opacity: 0.5, // More visible
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1 // Increased smoothing time
        }
      });

      // Smooth Parallax for Image (Outer Container)
      gsap.to(imageContainerRef.current, {
        yPercent: 15, // Subtle movement to avoid "clunkiness"
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      // Rotating Background Shapes - More Active
      gsap.to(shapesRef.current.children, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "linear",
        stagger: {
          amount: 10,
          from: "random"
        }
      });
      // Floating effect for shapes
      gsap.to(shapesRef.current.children, {
        y: "20px",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random"
        }
      });

    }, sectionRef);

    // Dynamic Title
    const interval = setInterval(() => {
      if (dynamicTitleRef.current) {
        gsap.to(dynamicTitleRef.current, {
          y: -20, opacity: 0, duration: 0.3, onComplete: () => {
            setCurrentTitleIndex(prev => (prev + 1) % titles.length);
            gsap.fromTo(dynamicTitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 });
          }
        });
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  // 3D Tilt Effect on Mouse Move (Applied to Inner Frame)
  const handleMouseMove = (e) => {
    if (!imageFrameRef.current) return;
    const { left, top, width, height } = imageFrameRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    gsap.to(imageFrameRef.current, {
      rotationY: x * 15,
      rotationX: -y * 15,
      transformPerspective: 1000,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageFrameRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <section id="heroSection" className="hero-luxury" ref={sectionRef}>
      {/* Abstract Animated Shapes */}
      <div className="hero-shapes" ref={shapesRef}>
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container-luxury hero-container">
        <div className="hero-content" ref={heroContentRef}>
          <div className="hero-welcome text-gold">WELCOME TO THE WORLD OF</div>

          <h1 className="hero-title" ref={mainTitleRef}>
            CHIEF <br /> <span className="text-gradient-gold">GODLOVE</span>
          </h1>

          <div className="hero-subtitle-wrapper">
            <h2 className="hero-dynamic-title" ref={dynamicTitleRef}>
              {titles[currentTitleIndex]}
            </h2>
          </div>

          <p className="hero-description">
            Empowering lives through faith, leadership, and unwavering purpose.
          </p>


          <div className="hero-actions">
            <Link to="footer" smooth={true} duration={1000} className="btn-luxury btn-luxury-filled">
              Get In Touch
            </Link>
            <div className="play-btn-wrapper">
              <div className="play-btn-circle"> <FaPlay /> </div>
              <span>Watch Story</span>
            </div>
          </div>

          <div className="hero-stats">
            {['15+ Years', '10K+ Lives', '50+ Events'].map((stat, i) => (
              <div key={i} className="stat-pill">{stat}</div>
            ))}
          </div>
        </div>

        <div
          className="hero-image-container"
          ref={imageContainerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hero-image-frame" ref={imageFrameRef}>
            <img src="./img/hero43.png" alt="Chief Godlove" className="hero-img" />
            <div className="hero-phone-overlay">0752245296</div>
            <div className="frame-glow"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-luxury {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          background-color: var(--bg-primary);
          overflow: hidden;
          perspective: 1000px;
        }

        /* Abstract Shapes */
        .hero-shapes {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        }
        .shape {
            position: absolute;
            border: 1px solid rgba(212, 175, 55, 0.1);
            border-radius: 50%;
        }
        .shape-1 { width: 600px; height: 600px; top: -100px; right: -100px; border-style: dashed; }
        .shape-2 { width: 400px; height: 400px; bottom: 10%; left: 10%; border-color: rgba(255,255,255,0.05); }
        .shape-3 { width: 200px; height: 200px; top: 40%; left: 50%; border: 2px solid rgba(212, 175, 55, 0.05); }

        .hero-container {
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
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
          font-size: clamp(3.5rem, 7vw, 7rem);
          line-height: 0.9;
          margin: 1rem 0;
          color: white;
          will-change: transform, letter-spacing, opacity;
        }

        .hero-subtitle-wrapper {
          height: 3rem;
          margin-bottom: 2rem;
          overflow: hidden;
        }

        .hero-dynamic-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--color-gold-500);
          font-style: italic;
        }

        .hero-description {
            max-width: 450px;
            color: var(--color-text-secondary);
            font-size: 1.1rem;
            margin-bottom: 2rem;
        }

        .hero-contact-banner {
            background: linear-gradient(135deg, var(--color-gold-500), #f59e0b);
            padding: 1.5rem 2rem;
            border-radius: 15px;
            margin-bottom: 2rem;
            box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
            position: relative;
            overflow: hidden;
        }

        .hero-contact-banner::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
        }

        .contact-text {
            color: white;
            font-size: 1.2rem;
            font-weight: 700;
            text-align: center;
            margin: 0;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            letter-spacing: 0.5px;
        }

        .hero-actions {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .play-btn-wrapper {
            display: flex;
            align-items: center;
            gap: 1rem;
            cursor: pointer;
            color: white;
            font-family: var(--font-serif);
            transition: opacity 0.3s;
        }
        .play-btn-wrapper:hover { opacity: 0.8; }
        .play-btn-circle {
            width: 50px;
            height: 50px;
            border: 1px solid var(--color-gold-500);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            color: var(--color-gold-500);
        }

        .hero-stats {
            display: flex;
            gap: 1rem;
        }
        .stat-pill {
            padding: 0.5rem 1.5rem;
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 50px;
            color: var(--color-text-secondary);
            font-size: 0.9rem;
            transition: all 0.3s;
        }
        .stat-pill:hover {
            border-color: var(--color-gold-500);
            color: var(--color-gold-500);
        }

        .hero-image-container {
            display: flex;
            justify-content: center;
            perspective: 1000px;
            will-change: transform;
        }
        .hero-image-frame {
            position: relative;
            width: 100%;
            max-width: 550px;
            transform-style: preserve-3d;
        }
        .hero-img {
            width: 100%;
            display: block;
            border-radius: 10px;
            filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5));
        }
        .frame-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            background: var(--color-gold-500);
            filter: blur(80px);
            opacity: 0.2;
            z-index: -1;
        }

        @media (max-width: 960px) {
            .hero-container { grid-template-columns: 1fr; text-align: center; }
            .hero-content { align-items: center; display: flex; flex-direction: column; }
            .hero-actions { justify-content: center; }
            .hero-title { font-size: 4rem; }
            .contact-text { font-size: 1rem; }
            .hero-contact-banner { padding: 1rem 1.5rem; }
        }
      `}</style>
    </section>
  );
}