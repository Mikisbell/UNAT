'use client';

export default function Stats() {
  const stats = [
    { number: '5', label: 'Carreras Profesionales' },
    { number: '2025', label: 'Proceso de Admisión' },
    { number: '100%', label: 'Modalidad Presencial' },
    { number: 'Tayacaja', label: 'Pampas - Huancavelica', isText: true },
  ];

  return (
    <section className="relative -mt-16 z-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`${
                  stat.isText ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl'
                } font-bold text-primary-600 mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
