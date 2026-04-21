"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { liensWhatsApp } from '@/lib/whatsapp';
import { motion, AnimatePresence } from 'framer-motion';

export default function Entete() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Nos Clients', path: '/clients' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? 'bg-os/90 backdrop-blur-md border-b border-or/30 py-3 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex flex-col relative z-50">
          <span className={`font-amiri text-2xl md:text-3xl transition-colors duration-300 ${isScrolled || mobileMenuOpen ? 'text-minuit' : 'text-os'}`}>
            Dream Act
          </span>
          <span className={`font-cormorant italic text-sm md:text-base tracking-widest transition-colors duration-300 ${isScrolled || mobileMenuOpen ? 'text-terracotta' : 'text-os/80'}`}>
            Traiteur Event · Safi
          </span>
        </Link>

        {/* Navigation Bureau */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.path} 
                href={link.path}
                className={`relative group font-reem-kufi tracking-wide text-sm transition-colors duration-300 ${
                  isScrolled ? 'text-minuit hover:text-terracotta' : 'text-os hover:text-or'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-[1px] bg-or transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} 
                />
              </Link>
            )
          })}
        </nav>

        {/* Bouton WhatsApp Bureau */}
        <div className="hidden md:block">
          <a
            href={liensWhatsApp.general}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-terracotta hover:bg-minuit text-os px-6 py-2.5 rounded-sm font-reem-kufi text-sm transition-all duration-300 shadow-[0_4px_14px_0_rgba(139,58,47,0.39)] hover:shadow-[0_6px_20px_rgba(11,61,46,0.23)]"
          >
            <MessageCircle size={18} />
            <span>Réserver</span>
          </a>
        </div>

        {/* Bouton Menu Mobile */}
        <button 
          className={`md:hidden relative z-50 p-2 transition-colors duration-300 ${isScrolled || mobileMenuOpen ? 'text-minuit' : 'text-os'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={28} className="text-os" /> : <Menu size={28} />}
        </button>

      </div>

      {/* Menu Mobile Superposition */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-minuit z-40 flex flex-col justify-center items-center h-screen"
          >
            <nav className="flex flex-col gap-8 text-center w-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div 
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link 
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-amiri text-4xl ${isActive ? 'text-or' : 'text-os'} hover:text-or transition-colors`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              })}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <a
                  href={liensWhatsApp.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-terracotta text-os px-8 py-4 rounded-sm font-reem-kufi text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle size={24} />
                  <span>Réserver sur WhatsApp</span>
                </a>
              </motion.div>
            </nav>

            <div className="absolute bottom-12 opacity-10 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" className="text-or">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
