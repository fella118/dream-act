/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';
import { liensWhatsApp } from '@/lib/whatsapp';

export default function PiedDePage() {
  return (
    <footer className="bg-minuit text-os relative overflow-hidden pt-20 pb-10">
      {/* Motif zellige en arrière-plan */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20L20 0ZM20 4L7 17.5L20 30L33 17.5L20 4Z\' fill=\'%23D4AF37\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', backgroundSize: '40px' }} />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Colonne 1 : Logo et Description */}
        <div className="space-y-6">
          <div>
            <h2 className="font-amiri text-3xl text-or mb-1">Dream Act</h2>
            <p className="font-cormorant italic text-orClair text-lg">Traiteur Event · Safi</p>
          </div>
          <p className="font-cormorant text-os/80 text-lg leading-relaxed">
            Nous ne servons pas des événements. Nous créons des souvenirs inoubliables qui traversent les générations, avec l'élégance de l'hospitalité marocaine.
          </p>
        </div>

        {/* Colonne 2 : Navigation Rapide */}
        <div>
          <h3 className="font-amiri text-xl text-or mb-6">Navigation</h3>
          <ul className="space-y-4 font-cormorant text-lg">
            <li><Link href="/" className="hover:text-or transition-colors">Accueil</Link></li>
            <li><Link href="/services" className="hover:text-or transition-colors">Nos Services</Link></li>
            <li><Link href="/a-propos" className="hover:text-or transition-colors">À Propos</Link></li>
            <li><Link href="/clients" className="hover:text-or transition-colors">Nos Réalisations</Link></li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div>
          <h3 className="font-amiri text-xl text-or mb-6">Contact</h3>
          <ul className="space-y-4 font-cormorant text-lg">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-or mt-1 shrink-0" />
              <span>46000 Safi, Maroc<br/>(8Q36+WC Safi)</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-or shrink-0" />
              <a href="tel:+212661518747" className="hover:text-or transition-colors">+212 6 61 51 87 47</a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-or shrink-0" />
              <span>À votre service 24h/24, 7j/7</span>
            </li>
          </ul>
        </div>

        {/* Colonne 4 : Réseaux & Action */}
        <div className="space-y-6">
          <h3 className="font-amiri text-xl text-or mb-6">Suivez-nous</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-or/30 flex items-center justify-center hover:bg-or hover:text-minuit transition-colors" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-or/30 flex items-center justify-center hover:bg-or hover:text-minuit transition-colors" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
          <div className="pt-4">
            <a 
              href={liensWhatsApp.general} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block border border-or text-or hover:bg-or hover:text-minuit px-6 py-2 rounded-sm font-reem-kufi transition-all duration-300"
            >
              Nous Écrire sur WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* Barre de copyright */}
      <div className="mt-16 pt-8 border-t border-or/10 text-center font-cormorant text-os/60 relative z-10 px-6">
        <p>© {new Date().getFullYear()} Dream Act Traiteur Event — Fait avec ♥ à Safi</p>
      </div>
    </footer>
  );
}
