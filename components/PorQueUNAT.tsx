'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Briefcase, UtensilsCrossed, FileText } from 'lucide-react';

export default function PorQueUNAT() {
  const razones = [
    {
      icon: CheckCircle2,
      titulo: 'Universidad Pública',
      descripcion: 'Educación de calidad 100% GRATUITA. Solo pagas tu examen de admisión',
      highlight: 'SIN PENSIONES',
      color: 'bg-white border-gray-100',
      iconColor: 'text-green-600',
      hoverColor: 'hover:border-green-200 hover:shadow-green-100/50'
    },
    {
      icon: Briefcase,
      titulo: 'Empleabilidad Regional',
      descripcion: '95% de nuestros egresados trabajan en Huancavelica, Junín y Lima',
      highlight: 'TRABAJO GARANTIZADO',
      color: 'bg-white border-gray-100',
      iconColor: 'text-blue-600',
      hoverColor: 'hover:border-blue-200 hover:shadow-blue-100/50'
    },
    {
      icon: UtensilsCrossed,
      titulo: 'Comedor Universitario',
      descripcion: 'Almuerzo completo por solo S/. 2.00. Desayuno S/. 1.50',
      highlight: 'ALIMENTACIÓN',
      color: 'bg-white border-gray-100',
      iconColor: 'text-orange-600',
      hoverColor: 'hover:border-orange-200 hover:shadow-orange-100/50'
    },
    {
      icon: MapPin,
      titulo: 'En el Corazón de Tayacaja',
      descripcion: 'Pampas, accesible desde Huancayo, Huancavelica y toda la región',
      highlight: 'FÁCIL ACCESO',
      color: 'bg-white border-gray-100',
      iconColor: 'text-purple-600',
      hoverColor: 'hover:border-purple-200 hover:shadow-purple-100/50'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            ¿Por qué Elegir UNAT?
          </h2>
          <p className="text-xl text-gray-600">
            La mejor opción para jóvenes de Huancavelica y la región centro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {razones.map((razon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${razon.color} ${razon.hoverColor} border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
            >
              <div className="flex flex-col h-full">
                <div className={`w-14 h-14 ${razon.iconColor} bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <razon.icon className="w-7 h-7" strokeWidth={2.5} />
                </div>
                
                <div className="inline-block self-start bg-gray-50 px-3 py-1.5 rounded-full text-xs font-bold mb-4 text-gray-700 border border-gray-200">
                  {razon.highlight}
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight">
                  {razon.titulo}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {razon.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA con info importante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden"
        >
          {/* Patrón sutil de fondo */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '30px 30px'
            }} />
          </div>

          <div className="relative z-10">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
              ADMISIÓN 2025-I
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Proceso de Admisión Abierto
            </h3>
            <p className="text-xl mb-10 text-primary-100 max-w-2xl mx-auto">
              Examen: 6 de Abril, 2025 • Inscripción: S/. 200
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">160</div>
                <div className="text-sm text-primary-100 font-semibold">Vacantes Totales</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">5</div>
                <div className="text-sm text-primary-100 font-semibold">Carreras Profesionales</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">S/. 0</div>
                <div className="text-sm text-primary-100 font-semibold">Pensión Mensual</div>
              </div>
            </div>

            <Link
              href="/admision"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary-600 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl hover:shadow-white/20 transform hover:scale-105"
            >
              <FileText className="w-5 h-5" />
              Ver Proceso de Admisión Completo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
