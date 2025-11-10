import { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import MegaMenuPremium from '@/components/MegaMenuPremium';
import CampusNews from '@/components/CampusNews';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import FooterStanford from '@/components/FooterStanford';

export const metadata: Metadata = {
  title: 'Noticias y Eventos | UNAT',
  description: 'Últimas noticias, eventos y actividades de la Universidad Nacional Autónoma de Tayacaja.',
  keywords: 'noticias UNAT, eventos universidad, actividades académicas, calendario UNAT',
};

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <MegaMenuPremium />
      <WhatsAppWidget />
      
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Noticias y Eventos
          </h1>
          <p className="text-2xl md:text-3xl text-blue-100 max-w-4xl mx-auto">
            Mantente informado sobre todo lo que sucede en UNAT
          </p>
        </div>
      </section>
      
      {/* Noticias Grid */}
      <CampusNews />
      
      {/* Próximos Eventos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            📅 Próximos Eventos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                fecha: '15 Dic 2024',
                titulo: 'Inauguración del Proceso de Admisión 2025-I',
                tipo: 'Admisión',
                color: 'bg-red-100 text-red-600',
              },
              {
                fecha: '20 Dic 2024',
                titulo: 'Seminario: Inteligencia Artificial en Educación',
                tipo: 'Académico',
                color: 'bg-blue-100 text-blue-600',
              },
              {
                fecha: '10 Ene 2025',
                titulo: 'Feria Vocacional UNAT 2025',
                tipo: 'Evento',
                color: 'bg-green-100 text-green-600',
              },
              {
                fecha: '25 Ene 2025',
                titulo: 'Simulacro de Examen de Admisión',
                tipo: 'Admisión',
                color: 'bg-purple-100 text-purple-600',
              },
              {
                fecha: '10 Feb 2025',
                titulo: 'Examen de Admisión 2025-I',
                tipo: 'Admisión',
                color: 'bg-red-100 text-red-600',
              },
              {
                fecha: '01 Mar 2025',
                titulo: 'Inicio del Semestre Académico 2025-I',
                tipo: 'Académico',
                color: 'bg-yellow-100 text-yellow-600',
              },
            ].map((evento, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`${evento.color} px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4`}>
                  {evento.tipo}
                </div>
                <p className="text-sm text-gray-500 mb-2">{evento.fecha}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{evento.titulo}</h3>
                <button className="text-primary-600 font-semibold hover:text-primary-700">
                  Más información →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <FooterStanford />
    </main>
  );
}
