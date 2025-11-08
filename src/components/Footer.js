import React from 'react';

const Footer = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>KVK Solar</h3>
            <p>Leading solar energy solutions provider in Pune, Maharashtra. We provide sustainable energy solutions for homes and businesses.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
              <li><button onClick={() => setCurrentPage('services')}>Services</button></li>
              <li><button onClick={() => setCurrentPage('pm-surya-ghar')}>PM Surya Ghar</button></li>
              <li><button onClick={() => setCurrentPage('gallery')}>Gallery</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li>📍 RTC BUS STAND KADIRI SRI SATHYA SAI DIST,AP</li>
              <li>📞 +91 9347698164</li>
              <li>✉️ kvkenterprises433@gmail.com</li>
              <li>🕒 Mon-Sat: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
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