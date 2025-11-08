import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'general',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact KVK Solar</h1>
          <p>Get in touch with us for all your solar energy needs</p>
        </div>
      </section>

      <div className="container">
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>We're here to help you with your solar energy journey. Reach out to us for consultations, quotes, and support.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Address</h3>
                  <p>Pune, Maharashtra, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Phone</h3>
                  <p>+91 1234567890</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>info@kvksolar.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-link">📘 Facebook</a>
                <a href="#" className="social-link">📷 Instagram</a>
                <a href="#" className="social-link">💼 LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="general">General Inquiry</option>
                  <option value="residential">Residential Solar</option>
                  <option value="commercial">Commercial Solar</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="consulting">Consulting</option>
                  <option value="pm-surya-ghar">PM Surya Ghar Scheme</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Thank you for your message! We'll contact you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  ❌ There was an error sending your message. Please try again.
                </div>
              )}

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Quick Contact Banner */}
      <section className="quick-contact">
        <div className="container">
          <div className="quick-contact-content">
            <div className="quick-contact-text">
              <h3>Need Immediate Assistance?</h3>
              <p>Call us now for quick solar consultation</p>
            </div>
            <div className="quick-contact-actions">
              <a href="tel:+911234567890" className="call-btn">
                📞 Call Now
              </a>
              <a 
                href="https://wa.me/911234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="whatsapp-btn"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;