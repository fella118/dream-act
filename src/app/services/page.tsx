/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChefHat, Armchair, Waves, HeartHandshake, Video } from 'lucide-react';
import SeparateurZellige from '@/components/SeparateurZellige';
import EtoileKhatim from '@/components/EtoileKhatim';
import { liensWhatsApp } from '@/lib/whatsapp';

const servicesDetail = [
  {
    id: "traiteur",
    titre: "Traiteur Gastronomique",
    description: "Notre cuisine célèbre l'héritage culinaire marocain tout en embrassant les standards gastronomiques internationaux. Chaque plat raconte une histoire, chaque bouchée est un voyage. Nos chefs sélectionnent les produits les plus frais, les épices les plus nobles, pour composer des menus qui marquent les esprits longtemps après la dernière note.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop",
    icone: <ChefHat size={32} className="text-or" />,
    liste: [
      "Menus marocains d'auteur (tajines, pastillas, méchoui)",
      "Gastronomie internationale et fusion",
      "Service à table et buffets premium",
      "Pâtisserie fine marocaine et française",
      "Bar mixologie et cocktails signature",
      "Adaptations végétariennes, halal, sans allergènes"
    ],
    lienMessage: "Demander un menu",
    lienId: liensWhatsApp.traiteur
  },
  {
    id: "location",
    titre: "Location de Matériel Événementiel",
    description: "Du cocktail intimiste de 20 convives au mariage grandiose de 800 invités, notre parc matériel est pensé pour l'excellence. Chaque élément est trié, entretenu et présenté avec soin.",
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2000&auto=format&fit=crop",
    icone: <Armchair size={32} className="text-or" />,
    liste: [
      "Mobilier lounge et tables premium",
      "Vaisselle et arts de la table haut de gamme",
      "Tentes berbères, chapiteaux et structures",
      "Sonorisation professionnelle et éclairage scénique",
      "Décoration florale et végétale sur mesure",
      "Logistique complète de livraison et montage"
    ],
    lienMessage: "Demander un devis",
    lienId: liensWhatsApp.location
  },
  {
    id: "pool-party",
    titre: "Animation Pool Parties",
    description: "L'art de transformer un bord de piscine en scène événementielle. Ambiance, rythme, lumière — nous maîtrisons la chorégraphie de vos soirées.",
    image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=2000&auto=format&fit=crop",
    icone: <Waves size={32} className="text-or" />,
    liste: [
      "DJ professionnel et playlists sur mesure",
      "Décoration poolside haut de gamme",
      "Service bar avec bartenders expérimentés",
      "Animation et spectacles vivants",
      "Coordination complète de la soirée"
    ],
    lienMessage: "Organiser ma pool party",
    lienId: liensWhatsApp.poolParty
  },
  {
    id: "mariage",
    titre: "Mariages de A à Z",
    description: "Un mariage n'est pas un événement. C'est le récit le plus important de deux vies. Nous portons ce récit avec la rigueur d'un chef d'orchestre et la passion d'un artisan. من البداية حتى النهاية.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000&auto=format&fit=crop",
    icone: <HeartHandshake size={32} className="text-or" />,
    liste: [
      "Planification complète et conseil",
      "Décoration sur mesure (riad, hôtel, désert, mer)",
      "Coordination jour J minute par minute",
      "Respect des traditions marocaines (Negafa, Issawa...)",
      "Coordination familiale et protocolaire",
      "Suivi post-événement"
    ],
    lienMessage: "Planifier mon mariage",
    lienId: liensWhatsApp.mariage
  },
  {
    id: "film",
    titre: "Film & Photo",
    description: "Notre équipe interne capture ce que les mots ne peuvent pas dire. Chaque image est composée comme un tableau, chaque plan est pensé comme une scène de cinéma.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop",
    icone: <Video size={32} className="text-or" />,
    liste: [
      "Photographes professionnels équipés",
      "Vidéastes et chefs opérateurs dédiés",
      "Prises de vue aériennes par drone",
      "Montage cinématique et étalonnage",
      "Livrables premium (albums haut de gamme, teasers)"
    ],
    lienMessage: "Demander un devis photo/vidéo",
    lienId: liensWhatsApp.film
  }
];

export default function PageServices() {
  return (
    <div className="flex flex-col min-h-screen bg-os">
      
      {/* 1. HERO SERVICES */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-minuit">
          <Image 
            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2000&auto=format&fit=crop" 
            alt="Nos Services Dream Act" 
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
            Nos Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-cormorant italic text-xl md:text-3xl text-os/90"
          >
            De l'idée à la réalisation, nous orchestrons chaque détail.
          </motion.p>
        </div>
      </section>

      {/* 2. LISTE DES SERVICES */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-32">
        {servicesDetail.map((service, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={service.id} id={service.id} className="scroll-mt-32">
              <div className={`flex flex-col gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                
                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-or/30 shadow-[0_20px_60px_-15px_rgba(139,58,47,0.3)] group">
                    <Image 
                      src={service.image} 
                      alt={service.titre} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-minuit/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </motion.div>

                {/* Contenu */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2 space-y-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-creme border border-or/20 text-or mb-4 shadow-sm">
                    {service.icone}
                  </div>
                  
                  <h2 className="font-amiri text-4xl lg:text-5xl text-minuit">{service.titre}</h2>
                  
                  <p className="font-cormorant text-xl text-cafe/80 leading-relaxed text-balance">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 py-6 font-cormorant text-lg text-minuit">
                    {service.liste.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <EtoileKhatim size={16} className="text-or mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={service.lienId} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-minuit hover:bg-minuit/90 text-or px-8 py-3 rounded-sm font-reem-kufi transition-colors shadow-md"
                  >
                    {service.lienMessage}
                  </a>
                </motion.div>

              </div>
              
              {/* Séparateur conditionnel */}
              {index < servicesDetail.length - 1 && (
                <div className="mt-32 max-w-sm mx-auto">
                   <div className="h-px bg-gradient-to-r from-transparent via-or/30 to-transparent w-full" />
                </div>
              )}
            </div>
          );
        })}
      </section>

      <SeparateurZellige />

      {/* 3. CTA FINAL */}
      <section className="py-24 px-6 text-center bg-creme">
        <div className="max-w-2xl mx-auto">
          <EtoileKhatim className="text-or mx-auto mb-8" size={48} />
          <h2 className="font-amiri text-4xl text-minuit mb-6">Un projet unique en tête ?</h2>
          <p className="font-cormorant italic text-2xl text-terracotta mb-10">Chaque événement mérite sa conversation.</p>
          <a href={liensWhatsApp.general} target="_blank" rel="noopener noreferrer" className="inline-block bg-or hover:bg-minuit text-minuit hover:text-or px-10 py-4 rounded-sm font-reem-kufi text-xl transition-all shadow-[0_10px_40px_-10px_rgba(212,175,55,0.4)]">
            Contactez notre équipe
          </a>
        </div>
      </section>

    </div>
  );
}
