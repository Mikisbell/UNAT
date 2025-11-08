'use client';

export default function About() {
  const features = [
    {
      icon: '🎓',
      title: 'Calidad Educativa',
      description: 'Formación profesional con estándares de calidad',
    },
    {
      icon: '🔬',
      title: 'Investigación',
      description: 'Revistas científicas: Llamkasun y Tayacaja',
    },
    {
      icon: '🌎',
      title: 'Desarrollo Regional',
      description: 'Compromiso con Tayacaja y Huancavelica',
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre UNAT
          </h2>
          <p className="text-xl text-gray-600">
            Universidad Nacional Autónoma de Tayacaja &quot;Daniel Hernández Morillo&quot;
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Nuestra Misión
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Formar profesionales competentes, éticos y comprometidos con el
                desarrollo sostenible de la región Tayacaja y el país, mediante
                una educación de calidad que integre la docencia, investigación y
                responsabilidad social.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Nuestra Visión
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Ser una universidad líder en la formación profesional y desarrollo
                regional, reconocida por su excelencia académica, investigación
                científica y vinculación con la comunidad de Tayacaja y
                Huancavelica.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800"
              alt="Campus UNAT"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
