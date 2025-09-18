import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../../data/index.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function MyPortfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="portfolio--section" id="MyPortfolio" data-aos="fade-up">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title" data-aos="fade-right">Ventures</p>
          <h2 className="section--heading" data-aos="fade-right" data-aos-delay="100">Ventures</h2>
        </div>
        
      </div>

      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div
            key={index}
            className="portfolio--section--card"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="portfolio--section--img">
              <img src={item.src} alt="Portfolio item" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                {item.description.split("\n\n").map((para, idx) => (
                  <p key={idx} className="text-md" style={{ marginBottom: "1rem" }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
