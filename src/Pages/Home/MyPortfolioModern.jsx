import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpand, FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import data from "../../data/index.json";

export default function MyPortfolioModern() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="portfolio-luxury section" id="MyPortfolio">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          className="section-header-luxury"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label-luxury">Ventures</span>
          <h2 className="section-title-luxury text-center">
            Pillars of <span className="text-gold">Influence</span>
          </h2>
          <p className="section-description-luxury">
            A curation of transformative initiatives reshaping industries and communities.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid-luxury">
          {data?.portfolio?.map((item, index) => (
            <motion.div
              key={item.id}
              className="card-luxury-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(item)}
            >
              <div className="card-image-wrap">
                <img src={item.src} alt={item.title} className="card-img" />
                <div className="card-overlay">
                  <span className="view-text">Explore Venture</span>
                </div>
              </div>

              <div className="card-content-luxury">
                <div className="card-meta">
                  <span className="card-category text-gold">
                    {index === 0 ? "Enterprise" : index === 1 ? "Philanthropy" : "Media"}
                  </span>
                </div>

                <h3 className="card-title-luxury">{item.title}</h3>
                <p className="card-desc-luxury">
                  {item.description.split('\n\n')[0]}
                </p>

                <div className="card-footer">
                  <span className="read-more">View Details <FaArrowRight className="icon-arrow" /></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - Luxury */}
        <div className="stats-luxury-container">
          <div className="stat-luxury">
            <h3 className="text-gold">3+</h3>
            <p>Global Ventures</p>
          </div>
          <div className="stat-luxury">
            <h3 className="text-gold">1K+</h3>
            <p>Lives Impacted</p>
          </div>
          <div className="stat-luxury">
            <h3 className="text-gold">5+</h3>
            <p>Years of Excellence</p>
          </div>
        </div>
      </div>

      {/* Modal/Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop-luxury"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content-luxury"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn-luxury"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <div className="modal-grid">
                <div className="modal-image-col">
                  <img src={selectedProject.src} alt={selectedProject.title} />
                </div>
                <div className="modal-text-col">
                  <span className="modal-category text-gold">Selected Venture</span>
                  <h2>{selectedProject.title}</h2>
                  <div className="modal-description">
                    <p>{selectedProject.description}</p>
                  </div>
                  <Link
                    to="footer"
                    smooth={true}
                    className="btn-luxury btn-luxury-filled"
                    onClick={() => setSelectedProject(null)}
                  >
                    Inquire About Partnership
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .portfolio-luxury {
          padding: 8rem 0;
          background-color: var(--color-black-rich);
          position: relative;
        }

        .section-header-luxury {
          text-align: center;
          margin-bottom: 6rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-label-luxury {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          color: var(--color-gold-500);
          margin-bottom: 1rem;
        }

        .section-title-luxury {
          font-family: var(--font-serif);
          font-size: 3rem;
          color: var(--color-white);
          margin-bottom: 1.5rem;
        }

        .section-description-luxury {
          color: var(--color-text-secondary);
          font-size: 1.1rem;
          font-weight: 300;
        }

        /* Grid */
        .portfolio-grid-luxury {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 6rem;
        }

        .card-luxury-item {
          background: rgba(30, 30, 30, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .card-luxury-item:hover {
          background: rgba(40, 40, 40, 0.5);
          border-color: var(--color-gold-500);
          transform: translateY(-5px);
        }

        .card-image-wrap {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          filter: grayscale(100%);
        }

        .card-luxury-item:hover .card-img {
          transform: scale(1.05);
          filter: grayscale(0%);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card-luxury-item:hover .card-overlay {
          opacity: 1;
        }

        .view-text {
          color: var(--color-white);
          font-family: var(--font-sans);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.8rem;
          border: 1px solid var(--color-white);
          padding: 10px 20px;
        }

        .card-content-luxury {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-category {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .card-title-luxury {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: var(--color-white);
          margin: 0.5rem 0 1rem;
        }

        .card-desc-luxury {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
          flex: 1;
        }

        .card-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1rem;
        }

        .read-more {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-gold-500);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .icon-arrow {
          transition: transform 0.3s ease;
        }

        .card-luxury-item:hover .icon-arrow {
          transform: translateX(5px);
        }

        /* Stats */
        .stats-luxury-container {
          display: flex;
          justify-content: center;
          gap: 6rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 4rem;
        }

        .stat-luxury {
          text-align: center;
        }

        .stat-luxury h3 {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .stat-luxury p {
          color: var(--color-text-muted);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }

        /* Modal */
        .modal-backdrop-luxury {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(5px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .modal-content-luxury {
          background: var(--color-black-light);
          border: 1px solid rgba(212, 175, 55, 0.2);
          max-width: 1000px;
          width: 100%;
          position: relative;
          padding: 0;
          overflow: hidden;
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .modal-image-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .modal-text-col {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .modal-category {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 1rem;
          display: block;
        }

        .modal-text-col h2 {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          color: var(--color-white);
          margin-bottom: 1.5rem;
        }

        .modal-description {
          color: var(--color-text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .close-btn-luxury {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          border: none;
          color: var(--color-white);
          font-size: 2rem;
          cursor: pointer;
          z-index: 10;
        }

        @media (max-width: 960px) {
          .portfolio-grid-luxury {
            grid-template-columns: 1fr;
          }
          
          .stats-luxury-container {
            flex-direction: column;
            gap: 2rem;
            align-items: center;
          }

          .modal-grid {
            grid-template-columns: 1fr;
          }

          .modal-image-col {
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
}