'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroStanford() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000"
          alt="Campus UNAT"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-6"
          >
            Universidad Nacional Autónoma de Tayacaja
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight"
          >
            Una Misión Definida por{' '}
            <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-500 bg-clip-text text-transparent">
              Posibilidades
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            En UNAT, nuestra misión de descubrimiento y aprendizaje está impulsada por un espíritu de{' '}
            <strong className="text-primary-600">optimismo y posibilidad</strong> que se remonta a nuestra fundación.
            Aquí encontrarás un lugar de expansión intelectual, perspectivas diversas y libertad para explorar nuevas líneas de pensamiento.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#admision"
              className="group px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg hover:bg-primary-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              Admisión 2025
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              href="#sobre-unat"
              className="group px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 hover:scale-105"
            >
              Conoce más sobre UNAT
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {[
              { number: '5', label: 'Carreras Profesionales', suffix: '+' },
              { number: '2000', label: 'Estudiantes', suffix: '+' },
              { number: '150', label: 'Docentes', suffix: '+' },
              { number: '15', label: 'Años de Excelencia', suffix: '' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                  <span className="text-secondary-500">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-sm font-medium">Explora más</span>
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
