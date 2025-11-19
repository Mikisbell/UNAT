'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GaleriaCampus() {
  const imagenes = [
    {
      src: '/images/campus/hero-background.jpg',
      categoria: 'Campus',
      titulo: 'Instalaciones Modernas',
      link: '/vida-universitaria'
    },
    {
      src: '/images/campus/hero-background.jpg',
      categoria: 'Deportes',
      titulo: 'Vida Deportiva',
      link: '/vida-universitaria#deportes'
    },
    {
      src: '/images/campus/hero-background.jpg',
      categoria: 'Cultura',
      titulo: 'Arte y Expresión',
      link: '/vida-universitaria#cultura'
    },
    {
      src: '/images/campus/hero-background.jpg',
      categoria: 'Laboratorios',
      titulo: 'Tecnología de Punta',
      link: '/carreras'
    },
    {
      src: '/images/campus/hero-background.jpg',
      categoria: 'Eventos',
      titulo: 'Actividades Estudiantiles',
      link: '/vida-universitaria#eventos'
    },
    {
      src: '/images/campus/hero-background.jpg',
      categoria: 'Biblioteca',
      titulo: 'Centro de Conocimiento',
      link: '/biblioteca'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-bold mb-6 text-gray-700">
            VIDA UNIVERSITARIA
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Vida en el Campus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Más que aulas: una experiencia universitaria completa
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {imagenes.map((imagen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-3xl cursor-pointer border-2 border-gray-100 hover:border-gray-200 transition-all duration-300"
            >
              <Link href={imagen.link}>
                <div className="relative w-full h-full">
                  <Image
                    src={imagen.src}
                    alt={imagen.titulo}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                  
                  {/* Contenido */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-0 group-hover:-translate-y-2 transition-all duration-300">
                    <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-xs font-bold mb-3">
                      {imagen.categoria}
                    </div>
                    <h3 className="text-xl font-black leading-tight">
                      {imagen.titulo}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/vida-universitaria"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary-600 text-white rounded-2xl font-bold text-lg hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Explorar Campus Completo
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
