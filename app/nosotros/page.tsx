import { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import MegaMenuPremium from '@/components/MegaMenuPremium';
import Autoridades from '@/components/Autoridades';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import FooterStanford from '@/components/FooterStanford';

export const metadata: Metadata = {
  title: 'Nosotros | UNAT',
  description: 'Universidad Nacional Autónoma de Tayacaja Daniel Hernández Morillo. Conoce nuestra historia, misión, visión y autoridades.',
  keywords: 'UNAT, universidad tayacaja, historia UNAT, misión visión, autoridades universidad',
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <MegaMenuPremium />
      <WhatsAppWidget />
      
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Universidad Nacional Autónoma de Tayacaja
          </h1>
          <p className="text-2xl md:text-3xl text-primary-100 max-w-4xl mx-auto">
            &quot;Daniel Hernández Morillo&quot;
          </p>
          <p className="text-xl text-primary-200 mt-6 max-w-3xl mx-auto">
            Formando profesionales competentes para el desarrollo de Tayacaja y el Perú
          </p>
        </div>
      </section>
      
      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                📜 Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  La <strong>Universidad Nacional Autónoma de Tayacaja &quot;Daniel Hernández Morillo&quot;</strong> fue creada mediante <strong>Ley N° 29716</strong>, publicada el 24 de junio de 2011, con el objetivo de impulsar el desarrollo educativo, científico, tecnológico y cultural de la provincia de Tayacaja y la región Huancavelica.
                </p>
                <p>
                  Lleva el nombre de <strong>Daniel Hernández Morillo</strong>, ilustre pintor peruano nacido en Pampas, Tayacaja, quien destacó por su talento artístico y su contribución a la cultura nacional.
                </p>
                <p>
                  La universidad cuenta con una <strong>Comisión Organizadora</strong> reconformada mediante <strong>Resolución Viceministerial N° 088-2022-MINEDU</strong>, encargada de dirigir la implementación y desarrollo institucional.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Misión</h3>
                  <p className="text-gray-700">
                    Formar profesionales competentes, éticos e innovadores comprometidos con el desarrollo sostenible de Tayacaja y el país.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl mb-3">🌟</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Visión</h3>
                  <p className="text-gray-700">
                    Ser una universidad líder en formación profesional, investigación e innovación, reconocida a nivel nacional por su calidad académica y compromiso social.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            💎 Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🤝', title: 'Integridad', desc: 'Actuamos con honestidad y transparencia' },
              { icon: '🎓', title: 'Excelencia', desc: 'Buscamos la calidad en todo lo que hacemos' },
              { icon: '🌱', title: 'Responsabilidad', desc: 'Comprometidos con el desarrollo sostenible' },
              { icon: '🤲', title: 'Inclusión', desc: 'Promovemos la igualdad de oportunidades' },
            ].map((valor, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{valor.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{valor.title}</h3>
                <p className="text-gray-600">{valor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Autoridades */}
      <Autoridades />
      
      <FooterStanford />
    </main>
  );
}
