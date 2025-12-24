import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpand, FaTimes, FaImages, FaPlus } from "react-icons/fa";
import data from "../../data/index.json";

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const initialCount = 8;
  const galleryData = data?.gallery || [];
  const displayedImages = showAll ? galleryData : galleryData.slice(0, initialCount);
  const remainingCount = galleryData.length - initialCount;

  if (!galleryData.length) return null;

  return (
    <section className="gallery-luxury" id="gallery">
      <div className="container-luxury">
        {/* Header */}
        <div className="gallery-header text-center">
          <span className="section-label-luxury">The Album</span>
          <h2 className="section-title-luxury">
            Moments in <span className="text-gold">Time</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="gallery-grid-luxury">
          {displayedImages.map((item, index) => (
            <motion.div
              key={index}
              className="gallery-item-luxury"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index % 4 * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage({ ...item, index })}
            >
              <div className="gallery-img-wrap">
                <img
                  src={item.src}
                  alt={item.alt || `Gallery Image ${index + 1}`}
                  loading="lazy"
                />
                <div className="gallery-overlay-luxury">
                  <FaExpand />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        {!showAll && remainingCount > 0 && (
          <div className="gallery-footer text-center">
            <button
              className="btn-luxury btn-luxury-outline"
              onClick={() => setShowAll(true)}
            >
              <FaPlus style={{ marginRight: '8px' }} /> View All Photos
            </button>
          </div>
        )}

        {showAll && (
          <div className="gallery-footer text-center">
            <button
              className="btn-luxury btn-luxury-outline"
              onClick={() => setShowAll(false)}
            >
              Show Less
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-modal-luxury"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="modal-close-luxury">
              <FaTimes />
            </button>
            <motion.img
              src={selectedImage.src}
              alt="Full view"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .gallery-luxury {
          padding: 8rem 0;
          background-color: var(--color-black-light);
        }

        .gallery-header {
          margin-bottom: 5rem;
        }

        .gallery-grid-luxury {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .gallery-item-luxury {
          aspect-ratio: 1;
          cursor: pointer;
        }

        .gallery-img-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .gallery-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          filter: grayscale(80%);
        }

        .gallery-img-wrap:hover img {
          transform: scale(1.1);
          filter: grayscale(0%);
        }

        .gallery-overlay-luxury {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(212, 175, 55, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-img-wrap:hover .gallery-overlay-luxury {
          opacity: 1;
        }

        .gallery-modal-luxury {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .gallery-modal-luxury img {
          max-width: 90vw;
          max-height: 90vh;
          object-fit: contain;
          border: 2px solid var(--color-gold-500);
        }

        .modal-close-luxury {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: transparent;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
        }

        .btn-luxury-outline {
          border: 1px solid var(--color-gold-500);
          color: var(--color-gold-500);
          padding: 1rem 2rem;
        }

        .btn-luxury-outline:hover {
           background: var(--color-gold-500);
           color: black;
        }

        @media (max-width: 1200px) {
          .gallery-grid-luxury {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .gallery-grid-luxury {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .gallery-grid-luxury {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
