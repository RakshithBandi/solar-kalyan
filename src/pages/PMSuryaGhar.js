import React from 'react';
import './PMSuryaGhar.css';

const PMSuryaGhar = () => {
  return (
    <div className="pm-surya-ghar-page">
      {/* Hero Section */}
      <section className="scheme-hero">
        <div className="container">
          <h1>PM Surya Ghar: Muft Bijli Yojana</h1>
          <p>Free Electricity through Solar Power - Government of India Initiative</p>
        </div>
      </section>

      {/* Scheme Overview */}
      <section className="scheme-overview">
        <div className="container">
          <div className="overview-content">
            <h2>About the Scheme</h2>
            <p>
              PM Surya Ghar: Muft Bijli Yojana is a revolutionary scheme launched by the 
              Government of India to provide free electricity to households through solar power. 
              This initiative aims to reduce electricity bills for common households while 
              promoting renewable energy adoption across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="benefits-section">
        <div className="container">
          <h2>Key Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Subsidy Up to 60%</h3>
              <p>Get substantial subsidies on solar installation costs from the government</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Free Electricity</h3>
              <p>Receive up to 300 units of free electricity every month</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏠</div>
              <h3>Reduced Bills</h3>
              <p>Significantly reduce your monthly electricity expenses</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Eco-Friendly</h3>
              <p>Contribute to a greener environment with clean energy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="eligibility-section">
        <div className="container">
          <h2>Eligibility Criteria</h2>
          <div className="eligibility-list">
            <div className="eligibility-item">
              <span className="check-icon">✅</span>
              <span>Indian citizen with own house</span>
            </div>
            <div className="eligibility-item">
              <span className="check-icon">✅</span>
              <span>Valid electricity connection</span>
            </div>
            <div className="eligibility-item">
              <span className="check-icon">✅</span>
              <span>Available rooftop space for solar panels</span>
            </div>
            <div className="eligibility-item">
              <span className="check-icon">✅</span>
              <span>Household electricity consumption details</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="process-section">
        <div className="container">
          <h2>Application Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Check Eligibility</h3>
              <p>Verify your eligibility on the national portal</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Submit Documents</h3>
              <p>Provide required documents and application</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Technical Assessment</h3>
              <p>Get technical feasibility assessment done</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Installation</h3>
              <p>Solar system installation by empaneled vendors</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Commissioning</h3>
              <p>Inspection and system commissioning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidy Details */}
      <section className="subsidy-section">
        <div className="container">
          <h2>Subsidy Details</h2>
          <div className="subsidy-table">
            <div className="subsidy-row">
              <div className="system-capacity">Up to 3 kW</div>
              <div className="subsidy-amount">₹30,000 per kW</div>
            </div>
            <div className="subsidy-row">
              <div className="system-capacity">Above 3 kW</div>
              <div className="subsidy-amount">₹18,000 per kW</div>
            </div>
            <div className="subsidy-row">
              <div className="system-capacity">Total Maximum</div>
              <div className="subsidy-amount">₹78,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Free Electricity?</h2>
          <p>Our team will help you with the entire application process and installation</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Check Your Eligibility</button>
            <button className="btn btn-secondary">Contact for Assistance</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>What is PM Surya Ghar scheme?</h3>
              <p>It's a government scheme to provide free electricity through solar power with subsidies up to 60%.</p>
            </div>
            <div className="faq-item">
              <h3>How much subsidy will I get?</h3>
              <p>Subsidy ranges from ₹30,000 per kW for systems up to 3kW, with maximum subsidy of ₹78,000.</p>
            </div>
            <div className="faq-item">
              <h3>How long does the installation take?</h3>
              <p>Typically 2-4 weeks from application to commissioning, depending on documentation.</p>
            </div>
            <div className="faq-item">
              <h3>Is maintenance included?</h3>
              <p>Basic maintenance is covered, and we provide comprehensive after-sales support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PMSuryaGhar;