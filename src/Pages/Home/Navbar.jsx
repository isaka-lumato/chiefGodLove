import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="navbar--logo">
           <img src="./img/red_logo.png" alt="Godlove Logo" />
      </div>

      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>

      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="heroSection" onClick={closeMenu} {...linkProps}>
              Home
            </Link>
          </li>
          <li>
            <Link to="AboutMe" onClick={closeMenu} {...linkProps}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="MyPortfolio" onClick={closeMenu} {...linkProps}>
              Ventures
            </Link>
          </li>
          <li>
            <Link to="Achievements" onClick={closeMenu} {...linkProps}>
              Achievements
            </Link>
          </li>
          <li>
            <Link to="Politics" onClick={closeMenu} {...linkProps}>
              Politics
            </Link>
          </li>
          <li>
            <Link to="Mission" onClick={closeMenu} {...linkProps}>
              Mission
            </Link>
          </li>
          <li>
            <Link to="gallery" onClick={closeMenu} {...linkProps}>
              Gallery
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-toggle">
          <ThemeToggle/>
      </div>
      

      <Link
        to="footer"
        onClick={closeMenu}
        className="btn btn-outline-primary"
        {...linkProps}
      >
        Contact Me
      </Link>
    </nav>
  );
}

const linkProps = {
  activeClass: "navbar--active-content",
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500,
};

export default Navbar;
