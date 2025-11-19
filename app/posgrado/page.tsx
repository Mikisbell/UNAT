import { Metadata } from 'next';
import MegaMenuModerno from '@/components/MegaMenuModerno';
import PageHero from '@/components/PageHero';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import FooterStanford from '@/components/FooterStanford';

export const metadata: Metadata = {
  title: 'Posgrado | UNAT',
  description: 'Programas de posgrado de la Universidad Nacional Autónoma de Tayacaja. Maestrías y especializaciones.',
  keywords: 'posgrado UNAT, maestrías, especializaciones, educación continua',
};

export default function PosgradoPage() {
  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <MegaMenuModerno />
      <WhatsAppWidget />
      
      <PageHero 
        title="Educación de Posgrado"
        description="Maestrías y especializaciones para el desarrollo profesional continuo"
        imagePath="/images/campus/hero-background.jpg"
        imageAlt="Posgrado UNAT"
      />
      
      {/* Contenido Próximamente */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Programas de Posgrado
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              La UNAT está desarrollando programas de posgrado de alta calidad para fortalecer las capacidades profesionales de nuestra región.
            </p>
            
            <div className="bg-primary-50 rounded-2xl p-8 border-2 border-primary-200">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-primary-600 mb-4">
                Próximamente
              </h3>
              <p className="text-gray-700 mb-6">
                Estamos trabajando en la implementación de programas de maestría en las siguientes áreas:
              </p>
              <ul className="text-left max-w-md mx-auto space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  <span>Gestión Pública y Desarrollo Regional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  <span>Ingeniería y Tecnología</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  <span>Ciencias de la Salud</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  <span>Educación e Innovación Pedagógica</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-600 mb-4">
                Para mayor información, contáctanos:
              </p>
              <a 
                href="/contacto" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <FooterStanford />
    </main>
  );
}
