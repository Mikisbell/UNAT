'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroWithMenu from '@/components/HeroWithMenu';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SearchBar from '@/components/SearchBar';
import StatsCounter from '@/components/StatsCounter';
import QuickLinks from '@/components/QuickLinks';
import PorQueUNAT from '@/components/PorQueUNAT';
import RequisitosSimples from '@/components/RequisitosSimples';
import ComoLlegar from '@/components/ComoLlegar';
import NoticiasDestacadas from '@/components/NoticiasDestacadas';
import InvestigacionDestacada from '@/components/InvestigacionDestacada';
import TestimoniosHome from '@/components/TestimoniosHome';
import GaleriaCampus from '@/components/GaleriaCampus';
import EventosProximos from '@/components/EventosProximos';
import FooterStanford from '@/components/FooterStanford';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const carreras = [
    { id: 'civil', nombre: 'Ingeniería Civil', icon: '🏗️', color: 'from-orange-500 to-amber-600' },
    { id: 'forestal-ambiental', nombre: 'Ingeniería Forestal y Ambiental', icon: '🌳', color: 'from-green-600 to-emerald-700' },
    { id: 'industrias-alimentarias', nombre: 'Ingeniería en Industrias Alimentarias', icon: '🍎', color: 'from-red-500 to-orange-600' },
    { id: 'industrial', nombre: 'Ingeniería Industrial', icon: '⚙️', color: 'from-blue-600 to-indigo-700' },
    { id: 'enfermeria', nombre: 'Enfermería', icon: '⚕️', color: 'from-pink-500 to-rose-600' }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero con Menú */}
      <HeroWithMenu />
      <SearchBar />
      <WhatsAppWidget />
      
      {/* 2. Stats Bar - Credibilidad */}
      <StatsCounter />

      {/* 3. ¿Por Qué UNAT? - Universidad Pública GRATUITA */}
      <PorQueUNAT />

      {/* 4. Requisitos Simples - ¿Qué necesito para postular? */}
      <RequisitosSimples />

      {/* 5. Carreras Destacadas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Carreras Profesionales
            </h2>
            <p className="text-xl text-gray-600">
              5 carreras acreditadas con proyección al desarrollo regional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {carreras.map((carrera, index) => (
              <motion.div
                key={carrera.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/carreras/${carrera.id}`}>
                  <div className={`bg-gradient-to-br ${carrera.color} rounded-2xl p-6 text-center text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer h-full`}>
                    <div className="text-6xl mb-4">{carrera.icon}</div>
                    <h3 className="text-lg font-bold">{carrera.nombre}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/carreras" className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              Ver todas las carreras
              <svg className="w-5 h-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Investigación Destacada - Prestigio */}
      <InvestigacionDestacada />

      {/* 7. Vida Universitaria - Galería Campus */}
      <GaleriaCampus />

      {/* 7. Noticias Destacadas - Contenido Fresco */}
      <NoticiasDestacadas />

      {/* 8. Testimonios - Empleabilidad Real */}
      <TestimoniosHome />

      {/* 9. Cómo Llegar - Accesibilidad */}
      <ComoLlegar />

      {/* 10. CTA Final - Pre-Footer */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              ¿Listo para ser parte de UNAT?
            </h2>
            <p className="text-2xl mb-12 text-primary-100 max-w-3xl mx-auto">
              Únete a una comunidad comprometida con la excelencia académica y el desarrollo regional
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/admision"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105"
              >
                📝 Postular Ahora
              </Link>
              <Link
                href="/vida-universitaria"
                className="inline-flex items-center justify-center px-10 py-5 bg-primary-700 text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-primary-600 transition-all transform hover:scale-105"
              >
                🎥 Tour Virtual
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-white border-2 border-white/50 rounded-xl font-bold text-lg hover:bg-white/10 transition-all transform hover:scale-105"
              >
                💬 Contacto
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-primary-200 text-lg">
                <span className="font-bold">Admisión 2025-I:</span> Inscripciones abiertas • 100% Gratuito • Examen: 6 de Abril
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterStanford />
    </main>
  );
}
