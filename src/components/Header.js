import React from 'react';

const Header = ({ currentPage, setCurrentPage, onShowLeadForm }) => {
  const menuItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About Us' },
    { key: 'pm-surya-ghar', label: 'PM Surya Ghar' },
    { key: 'services', label: 'Services' },
    { key: 'gallery', label: 'Gallery' },
    { key: 'contact', label: 'Contact' }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>KVK Solar</h1>
        </div>
        <nav className="nav">
          <ul>
            {menuItems.map(item => (
              <li key={item.key}>
                <button 
                  className={currentPage === item.key ? 'active' : ''}
                  onClick={() => setCurrentPage(item.key)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="cta-button">
          <button className="btn btn-primary" onClick={onShowLeadForm}>
            Get Free Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;