import React from 'react';

export default function EtoileKhatim({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" fill="currentColor" fillOpacity="0.2"/>
      <path d="M12 2L14.8213 8.16335L21.5106 7.48943L16.8367 12.8687L18.5 19.5L12 16L5.5 19.5L7.16335 12.8687L2.48943 7.48943L9.17866 8.16335L12 2Z" />
    </svg>
  );
}
