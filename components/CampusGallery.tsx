'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function CampusGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086',
      title: 'Campus Principal UNAT',
      description: 'Instalaciones modernas en el corazón de Tayacaja'
    },
    {
      url: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069',
      title: 'Biblioteca Digital',
      description: 'Más de 50,000 recursos académicos digitales'
    },
    {
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070',
      title: 'Vida Estudiantil',
      description: 'Experiencia universitaria completa'
    },
    {
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032',
      title: 'Laboratorios',
      description: 'Equipamiento de última generación'
    },
    {
      url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070',
      title: 'Aulas Modernas',
      description: 'Espacios diseñados para el aprendizaje'
    },
    {
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070',
      title: 'Actividades Deportivas',
      description: 'Instalaciones deportivas de primer nivel'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-accent-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Conoce Nuestro <span className="text-primary-600">Campus</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instalaciones modernas diseñadas para tu éxito académico y desarrollo integral
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>

              {/* Icon overlay */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.2, rotate: 90 }}
              >
                <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m0 0v6m0-6h6m-6 0H4" />
                </svg>
              </motion.div>
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
          <a
            href="#tour-virtual"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Tour Virtual 360°</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
