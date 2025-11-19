'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Investigacion() {
  const lineas = [
    {
      id: 1,
      icon: '🌱',
      titulo: 'Desarrollo Sostenible y Medio Ambiente',
      descripcion: 'Conservación de bosques, gestión de recursos forestales y áreas naturales protegidas en la región.',
      color: 'from-green-500 to-emerald-600',
      link: 'https://vri.unat.edu.pe/'
    },
    {
      id: 2,
      icon: '🏗️',
      titulo: 'Ingeniería y Resiliencia Estructural',
      descripcion: 'Resiliencia sísmica de viviendas autoconstruidas y degradación estructural con enfoques inteligentes.',
      color: 'from-blue-500 to-indigo-600',
      link: 'https://vri.unat.edu.pe/'
    },
    {
      id: 3,
      icon: '🍎',
      titulo: 'Industrias Alimentarias e Innovación',
      descripcion: 'Calidad nutricional de productos regionales, aceites esenciales y conservación de alimentos.',
      color: 'from-orange-500 to-red-600',
      link: 'https://vri.unat.edu.pe/'
    },
    {
      id: 4,
      icon: '💻',
      titulo: 'Tecnología y Pensamiento Computacional',
      descripcion: 'Desarrollo de pensamiento computacional, actividades STEM y prototipado con programación por bloques.',
      color: 'from-purple-500 to-indigo-600',
      link: 'https://vri.unat.edu.pe/'
    }
  ];

  const publicaciones = [
    {
      titulo: 'Impact of structural degradation on seismic resilience of self-built housing',
      categoria: 'Ingeniería Civil',
      año: '2025'
    },
    {
      titulo: 'Slaughterhouse Blood Compounds Processing and Application in Novel Non-Meat Products',
      categoria: 'Industrias Alimentarias',
      año: '2025'
    },
    {
      titulo: 'Development of Computational Thinking through STEM Activities',
      categoria: 'Educación STEM',
      año: '2025'
    },
    {
      titulo: 'Optimal Operating Conditions in Synthesis of Allyl Chloride',
      categoria: 'Ingeniería Industrial',
      año: '2025'
    }
  ];

  const plataformas = [
    {
      nombre: 'FICTI',
      descripcion: 'Festival Internacional de Ciencia y Tecnología e Innovación',
      icon: '🎪',
      link: 'https://ficti.unat.edu.pe/',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      nombre: 'EICYTEC',
      descripcion: 'Encuentro Internacional de Ciencia y Tecnología',
      icon: '🔬',
      link: 'https://eicytec.unat.edu.pe/',
      color: 'from-purple-500 to-pink-500'
    },
    {
      nombre: 'Yachay Virtual',
      descripcion: 'Aula virtual para cursos de especialización con certificación QR',
      icon: '🎓',
      link: 'https://yachay.unat.edu.pe/',
      color: 'from-green-500 to-emerald-500'
    },
    {
      nombre: 'Similitud',
      descripcion: 'Sistema de verificación de originalidad para trabajos académicos',
      icon: '📄',
      link: 'https://similitud.unat.edu.pe',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  return (
    <section id="investigacion" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Investigación e Innovación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Generamos conocimiento científico para el desarrollo regional y nacional
          </p>
        </motion.div>

        {/* Grid de Líneas de Investigación */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {lineas.map((linea, index) => (
            <motion.a
              key={linea.id}
              href={linea.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent overflow-hidden cursor-pointer"
            >
              {/* Fondo gradiente */}
              <div className={`absolute inset-0 bg-gradient-to-br ${linea.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="text-6xl mb-4">{linea.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {linea.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {linea.descripcion}
                </p>
                <div className="flex items-center text-primary-600 font-semibold text-sm">
                  Ver más
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { numero: '121+', label: 'Publicaciones SCOPUS', link: 'https://www.scopus.com/affil/profile.uri?afid=60190271' },
            { numero: '50+', label: 'Investigadores CTI', link: 'https://ctivitae.concytec.gob.pe/' },
            { numero: '25+', label: 'Proyectos Activos', link: 'https://vri.unat.edu.pe/' },
            { numero: '4', label: 'Eventos Internacionales', link: 'https://vri.unat.edu.pe/' }
          ].map((stat, index) => (
            <motion.a
              key={index}
              href={stat.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl md:text-4xl font-black text-primary-600 mb-2">
                {stat.numero}
              </div>
              <div className="text-sm text-gray-600 font-semibold">
                {stat.label}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Publicaciones Destacadas 2025 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">
            📚 Publicaciones Recientes 2025
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {publicaciones.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary-500 hover:shadow-2xl transition-all"
              >
                <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-xs font-bold mb-3">
                  {pub.categoria}
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {pub.titulo}
                </h4>
                <p className="text-sm text-gray-500">Año: {pub.año}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://vri.unat.edu.pe/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ver todas las publicaciones
              <svg className="w-5 h-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Plataformas de Investigación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">
            🚀 Plataformas de Investigación
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plataformas.map((plat, index) => (
              <motion.a
                key={index}
                href={plat.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group bg-gradient-to-br ${plat.color} rounded-2xl p-6 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer`}
              >
                <div className="text-5xl mb-4">{plat.icon}</div>
                <h4 className="text-xl font-bold mb-2">{plat.nombre}</h4>
                <p className="text-sm text-white/90">{plat.descripcion}</p>
                <div className="mt-4 flex items-center text-sm font-semibold">
                  Acceder
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Vicepresidencia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-black mb-2">Vicepresidencia de Investigación</h3>
          <p className="text-lg mb-1">Dr. Alfredo César Larios Franco</p>
          <p className="text-sm text-gray-400 mb-6">Ingeniero Informático | Doctor en Administración</p>
          <a
            href="https://vri.unat.edu.pe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
          >
            🔬 Visitar Portal VRI
          </a>
        </motion.div>
      </div>
    </section>
  );
}
