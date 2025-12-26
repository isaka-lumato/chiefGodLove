import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";

function NavbarMinimal() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const ctaRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileLinksRef = useRef([]);

  const toggleNav = () => {
    setNavActive(!navActive);
    if (!navActive) {
      document.body.style.overflow = 'hidden';
      // Animate Mobile Menu In
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        pointerEvents: "all",
        duration: 0.3
      });
      gsap.fromTo(mobileLinksRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out", delay: 0.1 }
      );
    } else {
      document.body.style.overflow = 'unset';
      // Animate Mobile Menu Out
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3
      });
    }
  };

  const closeMenu = () => {
    setNavActive(false);
    document.body.style.overflow = 'unset';
    gsap.to(mobileMenuRef.current, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial Entrance Animation
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(navRef.current,
      { y: -100 },
      { y: 0, duration: 0.8 }
    )
      .fromTo(logoRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5 },
        "-=0.5"
      )
      .fromTo(menuItemsRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(ctaRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5 },
        "-=0.5"
      );

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addToMenuItemsRef = (el) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  const addToMobileLinksRef = (el) => {
    if (el && !mobileLinksRef.current.includes(el)) {
      mobileLinksRef.current.push(el);
    }
  };

  const navItems = [
    { name: "Home", to: "heroSection" },
    { name: "About", to: "AboutMe" },
    { name: "Ventures", to: "MyPortfolio" },
    { name: "Mission", to: "Mission" },
    { name: "Gallery", to: "gallery" },
  ];

  return (
    <>
      <nav
        className={`navbar-luxury ${scrolled ? "scrolled" : ""}`}
        ref={navRef}
      >
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo" ref={logoRef}>
            <Link to="heroSection" smooth={true} duration={1000}>
              CHIEF GODLOVE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            {navItems.map((item, index) => (
              <li key={item.name} ref={addToMenuItemsRef}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1000}
                  className="nav-link"
                  activeClass="active"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="nav-cta" ref={ctaRef}>
            <Link
              to="footer"
              smooth={true}
              duration={1000}
              className="btn-text-gold"
            >
              Contact Me
            </Link>
          </div>

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
        <div
          className="mobile-menu"
          ref={mobileMenuRef}
          style={{ opacity: 0, pointerEvents: "none" }}
        >
          <div className="mobile-content">
            <ul className="mobile-links">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  ref={addToMobileLinksRef}
                >
                  <Link
                    to={item.to}
                    onClick={closeMenu}
                    smooth={true}
                    duration={1000}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar-luxury {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 2rem 0;
          z-index: 1000;
          transition: all 0.4s ease;
          border-bottom: 1px solid transparent;
        }

        .navbar-luxury.scrolled {
          background: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(12px);
          padding: 1rem 0;
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }

        .nav-container {
          max-width: var(--container-width);
          margin: 0 auto;
          padding: 0 var(--space-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo a {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: var(--color-white);
          font-weight: 700;
          letter-spacing: 0.05em;
          text-decoration: none;
          cursor: pointer;
        }

        .nav-menu {
          display: flex;
          gap: 3rem;
          list-style: none;
        }

        .nav-link {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-text-muted);
          cursor: pointer;
          transition: var(--transition-fast);
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--color-gold-500);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--color-gold-500);
          transition: width 0.3s ease;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .btn-text-gold {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-gold-500);
          cursor: pointer;
          border: 1px solid var(--color-gold-500);
          padding: 10px 24px;
          transition: all 0.3s ease;
        }

        .btn-text-gold:hover {
          background: var(--color-gold-500);
          color: var(--color-black-rich);
        }

        /* Mobile Menu */
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 30px;
          height: 20px;
          position: relative;
          z-index: 1002;
        }

        .menu-toggle span {
          display: block;
          width: 100%;
          height: 2px;
          background: var(--color-gold-500);
          position: absolute;
          transition: all 0.3s ease;
        }

        .menu-toggle span:first-child { top: 0; }
        .menu-toggle span:last-child { bottom: 0; }

        .menu-toggle.active span:first-child {
          transform: rotate(45deg);
          top: 9px;
        }
        .menu-toggle.active span:last-child {
          transform: rotate(-45deg);
          bottom: 9px;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--color-black-rich);
          z-index: 1001;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-links {
          list-style: none;
          text-align: center;
        }

        .mobile-links li {
          margin: 2rem 0;
        }

        .mobile-links a {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          color: var(--color-white);
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .mobile-links a:hover {
          color: var(--color-gold-500);
        }

        @media (max-width: 960px) {
          .nav-menu, .nav-cta {
            display: none;
          }
          .menu-toggle {
            display: block;
          }
        }
      `}</style>
    </>
  );
}

export default NavbarMinimal;