import React, { useState } from 'react';
// import './LeadForm.css'; // Optional: create this for form-specific styles

const LeadForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      alert('Thank you for your inquiry! We will contact you within 24 hours.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'general',
        message: ''
      });
      onClose();
    } catch (error) {
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
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
          rows="4"
          placeholder="Tell us about your requirements..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="btn btn-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </button>
    </form>
  );
};

export default LeadForm;