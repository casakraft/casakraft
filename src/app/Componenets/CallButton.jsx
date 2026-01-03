'use client';

import { FaPhoneAlt } from 'react-icons/fa';
import { gaEvent } from '../lib/ga';

const CallButton = () => {
  const phoneNumber = '+971586023677';

  const handleClick = () => {
    // Fire GA4 conversion event
    gaEvent('phone_click', {
      event_category: 'conversion',
      event_label: 'floating_call_button',
    });

    // Initiate the call
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#c38d90] text-white font-bold py-6 px-6 rounded-full flex items-center space-x-2 sm:py-4 sm:px-4 animate-pulse md:hidden"
      style={{
        position: 'fixed',
        bottom: '60px',
        right: '40px',
        zIndex: '9999',
      }}
      aria-label="Call Casa Kraft Interiors"
    >
      <FaPhoneAlt className="text-2xl" />
    </button>
  );
};

export default CallButton;
