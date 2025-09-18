import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpand, FaTimes, FaImages, FaChevronUp } from "react-icons/fa";
import data from "../../data/index.json";

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Check if mobile on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsLoaded(true);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Show all images on desktop, limited on mobile
  const getInitialCount = () => {
    if (typeof window === 'undefined') return 8;
    const width = window.innerWidth;
    if (width <= 480) return 4;
    if (width <= 768) return 6;
    // Show all images on desktop
    return 999;
  };
  
  const initialCount = isLoaded ? getInitialCount() : 8;
  const galleryData = data?.gallery || [];
  const isDesktop = typeof window !== 'undefined' && window.innerWidth > 768;
  const displayedImages = (showAll || isDesktop) ? galleryData : galleryData.slice(0, initialCount);
  const remainingCount = Math.max(0, galleryData.length - initialCount);
  const showButtons = !isDesktop && galleryData.length > initialCount;
  
  // Early return if no data
  if (!data || !galleryData.length) {
    return (
      <section className="gallery-section" id="gallery">
        <div className="container">
          <div className="gallery-empty">
            <p>Gallery is currently unavailable.</p>
          </div>
        </div>
      </section>
    );
  }

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
    // Scroll back to gallery section
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleImageClick = (image, index) => {
    setSelectedImage({ ...image, index });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };


  return (
    <>
      <section className="gallery-section" id="gallery">
        <div className="container">
          <div className="gallery-wrapper">
            {/* Header */}
            <motion.div 
              className="gallery-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="gallery-badge">
                <FaImages /> Gallery
              </span>
              <h2 className="gallery-title">Photo Gallery</h2>
              <p className="gallery-subtitle">
                Moments captured from our journey of transformation and impact
              </p>
            </motion.div>

            {/* Gallery Grid */}
            {isLoaded && displayedImages && displayedImages.length > 0 ? (
              <div className="gallery-grid">
              {displayedImages.map((item, index) => {
                if (!item || !item.src) return null;
                
                const isNewItem = showAll && index >= initialCount;
                
                return (
                  <motion.div
                    key={`gallery-${index}`}
                    className="gallery-item"
                    initial={{ 
                      opacity: isNewItem ? 0 : 1, 
                      y: isNewItem ? 20 : 0,
                      scale: isNewItem ? 0.9 : 1
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      scale: 1
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: isNewItem ? (index - initialCount) * 0.1 : 0,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleImageClick(item, index)}
                  >
                    <img 
                      src={item.src} 
                      alt={item.alt || `Gallery Image ${index + 1}`}
                      loading="lazy"
                      onError={(e) => {
                        console.warn('Failed to load image:', item.src);
                        e.target.parentElement.style.display = 'none';
                      }}
                      onLoad={() => {
                        // console.log('Image loaded successfully:', item.src);
                      }}
                    />
                    <div className="gallery-overlay">
                      <FaExpand className="expand-icon" />
                    </div>
                  </motion.div>
                );
              }).filter(Boolean)}
              </div>
            ) : isLoaded ? (
              <div className="gallery-empty">
                <p>No images available in the gallery.</p>
              </div>
            ) : null}

            {/* Gallery Control Buttons - Only show on mobile */}
            {isLoaded && showButtons && (
            <motion.div 
              className="gallery-controls"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {!showAll && remainingCount > 0 && (
                <motion.button 
                  className="gallery-btn show-more-btn"
                  onClick={handleShowMore}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaImages />
                  Show {remainingCount} More Photos
                </motion.button>
              )}
              
              {showAll && (
                <motion.button 
                  className="gallery-btn show-less-btn"
                  onClick={handleShowLess}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaChevronUp />
                  Show Less
                </motion.button>
              )}
            </motion.div>
          )}
          
            {/* Loading state */}
            {!isLoaded && (
              <div className="gallery-loading">
                <p>Loading gallery...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close-btn"
                onClick={closeModal}
              >
                <FaTimes />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt || `Gallery ${selectedImage.index + 1}`}
              />
              <div className="modal-info">
                <p>Image {selectedImage.index + 1} of {data?.gallery?.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .gallery-section {
          padding: 100px 20px;
          background: linear-gradient(135deg, #fafafa 0%, #ffffff 100%);
          position: relative;
        }

        .container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .gallery-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .container {
            max-width: 1200px;
            padding: 0 20px;
          }
        }

        /* Header Styles */
        .gallery-header {
          text-align: center;
          margin-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .gallery-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: rgba(220, 38, 38, 0.1);
          color: #dc2626;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .gallery-title {
          font-size: 48px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 16px;
          line-height: 1.2;
          text-align: center;
        }

        .gallery-subtitle {
          font-size: 18px;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          text-align: center;
        }

        /* Gallery Grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 50px;
          width: 100%;
          max-width: 1200px;
        }

        .gallery-item {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: #f8f9fa;
        }

        .gallery-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gallery-item:hover img {
          transform: scale(1.08);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .expand-icon {
          color: white;
          font-size: 24px;
        }

        /* Gallery Control Buttons */
        .gallery-controls {
          text-align: center;
          margin-top: 20px;
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gallery-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid;
        }

        .show-more-btn {
          background: transparent;
          color: #dc2626;
          border-color: #dc2626;
        }

        .show-more-btn:hover {
          background: #dc2626;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3);
        }

        .show-less-btn {
          background: #dc2626;
          color: white;
          border-color: #dc2626;
        }

        .show-less-btn:hover {
          background: #991b1b;
          border-color: #991b1b;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(153, 27, 27, 0.3);
        }

        /* Loading State */
        .gallery-loading {
          text-align: center;
          padding: 60px 20px;
          color: #64748b;
          font-size: 16px;
        }

        /* Empty State */
        .gallery-empty {
          text-align: center;
          padding: 60px 20px;
          color: #64748b;
          font-size: 16px;
          background: #f8f9fa;
          border-radius: 12px;
          border: 2px dashed #e2e8f0;
        }

        /* Modal Styles */
        .image-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
        }

        .modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .modal-close-btn {
          position: absolute;
          top: -50px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background-color 0.3s;
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .modal-content img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 12px;
        }

        .modal-info {
          text-align: center;
          margin-top: 16px;
          color: white;
          font-size: 14px;
          opacity: 0.8;
        }

        /* Tablet Styles */
        @media (min-width: 768px) and (max-width: 1023px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }

          .gallery-item {
            aspect-ratio: 4/3;
          }
        }

        /* Mobile Optimizations */
        @media (max-width: 767px) {
          .gallery-section {
            padding: 60px 16px;
          }

          .gallery-title {
            font-size: 32px;
          }

          .gallery-subtitle {
            font-size: 16px;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .gallery-item {
            aspect-ratio: 1 !important;
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }

          .gallery-item:hover {
            transform: none;
          }

          .gallery-btn {
            padding: 14px 24px;
            font-size: 14px;
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }

          .modal-close-btn {
            top: -40px;
            font-size: 20px;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .gallery-title {
            font-size: 28px;
          }

          .gallery-item {
            aspect-ratio: 4/3 !important;
          }

          .gallery-item:hover {
            transform: none;
          }
        }

        /* Desktop Optimizations */
        @media (min-width: 1400px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            max-width: 1400px;
          }
        }

        @media (min-width: 1024px) and (max-width: 1199px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            max-width: 1000px;
          }
        }

        @media (min-width: 1200px) and (max-width: 1399px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 22px;
            max-width: 1200px;
          }
        }
        @media (min-width: 1024px) and (max-width: 1199px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .gallery-item:nth-child(1) {
            grid-column: span 2;
            grid-row: span 1;
          }

          .gallery-item:nth-child(4) {
            grid-column: span 1;
          }

          .gallery-item:nth-child(7) {
            grid-row: span 1;
          }
        }
      `}</style>
    </>
  );
}
