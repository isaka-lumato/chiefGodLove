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
    <footer className="footer-modern" id="footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        {/* Brand Section */}
        <motion.div 
          className="footer-brand"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="brand-title">CHIEF GODLOVE</h2>
          <p className="brand-tagline">Empowering Lives, Inspiring Change</p>
          
          {/* Social Links */}
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <h4 className="section-title">Quick Links</h4>
          <ul className="link-list">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  smooth
                  offset={-70}
                  duration={500}
                  className="footer-link"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="footer-section contact-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h4 className="section-title">Get In Touch</h4>
          <div className="contact-list">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <span className="contact-icon">{item.icon}</span>
                {item.type === 'email' ? (
                  <a href={`mailto:${item.value}`} className="contact-value">
                    {item.value}
                  </a>
                ) : item.type === 'phone' ? (
                  <a href={`tel:${item.value.replace(/\s/g, '')}`} className="contact-value">
                    {item.value}
                  </a>
                ) : (
                  <span className="contact-value">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="footer-section cta-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <h4 className="section-title">Let's Connect</h4>
          <p className="cta-text">
            Ready to make a difference together? Reach out and let's discuss how we can transform lives.
          </p>
          <motion.a
            href="mailto:godlovemwakibete12@gmail.com"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.a>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            © {new Date().getFullYear()} Chief Godlove. All Rights Reserved.
          </p>
          <div className="legal-links">
            <a href="#" className="legal-link">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#" className="legal-link">Terms of Service</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-modern {
          background: #ffffff;
          position: relative;
          overflow: hidden;
          margin-top: 120px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .footer-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #dc2626, transparent);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 24px 60px;
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
          gap: 80px;
        }

        /* Brand Section */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .brand-title {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -1px;
          margin: 0;
        }

        .brand-tagline {
          font-size: 15px;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
          font-weight: 400;
        }

        .social-links {
          display: flex;
          gap: 10px;
          margin-top: 12px;
        }

        .social-link {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: transparent;
          border: 1.5px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 16px;
        }

        .social-link:hover {
          border-color: #dc2626;
          color: #dc2626;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(220, 38, 38, 0.1);
        }

        /* Footer Sections */
        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .section-title {
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
          letter-spacing: 1px;
          text-transform: uppercase;
          opacity: 0.6;
        }

        /* Quick Links */
        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-link {
          color: #64748b;
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          transition: all 0.2s ease;
          cursor: pointer;
          position: relative;
          display: inline-block;
          width: fit-content;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #dc2626;
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: #dc2626;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        /* Contact Section */
        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .contact-icon {
          color: #dc2626;
          font-size: 13px;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(220, 38, 38, 0.08);
          border-radius: 6px;
        }

        .contact-value {
          color: #64748b;
          font-size: 14px;
          text-decoration: none;
          font-weight: 400;
          transition: color 0.2s ease;
        }

        .contact-value:hover {
          color: #dc2626;
        }

        /* CTA Section */
        .cta-text {
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
          font-weight: 400;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          background: #0f172a;
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 16px;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(15, 23, 42, 0.2);
        }

        /* Footer Bottom */
        .footer-bottom {
          background: #fafafa;
          padding: 32px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .footer-bottom-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          color: #94a3b8;
          font-size: 13px;
          margin: 0;
          font-weight: 400;
        }

        .legal-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .legal-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 13px;
          transition: color 0.2s ease;
          font-weight: 400;
        }

        .legal-link:hover {
          color: #0f172a;
        }

        .separator {
          color: #cbd5e1;
          font-size: 10px;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 60px 20px 30px;
          }

          .footer-bottom-container {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .brand-title {
            font-size: 24px;
          }

          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 40px 16px 20px;
          }

          .legal-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
