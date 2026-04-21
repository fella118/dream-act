/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import EtoileKhatim from '@/components/EtoileKhatim';

export default function PageAPropos() {
  return (
    <div className="flex flex-col min-h-screen bg-os">
      
      {/* 1. HERO À PROPOS */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-minuit">
          <Image 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop" 
            alt="Équipe Dream Act" 
            fill 
            className="object-cover opacity-50 filter sepia-[0.1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-os via-minuit/60 to-minuit/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-amiri text-5xl md:text-7xl text-or mb-6 drop-shadow-lg"
          >
            L'Histoire d'une Passion
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-cormorant italic text-xl md:text-3xl text-os/90"
          >
            Né à Safi, rayonnant sur tout le Maroc.
          </motion.p>
        </div>
      </section>

      {/* 2. HISTOIRE ÉDITORIALE */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 sticky top-32"
          >
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-or/20 shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop" 
                alt="Mariage Tradition Architecture" 
                fill 
                className="object-cover filter sepia-[0.15]" 
              />
            </div>
            <div className="absolute -bottom-8 -right-8 text-or opacity-20 hidden lg:block pointer-events-none">
              <EtoileKhatim size={120} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12 font-cormorant text-xl text-cafe/90 mt-8 space-y-8 leading-[1.8]"
          >
            <p className="first-letter:font-amiri first-letter:text-7xl first-letter:text-or first-letter:mr-3 first-letter:float-left">
              Fondée au cœur de Safi, la maison Dream Act Traiteur Event est née de la vision singulière de Si Akram : transcender la simple prestation de services pour ériger l&apos;événementiel au rang d&apos;art véritable. Profondément enracinés dans l&apos;hospitalité marocaine authentique, nous avons bâti notre réputation sur la rencontre harmonieuse entre la richesse de nos traditions séculaires et l&apos;exigence contemporaine de la perfection.
            </p>
            <p>
              Au fil des années, percevant les attentes toujours plus élevées de notre clientèle, nous avons évolué d&apos;un luxueux service traiteur vers une agence de production événementielle globale. Cette intégration complète nous permet de maîtriser la totalité de nos prestations — de la gastronomie à la location du matériel, de l&apos;animation scénique à la captation cinématographique — le tout sous un seul et même toit, garantissant ainsi une cohérence sans faille.
            </p>
            <p>
              Aujourd&apos;hui, avec plus de 500 événements majestueux orchestrés à travers tout le Royaume du Maroc, notre ambition demeure intacte : insuffler l&apos;âme du luxe marocain dans vos célébrations et faire en sorte que chaque invité reparte avec le sentiment d&apos;avoir vécu un instant suspendu dans le temps. بالنقا والبنة, الدقة والانضباط.
            </p>
          </motion.div>
        
        </div>
      </section>

      {/* 3. SAVOIR-FAIRE */}
      <section className="py-24 bg-creme relative">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { t: "Artisanat Marocain", d: "L'héritage dans chaque geste, chaque recette, chaque ornement." },
              { t: "Précision d'Orfèvre", d: "Rien n'est laissé au hasard. Un timing parfait, un service irréprochable." },
              { t: "Créativité Contemporaine", d: "L'audace nécessaire pour surprendre, au service pur de l'émotion." }
            ].map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="space-y-4"
              >
                <div className="w-16 h-px bg-or mx-auto mb-6" />
                <h3 className="font-amiri text-2xl text-minuit">{v.t}</h3>
                <p className="font-cormorant italic text-xl text-terracotta">{v.d}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* 4. ÉQUIPE */}
      <section className="py-32 px-6">
        <div className="container mx-auto text-center mb-16">
          <h2 className="font-amiri text-4xl md:text-5xl text-minuit mb-4">Les Mains Derrière la Magie</h2>
          <div className="w-24 h-px bg-or mx-auto" />
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { nom: "Si Akram", role: "Fondateur & Directeur Artistique", init: "SA" },
            { nom: "Chef Exécutif", role: "Cuisine et Gastronomie", init: "CE" },
            { nom: "Responsable Événementiel", role: "Coordination et Logistique", init: "RE" },
            { nom: "Directeur Image", role: "Film et Production Photo", init: "DI" }
          ].map((membre, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-tr from-terracotta/20 to-or/30 border border-or/20 flex items-center justify-center mb-6 group-hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)] transition-all duration-500">
                <span className="font-amiri text-4xl text-or/60 group-hover:text-or/90 transition-colors drop-shadow-sm">{membre.init}</span>
              </div>
              <h4 className="font-amiri text-2xl text-minuit">{membre.nom}</h4>
              <p className="font-cormorant text-lg text-cafe/70 mt-1">{membre.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. CITATION MONUMENTALE */}
      <section className="bg-minuit py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20L20 0ZM20 4L7 17.5L20 30L33 17.5L20 4Z\' fill=\'%23D4AF37\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', backgroundSize: '100px' }} />
        
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <EtoileKhatim className="text-or/50 mx-auto mb-12" size={40} />
            <p className="font-cormorant italic text-3xl md:text-[44px] leading-snug text-[#E8C974] mb-12 text-balance">
              « Nous ne servons pas des événements. Nous créons des souvenirs inoubliables qui traversent les générations. »
            </p>
            <div className="font-amiri text-xl text-os/80 tracking-widest">
              — SI AKRAM, FONDATEUR
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
