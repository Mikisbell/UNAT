'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroAdmision() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
          alt="Estudiantes UNAT"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-700/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge SUNEDU */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <svg className="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm font-bold">Universidad Licenciada SUNEDU</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight"
            >
              ADMISIÓN
              <span className="block text-secondary-400">2025-I</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-white font-bold mb-6"
            >
              ¡Inscripciones Abiertas!
            </motion.p>

            {/* Beneficios */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 mb-8"
            >
              {[
                { icon: '✅', text: 'Universidad Pública GRATUITA', highlight: true },
                { icon: '🎓', text: '5 Carreras Profesionales Acreditadas' },
                { icon: '📅', text: 'Examen: 15 de Febrero, 2025' },
                { icon: '👥', text: 'Vacantes Limitadas por Carrera' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className={`text-lg ${item.highlight ? 'text-secondary-400 font-black' : 'text-white font-semibold'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="https://admision.unat.edu.pe/2/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-5 bg-secondary-500 text-primary-900 rounded-xl font-black text-lg hover:bg-secondary-400 transition-all duration-300 shadow-2xl hover:shadow-secondary-500/50 transform hover:scale-105"
              >
                <span>INSCRÍBETE GRATIS AQUÍ</span>
                <svg
                  className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href="#como-postular"
                className="inline-flex items-center justify-center px-8 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white hover:bg-white hover:text-primary-900 transition-all duration-300"
              >
                Ver Proceso de Admisión
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:grid grid-cols-2 gap-4"
          >
            {[
              {
                title: 'Inscripción',
                value: 'GRATIS',
                desc: '100% Online',
                icon: '📝',
                color: 'from-green-500 to-emerald-600'
              },
              {
                title: 'Vacantes',
                value: '150',
                desc: 'Todas las carreras',
                icon: '👥',
                color: 'from-blue-500 to-cyan-600'
              },
              {
                title: 'Modalidades',
                value: '3',
                desc: 'Diferentes vías',
                icon: '🎯',
                color: 'from-purple-500 to-violet-600'
              },
              {
                title: 'Plazo',
                value: '15 días',
                desc: 'Para inscribirte',
                icon: '⏰',
                color: 'from-orange-500 to-red-600'
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`p-6 bg-gradient-to-br ${card.color} rounded-2xl text-white shadow-xl`}
              >
                <div className="text-4xl mb-2">{card.icon}</div>
                <div className="text-sm font-semibold opacity-90 mb-1">{card.title}</div>
                <div className="text-3xl font-black mb-1">{card.value}</div>
                <div className="text-xs opacity-80">{card.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
