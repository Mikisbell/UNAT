'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bus, MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function ComoLlegar() {
  const rutas = [
    {
      desde: 'Desde Huancayo',
      tiempo: '3 horas',
      costo: 'S/. 15-20',
      empresas: 'Transporte Huancavelica, San Juan',
      frecuencia: 'Cada hora'
    },
    {
      desde: 'Desde Huancavelica',
      tiempo: '2.5 horas',
      costo: 'S/. 12-15',
      empresas: 'Oropesa, San Cristóbal',
      frecuencia: 'Cada 30 min'
    },
    {
      desde: 'Desde Lima',
      tiempo: '8-9 horas',
      costo: 'S/. 40-50',
      empresas: 'Cruz del Sur, Molina',
      frecuencia: 'Directo o con escala'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Información */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-bold mb-8 text-gray-700">
              UBICACIÓN Y ACCESO
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              ¿Cómo Llegar a UNAT?
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Nuestra universidad está ubicada en <span className="font-bold text-primary-600">Pampas, provincia de Tayacaja</span>, con fácil acceso desde toda la región centro.
            </p>

            {/* Dirección */}
            <div className="bg-gray-50 border-2 border-gray-100 rounded-3xl p-8 mb-6 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary-600" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">Dirección</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Jr. Bolognesi N° 418, Pampas<br />
                    Tayacaja, Huancavelica
                  </p>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div className="bg-gray-50 border-2 border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-green-600" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">Informes</h3>
                  <div className="space-y-2 text-base text-gray-600">
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" /> (067) 453-078
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" /> WhatsApp: 967 893 456
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4" /> informes@unat.edu.pe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rutas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 border-2 border-gray-100 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-3xl font-black text-gray-900 mb-8 leading-tight">
                Rutas de Transporte
              </h3>
              
              <div className="space-y-6">
                {rutas.map((ruta, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-3xl p-6 hover:border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-50 transition-colors">
                        <Bus className="w-6 h-6 text-primary-600 flex-shrink-0" strokeWidth={2.5} />
                      </div>
                      <h4 className="text-xl font-black text-gray-900">{ruta.desde}</h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-gray-400" strokeWidth={2.5} />
                        <span className="text-base text-gray-600 font-semibold">{ruta.tiempo}</span>
                      </div>
                      <div>
                        <span className="text-xl font-black text-primary-600">{ruta.costo}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600">
                        <span className="font-bold text-gray-900">Empresas:</span> {ruta.empresas}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-bold text-gray-900">Frecuencia:</span> {ruta.frecuencia}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t-2 border-gray-200">
                <Link
                  href="/contacto"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-primary-600 text-white rounded-2xl font-bold text-lg hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02]"
                >
                  <MapPin className="w-6 h-6" />
                  Ver Mapa y Más Información
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
