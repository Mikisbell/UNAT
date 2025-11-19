'use client';

import { motion } from 'framer-motion';

export default function Eventos() {
  const eventos = [
    {
      id: 1,
      tipo: 'ADMISIÓN',
      titulo: 'Examen de Admisión Ordinario 2025-I',
      fecha: 'Domingo 6 de Abril, 2025',
      hora: '9:00 AM',
      lugar: 'Campus Ahuaycha, Pampas',
      estado: 'Inscripciones Abiertas',
      color: 'from-red-500 to-red-600',
      icon: '📝'
    },
    {
      id: 2,
      tipo: 'ACADÉMICO',
      titulo: 'Semana de Inducción - Nuevos Ingresantes',
      fecha: 'Lunes 21 de Abril, 2025',
      hora: '8:00 AM',
      lugar: 'Auditorio Principal',
      estado: 'Próximamente',
      color: 'from-blue-500 to-blue-600',
      icon: '🎓'
    },
    {
      id: 3,
      tipo: 'CULTURA',
      titulo: 'Festival Folklórico Universitario',
      fecha: 'Viernes 10 de Mayo, 2025',
      hora: '6:00 PM',
      lugar: 'Plaza Principal de Pampas',
      estado: 'Próximamente',
      color: 'from-purple-500 to-purple-600',
      icon: '🎭'
    },
    {
      id: 4,
      tipo: 'INVESTIGACIÓN',
      titulo: 'IV Congreso Internacional de Investigación',
      fecha: 'Junio 2025',
      hora: 'Por confirmar',
      lugar: 'Campus UNAT',
      estado: 'Próximamente',
      color: 'from-green-500 to-green-600',
      icon: '🔬'
    },
    {
      id: 5,
      tipo: 'DEPORTES',
      titulo: 'Juegos Deportivos Interfacultades',
      fecha: 'Mayo - Junio 2025',
      hora: 'Varios horarios',
      lugar: 'Complejo Deportivo UNAT',
      estado: 'Próximamente',
      color: 'from-orange-500 to-orange-600',
      icon: '⚽'
    },
    {
      id: 6,
      tipo: 'CAPACITACIÓN',
      titulo: 'Taller: Empleabilidad y Liderazgo',
      fecha: 'Sábado 15 de Marzo, 2025',
      hora: '3:00 PM',
      lugar: 'Sala de Conferencias',
      estado: 'Inscripciones Abiertas',
      color: 'from-cyan-500 to-cyan-600',
      icon: '💼'
    }
  ];

  return (
    <section id="eventos" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Calendario de Eventos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mantente al día con las actividades académicas, culturales y deportivas de la UNAT
          </p>
        </motion.div>

        {/* Grid de Eventos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventos.map((evento, index) => (
            <motion.div
              key={evento.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-primary-500 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20"
            >
              {/* Header del evento */}
              <div className={`bg-gradient-to-r ${evento.color} p-4`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-wide">
                    {evento.tipo}
                  </span>
                  <span className="text-3xl">{evento.icon}</span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary-400 transition-colors">
                  {evento.titulo}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="text-sm text-gray-400">Fecha</div>
                      <div className="font-semibold">{evento.fecha}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="text-sm text-gray-400">Hora</div>
                      <div className="font-semibold">{evento.hora}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="text-sm text-gray-400">Lugar</div>
                      <div className="font-semibold">{evento.lugar}</div>
                    </div>
                  </div>
                </div>

                {/* Estado */}
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${
                  evento.estado === 'Inscripciones Abiertas' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                    : 'bg-gray-700 text-gray-300 border border-gray-600'
                }`}>
                  {evento.estado === 'Inscripciones Abiertas' && '🟢 '}
                  {evento.estado}
                </div>
              </div>

              {/* Footer con acción */}
              <div className="px-6 pb-6">
                <button className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all transform hover:scale-105">
                  Más información
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">¿Quieres recibir notificaciones de próximos eventos?</p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105"
          >
            📅 Suscribirme al calendario
          </a>
        </motion.div>
      </div>
    </section>
  );
}
