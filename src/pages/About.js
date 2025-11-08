import React from 'react';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & CEO',
      experience: '15+ years in Solar Industry',
      image: '/images/team/founder.jpg',
      description: 'Passionate about sustainable energy and bringing solar power to every home in India.'
    },
    {
      name: 'Priya Sharma',
      position: 'Technical Director',
      experience: '12+ years in Renewable Energy',
      image: '/images/team/technical-director.jpg',
      description: 'Expert in solar system design and implementation with numerous successful projects.'
    },
    {
      name: 'Amit Patel',
      position: 'Installation Manager',
      experience: '10+ years in Solar Installation',
      image: '/images/team/installation-manager.jpg',
      description: 'Leads our skilled installation team to ensure perfect setup of every solar system.'
    }
  ];

  const certifications = [
    {
      name: 'MNRE Certified',
      description: 'Ministry of New and Renewable Energy Certified Installer',
      icon: '🏅'
    },
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System Certified',
      icon: '⭐'
    },
    {
      name: 'Green Energy Partner',
      description: 'Recognized by Government of Maharashtra',
      icon: '🌱'
    },
    {
      name: 'Safety Certified',
      description: 'Occupational Health and Safety Certified',
      icon: '🛡️'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started with a vision to make solar energy accessible to all'
    },
    {
      year: '2014',
      title: '100+ Installations',
      description: 'Completed over 100 successful solar installations'
    },
    {
      year: '2018',
      title: 'Government Partnership',
      description: 'Became empaneled vendor for government solar schemes'
    },
    {
      year: '2023',
      title: '5000+ Happy Customers',
      description: 'Served over 5000 satisfied customers across Maharashtra'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About KVK Solar</h1>
            <p className="hero-subtitle">
              Leading the Solar Revolution in Maharashtra Since 2010
            </p>
            <p className="hero-description">
              With over a decade of experience, KVK Solar has been at the forefront of 
              providing sustainable energy solutions to homes and businesses. Our commitment 
              to quality, customer satisfaction, and environmental responsibility has made 
              us the trusted choice for solar installations.
            </p>
          </div>
          <div className="about-hero-image">
            <img src="/images/about-hero.jpg" alt="KVK Solar Team" />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To make solar energy accessible, affordable, and reliable for every 
                household and business in India, contributing to a sustainable future 
                and energy independence.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading solar energy solutions provider in Maharashtra, 
                recognized for innovation, quality, and customer-centric approach 
                in renewable energy.
              </p>
            </div>
            <div className="values-card">
              <div className="card-icon">💡</div>
              <h3>Our Values</h3>
              <ul>
                <li>Quality & Excellence</li>
                <li>Customer First</li>
                <li>Environmental Responsibility</li>
                <li>Innovation & Technology</li>
                <li>Trust & Transparency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose KVK Solar?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h4>Expert Installation</h4>
              <p>Certified technicians with years of experience in solar system installation</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <h4>Cost Effective</h4>
              <p>Maximize savings with optimized solar solutions and government subsidies</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🛠️</div>
              <h4>Quality Products</h4>
              <p>Partnership with top brands like Adani and Tata for reliable components</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📞</div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock customer support and maintenance services</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📄</div>
              <h4>Documentation Help</h4>
              <p>Complete assistance with subsidy applications and paperwork</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <h4>Eco-Friendly</h4>
              <p>Contribute to reducing carbon footprint and protecting the environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="section-subtitle">
            Dedicated professionals committed to your solar energy needs
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <p className="experience">{member.experience}</p>
                  <p className="description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="container">
          <h2>Our Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">{cert.icon}</div>
                <h4>{cert.name}</h4>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="milestones-section">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;