/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolio, temoignages } from '@/lib/donnees';
import EtoileKhatim from '@/components/EtoileKhatim';
import { liensWhatsApp } from '@/lib/whatsapp';
import { Star } from 'lucide-react';

const categories = ["Tous", "Mariage", "Pool Party", "Corporate", "Anniversaire"];

export default function PageClients() {
  const [fitreActif, setFiltreActif] = useState("Tous");

  const portfolioFiltre = portfolio.filter(item => 
    fitreActif === "Tous" ? true : item.categorie === fitreActif
  );

  return (
    <div className="flex flex-col min-h-screen bg-os">
      
      {/* 1. HERO PORTFOLIO */}
      <section className="relative h-[50vh] flex items-center justify-center border-b border-or/20 bg-creme">
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20L20 0ZM20 4L7 17.5L20 30L33 17.5L20 4Z\' fill=\'%23D4AF37\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', backgroundSize: '60px' }} />
        <div className="relative z-10 text-center px-4 mt-20">
          <h1 className="font-amiri text-5xl md:text-7xl text-minuit mb-6">Nos Réalisations</h1>
          <p className="font-cormorant italic text-xl md:text-3xl text-terracotta">
            Chaque événement est une histoire. Voici quelques-unes des plus belles.
          </p>
        </div>
      </section>

      {/* 2. FILTRES & GRILLE PORTFOLIO */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          
          {/* Menu de filtres */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltreActif(cat)}
                className={`px-6 py-2 rounded-full font-reem-kufi text-sm transition-all duration-300 ${
                  fitreActif === cat 
                    ? 'bg-or text-minuit shadow-md' 
                    : 'border border-or/30 text-minuit/70 hover:border-or/80 hover:text-minuit'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grille MASONRY / Responsive */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence>
              {portfolioFiltre.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="group relative aspect-square rounded-sm overflow-hidden border border-or/20 shadow-md cursor-pointer"
                >
                  <Image 
                    src={item.image} 
                    alt={item.titre} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-50 sepia-[0.05]" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Superposition au survol */}
                  <div className="absolute inset-0 bg-gradient-to-t from-minuit/90 via-minuit/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                    <span className="font-reem-kufi text-xs text-or tracking-widest uppercase mb-2 block">{item.categorie}</span>
                    <h3 className="font-amiri text-2xl text-os mb-1">{item.titre}</h3>
                    <div className="flex items-center justify-between text-os/80 font-cormorant">
                      <span>{item.lieu}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </section>

      {/* 3. TÉMOIGNAGES COMPLETS */}
      <section className="py-24 bg-creme border-t border-or/10 px-6">
         <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-amiri text-4xl text-minuit mb-4">La Parole de Nos Clients</h2>
              <EtoileKhatim className="text-or/50 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* On simule 6 avis en dupliquant les 3 existants (pour le visuel demandé) */}
              {[...temoignages, ...temoignages].map((t, i) => (
                <div key={i} className="bg-os p-8 rounded-sm shadow-sm border border-or/10">
                  <div className="flex text-or mb-4">
                    {[...Array(t.note)].map((_, index) => <Star key={index} fill="currentColor" size={16}/>)}
                  </div>
                  <p className="font-cormorant text-lg text-cafe/80 mb-6 min-h-[100px]">&quot;{t.texte}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="font-amiri text-lg font-bold text-minuit">{t.nom}</div>
                    <div className="h-px bg-or/30 flex-1" />
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 4. CONFIANCE (Marques stylisées) */}
      <section className="py-20 bg-os px-6 text-center">
        <h3 className="font-cormorant italic text-2xl text-minuit/60 mb-12">Ils ont choisi l'excellence Dream Act</h3>
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {["Riad Kniza", "La Mamounia", "Villa Oualidia", "Palais Faraj", "Royal Mansour"].map((brand, i) => (
            <div key={i} className="font-amiri text-2xl md:text-3xl text-minuit tracking-wider">
               {brand}
            </div>
          ))}
        </div>
      </section>

      {/* 5. APPEL A L'ACTION PORTFOLIO */}
      <section className="bg-terracotta text-os py-24 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-amiri text-4xl md:text-6xl mb-6">Et votre histoire ? Quelle sera-t-elle ?</h2>
          <p className="font-cormorant text-xl md:text-2xl opacity-90 mb-10">
            Confiez-nous l'organisation de votre événement et entrez dans la légende Dream Act.
          </p>
          <a href={liensWhatsApp.general} target="_blank" rel="noopener noreferrer" className="inline-block bg-or hover:bg-minuit text-minuit hover:text-os px-12 py-4 rounded-sm font-reem-kufi text-xl transition-all shadow-lg">
            Créons ensemble
          </a>
        </div>
      </section>

    </div>
  );
}
