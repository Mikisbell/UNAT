'use client';

export default function Carreras() {
  const carreras = [
    {
      icon: '🌾',
      nombre: 'Ingeniería Agroindustrial',
      descripcion:
        'Transformación y valor agregado de productos agropecuarios para el desarrollo sostenible',
      duracion: '5 años (10 semestres)',
      modalidad: 'Presencial',
      titulo: 'Ingeniero Agroindustrial',
    },
    {
      icon: '🌳',
      nombre: 'Ingeniería Ambiental',
      descripcion:
        'Gestión ambiental y desarrollo sostenible de los recursos naturales',
      duracion: '5 años (10 semestres)',
      modalidad: 'Presencial',
      titulo: 'Ingeniero Ambiental',
    },
    {
      icon: '💼',
      nombre: 'Administración de Empresas',
      descripcion:
        'Formación de líderes empresariales con visión estratégica y responsabilidad social',
      duracion: '5 años (10 semestres)',
      modalidad: 'Presencial',
      titulo: 'Licenciado en Administración',
    },
    {
      icon: '⚕️',
      nombre: 'Enfermería',
      descripcion: 'Cuidado integral de la salud con calidad humana y científica',
      duracion: '5 años (10 semestres)',
      modalidad: 'Presencial',
      titulo: 'Licenciado en Enfermería',
    },
    {
      icon: '🏗️',
      nombre: 'Ingeniería Civil',
      descripcion:
        'Diseño y construcción de infraestructura para el desarrollo regional',
      duracion: '5 años (10 semestres)',
      modalidad: 'Presencial',
      titulo: 'Ingeniero Civil',
    },
  ];

  return (
    <section id="carreras" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Carreras Profesionales
          </h2>
          <p className="text-xl text-gray-600">
            5 Carreras con proyección al desarrollo regional y nacional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carreras.map((carrera, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-primary-600 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {carrera.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {carrera.nombre}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {carrera.descripcion}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700 text-sm">
                  <svg
                    className="w-5 h-5 mr-2 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {carrera.duracion}
                </li>
                <li className="flex items-center text-gray-700 text-sm">
                  <svg
                    className="w-5 h-5 mr-2 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {carrera.modalidad}
                </li>
                <li className="flex items-center text-gray-700 text-sm">
                  <svg
                    className="w-5 h-5 mr-2 text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {carrera.titulo}
                </li>
              </ul>
              <a
                href="#admision"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
              >
                Postular ahora
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
