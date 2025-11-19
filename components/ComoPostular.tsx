'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FileText, BookOpen, PenTool, Trophy, CheckCircle2, Clock, DollarSign } from 'lucide-react';

export default function ComoPostular() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'inscripcion',
      number: '1',
      title: 'Inscripción',
      tabTitle: 'INSCRIPCIÓN',
      description: 'Completa tu registro en línea de forma rápida y sencilla. El proceso es 100% digital.',
      details: [
        'Ingresa a admision.unat.edu.pe',
        'Crea tu cuenta con tu DNI',
        'Completa tus datos personales',
        'Selecciona tu carrera preferida'
      ],
      time: '5 minutos',
      cost: 'S/. 200',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      iconColor: 'text-blue-500'
    },
    {
      id: 'preparacion',
      number: '2',
      title: 'Preparación',
      tabTitle: 'PREPARACIÓN',
      description: 'Accede a todo el material de estudio necesario. Descarga el prospecto, revisa los temas y prepárate con éxito.',
      details: [
        'Descarga el prospecto 2025-I',
        'Revisa el temario oficial',
        'Practica con exámenes anteriores',
        'Asiste a charlas informativas gratuitas'
      ],
      time: '2-3 semanas',
      cost: 'GRATIS',
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600',
      iconColor: 'text-purple-500'
    },
    {
      id: 'examen',
      number: '3',
      title: 'Examen de Admisión',
      tabTitle: 'EXAMEN',
      description: 'Presenta tu examen en la fecha programada. Conoce todos los detalles importantes para el día del examen.',
      details: [
        'Fecha: Domingo 6 de Abril, 2025',
        'Hora de inicio: 9:00 AM',
        'Duración: 3 horas',
        'Lugar: Campus Ahuaycha, Pampas'
      ],
      time: '3 horas',
      cost: 'GRATIS',
      icon: PenTool,
      color: 'from-orange-500 to-orange-600',
      iconColor: 'text-orange-500'
    },
    {
      id: 'resultados',
      number: '4',
      title: 'Resultados y Matrícula',
      tabTitle: 'RESULTADOS',
      description: 'Consulta tus resultados en línea y completa tu matrícula. ¡Bienvenido a la familia UNAT!',
      details: [
        'Publicación de resultados en línea',
        'Consulta con tu DNI',
        'Lista oficial en el campus',
        'Proceso de matrícula para ingresantes'
      ],
      time: '1 día',
      cost: 'GRATIS',
      icon: Trophy,
      color: 'from-green-500 to-green-600',
      iconColor: 'text-green-500'
    }
  ];

  const currentStep = steps[activeStep];

  return (
    <section id="como-postular" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Postula a UNAT en 4 Pasos Simples
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proceso de admisión 100% gratuito y completamente digital
          </p>
        </motion.div>

        {/* Tabs Navigation - Estilo Dataiku */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`px-6 py-3 text-sm md:text-base font-bold uppercase tracking-wide transition-all duration-300 rounded-t-lg ${
                  activeStep === index
                    ? 'bg-white text-primary-900 shadow-lg'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
                }`}
              >
                {step.tabTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area - Layout Dataiku */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Column - Content */}
              <div className="p-12 md:p-16 lg:p-20 flex flex-col justify-center bg-white">
                <div className={`w-20 h-20 ${currentStep.iconColor} bg-gray-50 rounded-3xl flex items-center justify-center mb-8`}>
                  <currentStep.icon className="w-12 h-12" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  {currentStep.title}
                </h3>
                
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  {currentStep.description}
                </p>

                {/* Details List */}
                <div className="mb-10">
                  <ul className="space-y-4">
                    {currentStep.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-gray-700">
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-lg leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-6">
                    <Clock className="w-6 h-6 text-gray-400 mb-3" strokeWidth={2.5} />
                    <div className="text-sm text-gray-500 font-semibold mb-2">Duración</div>
                    <div className="text-xl font-black text-gray-900">{currentStep.time}</div>
                  </div>
                  <div className={`bg-${currentStep.cost === 'GRATIS' ? 'green' : 'blue'}-50 border-2 border-${currentStep.cost === 'GRATIS' ? 'green' : 'blue'}-200 rounded-2xl p-6`}>
                    <DollarSign className={`w-6 h-6 text-${currentStep.cost === 'GRATIS' ? 'green' : 'blue'}-600 mb-3`} strokeWidth={2.5} />
                    <div className="text-sm text-gray-500 font-semibold mb-2">Costo</div>
                    <div className={`text-xl font-black text-${currentStep.cost === 'GRATIS' ? 'green' : 'blue'}-700`}>{currentStep.cost}</div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-500">Paso {currentStep.number} de 4</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${currentStep.color} transition-all duration-500`}
                      style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Area con iconos animados */}
              <div className={`relative bg-gradient-to-br ${currentStep.color} p-12 lg:p-20 flex items-center justify-center overflow-hidden`}>
                {/* Patrón de fondo */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '30px 30px'
                  }} />
                </div>

                {/* Iconos flotantes animados */}
                <div className="relative z-10">
                  <motion.div
                    key={`icon-${activeStep}`}
                    initial={{ scale: 0.5, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="w-56 h-56 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-8 shadow-2xl"
                  >
                    <currentStep.icon className="w-32 h-32 text-white" strokeWidth={2} />
                  </motion.div>

                  {/* Badge con número de paso */}
                  <motion.div
                    initial={{ scale: 0, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl text-center"
                  >
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                      Paso {currentStep.number}
                    </div>
                    <div className="text-3xl font-black text-gray-900">
                      {currentStep.title}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Documentos Oficiales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
          id="documentos"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              📚 Documentos Oficiales 2025-I
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descarga toda la información necesaria para tu proceso de admisión
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Documento 1: Instrucciones Ordinario */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-primary-100 hover:border-primary-300"
            >
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-6 text-white">
                <div className="text-5xl mb-3">📄</div>
                <h4 className="text-xl font-black mb-2">Instrucciones Ordinario</h4>
                <p className="text-sm opacity-90">Modalidad Ordinaria 2025-I</p>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>Examen: 6 de Abril 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⏰</span>
                    <span>9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>Campus Ahuaycha</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✅</span>
                    <span>Requisitos y reglas</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <a
                    href="https://admision.unat.edu.pe/2/pdf/instrucciones-ordinario-2025-I.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary-900 text-white rounded-lg py-2.5 px-4 text-center text-sm font-bold hover:bg-primary-800 transition"
                  >
                    👁️ Ver PDF
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1qCGVFf2ZK8uwpS94e2tEkik9hJcKIR7K/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white rounded-lg py-2.5 px-4 text-center text-sm font-bold hover:bg-blue-500 transition"
                  >
                    📱 Google Drive
                  </a>
                  <a
                    href="https://admision.unat.edu.pe/2/pdf/instrucciones-ordinario-2025-I.pdf"
                    download
                    className="block w-full bg-gray-100 text-primary-900 rounded-lg py-2.5 px-4 text-center text-sm font-semibold hover:bg-gray-200 transition"
                  >
                    ⬇️ Descargar
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Documento 2: Instrucciones Otras Modalidades */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-amber-100 hover:border-amber-300"
            >
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 text-white">
                <div className="text-5xl mb-3">📄</div>
                <h4 className="text-xl font-black mb-2">Instrucciones Otras Modalidades</h4>
                <p className="text-sm opacity-90">Extraordinaria 2025-I</p>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>Examen: 30 de Marzo 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⏰</span>
                    <span>9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>Campus Ahuaycha</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✅</span>
                    <span>Modalidades especiales</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <a
                    href="https://admision.unat.edu.pe/2/pdf/instrucciones-otras-modalidades-2025-I.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-amber-500 text-white rounded-lg py-2.5 px-4 text-center text-sm font-bold hover:bg-amber-400 transition"
                  >
                    👁️ Ver PDF
                  </a>
                  <a
                    href="https://admision.unat.edu.pe/2/pdf/instrucciones-otras-modalidades-2025-I.pdf"
                    download
                    className="block w-full bg-gray-100 text-amber-600 rounded-lg py-2.5 px-4 text-center text-sm font-semibold hover:bg-gray-200 transition"
                  >
                    ⬇️ Descargar
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Documento 3: Prospecto 2025 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-purple-100 hover:border-purple-300"
            >
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 text-white">
                <div className="text-5xl mb-3">📘</div>
                <h4 className="text-xl font-black mb-2">Prospecto 2025</h4>
                <p className="text-sm opacity-90">Guía completa del postulante</p>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span>📚</span>
                    <span>Temario completo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🎯</span>
                    <span>Carreras profesionales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📊</span>
                    <span>Ejemplos de preguntas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>ℹ️</span>
                    <span>Información general</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <a
                    href="https://admision.unat.edu.pe/2/pdf/prospecto-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-purple-600 text-white rounded-lg py-2.5 px-4 text-center text-sm font-bold hover:bg-purple-500 transition"
                  >
                    👁️ Ver PDF
                  </a>
                  <a
                    href="https://admision.unat.edu.pe/2/pdf/prospecto-2025.pdf"
                    download
                    className="block w-full bg-gray-100 text-purple-600 rounded-lg py-2.5 px-4 text-center text-sm font-semibold hover:bg-gray-200 transition"
                  >
                    ⬇️ Descargar
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Documento 4: Cronograma */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-green-100 hover:border-green-300"
            >
              <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 text-white">
                <div className="text-5xl mb-3">📋</div>
                <h4 className="text-xl font-black mb-2">Cronograma</h4>
                <p className="text-sm opacity-90">Fechas importantes 2025-I</p>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>Inscripciones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📝</span>
                    <span>Fechas de examen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📢</span>
                    <span>Publicación de resultados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🎓</span>
                    <span>Matrícula</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <a
                    href="https://admision.unat.edu.pe/2/pdf/cronograma-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 text-white rounded-lg py-2.5 px-4 text-center text-sm font-bold hover:bg-green-500 transition"
                  >
                    👁️ Ver PDF
                  </a>
                  <a
                    href="https://admision.unat.edu.pe/2/pdf/cronograma-2025.pdf"
                    download
                    className="block w-full bg-gray-100 text-green-600 rounded-lg py-2.5 px-4 text-center text-sm font-semibold hover:bg-gray-200 transition"
                  >
                    ⬇️ Descargar
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

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
              <a
                href="#documentos"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white hover:bg-white hover:text-primary-900 transition-all"
              >
                📄 Ver Documentos
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
