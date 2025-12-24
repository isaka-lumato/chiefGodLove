import { Link } from "react-scroll";
import React from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

function Footer() {
  const socialLinks = [
    { icon: <FaTwitter />, url: "https://x.com/chiefgodlove1/status/1952408474412802253?s=12", label: "Twitter" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/chiefgodlove_billionaire?igsh=MXRhNGpidTZpOTV5Zw==", label: "Instagram" },
    { icon: <FaTiktok />, url: "https://vm.tiktok.com/ZMSoQAbbs/", label: "TikTok" },
    { icon: <FaFacebook />, url: "https://vm.tiktok.com/ZMSoQAbbs/", label: "Facebook" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@Chief_godlove?reload=9", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "Home", to: "heroSection" },
    { name: "About", to: "AboutMe" },
    { name: "Ventures", to: "MyPortfolio" },
    { name: "Mission", to: "Mission" },
    { name: "Gallery", to: "gallery" }
  ];

  const contactInfo = [
    { icon: <FaPhone />, type: "phone", value: "+255 756 382 285" },
    { icon: <FaPhone />, type: "phone", value: "+255 746 166 686" },
    { icon: <FaPhone />, type: "phone", value: "+255 758 844 962" },
    { icon: <FaEnvelope />, type: "email", value: "godlovemwakibete12@gmail.com" },
    { icon: <FaMapMarkerAlt />, type: "location", value: "Tanzania" }
  ];

  return (
    <footer className="footer-luxury" id="footer">
      <div className="container-luxury footer-container">

        {/* Brand Section */}
        <div className="footer-col brand-col">
          <h2 className="footer-brand text-gold">CHIEF GODLOVE</h2>
          <p className="footer-tagline">
            Empowering generations through faith, leadership, and unwavering vision.
          </p>
          <div className="social-row">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-col links-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={1000}
                  className="link-item"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">Contact</h4>
          <div className="contact-list">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-row">
                <span className="contact-icon-gold">{item.icon}</span>
                {item.type === 'email' ? (
                  <a href={`mailto:${item.value}`}>{item.value}</a>
                ) : item.type === 'phone' ? (
                  <a href={`tel:${item.value.replace(/\s/g, '')}`}>{item.value}</a>
                ) : (
                  <span>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="footer-bottom-luxury">
        <p>© {new Date().getFullYear()} Chief Godlove. All Rights Reserved.</p>
      </div>

      <style jsx>{`
        .footer-luxury {
          background-color: var(--color-black-rich);
          padding: 6rem 0 0;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
        }

        .footer-container {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 4rem;
          padding-bottom: 4rem;
        }

        .footer-brand {
          font-family: var(--font-serif);
          font-size: 2rem;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }

        .footer-tagline {
          color: var(--color-text-secondary);
          margin-bottom: 2rem;
          max-width: 300px;
          line-height: 1.6;
        }

        .social-row {
          display: flex;
          gap: 1rem;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-muted);
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          border-color: var(--color-gold-500);
          color: var(--color-gold-500);
          transform: translateY(-3px);
        }

        .footer-heading {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--color-white);
          margin-bottom: 1.5rem;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .link-item {
          color: var(--color-text-secondary);
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .link-item:hover {
          color: var(--color-gold-500);
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--color-text-secondary);
          font-size: 0.9rem;
        }

        .contact-row a {
          color: inherit;
          transition: color 0.3s ease;
        }

        .contact-row a:hover {
          color: var(--color-gold-500);
        }

        .contact-icon-gold {
          color: var(--color-gold-500);
        }

        .footer-bottom-luxury {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2rem 0;
          text-align: center;
          color: var(--color-text-muted);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (max-width: 960px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          
          .footer-tagline {
            margin: 0 auto 2rem;
          }
          
          .social-row {
            justify-content: center;
          }

          .contact-row {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
