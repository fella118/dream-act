/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Award, Clock, Heart, Sparkles, Star, ChevronDown } from 'lucide-react';
import SeparateurZellige from '@/components/SeparateurZellige';
import EtoileKhatim from '@/components/EtoileKhatim';
import { liensWhatsApp } from '@/lib/whatsapp';
import { services, temoignages } from '@/lib/donnees';

function CountUp({ end, suffix = "" }: { end: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setValue(end);
          clearInterval(timer);
        } else {
          setValue(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={ref}>{value}{suffix}</span>;
}

export default function Accueil() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HÉRO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-minuit">
          <Image 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000&auto=format&fit=crop" 
            alt="Mariage Marocain de Luxe" 
            fill 
            className="object-cover opacity-60 mix-blend-luminosity filter sepia-[0.15] saturate-110 brightness-95"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-minuit/70 via-cafe/50 to-terracotta/60" />
          <div className="absolute inset-0 mix-blend-overlay opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20L20 0ZM20 4L7 17.5L20 30L33 17.5L20 4Z\' fill=\'%23D4AF37\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', backgroundSize: '80px' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 md:mt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <span className="inline-block border border-or/30 text-or px-6 py-2 rounded-full font-cormorant tracking-widest text-sm mb-6 bg-minuit/30 backdrop-blur-sm">
              ✦ Safi · Depuis 2020 ✦
            </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="font-amiri text-5xl md:text-[100px] leading-tight text-os mb-2 drop-shadow-lg">
            L'Art de Recevoir
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="font-cormorant italic text-3xl md:text-5xl text-or mb-6">
            à la Marocaine
          </motion.p>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.8 }} className="font-reem-kufi text-xl md:text-3xl text-os/90 mb-8" dir="rtl">
            فن الضيافة بلمسة مغربية أصيلة
          </motion.p>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="font-cormorant text-lg md:text-2xl text-os/80 max-w-2xl mx-auto mb-12">
            Traiteur d'exception · Événements sur mesure · Souvenirs inoubliables
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a href={liensWhatsApp.general} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-or hover:bg-orClair text-minuit font-reem-kufi px-8 py-4 rounded-sm transition-colors text-lg shadow-[0_10px_40px_-10px_rgba(212,175,55,0.4)]">
              Réserver sur WhatsApp
            </a>
            <Link href="/services" className="w-full sm:w-auto border-2 border-or/50 hover:border-or text-os hover:text-or px-8 py-4 rounded-sm font-reem-kufi transition-all text-lg backdrop-blur-sm">
              Découvrir notre univers
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className="flex items-center justify-center gap-3 text-os/90 font-cormorant">
            <div className="flex text-or"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
            <span className="text-sm tracking-wide">5.0 / 5 · 33 avis Google vérifiés</span>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 text-or/60">
          <ChevronDown size={32} />
        </motion.div>
      </section>

      <SeparateurZellige />

      {/* 2. SERVICES APERCU */}
      <section className="py-16 md:py-32 px-6">
        <div className="container mx-auto text-center mb-20">
          <h2 className="font-amiri text-4xl md:text-6xl text-minuit mb-4">Un Savoir-Faire Complet</h2>
          <p className="font-cormorant italic text-2xl text-terracotta">Cinq expertises réunies sous un même toit</p>
        </div>
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-96 rounded-sm overflow-hidden border border-or/20 cursor-pointer shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(139,58,47,0.3)] transition-all duration-700"
            >
              <Image src={service.image} alt={service.titre} fill className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] filter brightness-75 group-hover:brightness-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-cafe/90 via-cafe/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-amiri text-2xl text-os mb-2 group-hover:text-or transition-colors">{service.titre}</h3>
                <p className="font-cormorant text-os/80 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">{service.description}</p>
                <Link href={service.lien} className="flex items-center gap-2 text-or font-reem-kufi text-sm transform transition-transform group-hover:translate-x-2">
                  En savoir plus <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. QUATRE PILIERS */}
      <section className="py-24 bg-creme relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20L20 0ZM20 4L7 17.5L20 30L33 17.5L20 4Z\' fill=\'%23D4AF37\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', backgroundSize: '60px' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
             <h2 className="font-amiri text-4xl md:text-5xl text-minuit">La Différence Dream Act</h2>
             <EtoileKhatim className="text-or mx-auto mt-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Award size={36}/>, t: "Excellence", d: "Chaque détail est pensé, chaque geste est maîtrisé." },
              { icon: <Clock size={36}/>, t: "Précision", d: "La ponctualité et la rigueur au cœur de chaque événement." },
              { icon: <Heart size={36}/>, t: "Tradition", d: "L'hospitalité marocaine authentique, sublimée." },
              { icon: <Sparkles size={36}/>, t: "Disponibilité", d: "À vos côtés 24h/24, 7j/7, sans aucun compromis." }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-os flex items-center justify-center text-terracotta mb-6 shadow-md border border-or/20">
                  {p.icon}
                </div>
                <h3 className="font-amiri text-2xl text-minuit mb-3">{p.t}</h3>
                <p className="font-cormorant text-lg text-cafe/80">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CHIFFRES D'IMPACT */}
      <section className="py-24 bg-gradient-to-br from-terracotta to-minuit relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20L20 0ZM20 4L7 17.5L20 30L33 17.5L20 4Z\' fill=\'%23D4AF37\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', backgroundSize: '100px' }} />
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 text-os text-center">
          <div>
            <div className="font-amiri text-5xl md:text-[80px] text-or mb-2"><CountUp end={500} suffix='+'/></div>
            <div className="font-reem-kufi text-lg">Événements réalisés</div>
          </div>
          <div>
            <div className="font-amiri text-5xl md:text-[80px] text-or mb-2">5.0</div>
            <div className="font-reem-kufi text-lg">Note Google</div>
          </div>
          <div>
            <div className="font-amiri text-5xl md:text-[80px] text-or mb-2">24/7</div>
            <div className="font-reem-kufi text-lg">Disponibilité</div>
          </div>
          <div>
            <div className="font-amiri text-5xl md:text-[80px] text-or mb-2">100%</div>
            <div className="font-reem-kufi text-lg">Sur mesure</div>
          </div>
        </div>
      </section>

      {/* 5. TÉMOIGNAGES */}
      <section className="py-24 md:py-32 bg-os px-6">
        <div className="container mx-auto text-center mb-16">
          <h2 className="font-amiri text-4xl md:text-5xl text-minuit mb-4">Ils Nous Ont Confié Leurs Moments</h2>
        </div>
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {temoignages.map((t, i) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-creme p-10 rounded-sm border border-or/20 shadow-md relative"
            >
              <div className="absolute -top-4 -left-4 text-or opacity-30 text-6xl font-amiri">&quot;</div>
              <div className="flex text-or mb-6">
                {[...Array(t.note)].map((_, index) => <Star key={index} fill="currentColor" size={18}/>)}
              </div>
              <p className="font-cormorant text-xl italic text-cafe/80 mb-8 leading-relaxed">&quot;{t.texte}&quot;</p>
              <div className="flex items-center gap-4 border-t border-or/20 pt-6">
                <div className="w-12 h-12 bg-minuit text-or flex items-center justify-center font-amiri text-xl rounded-full">
                  {t.nom.charAt(0)}
                </div>
                <div>
                  <h4 className="font-amiri text-xl text-minuit">{t.nom}</h4>
                  <p className="font-reem-kufi text-xs text-minuit/50 uppercase tracking-widest">Avis Vérifié</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-minuit">
          <Image 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop" 
            alt="Événement nuit" 
            fill 
            className="object-cover opacity-40 filter sepia-[0.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-minuit via-cafe/60 to-transparent" />
        </div>
        
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-amiri text-5xl md:text-7xl text-or mb-8 drop-shadow-xl"
          >
            Et si votre prochain événement devenait légende ?
          </motion.h2>
          <p className="font-cormorant text-2xl text-os/90 mb-12 italic">
            Parlons de votre projet. Un message, une réponse sous l'heure.
          </p>
          <a href={liensWhatsApp.general} target="_blank" rel="noopener noreferrer" className="inline-block bg-or hover:bg-os text-minuit hover:text-terracotta font-reem-kufi px-12 py-5 rounded-sm transition-colors text-xl shadow-[0_10px_40px_-5px_rgba(212,175,55,0.5)]">
            Démarrer l'expérience
          </a>
        </div>
      </section>

    </div>
  );
}
