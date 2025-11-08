// src/components/WhatsAppButton.js
import React from "react";

const WhatsAppButton = ({ phone = "911234567890", message = "Hello! I’d like to know more." }) => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      💬 WhatsApp
    </a>
  );
};

export default WhatsAppButton;
