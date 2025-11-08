import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ 
  service, 
  variant = 'default',
  onClick 
}) => {
  const {
    icon,
    title,
    description,
    features = [],
    image,
    ctaText = 'Learn More',
    isFeatured = false
  } = service;

  // Handle card click
  const handleClick = () => {
    if (onClick) {
      onClick(service);
    }
  };

  // Render different card variants
  const renderCardContent = () => {
    switch (variant) {
      case 'detailed':
        return (
          <div className={`service-card detailed ${isFeatured ? 'featured' : ''}`}>
            {image && (
              <div className="service-image">
                <img src={image} alt={title} />
                {isFeatured && <div className="featured-badge">Popular</div>}
              </div>
            )}
            <div className="service-content">
              <div className="service-header">
                <div className="service-icon">{icon}</div>
                <h3>{title}</h3>
              </div>
              <p className="service-description">{description}</p>
              
              {features.length > 0 && (
                <ul className="service-features">
                  {features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              )}
              
              <button className="btn btn-primary" onClick={handleClick}>
                {ctaText}
              </button>
            </div>
          </div>
        );

      case 'minimal':
        return (
          <div className="service-card minimal" onClick={handleClick}>
            <div className="service-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        );

      case 'with-image':
        return (
          <div className="service-card with-image" onClick={handleClick}>
            {image && (
              <div className="service-image">
                <img src={image} alt={title} />
              </div>
            )}
            <div className="service-content">
              <div className="service-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
              <button className="btn btn-secondary">View Details</button>
            </div>
          </div>
        );

      default:
        return (
          <div className={`service-card default ${isFeatured ? 'featured' : ''}`} onClick={handleClick}>
            <div className="service-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            {isFeatured && <div className="featured-badge">Most Popular</div>}
          </div>
        );
    }
  };

  return renderCardContent();
};

export default ServiceCard;