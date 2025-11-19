'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Carreras() {
  const [activeTab, setActiveTab] = useState(0);

  const carreras = [
    {
      id: 'civil',
      icon: '🏗️',
      nombre: 'Ingeniería Civil',
      tabNombre: 'CIVIL',
      descripcion:
        'Capacita profesionales en diseño, construcción y supervisión de obras de infraestructura. Desarrolla habilidades en estructuras, geotecnia, hidráulica, transportes y gestión de proyectos para el desarrollo regional.',
      duracion: '5 años (10 semestres)',
      modalidad: 'Presencial',
      titulo: 'Ingeniero Civil',
      color: 'from-orange-500 to-amber-600',
      image: '/images/careers/civil.png',
      campo: [
        'Construcción de obras',
        'Diseño estructural',
        'Obras hidráulicas',
        'Supervisión de proyectos'
      ]
    },
    {
      id: 'forestal-ambiental',
      icon: '🌳',
      nombre: 'Ingeniería Forestal y Ambiental',
      tabNombre: 'FORESTAL Y AMBIENTAL',
      descripcion:
        'Forma profesionales en gestión sostenible de recursos forestales y ambientales. Desarrolla competencias en conservación de bosques, gestión de áreas naturales protegidas, evaluación de impacto ambiental y desarrollo de proyectos sostenibles.',
      duracion: '5 años (10 semestres)',
      modalidad: 'Presencial',
      titulo: 'Ingeniero Forestal y Ambiental',
      color: 'from-green-600 to-emerald-700',
      image: '/images/careers/forestal.png',
      campo: [
        'Gestión forestal',
        'Conservación ambiental',
        'Áreas protegidas',
        'Consultoría ambiental'
      ]
    },
    {
      id: 'industrias-alimentarias',
      icon: '🍎',
      nombre: 'Ingeniería en Industrias Alimentarias',
      tabNombre: 'INDUSTRIAS ALIMENTARIAS',
      descripcion:
        'Prepara profesionales en transformación, procesamiento y control de calidad de alimentos. Desarrolla competencias en tecnología alimentaria, gestión de calidad e inocuidad, innovación de productos y desarrollo sostenible del sector alimentario.',
      duracion: '5 años (10 semestres)',
      modalidad: 'Presencial',
      titulo: 'Ingeniero en Industrias Alimentarias',
      color: 'from-red-500 to-orange-600',
      image: '/images/careers/alimentarias.png',
      campo: [
        'Industrias alimentarias',
        'Control de calidad',
        'Desarrollo de productos',
        'Gestión de inocuidad'
      ]
    },
    {
      id: 'industrial',
      icon: '⚙️',
      nombre: 'Ingeniería Industrial',
      tabNombre: 'INDUSTRIAL',
      descripcion:
        'Desarrolla profesionales en optimización de procesos productivos y sistemas industriales. Forma competencias en gestión de operaciones, logística, mejora continua, gestión de calidad y desarrollo de proyectos industriales con visión estratégica.',
      duracion: '5 años (10 semestres)',
      modalidad: 'Presencial',
      titulo: 'Ingeniero Industrial',
      color: 'from-blue-600 to-indigo-700',
      image: '/images/careers/industrial.png',
      campo: [
        'Gestión de producción',
        'Logística y cadena de suministro',
        'Mejora de procesos',
        'Control de calidad'
      ]
    },
    {
      id: 'enfermeria',
      icon: '⚕️',
      nombre: 'Enfermería',
      tabNombre: 'ENFERMERÍA',
      descripcion: 'Forma profesionales del cuidado integral de la salud con calidad humana, científica y tecnológica. Desarrolla competencias para la atención, prevención, promoción y rehabilitación de la salud individual y comunitaria.',
      duracion: '5 años (10 semestres)',
      modalidad: 'Presencial',
      titulo: 'Licenciado en Enfermería',
      color: 'from-pink-500 to-rose-600',
      image: '/images/careers/enfermeria.png',
      campo: [
        'Hospitales y clínicas',
        'Salud pública',
        'Cuidados especializados',
        'Gestión en salud'
      ]
    },
  ];

  const currentCarrera = carreras[activeTab];

  return (
    <section id="carreras" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4"
          >
            Construye tu futuro profesional en UNAT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            5 Carreras acreditadas con proyección al desarrollo regional y nacional
          </motion.p>
        </div>

        {/* Tabs Navigation - Estilo Dataiku */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {carreras.map((carrera, index) => (
              <button
                key={carrera.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 text-sm md:text-base font-bold uppercase tracking-wide transition-all duration-300 rounded-t-lg ${
                  activeTab === index
                    ? 'bg-white text-primary-900 shadow-lg'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
                }`}
              >
                {carrera.tabNombre}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area - Layout Dataiku */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Column - Content */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="text-6xl md:text-7xl mb-6">
                  {currentCarrera.icon}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  {currentCarrera.nombre}
                </h3>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {currentCarrera.descripcion}
                </p>

                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Duración</div>
                    <div className="font-bold text-gray-900">{currentCarrera.duracion}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Modalidad</div>
                    <div className="font-bold text-gray-900">{currentCarrera.modalidad}</div>
                  </div>
                </div>

                {/* Campo Laboral */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">
                    Campo Laboral
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {currentCarrera.campo.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button - Estilo Dataiku turquesa */}
                <div>
                  <a
                    href="#como-postular"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    MÁS INFORMACIÓN
                    <svg className="w-5 h-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column - Presentación Visual con Imagen del Estudiante */}
              <div className={`relative bg-gradient-to-br ${currentCarrera.color} overflow-hidden`}>
                {/* Fondo de color */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-90"></div>

                {/* Imagen del estudiante adelante */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 lg:p-16 min-h-[500px]">
                  {/* Imagen del estudiante con animación profesional */}
                  <motion.div
                    key={`img-${activeTab}`}
                    initial={{ opacity: 0, y: 50, scale: 0.8, rotateY: -20 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, y: -50, scale: 0.8, rotateY: 20 }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                    className="relative w-full max-w-md mb-8"
                    style={{ perspective: "1000px" }}
                  >
                    {/* Contenedor con efectos de vida profesional */}
                    <div className="relative">
                      {/* Glow pulsante de fondo */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.05, 1],
                          opacity: [0.4, 0.6, 0.4]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -inset-8 bg-white/30 rounded-full blur-3xl"
                      />
                      
                      {/* Marco principal con animación */}
                      <motion.div
                        initial={{ scale: 0.85, opacity: 0, rotateY: -15 }}
                        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                        transition={{ delay: 0.2, duration: 0.7, type: "spring", bounce: 0.3 }}
                        className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-3xl p-8 border-[6px] border-white/50 shadow-2xl overflow-hidden"
                      >
                        {/* Brillo que recorre el borde periódicamente */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ 
                            rotate: [0, 360],
                            opacity: [0, 1, 1, 0]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "linear"
                          }}
                          className="absolute -inset-1 rounded-3xl"
                          style={{
                            background: "conic-gradient(from 0deg, transparent 0%, white 5%, transparent 10%, transparent 100%)",
                            filter: "blur(8px)"
                          }}
                        />
                        
                        {/* Imagen PNG con animación flotante */}
                        <motion.div
                          animate={{ 
                            y: [0, -10, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="relative w-full h-[380px] md:h-[420px]"
                        >
                          <Image
                            src={currentCarrera.image}
                            alt={currentCarrera.nombre}
                            fill
                            className="object-contain drop-shadow-2xl"
                          />
                          
                          {/* Destello sutil que pasa por la imagen */}
                          <motion.div
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ 
                              x: ["100%", "200%"],
                              opacity: [0, 0.6, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 5,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                            style={{ 
                              mixBlendMode: "overlay",
                              width: "50%"
                            }}
                          />
                        </motion.div>
                        
                        {/* Partículas decorativas */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [0, -100],
                              opacity: [0, 0.8, 0],
                              scale: [0, 1, 0]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 1.5,
                              ease: "easeOut"
                            }}
                            className="absolute bottom-10 bg-white rounded-full"
                            style={{
                              left: `${30 + i * 20}%`,
                              width: "6px",
                              height: "6px",
                              filter: "blur(1px)"
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                    
                    {/* Badge con icono de la carrera - mejorado */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180, y: 20 }}
                      animate={{ 
                        scale: 1, 
                        rotate: 0, 
                        y: 0,
                      }}
                      transition={{ 
                        delay: 0.4, 
                        type: "spring",
                        bounce: 0.6
                      }}
                      className="absolute -top-8 -right-8 z-20"
                    >
                      {/* Anillo pulsante */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-white rounded-full blur-xl"
                      />
                      
                      {/* Badge principal */}
                      <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-full p-5 shadow-2xl ring-4 ring-white/90">
                        <motion.div
                          animate={{ 
                            rotate: [0, -10, 10, -10, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                          className="text-5xl"
                        >
                          {currentCarrera.icon}
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Tarjeta de Título Profesional mejorada */}
                  <motion.div
                    initial={{ y: 30, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.5,
                      type: "spring",
                      bounce: 0.4
                    }}
                    className="relative w-full max-w-md"
                  >
                    {/* Glow effect detrás de la tarjeta */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.02, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-white/50 rounded-2xl blur-xl"
                    />
                    
                    {/* Tarjeta principal */}
                    <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 border-white/80 text-center overflow-hidden">
                      {/* Efecto de brillo diagonal que pasa */}
                      <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 4,
                          ease: "linear"
                        }}
                        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                      />
                      
                      <div className="relative z-10">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2"
                        >
                          Título Profesional
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          className="text-2xl md:text-3xl font-black text-gray-900"
                        >
                          {currentCarrera.titulo}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            <span className="font-semibold text-primary-900">¿Tienes dudas?</span> Contáctanos para más información sobre nuestras carreras profesionales.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
