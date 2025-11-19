'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function EventosProximos() {
  const eventos = [
    {
      fecha: '15',
      mes: 'DIC',
      titulo: 'Feria de Ciencias 2024',
      hora: '09:00 AM',
      lugar: 'Auditorio Principal',
      categoria: 'Académico',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      fecha: '20',
      mes: 'DIC',
      titulo: 'Torneo Deportivo Interfacultades',
      hora: '02:00 PM',
      lugar: 'Complejo Deportivo',
      categoria: 'Deportes',
      color: 'bg-green-100 text-green-700'
    },
    {
      fecha: '06',
      mes: 'ENE',
      titulo: 'Ceremonia de Graduación',
      hora: '10:00 AM',
      lugar: 'Plaza Central',
      categoria: 'Institucional',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      fecha: '15',
      mes: 'ENE',
      titulo: 'Taller de Emprendimiento',
      hora: '04:00 PM',
      lugar: 'Sala de Conferencias',
      categoria: 'Talleres',
      color: 'bg-orange-100 text-orange-700'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-bold mb-6 text-gray-700">
            CALENDARIO ACADÉMICO
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Próximos Eventos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mantente al día con las actividades de nuestra comunidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {eventos.map((evento, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-gray-100 rounded-3xl hover:shadow-2xl hover:border-gray-200 transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Fecha destacada */}
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                <div className="relative z-10">
                  <div className="text-5xl font-black mb-1">{evento.fecha}</div>
                  <div className="text-sm font-bold uppercase tracking-wider">{evento.mes}</div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8">
                <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-bold mb-4 ${evento.color}`}>
                  {evento.categoria}
                </span>
                
                <h3 className="text-xl font-black text-gray-900 mb-6 leading-tight group-hover:text-primary-600 transition-colors">
                  {evento.titulo}
                </h3>

                <div className="space-y-3 text-base text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary-600" strokeWidth={2.5} />
                    </div>
                    <span className="font-semibold">{evento.hora}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-600" strokeWidth={2.5} />
                    </div>
                    <span className="font-semibold">{evento.lugar}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/noticias#eventos"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Ver Calendario Completo
          </Link>
        </div>
      </div>
    </section>
  );
}
