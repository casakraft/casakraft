'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { gaEvent } from '../lib/ga';

const WhatsAppButton = () => {
  const [whatsappNumber] = useState('+971586023677');

  const handleClick = () => {
    // Fire GA4 conversion event
    gaEvent('whatsapp_click', {
      event_category: 'conversion',
      event_label: 'floating_whatsapp_button',
    });

    // Format the WhatsApp URL with your number
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}`;

    // Small delay so the GA4 event can send before opening a new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 200);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-6 rounded-full flex items-center space-x-2 sm:py-4 sm:px-4 animate-pulse"
      style={{
        position: 'fixed',
        bottom: '60px',
        left: '20px',
        zIndex: '9999',
      }}
      aria-label="WhatsApp Casa Kraft Interiors"
    >
      <FaWhatsapp className="text-xl" />
    </button>
  );
};

export default WhatsAppButton;
