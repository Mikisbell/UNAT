'use client';

import { motion } from 'framer-motion';

export default function Biblioteca() {
  const servicios = [
    {
      id: 1,
      icon: '📚',
      titulo: 'Catálogo en Línea',
      descripcion: 'Accede a nuestro catálogo digitalizado con más de 15,000 títulos disponibles',
      enlace: '#',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: '💻',
      titulo: 'Bases de Datos',
      descripcion: 'Consulta revistas científicas, tesis y papers académicos de prestigio internacional',
      enlace: '#',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      icon: '📖',
      titulo: 'Repositorio Institucional',
      descripcion: 'Accede a tesis, trabajos de investigación y publicaciones de la UNAT',
      enlace: '#',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      icon: '🎓',
      titulo: 'Préstamo a Domicilio',
      descripcion: 'Solicita préstamos de libros físicos hasta por 7 días renovables',
      enlace: '#',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const colecciones = [
    { nombre: 'Libros Físicos', cantidad: '15,000+' },
    { nombre: 'E-books', cantidad: '5,000+' },
    { nombre: 'Revistas', cantidad: '200+' },
    { nombre: 'Tesis', cantidad: '1,200+' }
  ];

  const horarios = [
    { dia: 'Lunes - Viernes', horario: '8:00 AM - 8:00 PM' },
    { dia: 'Sábados', horario: '9:00 AM - 1:00 PM' },
    { dia: 'Domingos', horario: 'Cerrado' }
  ];

  return (
    <section id="biblioteca" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Biblioteca Institucional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Centro de recursos académicos al servicio de la comunidad universitaria
          </p>
        </motion.div>

        {/* Estadísticas de Colección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {colecciones.map((col, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-black text-primary-600 mb-2">
                {col.cantidad}
              </div>
              <div className="text-sm text-gray-700 font-semibold">
                {col.nombre}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Servicios */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent relative overflow-hidden"
            >
              {/* Fondo gradiente en hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${servicio.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="text-6xl mb-4">{servicio.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {servicio.titulo}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {servicio.descripcion}
                </p>
                <a
                  href={servicio.enlace}
                  className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors"
                >
                  Acceder
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Horarios e Información */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Horarios */}
            <div>
              <h3 className="text-2xl font-black mb-6 flex items-center">
                <span className="text-3xl mr-3">🕐</span>
                Horarios de Atención
              </h3>
              <div className="space-y-4">
                {horarios.map((h, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="font-semibold">{h.dia}</span>
                    <span className="text-primary-300 font-bold">{h.horario}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-2xl font-black mb-6 flex items-center">
                <span className="text-3xl mr-3">📍</span>
                Ubicación y Contacto
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Dirección</div>
                  <div className="font-semibold">Campus Ahuaycha, Pampas - Tayacaja</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Teléfono</div>
                  <div className="font-semibold">+51 067 453016 - Anexo 204</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Email</div>
                  <div className="font-semibold">biblioteca@unat.edu.pe</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-lg transform hover:scale-105"
            >
              📱 Carnet de Biblioteca Virtual
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
