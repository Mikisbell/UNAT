import { Metadata } from 'next';
import Link from 'next/link';
import MegaMenuModerno from '@/components/MegaMenuModerno';
import PageHero from '@/components/PageHero';
import Carreras from '@/components/Carreras';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import FooterStanford from '@/components/FooterStanford';

export const metadata: Metadata = {
  title: 'Carreras Profesionales | UNAT',
  description: 'Conoce las carreras profesionales que ofrece UNAT: Ingeniería de Sistemas, Ingeniería Civil, Educación, Contabilidad y Administración.',
  keywords: 'carreras UNAT, ingeniería sistemas, ingeniería civil, educación, contabilidad, administración, carreras universitarias tayacaja',
};

export default function CarrerasPage() {
  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <MegaMenuModerno />
      <WhatsAppWidget />
      
      <PageHero 
        title="Carreras Profesionales"
        description="5 carreras acreditadas con proyección al desarrollo regional y nacional"
        imagePath="/images/campus/hero-background.jpg"
        imageAlt="Carreras UNAT"
      />
      
      {/* Carreras Grid */}
      <Carreras />
      
      {/* Por qué estudiar en UNAT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-bold mb-6 text-gray-700">
              BENEFICIOS
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              ¿Por qué estudiar en UNAT?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una educación de calidad con impacto regional
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Educación Gratuita',
                desc: 'Universidad pública 100% gratuita con educación de calidad',
              },
              {
                title: 'Docentes Calificados',
                desc: 'Profesionales con amplia experiencia y formación continua',
              },
              {
                title: 'Infraestructura Moderna',
                desc: 'Laboratorios, bibliotecas y espacios equipados',
              },
              {
                title: 'Alta Empleabilidad',
                desc: 'Nuestros egresados tienen 95% de inserción laboral',
              },
              {
                title: 'Investigación',
                desc: 'Participación en proyectos de investigación e innovación',
              },
              {
                title: 'Impacto Regional',
                desc: 'Contribución al desarrollo de Tayacaja y Huancavelica',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">{item.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            ¿Listo para empezar tu futuro?
          </h2>
          <p className="text-2xl mb-12 text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Postula ahora a la Universidad Nacional Autónoma de Tayacaja
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admision"
              className="inline-flex items-center justify-center px-10 py-5 bg-secondary-500 text-primary-900 rounded-2xl font-black text-lg hover:bg-secondary-400 transition-all shadow-2xl transform hover:scale-105"
            >
              Proceso de Admisión
            </Link>
            <a
              href="https://admision.unat.edu.pe/2/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary-600 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl transform hover:scale-105"
            >
              Inscríbete Ahora
            </a>
          </div>
        </div>
      </section>
      
      <FooterStanford />
    </main>
  );
}
