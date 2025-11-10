import { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import MegaMenuPremium from '@/components/MegaMenuPremium';
import AdmisionBanner from '@/components/AdmisionBanner';
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
    <main className="min-h-screen bg-white">
      <TopBar />
      <MegaMenuPremium />
      <AdmisionBanner />
      <WhatsAppWidget />
      
      {/* Hero de Admisión */}
      <HeroAdmision />
      
      {/* Proceso de Postulación */}
      <ComoPostular />
      
      {/* Requisitos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            📋 Requisitos de Admisión
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-primary-600 mb-4">Requisitos Generales</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Certificado de estudios secundarios completo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>DNI vigente (original y copia)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Partida de nacimiento (original)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>4 fotografías tamaño carnet fondo blanco</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Pago por derecho de inscripción</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-primary-600 mb-4">Documentos Adicionales</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">📄</span>
                  <span>Constancia de ingreso (si aplica)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">📄</span>
                  <span>Certificado de conducta</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">📄</span>
                  <span>Declaración jurada de no tener antecedentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">📄</span>
                  <span>Ficha de inscripción debidamente llenada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cronograma */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            📅 Cronograma de Admisión 2025-I
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                { fecha: '15 Dic - 30 Ene', evento: 'Inscripciones', color: 'bg-green-100 border-green-500' },
                { fecha: '10 Feb 2025', evento: 'Examen de Admisión', color: 'bg-red-100 border-red-500' },
                { fecha: '15 Feb 2025', evento: 'Publicación de Resultados', color: 'bg-blue-100 border-blue-500' },
                { fecha: '20-25 Feb 2025', evento: 'Matrícula de Ingresantes', color: 'bg-purple-100 border-purple-500' },
                { fecha: '01 Mar 2025', evento: 'Inicio de Clases', color: 'bg-yellow-100 border-yellow-500' },
              ].map((item, idx) => (
                <div key={idx} className={`${item.color} border-l-4 p-6 rounded-lg`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600">{item.fecha}</p>
                      <h3 className="text-xl font-bold text-gray-900">{item.evento}</h3>
                    </div>
                    <div className="text-3xl">
                      {idx === 0 && '📝'}
                      {idx === 1 && '📖'}
                      {idx === 2 && '📊'}
                      {idx === 3 && '✍️'}
                      {idx === 4 && '🎓'}
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
