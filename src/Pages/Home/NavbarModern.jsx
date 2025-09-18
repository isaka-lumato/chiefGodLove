import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function NavbarModern() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    activeClass: "navbar-link-active",
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
  };

  return (
    <>
      <nav className={`navbar-modern ${scrolled ? "scrolled" : ""} ${navActive ? "menu-open" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link to="heroSection" {...linkProps} className="navbar-logo">
            <img src="./img/red_logo.png" alt="Logo" className="logo-img" />
            <span className="logo-text">Chief Godlove</span>
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu-desktop">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                {...linkProps}
                className="navbar-link"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="navbar-actions-desktop">
            <button 
              className="theme-toggle"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
            <Link
              to="footer"
              {...linkProps}
              className="contact-btn"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleNav}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {navActive && (
            <>
              {/* Backdrop */}
              <motion.div 
                className="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />

              {/* Mobile Menu */}
              <motion.div 
                className="mobile-menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="mobile-menu-header">
                  <h3>Menu</h3>
                  <button 
                    className="close-btn"
                    onClick={closeMenu}
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="mobile-menu-items">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      {...linkProps}
                      className="mobile-menu-link"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="mobile-menu-footer">
                  <Link
                    to="footer"
                    {...linkProps}
                    className="mobile-contact-btn"
                    onClick={closeMenu}
                  >
                    Get In Touch
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <style jsx>{`
        .navbar-modern {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar-modern.scrolled {
          height: 60px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .navbar-logo:hover {
          transform: scale(1.05);
        }

        .logo-img {
          height: 40px;
          width: auto;
        }

        .navbar-modern.scrolled .logo-img {
          height: 35px;
        }

        .logo-text {
          font-size: 20px;
          font-weight: 700;
          color: #1e293b;
          display: none;
        }

        /* Desktop Menu */
        .navbar-menu-desktop {
          display: none;
          align-items: center;
          gap: 8px;
        }

        .navbar-link {
          padding: 8px 16px;
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        .navbar-link:hover {
          color: #dc2626;
          background: rgba(220, 38, 38, 0.05);
        }

        .navbar-link-active {
          color: #dc2626;
          background: rgba(220, 38, 38, 0.08);
        }

        /* Desktop Actions */
        .navbar-actions-desktop {
          display: none;
          align-items: center;
          gap: 16px;
        }

        .theme-toggle {
          width: 40px;
          height: 40px;
          border: none;
          background: #f1f5f9;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #64748b;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          background: #e2e8f0;
          color: #1e293b;
        }

        .contact-btn {
          padding: 10px 24px;
          background: #dc2626;
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          border-radius: 10px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .contact-btn:hover {
          background: #991b1b;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          width: 40px;
          height: 40px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 0;
        }

        .hamburger-line {
          width: 24px;
          height: 2px;
          background: #1e293b;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .navbar-modern.menu-open .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .navbar-modern.menu-open .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .navbar-modern.menu-open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Mobile Menu */
        .mobile-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 998;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 300px;
          height: 100vh;
          background: white;
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
          z-index: 999;
          display: flex;
          flex-direction: column;
        }

        .mobile-menu-header {
          padding: 24px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mobile-menu-header h3 {
          font-size: 20px;
          font-weight: 700;
          color: #1e293b;
        }

        .close-btn {
          width: 40px;
          height: 40px;
          border: none;
          background: #f1f5f9;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #64748b;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: #e2e8f0;
          color: #dc2626;
        }

        .mobile-menu-items {
          flex: 1;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-menu-link {
          padding: 12px 16px;
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .mobile-menu-link:hover {
          color: #dc2626;
          background: rgba(220, 38, 38, 0.05);
        }

        .mobile-menu-footer {
          padding: 24px;
          border-top: 1px solid #e2e8f0;
        }

        .mobile-contact-btn {
          display: block;
          width: 100%;
          padding: 14px 24px;
          background: #dc2626;
          color: white;
          text-decoration: none;
          text-align: center;
          font-weight: 600;
          font-size: 16px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .mobile-contact-btn:hover {
          background: #991b1b;
        }

        /* Desktop Styles */
        @media (min-width: 768px) {
          .logo-text {
            display: block;
          }

          .navbar-menu-desktop {
            display: flex;
          }

          .navbar-actions-desktop {
            display: flex;
          }

          .mobile-menu-btn {
            display: none;
          }
        }

        /* Mobile Adjustments */
        @media (max-width: 767px) {
          .navbar-container {
            padding: 0 16px;
          }

          .logo-img {
            height: 35px;
          }

          .mobile-menu {
            width: 280px;
          }
        }

        @media (max-width: 480px) {
          .mobile-menu {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default NavbarModern;