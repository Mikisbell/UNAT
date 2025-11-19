'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimoniosHome() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonios = [
    {
      nombre: 'María García',
      carrera: 'Ingeniería Civil',
      año: 'Egresada 2023',
      foto: '/images/campus/hero-background.jpg',
      testimonio: 'UNAT me brindó las herramientas necesarias para desarrollarme profesionalmente. Hoy trabajo en proyectos de infraestructura que transforman nuestra región.',
      empresa: 'Constructora Regional'
    },
    {
      nombre: 'Carlos Mendoza',
      carrera: 'Ingeniería Industrial',
      año: 'Estudiante 5to año',
      foto: '/images/campus/hero-background.jpg',
      testimonio: 'La calidad académica y el compromiso de los docentes hacen de UNAT una universidad excepcional. Las prácticas preprofesionales me abrieron muchas puertas.',
      empresa: 'Practicante en Empresa Minera'
    },
    {
      nombre: 'Ana Quispe',
      carrera: 'Enfermería',
      año: 'Egresada 2022',
      foto: '/images/campus/hero-background.jpg',
      testimonio: 'UNAT no solo me formó como profesional, sino también como persona comprometida con el servicio a la comunidad. Orgullosa de ser UNAT.',
      empresa: 'Hospital Regional Tayacaja'
    },
    {
      nombre: 'Luis Torres',
      carrera: 'Ing. Forestal y Ambiental',
      año: 'Egresado 2021',
      foto: '/images/campus/hero-background.jpg',
      testimonio: 'Los proyectos de investigación y la conexión con la realidad regional me permitieron contribuir al desarrollo sostenible de Huancavelica.',
      empresa: 'Consultor Ambiental'
    }
  ];

  const nextTestimonio = () => {
    setActiveIndex((prev) => (prev + 1) % testimonios.length);
  };

  const prevTestimonio = () => {
    setActiveIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-bold mb-6 text-gray-700">
            TESTIMONIOS
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Voces de Nuestra Comunidad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Historias de éxito de estudiantes y egresados UNAT
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-5 gap-12 p-12 md:p-16">
                {/* Foto y datos */}
                <div className="md:col-span-2 flex flex-col items-center text-center">
                  <div className="relative w-56 h-56 rounded-full overflow-hidden mb-8 ring-4 ring-gray-100">
                    <Image
                      src={testimonios[activeIndex].foto}
                      alt={testimonios[activeIndex].nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-3 leading-tight">
                    {testimonios[activeIndex].nombre}
                  </h3>
                  <p className="text-primary-600 font-bold text-lg mb-2">
                    {testimonios[activeIndex].carrera}
                  </p>
                  <p className="text-gray-500 text-base font-semibold mb-4">
                    {testimonios[activeIndex].año}
                  </p>
                  <div className="inline-block bg-gray-50 border-2 border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-bold">
                    {testimonios[activeIndex].empresa}
                  </div>
                </div>

                {/* Testimonio */}
                <div className="md:col-span-3 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-8">
                    <Quote className="w-10 h-10 text-primary-600" />
                  </div>
                  <p className="text-2xl md:text-3xl text-gray-900 font-semibold leading-relaxed mb-8">
                    {testimonios[activeIndex].testimonio}
                  </p>
                  
                  {/* Indicadores */}
                  <div className="flex items-center gap-3">
                    {testimonios.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          index === activeIndex 
                            ? 'w-12 bg-primary-600' 
                            : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles */}
          <button
            onClick={prevTestimonio}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextTestimonio}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
