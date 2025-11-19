'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageHeroProps {
  title: string;
  description: string;
  imagePath: string;
  imageAlt?: string;
}

export default function PageHero({ 
  title, 
  description, 
  imagePath,
  imageAlt = 'UNAT'
}: PageHeroProps) {
  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden" 
      style={{ 
        height: '600px',
        marginTop: '-80px',
        paddingTop: '80px'
      }}
    >
      {/* Imagen de fondo */}
      <div 
        className="absolute z-0" 
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: 0,
          padding: 0
        }}
      >
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          style={{ margin: 0, padding: 0 }}
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" style={{ margin: 0, padding: 0 }} />
      </div>

      {/* Contenido - con padding-top para no chocar con el menú */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center" style={{ paddingTop: '100px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Gradiente decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
