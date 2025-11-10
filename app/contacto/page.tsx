import { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import MegaMenuPremium from '@/components/MegaMenuPremium';
import Contact from '@/components/Contact';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import FooterStanford from '@/components/FooterStanford';

export const metadata: Metadata = {
  title: 'Contacto | UNAT',
  description: 'Contáctanos en UNAT. Jr. Bolognesi N° 418, Pampas, Tayacaja, Huancavelica.',
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <MegaMenuPremium />
      <WhatsAppWidget />
      <Contact />
      <FooterStanford />
    </main>
  );
}
