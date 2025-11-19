'use client';

export default function Admision() {
  const steps = [
    {
      number: 1,
      title: 'Inscripción',
      description: 'Regístrate en línea y completa tu ficha de inscripción',
    },
    {
      number: 2,
      title: 'Pago de Derecho',
      description: 'Realiza el pago en la cuenta bancaria de la universidad',
    },
    {
      number: 3,
      title: 'Examen de Admisión',
      description: 'Presenta el examen ordinario en la fecha establecida',
    },
    {
      number: 4,
      title: 'Resultados y Matrícula',
      description: 'Verifica resultados y formaliza tu matrícula',
    },
  ];

  return (
    <section id="admision" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Admisión 2025-I
          </h2>
          <p className="text-xl text-gray-600">
            Proceso de Admisión Ordinario - Universidad Nacional Autónoma de
            Tayacaja
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Info Boxes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Documentos Importantes
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl mr-3">📄</span>
                <div>
                  <strong>Prospecto 2025:</strong>{' '}
                  <a
                    href="https://drive.google.com/file/d/1MDXnpeUlKPrC6_b8aHPvdD6sNWKMB9xp/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Descargar PDF
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">📋</span>
                <div>
                  <strong>Reglamento de Admisión:</strong> Disponible en oficina
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">📝</span>
                <div>
                  <strong>Instrucciones para Postulantes:</strong>{' '}
                  <a
                    href="https://drive.google.com/file/d/1qCGVFf2ZK8uwpS94e2tEkik9hJcKIR7K/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Ver aquí
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🎯</span>
                <div>
                  <strong>Vacantes 2025:</strong> Consultar en prospecto
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Requisitos Generales
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Certificado de estudios secundarios
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Partida de nacimiento original
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                DNI vigente (copia)
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Fotografías tamaño pasaporte
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Ficha de inscripción completa
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Comprobante de pago
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para ser parte de UNAT?
          </h3>
          <p className="text-xl mb-8 opacity-95">
            Consulta toda la información del proceso de admisión 2025-I
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://admision.unat.edu.pe/2/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Ir a Portal de Admisión
            </a>
            <a
              href="#cronograma"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
            >
              Ver Cronograma
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
