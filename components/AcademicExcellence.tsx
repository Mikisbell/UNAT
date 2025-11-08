'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const academicPrograms = [
  {
    title: 'Educación Pregrado',
    description: 'Experiencias de aprendizaje enriquecedoras que proporcionan una base sólida en artes liberales y experiencia profunda en áreas específicas',
    icon: '🎓',
    href: '#pregrado',
    color: 'from-primary-500 to-primary-700',
  },
  {
    title: 'Educación Posgrado',
    description: 'Oportunidades incomparables para participar en el avance de campos completos del conocimiento',
    icon: '🔬',
    href: '#posgrado',
    color: 'from-secondary-500 to-secondary-700',
  },
  {
    title: 'Aprendizaje Continuo',
    description: 'Educación continua para adultos, programas ejecutivos y profesionales adaptados a las necesidades del siglo XXI',
    icon: '📚',
    href: '#continuo',
    color: 'from-primary-600 to-secondary-600',
  },
];

const schools = [
  { name: 'Ingeniería de Sistemas', icon: '💻', href: '/carreras/sistemas' },
  { name: 'Ingeniería Civil', icon: '🏗️', href: '/carreras/civil' },
  { name: 'Educación', icon: '👨‍🏫', href: '/carreras/educacion' },
  { name: 'Contabilidad', icon: '📊', href: '/carreras/contabilidad' },
  { name: 'Administración', icon: '💼', href: '/carreras/administracion' },
];

export default function AcademicExcellence() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Excelencia Académica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las oportunidades educativas que UNAT ofrece para tu desarrollo profesional
          </p>
        </motion.div>

        {/* Academic Programs */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {academicPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={program.href}
                className="group block h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{program.icon}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {program.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {program.description}
                </p>

                <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                  Explorar programa
                  <svg
                    className="w-5 h-5 ml-1 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Schools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-12 md:p-16"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Cinco carreras donde perseguir tus pasiones
            </h3>
            <p className="text-xl text-primary-100 text-center mb-10 max-w-3xl mx-auto">
              Explora nuestras carreras profesionales diseñadas para formar líderes del futuro
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {schools.map((school, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={school.href}
                    className="group block p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 text-center border border-white/20 hover:border-white/40"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {school.icon}
                    </div>
                    <h4 className="text-white font-semibold text-sm leading-tight">
                      {school.name}
                    </h4>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="#carreras"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-accent-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Ver todas las carreras
                <svg
                  className="w-5 h-5"
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
