import React from 'react';
import './Home.css';
const Home = ({ onShowLeadForm }) => {
  const services = [
    {
      icon: '🏠',
      title: 'Residential Solar',
      description: 'Complete solar solutions for homes with subsidy assistance and maintenance support.'
    },
    {
      icon: '🏢',
      title: 'Commercial Solar',
      description: 'Energy solutions for businesses to reduce operational costs and carbon footprint.'
    },
    {
      icon: '🔧',
      title: 'Maintenance',
      description: 'Regular maintenance and prompt repair services for optimal system performance.'
    },
    {
      icon: '📋',
      title: 'Consulting',
      description: 'Expert advice on solar installation, government schemes, and energy optimization.'
    }
  ];

  const partners = [
  { 
    name: 'Tata Solar', 
    logo: '/images/partners/tata-power-logo.jpg'
  },
  { 
    name: 'Waaree Energies', 
    logo: '/images/partners/waree-solar-logo.jpg'
  },
  { 
    name: 'Goldi Solar', 
    logo: '/images/partners/loom-solar-logo.jpg'
  },
  { 
    name: 'Adani Solar', 
    logo: '/images/partners/adani-solar-logo.jpg'
  }
];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="container">
          <div className="hero-content">
            <h1>Power Your Future with Solar Energy</h1>
            <p>KVK Solar provides sustainable energy solutions for homes and businesses across Maharashtra. Save money and help the environment with our expert solar installations.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={onShowLeadForm}>
                Get Free Quote
              </button>
              <button className="btn btn-secondary">
                Learn About PM Surya Ghar
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/hero/solar-panels-hero.jpg" alt="Solar Panels Installation" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <h2>Our Solar Solutions</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PM Surya Ghar Highlight */}
      <section className="section scheme-highlight">
        <div className="container">
          <div className="scheme-content">
            <h2>PM Surya Ghar: Muft Bijli Yojana</h2>
            <p>Get up to 300 units of free electricity every month with government subsidies up to 60%.</p>
            <ul style={{ margin: '20px 0', paddingLeft: '20px' }}>
              <li>Subsidies up to 60% for residential solar installations</li>
              <li>Easy application process with our assistance</li>
              <li>Reduce your electricity bills significantly</li>
              <li>Contribute to a greener environment</li>
            </ul>
            <button className="btn btn-primary">Check Eligibility</button>
          </div>
          <div className="scheme-image">
            <img src="/images/schemes/pm-surya-ghar-scheme.jpg" alt="PM Surya Ghar Scheme" />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section">
        <div className="container">
          <h2>Our Trusted Partners</h2>
          <div className="partners-logos">
            {partners.map((partner, index) => (
              <div key={index} className="partner-logo">
                <img src={partner.logo} alt={partner.name} />
                <h4>{partner.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;