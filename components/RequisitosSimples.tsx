'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, CreditCard, UserCheck, Calendar, CheckCircle2 } from 'lucide-react';

export default function RequisitosSimples() {
  const pasos = [
    {
      numero: '1',
      icono: FileText,
      titulo: 'Documentos Necesarios',
      items: [
        'DNI (original y copia)',
        'Certificado de estudios (5to secundaria)',
        'Partida de nacimiento',
        'Foto tamaño carnet'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      numero: '2',
      icono: CreditCard,
      titulo: 'Pago de Inscripción',
      items: [
        'Costo: S/. 200 (pago único)',
        'Banco de la Nación',
        'Código de pago en web',
        'Guardar voucher'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      numero: '3',
      icono: UserCheck,
      titulo: 'Inscripción Online',
      items: [
        'Entra a admision.unat.edu.pe',
        'Llena el formulario',
        'Sube tus documentos',
        'Imprime tu carné'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      numero: '4',
      icono: Calendar,
      titulo: 'Día del Examen',
      items: [
        'Fecha: 6 de Abril, 2025',
        'Hora: 8:00 AM',
        'Lleva DNI y carné',
        'Llega 30 min antes'
      ],
      color: 'from-red-500 to-red-600'
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
            PROCESO SIMPLE Y CLARO
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            ¿Qué Necesitas para Postular?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Solo 4 pasos simples para ser parte de UNAT. Todo el proceso es <span className="font-bold text-primary-600">online y gratuito</span> (solo pagas S/. 200 por inscripción)
          </p>
        </motion.div>

        {/* Pasos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pasos.map((paso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Número destacado */}
              <div className={`absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br ${paso.color} rounded-2xl flex items-center justify-center shadow-xl z-10 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl font-black text-white">{paso.numero}</span>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 pt-10 h-full hover:shadow-2xl hover:border-gray-200 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-100 transition-colors">
                  <paso.icono className="w-6 h-6 text-gray-700" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-6 leading-tight">
                  {paso.titulo}
                </h3>
                
                <ul className="space-y-3">
                  {paso.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA con cronograma */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
        >
          {/* Patrón sutil de fondo */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '30px 30px'
            }} />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-black mb-8 leading-tight">
                Fechas Importantes 2025-I
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <span className="font-bold text-lg">Inscripciones:</span>
                    <span className="text-gray-300 ml-2">Hasta 30 Enero</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <span className="font-bold text-lg">Examen:</span>
                    <span className="text-gray-300 ml-2">6 Abril, 8:00 AM</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <span className="font-bold text-lg">Resultados:</span>
                    <span className="text-gray-300 ml-2">10 Abril</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="w-3 h-3 bg-purple-400 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <span className="font-bold text-lg">Matrícula:</span>
                    <span className="text-gray-300 ml-2">15-20 Abril</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-2xl mb-8 text-gray-300 font-semibold">
                ¡No pierdas esta oportunidad!
              </p>
              <Link
                href="https://admision.unat.edu.pe/2/"
                target="_blank"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary-600 text-white rounded-2xl font-bold text-lg hover:bg-primary-500 transition-all shadow-2xl hover:shadow-white/20 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6" />
                Inscribirme Ahora
              </Link>
              <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                Portal de inscripción disponible 24/7
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
