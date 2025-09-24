import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaBriefcase, FaHeart, FaVideo } from "react-icons/fa";
import { Link } from "react-scroll";
import data from "../../data/index.json";

export default function MyPortfolioClean() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Add icons for each venture
  const ventureIcons = [
    <FaBriefcase />,
    <FaHeart />,
    <FaVideo />
  ];

  return (
    <section className="portfolio-clean" id="MyPortfolio">
      {/* Section Header */}
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-badge">My Ventures</span>
        <h2 className="section-title">
          Transformative <span className="highlight">Business Ventures</span>
        </h2>
        <p className="section-subtitle">
          Explore my diverse portfolio of businesses and initiatives that are making 
          a positive impact across communities in Tanzania and beyond.
        </p>
      </motion.div>

      {/* Cards Container */}
      <div className="cards-container">
        {data?.portfolio?.map((item, index) => (
          <motion.div
            key={item.id}
            className={`venture-card ${hoveredCard === index ? 'hovered' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card Header with Badge */}
            <div className="card-header">
              <span className="card-badge">
                {index === 0 ? "Main Company" : index === 1 ? "Foundation" : "Media"}
              </span>
            </div>

            {/* Card Image */}
            <div className="card-image-wrapper">
              <img 
                src={item.src} 
                alt={item.title}
                className="card-image"
              />
              <div className="image-overlay"></div>
            </div>

            {/* Card Body */}
            <div className="card-body">
              <div className="card-icon">
                {ventureIcons[index]}
              </div>
              
              <h3 className="card-title">{item.title}</h3>
              
              <p className="card-description">
                {item.description.split('\n\n')[0]}
              </p>

              {/* Tags */}
              <div className="card-tags">
                {index === 0 && (
                  <>
                    <span className="tag">Business</span>
                    <span className="tag">Consulting</span>
                    <span className="tag">Leadership</span>
                  </>
                )}
                {index === 1 && (
                  <>
                    <span className="tag">Non-Profit</span>
                    <span className="tag">Community</span>
                    <span className="tag">Support</span>
                  </>
                )}
                {index === 2 && (
                  <>
                    <span className="tag">Media</span>
                    <span className="tag">Content</span>
                    <span className="tag">Inspiration</span>
                  </>
                )}
              </div>

              {/* Action Button -> Contact Us link to footer */}
              <Link
                to="footer"
                smooth={true}
                duration={500}
                className="card-button"
              >
                Contact Us
                <FaArrowRight className="button-icon" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Stats */}
      <motion.div 
        className="portfolio-stats"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="stat">
          <span className="stat-number">3+</span>
          <span className="stat-label">Active Ventures</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-number">10K+</span>
          <span className="stat-label">Lives Impacted</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-number">5+</span>
          <span className="stat-label">Years Operating</span>
        </div>
      </motion.div>

      <style jsx>{`
        .portfolio-clean {
          padding: 80px 20px;
          background: #ffffff;
          min-height: 100vh;
        }

        /* Header Styles */
        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .section-badge {
          display: inline-block;
          padding: 8px 20px;
          background: #fee2e2;
          color: #dc2626;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .section-title {
          font-size: 48px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .highlight {
          color: #dc2626;
        }

        .section-subtitle {
          font-size: 18px;
          color: #64748b;
          line-height: 1.6;
        }

        /* Cards Container */
        .cards-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Venture Card */
        .venture-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .venture-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }

        .card-header {
          padding: 15px 20px;
          background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
          display: flex;
          justify-content: flex-end;
        }

        .card-badge {
          padding: 6px 14px;
          background: #dc2626;
          color: white;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Card Image */
        .card-image-wrapper {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: #f3f4f6;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .venture-card:hover .card-image {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%);
        }

        /* Card Body */
        .card-body {
          padding: 30px;
        }

        .card-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .card-title {
          font-size: 22px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .card-description {
          font-size: 15px;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 20px;
          min-height: 80px;
        }

        /* Tags */
        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 25px;
        }

        .tag {
          padding: 5px 12px;
          background: #f1f5f9;
          color: #475569;
          border-radius: 15px;
          font-size: 13px;
          font-weight: 500;
        }

        /* Card Button */
        .card-button {
          width: 100%;
          padding: 12px 24px;
          background: transparent;
          color: #dc2626;
          border: 2px solid #dc2626;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .card-button:hover {
          background: #dc2626;
          color: white;
        }

        .button-icon {
          font-size: 14px;
          transition: transform 0.3s ease;
        }

        .card-button:hover .button-icon {
          transform: translateX(5px);
        }

        /* Portfolio Stats */
        .portfolio-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 60px;
          margin-top: 80px;
          padding: 40px;
          background: linear-gradient(135deg, #fef2f2 0%, #ffffff 100%);
          border-radius: 20px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 36px;
          font-weight: 700;
          color: #dc2626;
          margin-bottom: 5px;
        }

        .stat-label {
          display: block;
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background: #e2e8f0;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .cards-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 36px;
          }

          .cards-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .portfolio-stats {
            flex-direction: column;
            gap: 30px;
          }

          .stat-divider {
            width: 50px;
            height: 1px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 28px;
          }

          .section-subtitle {
            font-size: 16px;
          }

          .card-body {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}