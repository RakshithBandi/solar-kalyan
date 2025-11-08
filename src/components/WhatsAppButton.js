import React from 'react';

const WhatsAppButton = () => {
  // WhatsAppButton.js
const phone = "919876543210";              // ← your number with country code
const message = "Hello! I’d like to know more.";
const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

return (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-button"
    aria-label="Chat with us on WhatsApp"
  >
    Chat on WhatsApp
  </a>
);

};

export default WhatsAppButton;