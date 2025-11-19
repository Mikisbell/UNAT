import { Metadata } from 'next';
import MegaMenuModerno from '@/components/MegaMenuModerno';
import HeroAdmision from '@/components/HeroAdmision';
import ComoPostular from '@/components/ComoPostular';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import FooterStanford from '@/components/FooterStanford';

export const metadata: Metadata = {
  title: 'Admisión 2025-I | UNAT',
  description: 'Proceso de admisión 2025-I en la Universidad Nacional Autónoma de Tayacaja. Inscripciones abiertas hasta el 30 de enero.',
  keywords: 'admisión UNAT, admisión 2025, proceso de admisión, inscripción universidad, examen admisión tayacaja',
};

export default function AdmisionPage() {
  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <MegaMenuModerno />
      <WhatsAppWidget />
      
      {/* Hero de Admisión */}
      <HeroAdmision />
      
      {/* Proceso de Postulación */}
      <ComoPostular />
      
      {/* Requisitos */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-bold mb-6 text-gray-700">
              DOCUMENTACIÓN
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Requisitos de Admisión
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para iniciar tu proceso
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-3xl font-black text-primary-600 mb-8">Requisitos Generales</h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  'Certificado de estudios secundarios completo',
                  'DNI vigente (original y copia)',
                  'Partida de nacimiento (original)',
                  '4 fotografías tamaño carnet fondo blanco',
                  'Pago por derecho de inscripción (S/. 200)'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white border-2 border-gray-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-3xl font-black text-blue-600 mb-8">Documentos Adicionales</h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  'Constancia de ingreso (si aplica)',
                  'Certificado de conducta',
                  'Declaración jurada de no tener antecedentes',
                  'Ficha de inscripción debidamente llenada'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold">•</span>
                    </div>
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cronograma */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-bold mb-6 text-gray-700">
              CALENDARIO
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Cronograma de Admisión 2025-I
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fechas importantes que debes conocer
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { fecha: '15 Dic - 30 Ene', evento: 'Inscripciones', color: 'bg-green-50 border-green-200 text-green-700' },
                { fecha: '6 Abril 2025', evento: 'Examen de Admisión', color: 'bg-red-50 border-red-200 text-red-700' },
                { fecha: '10 Abril 2025', evento: 'Publicación de Resultados', color: 'bg-blue-50 border-blue-200 text-blue-700' },
                { fecha: '15-20 Abril 2025', evento: 'Matrícula de Ingresantes', color: 'bg-purple-50 border-purple-200 text-purple-700' },
                { fecha: '01 Mayo 2025', evento: 'Inicio de Clases', color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
              ].map((item, idx) => (
                <div key={idx} className={`${item.color} border-l-4 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 cursor-pointer`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide mb-2">{item.fecha}</p>
                      <h3 className="text-2xl font-black">{item.evento}</h3>
                    </div>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl font-black">
                      {idx + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <FooterStanford />
    </main>
  );
}
