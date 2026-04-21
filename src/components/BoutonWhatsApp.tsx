"use client";

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { liensWhatsApp } from '@/lib/whatsapp';
import { motion, AnimatePresence } from 'framer-motion';

export default function BoutonWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="bg-os text-minuit px-4 py-2 rounded-md shadow-lg border border-or/20 text-sm font-cormorant hidden md:block"
          >
            Chattez avec nous · Réponse 24/7
          </motion.div>
        )}
      </AnimatePresence>
      <a
        href={liensWhatsApp.general}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 rounded-full bg-or/30 opacity-0 group-hover:opacity-100 scale-150 group-hover:scale-100 transition-all duration-500 blur-md pointer-events-none" />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <MessageCircle size={32} />
        </motion.div>
      </a>
    </div>
  );
}
