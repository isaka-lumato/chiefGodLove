import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


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
    <section className="youtube-section" id="YouTube">
      <div className="youtube-header" data-aos="fade-up">
        <h2 style={{ color: '#fff' }}>🎥 Watch Chief Godlove on YouTube</h2>
        <p>
          Explore inspiring messages, powerful sermons, and real-life impact through these featured videos.
        </p>
      </div>

      <div className="youtube-video-grid">
        {videos.map((url, index) => (
          <div key={index} className="video-card" data-aos="zoom-in" data-aos-delay={index * 150}>
            <div className="video-wrapper">
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
          className="subscribe-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔔 Subscribe on YouTube
        </a>
      </div>
    </section>
  );
}
