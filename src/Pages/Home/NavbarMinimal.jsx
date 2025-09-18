import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

function NavbarMinimal() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleNav = () => {
    setNavActive(!navActive);
    // Prevent body scroll when menu is open
    if (!navActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setNavActive(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "heroSection" },
    { name: "About", to: "AboutMe" },
    { name: "Ventures", to: "MyPortfolio" },
    { name: "Politics", to: "Politics" },
    { name: "Mission", to: "Mission" },
    { name: "Gallery", to: "gallery" },
  ];

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
  };

  return (
    <>
      <motion.nav 
        className={`navbar-minimal ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="nav-container">
          {/* Logo */}
          <motion.div 
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="heroSection" {...linkProps}>
              <img src="./img/red_logo.png" alt="Logo" />
              <span>Chief Godlove</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  to={item.to}
                  {...linkProps}
                  className="nav-link"
                  activeClass="active"
                >
                  {item.name}
                  {hoveredItem === item.name && (
                    <motion.div
                      className="hover-indicator"
                      layoutId="hover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.div 
            className="nav-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="footer"
              {...linkProps}
              className="cta-button"
            >
              <span>Contact Me</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`menu-toggle ${navActive ? "active" : ""}`}
            onClick={toggleNav}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {navActive && (
            <>
              <motion.div 
                className="mobile-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />

              <motion.div 
                className="mobile-menu"
                initial={{ clipPath: "circle(0% at top right)" }}
                animate={{ clipPath: "circle(150% at top right)" }}
                exit={{ clipPath: "circle(0% at top right)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="mobile-menu-content">
                  <ul className="mobile-nav-items">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                      >
                        <Link
                          to={item.to}
                          {...linkProps}
                          onClick={closeMenu}
                          className="mobile-nav-link"
                        >
                          <span className="link-number">0{index + 1}</span>
                          <span className="link-text">{item.name}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div 
                    className="mobile-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Link
                      to="footer"
                      {...linkProps}
                      onClick={closeMenu}
                      className="mobile-cta-button"
                    >
                      Get In Touch
                    </Link>
                  </motion.div>

                  <motion.div 
                    className="mobile-footer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <p>© 2024 Chief Godlove</p>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      <style jsx>{`
        .navbar-minimal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .navbar-minimal.scrolled {
          height: 70px;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .nav-logo a {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          cursor: pointer;
        }

        .nav-logo img {
          height: 36px;
          width: auto;
          transition: all 0.3s ease;
        }

        .navbar-minimal.scrolled .nav-logo img {
          height: 32px;
        }

        .nav-logo span {
          font-size: 18px;
          font-weight: 600;
          color: #0f172a;
          letter-spacing: -0.5px;
        }

        /* Desktop Menu */
        .nav-menu {
          display: flex;
          list-style: none;
          gap: 8px;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          position: relative;
          padding: 10px 20px;
          color: #475569;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.2px;
          transition: color 0.3s ease;
          cursor: pointer;
          display: block;
        }

        .nav-link:hover {
          color: #0f172a;
        }

        .nav-link.active {
          color: #dc2626;
        }

        .hover-indicator {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: #dc2626;
          border-radius: 50%;
        }

        /* CTA Button */
        .cta-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: #dc2626;
          color: white;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          border-radius: 50px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .cta-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .cta-button:hover {
          background: #b91c1c;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(220, 38, 38, 0.2);
        }

        .cta-button span {
          position: relative;
          z-index: 1;
        }

        .cta-button svg {
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .cta-button:hover svg {
          transform: translateX(4px);
        }

        /* Mobile Menu Toggle */
        .menu-toggle {
          display: none;
          width: 40px;
          height: 40px;
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: background 0.3s ease;
        }

        .menu-toggle:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .menu-toggle span {
          display: block;
          position: absolute;
          height: 2px;
          width: 24px;
          background: #0f172a;
          border-radius: 2px;
          left: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .menu-toggle span:first-child {
          top: 13px;
        }

        .menu-toggle span:last-child {
          bottom: 13px;
        }

        .menu-toggle.active span:first-child {
          top: 19px;
          transform: rotate(45deg);
        }

        .menu-toggle.active span:last-child {
          bottom: 19px;
          transform: rotate(-45deg);
        }

        /* Mobile Menu Overlay */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.2);
          z-index: 998;
          backdrop-filter: blur(5px);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, #ffffff 0%, #fef2f2 100%);
          z-index: 999;
          overflow-y: auto;
        }

        .mobile-menu-content {
          padding: 120px 40px 40px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .mobile-nav-items {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mobile-nav-items li {
          margin-bottom: 20px;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 16px 0;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .link-number {
          font-size: 14px;
          font-weight: 500;
          color: #dc2626;
          opacity: 0.6;
        }

        .link-text {
          font-size: 32px;
          font-weight: 600;
          color: #0f172a;
          letter-spacing: -1px;
          position: relative;
        }

        .mobile-nav-link:hover .link-text {
          color: #dc2626;
          transform: translateX(10px);
        }

        .mobile-nav-link:hover .link-number {
          opacity: 1;
        }

        .mobile-cta {
          margin: 40px 0;
        }

        .mobile-cta-button {
          display: inline-block;
          padding: 18px 40px;
          background: #dc2626;
          color: white;
          text-decoration: none;
          font-size: 18px;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .mobile-cta-button:hover {
          background: #b91c1c;
          transform: scale(1.05);
        }

        .mobile-footer {
          text-align: center;
          color: #94a3b8;
          font-size: 14px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .nav-container {
            padding: 0 24px;
          }

          .nav-menu {
            display: none;
          }

          .nav-cta {
            display: none;
          }

          .menu-toggle {
            display: block;
          }
        }

        @media (max-width: 640px) {
          .navbar-minimal {
            height: 70px;
          }

          .navbar-minimal.scrolled {
            height: 65px;
          }

          .nav-container {
            padding: 0 20px;
          }

          .nav-logo span {
            display: none;
          }

          .mobile-menu-content {
            padding: 100px 24px 24px;
          }

          .link-text {
            font-size: 28px;
          }

          .mobile-cta-button {
            width: 100%;
            text-align: center;
          }
        }

        @media (min-width: 1025px) {
          .nav-menu li {
            position: relative;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 8px;
            left: 50%;
            width: 0;
            height: 2px;
            background: #dc2626;
            transform: translateX(-50%);
            transition: width 0.3s ease;
          }

          .nav-link:hover::after,
          .nav-link.active::after {
            width: 20px;
          }
        }
      `}</style>
    </>
  );
}

export default NavbarMinimal;