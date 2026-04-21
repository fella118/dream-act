import React from 'react';

export default function CoinMoucharabieh({ className = "", position = "top-left" }: { className?: string, position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const getRotation = () => {
    switch (position) {
      case 'top-right': return 'rotate-90';
      case 'bottom-right': return 'rotate-180';
      case 'bottom-left': return '-rotate-90';
      default: return '';
    }
  };

  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${className} ${getRotation()} text-or/40`}
    >
      <path d="M0 0H40V1C40 1 30 1 20 1C10 1 1 10 1 20C1 30 1 40 1 40H0V0Z" fill="currentColor"/>
      <path d="M5 5H15V6C15 6 10 6 8 8C6 10 6 15 6 15H5V5Z" fill="currentColor"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  );
}
