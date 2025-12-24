import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaYoutube } from "react-icons/fa";

export default function YouTubeSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const videos = [
    "https://www.youtube.com/embed/uAf9ULiDR8c",
    "https://www.youtube.com/embed/XfQr0C6ViXQ?si=ooGxFdUrhwZEN1Ho",
    "https://www.youtube.com/embed/fvxbJIGE1CI?si=z9A3UK6m05d-z-G5",
  ];

  return (
    <section className="youtube-luxury" id="YouTube">
      <div className="container-luxury">
        <div className="youtube-header text-center" data-aos="fade-up">
          <span className="section-label-luxury">Media & Sermons</span>
          <h2 className="section-title-luxury">
            Watch <span className="text-gold">Chief Godlove</span>
          </h2>
          <p className="section-desc-luxury">
            Inspiring messages, powerful sermons, and real-life impact.
          </p>
        </div>

        <div className="video-grid-luxury">
          {videos.map((url, index) => (
            <div key={index} className="video-card-luxury" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="video-wrapper-luxury">
                <iframe
                  src={url}
                  title={`YouTube Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        <div className="youtube-cta" data-aos="fade-up">
          <a
            href="https://www.youtube.com/@Chief_godlove"
            className="btn-luxury btn-luxury-filled"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube style={{ fontSize: '1.2rem' }} /> Subscribe to Channel
          </a>
        </div>
      </div>

      <style jsx>{`
        .youtube-luxury {
          padding: 8rem 0;
          background: linear-gradient(180deg, #050505 0%, #101010 100%);
          position: relative;
        }

        .youtube-header {
          margin-bottom: 5rem;
        }

        .video-grid-luxury {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .video-card-luxury {
          background: #000;
          padding: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .video-card-luxury:hover {
          border-color: var(--color-gold-500);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          transform: translateY(-5px);
        }

        .video-wrapper-luxury {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 */
          height: 0;
          overflow: hidden;
        }

        .video-wrapper-luxury iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .youtube-cta {
          display: flex;
          justify-content: center;
        }

        .btn-luxury {
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
        }

        @media (max-width: 960px) {
          .video-grid-luxury {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
