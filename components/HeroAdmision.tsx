'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, GraduationCap, Calendar, Users, ArrowRight } from 'lucide-react';

export default function HeroAdmision() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Estudiante en examen */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070"
          alt="Estudiante preparándose para examen de admisión UNAT"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay con gradiente más dinámico */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/80 to-primary-900/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-transparent to-transparent" />
        
        {/* Elementos decorativos flotantes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Círculos decorativos */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl" />
        </motion.div>
        
        {/* Patrón decorativo sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      {/* Content - Centrado y más limpio */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-32">
        {/* Badge SUNEDU */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8"
        >
          <CheckCircle2 className="w-6 h-6 text-green-300" strokeWidth={2.5} />
          <span className="text-white text-sm font-bold">Universidad Licenciada SUNEDU</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight"
        >
          ADMISIÓN
          <span className="block text-secondary-400">2025-I</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl text-white/90 font-semibold mb-16 max-w-4xl mx-auto leading-relaxed"
        >
          Proceso de admisión 100% online. Examen: 6 de Abril, 2025
        </motion.p>

        {/* Stats inline - Más limpio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {[
            { label: 'Inscripción', value: 'S/. 200' },
            { label: 'Vacantes', value: '160' },
            { label: 'Plazo', value: '30 Ene' },
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4">
              <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/80 font-semibold uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="https://admision.unat.edu.pe/2/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-secondary-500 text-primary-900 rounded-2xl font-black text-xl hover:bg-secondary-400 transition-all duration-300 shadow-2xl hover:shadow-secondary-500/50 transform hover:scale-105"
          >
            <span>INSCRÍBETE AHORA</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
          </Link>

          <Link
            href="#como-postular"
            className="inline-flex items-center justify-center px-12 py-6 bg-white/10 backdrop-blur-md text-white rounded-2xl font-bold text-xl border-2 border-white/30 hover:bg-white hover:text-primary-900 transition-all duration-300"
          >
            Ver Proceso
          </Link>
        </motion.div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
