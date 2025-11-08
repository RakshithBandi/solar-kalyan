import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "911234567890"; // Replace with actual number
  const message = "Hello, I'm interested in KVK Solar services. Please provide more information.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <a 
      className="whatsapp-button" 
      onClick={handleClick}
      title="Chat with us on WhatsApp"
    >
      💬
    </a>
  );
};

export default WhatsAppButton;