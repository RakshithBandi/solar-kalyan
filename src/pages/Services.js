import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Residential Solar Installation",
      description: "Complete solar solutions for homes including installation, subsidy assistance, and maintenance.",
      features: ["Rooftop installation", "Subsidy guidance", "Maintenance", "24/7 support"],
      image: "/images/residential-solar.jpg"
    },
    {
      title: "Commercial Solar Solutions",
      description: "Custom solar solutions for businesses to reduce electricity costs and carbon footprint.",
      features: ["Custom design", "ROI analysis", "Maintenance contracts", "Energy monitoring"],
      image: "/images/commercial-solar.jpg"
    },
    {
      title: "Solar Maintenance & Repair",
      description: "Regular maintenance and repair services to ensure optimal performance of your solar system.",
      features: ["Regular checkups", "Panel cleaning", "Fault diagnosis", "Performance optimization"],
      image: "/images/maintenance.jpg"
    },
    {
      title: "Solar Consulting",
      description: "Expert consultation for solar installation, government schemes, and energy optimization.",
      features: ["Site assessment", "Technical consultation", "Scheme guidance", "Documentation support"],
      image: "/images/consulting.jpg"
    }
  ];

  return (
    <div className="page-container">
      <div className="section">
        <div className="container">
          <h1>Our Services</h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '50px', color: '#666' }}>
            Comprehensive solar energy solutions for all your needs
          </p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul style={{ textAlign: 'left', marginTop: '15px' }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: '8px' }}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="btn btn-primary" style={{ marginTop: '20px' }}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;