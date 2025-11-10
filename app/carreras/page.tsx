import { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import MegaMenuPremium from '@/components/MegaMenuPremium';
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
    <main className="min-h-screen bg-white">
      <TopBar />
      <MegaMenuPremium />
      <WhatsAppWidget />
      
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-secondary-500 via-secondary-600 to-secondary-700 text-primary-900 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Carreras Profesionales
          </h1>
          <p className="text-2xl md:text-3xl max-w-4xl mx-auto">
            Descubre tu futuro profesional en UNAT
          </p>
          <p className="text-xl mt-6 max-w-3xl mx-auto opacity-90">
            Formación de calidad, gratuita y con proyección nacional
          </p>
        </div>
      </section>
      
      {/* Carreras Grid */}
      <Carreras />
      
      {/* Por qué estudiar en UNAT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué estudiar en UNAT?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Educación Gratuita',
                desc: 'Universidad pública 100% gratuita con educación de calidad',
              },
              {
                icon: '👨‍🏫',
                title: 'Docentes Calificados',
                desc: 'Profesionales con amplia experiencia y formación continua',
              },
              {
                icon: '🏢',
                title: 'Infraestructura Moderna',
                desc: 'Laboratorios, bibliotecas y espacios equipados',
              },
              {
                icon: '💼',
                title: 'Alta Empleabilidad',
                desc: 'Nuestros egresados tienen 90% de inserción laboral',
              },
              {
                icon: '🔬',
                title: 'Investigación',
                desc: 'Participación en proyectos de investigación e innovación',
              },
              {
                icon: '🌍',
                title: 'Impacto Regional',
                desc: 'Contribución al desarrollo de Tayacaja y Huancavelica',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para empezar tu futuro?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Postula ahora a la Universidad Nacional Autónoma de Tayacaja
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admision"
              className="bg-secondary-500 text-primary-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-400 transition-colors"
            >
              Proceso de Admisión
            </Link>
            <a
              href="https://admision.unat.edu.pe/2/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
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
