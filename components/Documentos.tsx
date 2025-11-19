'use client';

export default function Documentos() {
  const documentos = [
    {
      titulo: 'Prospecto de Admisión 2025',
      descripcion: 'Documento oficial con información completa del proceso de admisión',
      icon: '📘',
      url: 'https://drive.google.com/file/d/1MDXnpeUlKPrC6_b8aHPvdD6sNWKMB9xp/view',
      tipo: 'PDF',
      destacado: true,
    },
    {
      titulo: 'Instrucciones para Postulantes',
      descripcion: 'Guía paso a paso para el Examen Ordinario 2025-I',
      icon: '📝',
      url: 'https://drive.google.com/file/d/1qCGVFf2ZK8uwpS94e2tEkik9hJcKIR7K/view',
      tipo: 'PDF',
      destacado: true,
    },
    {
      titulo: 'Reglamento de Admisión 2025',
      descripcion: 'Normativa oficial del proceso de admisión',
      icon: '📋',
      url: 'https://admision.unat.edu.pe/2/reglamento/',
      tipo: 'Web',
      destacado: false,
    },
    {
      titulo: 'Vacantes 2025',
      descripcion: 'Número de vacantes por carrera profesional',
      icon: '🎯',
      url: 'https://admision.unat.edu.pe/2/vacantes/',
      tipo: 'Web',
      destacado: false,
    },
    {
      titulo: 'Consideraciones Generales - Ordinario',
      descripcion: 'Información importante para la modalidad ordinaria',
      icon: '📌',
      url: 'https://admision.unat.edu.pe/2/consideraciones-generales-ordinario/',
      tipo: 'Web',
      destacado: false,
    },
    {
      titulo: 'Consideraciones Generales - Otras Modalidades',
      descripcion: 'Información para otras modalidades de admisión 2025-I',
      icon: '📎',
      url: 'https://admision.unat.edu.pe/2/consideraciones-generales-otras-modalidades-2025-i/',
      tipo: 'Web',
      destacado: false,
    },
  ];

  return (
    <section id="documentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Documentos Oficiales
          </h2>
          <p className="text-xl text-gray-600">
            Accede a toda la información oficial del proceso de admisión 2025-I
          </p>
        </div>

        {/* Documentos Destacados */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {documentos
            .filter((doc) => doc.destacado)
            .map((documento, index) => (
              <a
                key={index}
                href={documento.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 text-white group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-6xl">{documento.icon}</div>
                  <span className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {documento.tipo}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{documento.titulo}</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  {documento.descripcion}
                </p>
                <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                  Descargar / Ver
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </a>
            ))}
        </div>

        {/* Otros Documentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documentos
            .filter((doc) => !doc.destacado)
            .map((documento, index) => (
              <a
                key={index}
                href={documento.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-5xl mb-3">{documento.icon}</div>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {documento.tipo}
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {documento.titulo}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {documento.descripcion}
                </p>
                <div className="flex items-center text-primary-600 text-sm font-semibold">
                  Ver más
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </a>
            ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Necesitas más información?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Visita el portal oficial de admisión UNAT
          </p>
          <a
            href="https://admision.unat.edu.pe/2/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Portal de Admisión UNAT
          </a>
        </div>
      </div>
    </section>
  );
}
