import { Metadata } from 'next';
import MegaMenuModerno from '@/components/MegaMenuModerno';
import PageHero from '@/components/PageHero';
import Contact from '@/components/Contact';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import FooterStanford from '@/components/FooterStanford';

export const metadata: Metadata = {
  title: 'Contacto | UNAT',
  description: 'Contáctanos en UNAT. Jr. Bolognesi N° 418, Pampas, Tayacaja, Huancavelica.',
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <MegaMenuModerno />
      <WhatsAppWidget />
      
      <PageHero 
        title="Contáctanos"
        description="Estamos aquí para atender tus consultas y brindarte información"
        imagePath="/images/campus/hero-background.jpg"
        imageAlt="Contacto UNAT"
      />
      
      <Contact />
      <FooterStanford />
    </main>
  );
}
