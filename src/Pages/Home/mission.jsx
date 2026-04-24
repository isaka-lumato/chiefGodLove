import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MissionSection() {
  const sectionRef = useRef(null);
  const imageColRef = useRef(null);
  const contentColRef = useRef(null);
  const pointsRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // connecting Line Animation
      gsap.fromTo(lineRef.current,
        { height: 0 },
        {
          height: "100%",
          duration: 1.5,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 80%",
            scrub: 1
          }
        }
      );

      // Image Animation
      gsap.fromTo(imageColRef.current,
        { opacity: 0, x: -50, rotation: -5 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      // Content Animation
      gsap.fromTo(contentColRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      // Points Stagger
      gsap.fromTo(pointsRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentColRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToPointsRef = (el) => {
    if (el && !pointsRef.current.includes(el)) {
      pointsRef.current.push(el);
    }
  };

  const missionPoints = [
    { title: "Eradicate Poverty", text: "Empowering vulnerable communities through sustainable economic initiatives." },
    { title: "Youth Empowerment", text: "Mentoring the next generation of leaders to be independent and socially responsible." },
    { title: "Spiritual Healing", text: "Restoring hope and purpose through faith-based guidance." },
    { title: "Human Rights", text: "Championing dignity and inclusive governance for all." }
  ];

  return (
    <section className="mission-luxury" id="Mission" ref={sectionRef}>
      {/* Decorative Connecting Line */}
      <div className="connecting-line-container">
        <div className="connecting-line" ref={lineRef}></div>
      </div>

      <div className="container-luxury">
        <div className="mission-grid">
          {/* Left: Image */}
          <div
            className="mission-image-col"
            ref={imageColRef}
          >
            <div className="mission-img-wrap">
              <div className="img-decoration"></div>
              <img src="./img/mission.png" alt="Mission Godlove" />
              <div className="mission-overlay-text">
                <h3>IMPACT</h3>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className="mission-content-col"
            ref={contentColRef}
          >
            <span className="section-label-luxury">The Mission</span>
            <h2 className="section-title-luxury">
              Creating a World Where <br />
              <span className="text-gold">No One is Left Behind</span>
            </h2>

            <div className="mission-points">
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className="mission-point"
                  ref={addToPointsRef}
                >
                  <span className="point-marker">0{index + 1}</span>
                  <div className="point-text">
                    <h4>{point.title}</h4>
                    <p>{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mission-luxury {
          padding: 8rem 0;
          background-color: var(--color-black-light);
          position: relative;
          overflow: hidden;
        }

        .connecting-line-container {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 2px;
            background: rgba(255, 255, 255, 0.05);
            transform: translateX(-50%);
            z-index: 0;
        }

        .connecting-line {
            width: 100%;
            background: linear-gradient(to bottom, var(--color-gold-500), transparent);
            height: 0; 
        }

        .mission-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 6rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .mission-img-wrap {
          position: relative;
          border-radius: 4px;
        }

        .img-decoration {
            position: absolute;
            top: -20px;
            left: -20px;
            right: 20px;
            bottom: 20px;
            border: 2px solid var(--color-gold-500);
            z-index: 0;
            opacity: 0.3;
        }

        .mission-img-wrap img {
          width: 100%;
          display: block;
          filter: grayscale(100%);
          transition: filter 0.5s ease;
          position: relative;
          z-index: 1;
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
          z-index: 2;
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
          
          .connecting-line-container {
              left: 20px;
          }
        }
      `}</style>
    </section>
  );
}

export default MissionSection;