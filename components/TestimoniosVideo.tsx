'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function TestimoniosVideo() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const testimonios = [
    {
      nombre: 'María Rodríguez',
      carrera: 'Ingeniería de Sistemas',
      año: '2024',
      foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187',
      quote: 'UNAT me dio las herramientas para trabajar en empresas tecnológicas líderes',
      video: '#',
      empresa: 'Google'
    },
    {
      nombre: 'Carlos Mendoza',
      carrera: 'Ingeniería Civil',
      año: '2023',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187',
      quote: 'La formación práctica en UNAT fue clave para mi desarrollo profesional',
      video: '#',
      empresa: 'Ministerio de Transportes'
    },
    {
      nombre: 'Ana Torres',
      carrera: 'Educación',
      año: '2022',
      foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070',
      quote: 'Hoy soy docente universitaria gracias a la excelente formación recibida',
      video: '#',
      empresa: 'UNMSM'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #800020 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 px-6 py-3 rounded-full mb-6 font-bold">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Historias de Éxito</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Nuestros Egresados <span className="text-primary-600">Triunfan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce las historias de quienes ya están cambiando el mundo desde UNAT
          </p>
        </motion.div>

        {/* Testimonios Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden">
                {/* Video/Photo */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={testimonio.foto}
                    alt={testimonio.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Play button overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={() => setPlayingVideo(index)}
                  >
                    <motion.div
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-10 h-10 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Empresa badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <span className="text-xs font-bold text-primary-900">Trabaja en</span>
                    <div className="text-sm font-black text-primary-600">{testimonio.empresa}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Quote */}
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-primary-200 mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.024 3.783c1.215 0 2.189.966 2.189 2.155 0 1.19-.975 2.155-2.189 2.155h-.015c-.558 1.888-1.459 3.658-2.71 5.229l-.726-2.04c1.02-1.05 1.673-2.378 1.934-3.844-.352-.192-.674-.45-.952-.765A2.152 2.152 0 015.023 3.783zm7.788 0c1.215 0 2.188.966 2.188 2.155 0 1.19-.973 2.155-2.188 2.155h-.015c-.558 1.888-1.46 3.658-2.71 5.229l-.727-2.04c1.021-1.05 1.674-2.378 1.935-3.844-.353-.192-.675-.45-.953-.765a2.152 2.152 0 012.47-2.89z" />
                    </svg>
                    <p className="text-gray-700 italic text-lg leading-relaxed">
                      &quot;{testimonio.quote}&quot;
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-200">
                      <Image
                        src={testimonio.foto}
                        alt={testimonio.nombre}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonio.nombre}</div>
                      <div className="text-sm text-gray-600">{testimonio.carrera}</div>
                      <div className="text-xs text-primary-600 font-semibold">Promoción {testimonio.año}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-600 mb-6">
            Tú puedes ser el siguiente en contar tu historia de éxito
          </p>
          <a
            href="#admision"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Inicia Tu Camino Hoy</span>
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
