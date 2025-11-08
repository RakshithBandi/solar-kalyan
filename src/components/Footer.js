import React from 'react';

const Footer = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-section">
            <h3>KVK Solar</h3>
            <p>
              Leading solar energy solutions provider in Pune, Maharashtra. We provide sustainable
              energy solutions for homes and businesses.
            </p>
          </div>

          {/* Quick Links - internal navigation uses buttons */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <button type="button" onClick={() => setCurrentPage('home')}>
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setCurrentPage('services')}>
                  Services
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setCurrentPage('pm-surya-ghar')}>
                  PM Surya Ghar
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setCurrentPage('gallery')}>
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info - real tel/mailto links */}
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li>📍 RTC BUS STAND KADIRI SRI SATHYA SAI DIST, AP</li>
              <li>
                📞{' '}
                <a href="tel:+919347698164" aria-label="Call +91 9347698164">
                  +91 9347698164
                </a>
              </li>
              <li>
                ✉️{' '}
                <a
                  href="mailto:kvkenterprises433@gmail.com"
                  aria-label="Email kvkenterprises433@gmail.com"
                >
                  kvkenterprises433@gmail.com
                </a>
              </li>
              <li>🕒 Mon–Sat: 9:00 AM – 6:00 PM</li>
            </ul>
          </div>

          {/* Social links - replace with your real pages when ready */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} KVK Solar Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
