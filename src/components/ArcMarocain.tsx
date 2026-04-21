import React from 'react';

export default function ArcMarocain({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ borderRadius: '50% 50% 0 0 / 20% 20% 0 0' }}>
      <div className="absolute inset-0 border-2 border-or/30 pointer-events-none z-10" style={{ borderRadius: '50% 50% 0 0 / 20% 20% 0 0' }} />
      {children}
    </div>
  );
}
