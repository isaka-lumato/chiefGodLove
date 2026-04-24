import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHeart, FaCrown, FaBalanceScale, FaHandHoldingHeart } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal Scroll Animation
      const cards = trackRef.current.children;
      const totalWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      // Only enable horizontal scroll on desktop/tablet to avoid mobile UX nightmare
      if (viewportWidth > 768) {
        gsap.to(trackRef.current, {
          x: () => -(totalWidth - viewportWidth + 300), // Scroll until the end plus a bit of padding
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=2000", // Drag out the scroll duration
            anticipatePin: 1
          }
        });
      } else {
        // Fallback for mobile: Simple fade in
        gsap.from(cards, {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top 80%"
          }
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.05, borderColor: "var(--color-gold-500)", duration: 0.3 });
    gsap.to(e.currentTarget.querySelector('.value-icon-box'), { scale: 1.2, backgroundColor: "var(--color-gold-500)", color: "var(--color-black-rich)", duration: 0.3 });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, borderColor: "rgba(255,255,255,0.05)", duration: 0.3 });
    gsap.to(e.currentTarget.querySelector('.value-icon-box'), { scale: 1, backgroundColor: "transparent", color: "var(--color-gold-500)", duration: 0.3 });
  };

  return (
    <section className="core-values-luxury" id="CoreValues" ref={sectionRef}>
      <div className="track-container">
        <div className="section-title-wrapper">
          <h2 className="creative-title">
            Our <br /> <span className="text-gold">Foundation</span>
          </h2>
        </div>

        <div className="horizontal-track" ref={trackRef}>
          {values.map((value, index) => (
            <div
              className="value-card-creative"
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-inner">
                <div className="value-icon-box">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <div className="value-divider"></div>
                <p>{value.description}</p>
              </div>
              <div className="card-number">0{index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .core-values-luxury {
          height: 100vh;
          background-color: var(--color-black-rich);
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden; /* Hide horizontal scrollbar */
        }
        
        .track-container {
             display: flex;
             height: 100%;
             align-items: center;
             width: 100%;
             padding-left: 10vw;
        }

        .section-title-wrapper {
            flex-shrink: 0;
            width: 300px;
            padding-right: 4rem;
        }

        .creative-title {
            font-family: var(--font-serif);
            font-size: 4rem;
            line-height: 1.1;
            color: white;
        }

        .horizontal-track {
            display: flex;
            gap: 4rem;
            padding-right: 10vw;
        }

        .value-card-creative {
          width: 350px;
          height: 450px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 3rem;
          flex-shrink: 0;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          backdrop-filter: blur(5px);
        }
        
        .card-number {
            position: absolute;
            top: 1rem;
            right: 1.5rem;
            font-family: var(--font-serif);
            font-size: 4rem;
            opacity: 0.1;
            color: white;
        }

        .value-icon-box {
          font-size: 2.5rem;
          color: var(--color-gold-500);
          margin-bottom: 2rem;
          height: 70px;
          width: 70px;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .value-card-creative h3 {
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--color-white);
          margin-bottom: 1rem;
        }

        .value-divider {
          width: 50px;
          height: 2px;
          background: var(--color-gold-500);
          margin-bottom: 1.5rem;
        }

        .value-card-creative p {
          color: var(--color-text-secondary);
          font-size: 1rem;
          line-height: 1.6;
        }

        /* Mobile Responsive Fallback */
        @media (max-width: 768px) {
           .core-values-luxury {
               height: auto;
               padding: 6rem 0;
               display: block;
           }
           
           .track-container {
               flex-direction: column;
               align-items: flex-start;
               padding: 0 1.5rem;
           }
           
           .section-title-wrapper {
               width: 100%;
               margin-bottom: 3rem;
           }
           
           .creative-title {
               font-size: 3rem;
           }
           
           .horizontal-track {
               flex-direction: column;
               gap: 2rem;
               padding-right: 0;
               width: 100%;
           }
           
           .value-card-creative {
               width: 100%;
               height: auto;
               padding: 2.5rem;
           }
        }
      `}</style>
    </section>
  );
}

export default CoreValuesSection;
