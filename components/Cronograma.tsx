'use client';

export default function Cronograma() {
  const fechas = [
    { evento: 'Inscripciones:', fecha: 'Por confirmar' },
    { evento: 'Pago de derechos:', fecha: 'Durante el periodo de inscripción' },
    { evento: 'Examen de Admisión:', fecha: 'Por confirmar' },
    {
      evento: 'Publicación de Resultados:',
      fecha: 'Según cronograma oficial',
    },
    { evento: 'Matrícula:', fecha: 'Posterior a resultados' },
  ];

  return (
    <section id="cronograma" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cronograma de Admisión 2025-I
          </h2>
          <p className="text-xl text-gray-600">
            Fechas importantes del proceso de admisión ordinario
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-xl border-l-8 border-primary-600">
          <h3 className="text-3xl font-bold text-primary-600 mb-8 flex items-center">
            <span className="text-4xl mr-3">📅</span>
            Calendario Oficial
          </h3>

          <div className="space-y-4">
            {fechas.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <strong className="text-gray-900 text-lg mb-2 md:mb-0">
                  {item.evento}
                </strong>
                <span className="text-gray-600">{item.fecha}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white rounded-xl text-center">
            <p className="text-gray-700 mb-4">
              <strong>Nota:</strong> Las fechas exactas serán publicadas en el
              portal oficial de admisión
            </p>
            <a
              href="https://admision.unat.edu.pe/2/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Consultar Cronograma Actualizado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
