'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

// TypeScript Interface
interface Autoridad {
  id: string;
  nombre: string;
  cargo: string;
  descripcion: string;
  area: string;
  email: string;
  telefono?: string;
  whatsapp?: string;
  horarioAtencion: string;
  icon: string;
  foto?: string;
  biografia?: string;
  linkedin?: string;
  cvUrl?: string;
  especialidades?: string[];
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
      whatsapp: '51999000001',
      horarioAtencion: 'Lunes a Viernes 8:00 AM - 5:00 PM',
      icon: '👨‍💼',
      foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      biografia: 'Líder de la Comisión Organizadora con vasta experiencia en gestión universitaria y desarrollo institucional. Magíster en Gestión Pública con más de 15 años de experiencia en administración educativa.',
      linkedin: 'https://linkedin.com/in/luisabanto',
      cvUrl: '/cv/luis-abanto-cv.pdf',
      especialidades: ['Gestión Universitaria', 'Planificación Estratégica', 'Desarrollo Institucional'],
    },
    {
      id: 'vp-academico',
      nombre: 'Dr. Segundo Clemente Rodriguez Delgado',
      cargo: 'Vicepresidente Académico',
      descripcion: 'Responsable del área académica',
      area: 'Gestión Académica',
      email: 'vpa@unat.edu.pe',
      telefono: '+51 999 000 002',
      whatsapp: '51999000002',
      horarioAtencion: 'Lunes a Viernes 8:00 AM - 5:00 PM',
      icon: '👨‍🏫',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      biografia: 'Doctor en Educación, responsable de la excelencia académica y desarrollo curricular de la universidad. Especialista en pedagogía universitaria y acreditación académica con publicaciones en revistas indexadas.',
      linkedin: 'https://linkedin.com/in/segundorodriguez',
      cvUrl: '/cv/segundo-rodriguez-cv.pdf',
      especialidades: ['Pedagogía Universitaria', 'Currículo', 'Acreditación Académica'],
    },
    {
      id: 'vp-investigacion',
      nombre: 'Dra. Charo Jacqueline Jauregui Sueldo',
      cargo: 'Vicepresidente de Investigación',
      descripcion: 'Responsable del área de investigación',
      area: 'Investigación e Innovación',
      email: 'vri@unat.edu.pe',
      telefono: '+51 999 000 003',
      whatsapp: '51999000003',
      horarioAtencion: 'Lunes a Viernes 8:00 AM - 5:00 PM',
      icon: '👩‍🔬',
      foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      biografia: 'Doctora con amplia trayectoria en investigación científica, lidera proyectos de investigación y publicaciones académicas. Investigadora RENACYT con más de 20 publicaciones en Scopus y Web of Science.',
      linkedin: 'https://linkedin.com/in/charojauregui',
      cvUrl: '/cv/charo-jauregui-cv.pdf',
      especialidades: ['Investigación Científica', 'Metodología', 'Publicaciones Científicas'],
    },
    {
      id: 'miembro',
      nombre: 'M.Sc. Aron Jhonatan Aliaga Contreras',
      cargo: 'Miembro',
      descripcion: 'Comisión Organizadora UNAT',
      area: 'Desarrollo Institucional',
      email: 'comision@unat.edu.pe',
      telefono: '+51 999 000 004',
      whatsapp: '51999000004',
      horarioAtencion: 'Lunes a Viernes 8:00 AM - 5:00 PM',
      icon: '👨‍💻',
      foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      biografia: 'Magíster especializado en gestión universitaria y desarrollo de procesos institucionales. Experto en transformación digital y sistemas de información educativa.',
      linkedin: 'https://linkedin.com/in/aronaliaga',
      cvUrl: '/cv/aron-aliaga-cv.pdf',
      especialidades: ['Gestión de Procesos', 'Transformación Digital', 'Sistemas Educativos'],
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
                {/* Avatar con foto real o emoji */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-primary-100 overflow-hidden relative"
                >
                  {autoridad.foto ? (
                    <Image 
                      src={autoridad.foto} 
                      alt={autoridad.nombre}
                      fill
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-5xl">{autoridad.icon}</span>
                  )}
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

                {/* Botones de acción rápida */}
                <div className="flex gap-2 mt-4 justify-center">
                  {autoridad.whatsapp && (
                    <motion.a
                      href={`https://wa.me/${autoridad.whatsapp}?text=Hola, deseo información sobre la UNAT`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-md"
                      title="WhatsApp"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </motion.a>
                  )}
                  {autoridad.linkedin && (
                    <motion.a
                      href={autoridad.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md"
                      title="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </motion.a>
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
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center ring-4 ring-white/30 overflow-hidden relative">
                    {selectedAutoridad.foto ? (
                      <Image 
                        src={selectedAutoridad.foto} 
                        alt={selectedAutoridad.nombre}
                        fill
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl">{selectedAutoridad.icon}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{selectedAutoridad.nombre}</h3>
                    <p className="text-white/90">{selectedAutoridad.cargo}</p>
                    {/* Botones sociales en el header */}
                    <div className="flex gap-2 mt-2">
                      {selectedAutoridad.linkedin && (
                        <a
                          href={selectedAutoridad.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 hover:text-white transition-colors"
                          title="LinkedIn"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      )}
                      {selectedAutoridad.cvUrl && (
                        <a
                          href={selectedAutoridad.cvUrl}
                          download
                          className="text-white/80 hover:text-white transition-colors"
                          title="Descargar CV"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </a>
                      )}
                    </div>
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

              {/* Especialidades */}
              {selectedAutoridad.especialidades && selectedAutoridad.especialidades.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Especialidades</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAutoridad.especialidades.map((esp, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {esp}
                      </span>
                    ))}
                  </div>
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

              {/* Botones de acción */}
              <div className="pt-4 grid grid-cols-2 gap-4">
                <a
                  href={`mailto:${selectedAutoridad.email}`}
                  className="block text-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  📧 Enviar Email
                </a>
                {selectedAutoridad.whatsapp && (
                  <a
                    href={`https://wa.me/${selectedAutoridad.whatsapp}?text=Hola ${selectedAutoridad.nombre.split(' ')[0]}, deseo agendar una cita`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                  >
                    💬 Agendar Cita
                  </a>
                )}
              </div>

              {/* Descargar CV */}
              {selectedAutoridad.cvUrl && (
                <div className="pt-2">
                  <a
                    href={selectedAutoridad.cvUrl}
                    download
                    className="w-full block text-center px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    📄 Descargar CV (PDF)
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
