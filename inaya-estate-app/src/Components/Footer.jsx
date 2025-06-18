import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row text-center">
          {/* Inaya Realty Branding */}
          <div className="col-12 mb-4">
            <h3 className="footer-heading">Inaya Realty</h3>
            <p className="footer-tagline">
              Turning Dreams Into Reality
            </p>
          </div>
        </div>

        <div className="row">
          {/* Social Media Icons */}
          <div className="col-md-4 text-center text-md-end mb-3">
            <h5 className="text-white text-center fw-bold">Follow Us</h5>
            <div className="social-icons justify-md-center">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="col-md-4 text-center mb-3">
            <h5 className="text-white fw-bold">Get in Touch</h5>
            <p className="contact-info">
              <FaPhoneAlt className="me-2" /> +91 93056 11089
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="text-white fw-bold">Quick Links</h5>
            <ul className="quick-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center py-3">
        <p className="text-white m-0">&copy; 2025 Inaya Realty. All Rights Reserved.</p>
      </div>

      {/* Styles */}
      <style jsx>{`
        .footer-section {
          background: linear-gradient(to bottom right, #001f3f, #003366);
          color: white;
          padding-top: 40px;
        }
        .footer-heading {
          font-size: 2rem;
          font-weight: bold;
          color: #ff7e5f;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .footer-tagline {
          font-size: 1.2rem;
          color: #ddd;
          font-weight: 500;
        }
        .social-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        @media (min-width: 768px) {
          .social-icons.justify-md-end {
            justify-content: flex-end;
          }
        }
        .social-link {
          color: white;
          font-size: 28px;
          transition: all 0.3s ease;
          padding: 10px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
        }
        .social-link:hover {
          transform: translateY(-3px);
          background: #ff7e5f;
          color: white;
        }
        .contact-info {
          font-size: 1.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }
        .quick-links {
          list-style: none;
          padding: 0;
        }
        .quick-links li {
          margin-bottom: 10px;
        }
        .quick-links a {
          color: white;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          transition: color 0.3s, transform 0.2s;
        }
        .quick-links a:hover {
          color: #ff7e5f;
          transform: translateX(5px);
        }
        .footer-bottom {
          background: rgba(255, 255, 255, 0.1);
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
