'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ComoPostular() {
  const steps = [
    {
      number: '1',
      title: 'INSCRÍBETE',
      description: 'Completa el formulario online en 5 minutos',
      details: [
        'Ingresa a admision.unat.edu.pe',
        'Crea tu cuenta con DNI',
        'Completa tus datos personales',
        'Elige tu carrera preferida'
      ],
      time: '5 minutos',
      cost: 'GRATIS',
      icon: '📝',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '2',
      title: 'PREPÁRATE',
      description: 'Descarga el prospecto y estudia los temas del examen',
      details: [
        'Descarga el prospecto 2025',
        'Revisa los temas del examen',
        'Practica con exámenes anteriores',
        'Asiste a charlas informativas'
      ],
      time: '2-3 semanas',
      cost: 'GRATIS',
      icon: '📚',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '3',
      title: 'RINDE EL EXAMEN',
      description: 'Presenta tu examen de admisión en la fecha indicada',
      details: [
        'Fecha: 15 de Febrero, 2025',
        'Hora: 10:00 AM',
        'Lugar: Campus UNAT, Pampas',
        'Lleva DNI original y lápiz 2B'
      ],
      time: '3 horas',
      cost: 'GRATIS',
      icon: '✍️',
      color: 'from-orange-500 to-orange-600'
    },
    {
      number: '4',
      title: 'REVISA RESULTADOS',
      description: 'Consulta si ingresaste y completa tu matrícula',
      details: [
        'Publicación: 20 de Febrero',
        'Consulta en web con DNI',
        'Lista en local universitario',
        'Matrícula de ingresantes'
      ],
      time: '1 día',
      cost: 'GRATIS',
      icon: '🎉',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="como-postular" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            ¿Cómo Postular a UNAT?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sigue estos 4 pasos simples para convertirte en parte de la familia UNAT
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-secondary-100 text-secondary-900 px-6 py-3 rounded-full font-bold">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>100% Gratuito • Sin costos ocultos</span>
          </div>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Línea conectora */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-orange-200 to-green-200 transform -translate-y-1/2" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-primary-200">
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${step.color} p-6 text-white relative`}>
                    <div className="absolute top-4 right-4 text-6xl opacity-20 font-black">
                      {step.number}
                    </div>
                    <div className="text-5xl mb-3">{step.icon}</div>
                    <h3 className="text-2xl font-black mb-2">{step.title}</h3>
                    <p className="text-sm opacity-90">{step.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <ul className="space-y-2 mb-4">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Meta info */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="text-sm">
                        <span className="text-gray-500">Duración:</span>
                        <span className="font-bold text-gray-900 ml-1">{step.time}</span>
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-black">
                        {step.cost}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-primary-500 flex items-center justify-center font-black text-xl text-primary-600 shadow-lg z-10">
                  {step.number}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              ¿Listo para empezar tu futuro en UNAT?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              No esperes más. Las inscripciones cierran el 30 de Enero.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://admision.unat.edu.pe/2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary-500 text-primary-900 rounded-xl font-black text-lg hover:bg-secondary-400 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <span>INSCRÍBETE AHORA</span>
                <svg className="w-5 h-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#documentos"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white hover:bg-white hover:text-primary-900 transition-all"
              >
                Descargar Prospecto 2025
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
