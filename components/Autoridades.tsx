'use client';

export default function Autoridades() {
  const autoridades = [
    {
      nombre: 'M.Sc. Luis Abanto Morales Y Chocano',
      cargo: 'Presidente',
      descripcion: 'Comisión Organizadora UNAT',
      icon: '👨‍💼',
    },
    {
      nombre: 'Dr. Segundo Clemente Rodriguez Delgado',
      cargo: 'Vicepresidente Académico',
      descripcion: 'Responsable del área académica',
      icon: '👨‍🏫',
    },
    {
      nombre: 'Dra. Charo Jacqueline Jauregui Sueldo',
      cargo: 'Vicepresidente de Investigación',
      descripcion: 'Responsable del área de investigación',
      icon: '👩‍🔬',
    },
    {
      nombre: 'M.Sc. Aron Jhonatan Aliaga Contreras',
      cargo: 'Miembro',
      descripcion: 'Comisión Organizadora UNAT',
      icon: '👨‍💻',
    },
  ];

  return (
    <section id="autoridades" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comisión Organizadora
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Universidad Nacional Autónoma de Tayacaja &quot;Daniel Hernández Morillo&quot;
          </p>
          <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-md">
            <p className="text-sm text-gray-700">
              <strong>Resolución Viceministerial N° 088-2022-MINEDU</strong>
            </p>
          </div>
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📋 Sobre la Comisión Organizadora
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              La Universidad Nacional Autónoma de Tayacaja Daniel Hernández Morillo, 
              establecida mediante la <strong>Ley N° 29716</strong>, cuenta con una 
              Comisión Organizadora, recientemente reconformada por medio de la{' '}
              <strong>Resolución Viceministerial N° 088-2022-MINEDU</strong>. 
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              Estos distinguidos profesionales han asumido el compromiso ferviente de 
              impulsar el desarrollo de la primera institución universitaria en Tayacaja. 
              Su liderazgo y dedicación son fundamentales para garantizar el éxito y la 
              excelencia en todas las áreas académicas e investigativas de la universidad.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {autoridades.map((autoridad, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary-600"
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-5xl mx-auto mb-4">
                  {autoridad.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {autoridad.nombre}
                </h3>
                <div className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg mb-3">
                  <p className="text-sm font-semibold">{autoridad.cargo}</p>
                </div>
                <p className="text-gray-600 text-sm">{autoridad.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-primary-600 text-white px-8 py-4 rounded-xl shadow-lg">
            <p className="text-lg font-semibold">
              🎓 Primera Universidad de Tayacaja, Huancavelica
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
