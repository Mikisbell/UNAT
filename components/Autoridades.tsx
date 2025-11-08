'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// TypeScript Interface
interface Autoridad {
  id: string;
  nombre: string;
  cargo: string;
  descripcion: string;
  area: string;
  email: string;
  telefono?: string;
  horarioAtencion: string;
  icon: string;
  biografia?: string;
}

export default function Autoridades() {
  const [selectedAutoridad, setSelectedAutoridad] = useState<Autoridad | null>(null);

  const autoridades: Autoridad[] = [
    {
      id: 'presidente',
      nombre: 'M.Sc. Luis Abanto Morales Y Chocano',
      cargo: 'Presidente',
      descripcion: 'Comisión Organizadora UNAT',
      area: 'Gestión Institucional',
      email: 'presidencia@unat.edu.pe',
      telefono: '+51 999 000 001',
      horarioAtencion: 'Lunes a Viernes 8:00 AM - 5:00 PM',
      icon: '👨‍💼',
      biografia: 'Líder de la Comisión Organizadora con vasta experiencia en gestión universitaria y desarrollo institucional.',
    },
    {
      id: 'vp-academico',
      nombre: 'Dr. Segundo Clemente Rodriguez Delgado',
      cargo: 'Vicepresidente Académico',
      descripcion: 'Responsable del área académica',
      area: 'Gestión Académica',
      email: 'vpa@unat.edu.pe',
      telefono: '+51 999 000 002',
      horarioAtencion: 'Lunes a Viernes 8:00 AM - 5:00 PM',
      icon: '👨‍🏫',
      biografia: 'Doctor en Educación, responsable de la excelencia académica y desarrollo curricular de la universidad.',
    },
    {
      id: 'vp-investigacion',
      nombre: 'Dra. Charo Jacqueline Jauregui Sueldo',
      cargo: 'Vicepresidente de Investigación',
      descripcion: 'Responsable del área de investigación',
      area: 'Investigación e Innovación',
      email: 'vri@unat.edu.pe',
      telefono: '+51 999 000 003',
      horarioAtencion: 'Lunes a Viernes 8:00 AM - 5:00 PM',
      icon: '👩‍🔬',
      biografia: 'Doctora con amplia trayectoria en investigación científica, lidera proyectos de investigación y publicaciones académicas.',
    },
    {
      id: 'miembro',
      nombre: 'M.Sc. Aron Jhonatan Aliaga Contreras',
      cargo: 'Miembro',
      descripcion: 'Comisión Organizadora UNAT',
      area: 'Desarrollo Institucional',
      email: 'comision@unat.edu.pe',
      telefono: '+51 999 000 004',
      horarioAtencion: 'Lunes a Viernes 8:00 AM - 5:00 PM',
      icon: '👨‍💻',
      biografia: 'Magíster especializado en gestión universitaria y desarrollo de procesos institucionales.',
    },
  ];

  return (
    <section id="autoridades" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comisión Organizadora
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Universidad Nacional Autónoma de Tayacaja &quot;Daniel Hernández Morillo&quot;
          </p>
          <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-md">
            <p className="text-sm text-gray-700">
              <strong>Resolución Viceministerial N° 088-2022-MINEDU</strong>
            </p>
          </div>
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📋 Sobre la Comisión Organizadora
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              La Universidad Nacional Autónoma de Tayacaja Daniel Hernández Morillo, 
              establecida mediante la <strong>Ley N° 29716</strong>, cuenta con una 
              Comisión Organizadora, recientemente reconformada por medio de la{' '}
              <strong>Resolución Viceministerial N° 088-2022-MINEDU</strong>. 
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              Estos distinguidos profesionales han asumido el compromiso ferviente de 
              impulsar el desarrollo de la primera institución universitaria en Tayacaja. 
              Su liderazgo y dedicación son fundamentales para garantizar el éxito y la 
              excelencia en todas las áreas académicas e investigativas de la universidad.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {autoridades.map((autoridad, index) => (
            <motion.div
              key={autoridad.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-primary-600 cursor-pointer"
              onClick={() => setSelectedAutoridad(autoridad)}
            >
              <div className="text-center">
                {/* Avatar con gradiente */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-5xl mx-auto mb-4 ring-4 ring-primary-100"
                >
                  {autoridad.icon}
                </motion.div>

                {/* Nombre */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {autoridad.nombre}
                </h3>

                {/* Badge de cargo */}
                <div className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg mb-3">
                  <p className="text-sm font-semibold">{autoridad.cargo}</p>
                </div>

                {/* Área */}
                <p className="text-primary-600 text-sm font-medium mb-2">{autoridad.area}</p>

                {/* Descripción */}
                <p className="text-gray-600 text-sm mb-4">{autoridad.descripcion}</p>

                {/* Información de contacto */}
                <div className="space-y-2 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center text-xs text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="truncate">{autoridad.email}</span>
                  </div>
                  {autoridad.telefono && (
                    <div className="flex items-center justify-center text-xs text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{autoridad.telefono}</span>
                    </div>
                  )}
                </div>

                {/* Ver más */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-sm text-primary-600 font-semibold hover:text-primary-700 flex items-center justify-center mx-auto"
                >
                  Ver más información
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-primary-600 text-white px-8 py-4 rounded-xl shadow-lg">
            <p className="text-lg font-semibold">
              🎓 Primera Universidad de Tayacaja, Huancavelica
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal de información detallada */}
      {selectedAutoridad && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedAutoridad(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-white rounded-t-2xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-4xl ring-4 ring-white/30">
                    {selectedAutoridad.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{selectedAutoridad.nombre}</h3>
                    <p className="text-white/90">{selectedAutoridad.cargo}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAutoridad(null)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Contenido del modal */}
            <div className="p-8 space-y-6">
              {/* Área */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Área</h4>
                <p className="text-lg text-gray-900 font-medium">{selectedAutoridad.area}</p>
              </div>

              {/* Biografía */}
              {selectedAutoridad.biografia && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Biografía</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedAutoridad.biografia}</p>
                </div>
              )}

              {/* Información de contacto */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Información de Contacto</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Correo Electrónico</p>
                      <a href={`mailto:${selectedAutoridad.email}`} className="text-primary-600 hover:text-primary-700 font-medium">
                        {selectedAutoridad.email}
                      </a>
                    </div>
                  </div>

                  {selectedAutoridad.telefono && (
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Teléfono</p>
                        <a href={`tel:${selectedAutoridad.telefono}`} className="text-gray-900 font-medium">
                          {selectedAutoridad.telefono}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Horario de Atención</p>
                      <p className="text-gray-900 font-medium">{selectedAutoridad.horarioAtencion}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de contacto */}
              <div className="pt-4">
                <a
                  href={`mailto:${selectedAutoridad.email}`}
                  className="w-full block text-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Enviar Correo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
