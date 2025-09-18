import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaExpand, FaArrowRight } from "react-icons/fa";
import data from "../../data/index.json";

export default function MyPortfolioModern() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="portfolio-modern section" id="MyPortfolio">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">My Ventures</span>
          <h2 className="section-title">
            Transformative <span className="text-gradient">Business Ventures</span>
          </h2>
          <p className="section-description">
            Explore my diverse portfolio of businesses and initiatives that are making 
            a positive impact across communities in Tanzania and beyond.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {data?.portfolio?.map((item, index) => (
            <motion.div
              key={item.id}
              className={`portfolio-card ${hoveredIndex === index ? 'hovered' : ''}`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Card Image Container */}
              <div className="card-image-container">
                <motion.img 
                  src={item.src} 
                  alt={item.title}
                  className="card-image"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="card-overlay">
                  <motion.button
                    className="view-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(item)}
                  >
                    <FaExpand /> Quick View
                  </motion.button>
                </div>
                
                {/* Badge */}
                <span className="card-badge">
                  {index === 0 ? "Main Company" : index === 1 ? "Foundation" : "Media"}
                </span>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                
                {/* Description with smart truncation */}
                <p className="card-description">
                  {item.description.split('\n\n')[0]}
                </p>

                {/* Features/Highlights */}
                <div className="card-features">
                  {index === 0 && (
                    <>
                      <span className="feature-tag">Business</span>
                      <span className="feature-tag">Consulting</span>
                      <span className="feature-tag">Leadership</span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="feature-tag">Non-Profit</span>
                      <span className="feature-tag">Community</span>
                      <span className="feature-tag">Support</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="feature-tag">Media</span>
                      <span className="feature-tag">Content</span>
                      <span className="feature-tag">Inspiration</span>
                    </>
                  )}
                </div>

                {/* Action Button */}
                <motion.button 
                  className="card-action-btn"
                  whileHover={{ x: 5 }}
                >
                  Learn More <FaArrowRight />
                </motion.button>
              </div>

              {/* Animated Border */}
              <motion.div 
                className="card-border"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="portfolio-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="stat-card">
            <h3>3+</h3>
            <p>Active Ventures</p>
          </div>
          <div className="stat-card">
            <h3>1000+</h3>
            <p>People Impacted</p>
          </div>
          <div className="stat-card">
            <h3>5+</h3>
            <p>Years Operating</p>
          </div>
          <div className="stat-card">
            <h3>10+</h3>
            <p>Team Members</p>
          </div>
        </motion.div>
      </div>

      {/* Modal/Popup for selected project */}
      {selectedProject && (
        <motion.div 
          className="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <img src={selectedProject.src} alt={selectedProject.title} />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
          </motion.div>
        </motion.div>
      )}

      <style jsx>{`
        .portfolio-modern {
          padding: 6rem 0;
          background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
          position: relative;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          padding: 0 1rem;
        }

        .section-label {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(220, 38, 38, 0.1);
          color: #dc2626;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #1e293b;
          line-height: 1.2;
        }

        .section-description {
          font-size: 1.125rem;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2.5rem;
          margin-bottom: 4rem;
          padding: 0 1rem;
        }

        .portfolio-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .portfolio-card:hover {
          box-shadow: 0 10px 40px rgba(220, 38, 38, 0.15);
        }

        .card-image-container {
          position: relative;
          height: 280px;
          overflow: hidden;
          background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-card:hover .card-overlay {
          opacity: 1;
        }

        .view-btn {
          padding: 0.75rem 1.5rem;
          background: white;
          color: #dc2626;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .view-btn:hover {
          background: #dc2626;
          color: white;
        }

        .card-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          color: white;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          box-shadow: 0 4px 10px rgba(220, 38, 38, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card-content {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
          line-height: 1.3;
          min-height: 3.5rem;
          display: flex;
          align-items: center;
        }

        .card-description {
          color: #64748b;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          flex: 1;
          font-size: 0.95rem;
        }

        .card-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .feature-tag {
          padding: 0.25rem 0.75rem;
          background: rgba(220, 38, 38, 0.1);
          color: #dc2626;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .card-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          background: transparent;
          color: #dc2626;
          border: 2px solid #dc2626;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: auto;
        }

        .card-action-btn:hover {
          background: #dc2626;
          color: white;
        }

        .card-border {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #dc2626 0%, #fbbf24 100%);
          transform-origin: left;
        }

        .portfolio-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          padding: 3rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .stat-card {
          text-align: center;
        }

        .stat-card h3 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #dc2626;
          margin-bottom: 0.5rem;
        }

        .stat-card p {
          color: #64748b;
          font-weight: 500;
        }

        .project-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 2rem;
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2rem;
          position: relative;
        }

        .modal-content img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }

        .modal-content h2 {
          font-size: 2rem;
          color: #1e293b;
          margin-bottom: 1rem;
        }

        .modal-content p {
          color: #64748b;
          line-height: 1.8;
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          border: none;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: #dc2626;
          color: white;
        }

        @media (min-width: 1200px) {
          .portfolio-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1199px) and (min-width: 768px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            padding: 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .portfolio-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}