import React from 'react';

export default function SeparateurZellige({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full py-12 flex justify-center items-center opacity-80 ${className}`}>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-or/50 to-transparent flex-1" />
      <div className="px-6 flex gap-4 text-or">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mt-1" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
      <div className="w-full h-px bg-gradient-to-l from-transparent via-or/50 to-transparent flex-1" />
    </div>
  );
}
