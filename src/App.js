import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PMSuryaGhar from './pages/PMSuryaGhar';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import LeadForm from './components/LeadForm'; // Add this import

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLeadForm, setShowLeadForm] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onShowLeadForm={() => setShowLeadForm(true)} />;
      case 'about':
        return <About />;
      case 'pm-surya-ghar':
        return <PMSuryaGhar />;
      case 'services':
        return <Services />;
      case 'clients':
        return <Clients />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onShowLeadForm={() => setShowLeadForm(true)} />;
    }
  };

  return (
    <div className="App">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        onShowLeadForm={() => setShowLeadForm(true)}
      />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <WhatsAppButton />
      
      {/* Lead Form Modal */}
      {showLeadForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="close-button" 
              onClick={() => setShowLeadForm(false)}
            >
              ×
            </button>
            <h3>Get Your Free Solar Consultation</h3>
            <LeadForm onClose={() => setShowLeadForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;