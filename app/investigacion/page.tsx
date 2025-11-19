'use client';

import { useState, useEffect } from 'react';
import MegaMenuModerno from '@/components/MegaMenuModerno';
import PageHero from '@/components/PageHero';
import Investigacion from '@/components/Investigacion';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import FooterStanford from '@/components/FooterStanford';

export default function InvestigacionPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <MegaMenuModerno />
      <WhatsAppWidget />
      
      <PageHero 
        title="Investigación e Innovación"
        description="Generamos conocimiento científico y tecnológico para el desarrollo sostenible de la región"
        imagePath="/images/campus/hero-background.jpg"
        imageAlt="Investigación UNAT"
      />
      
      <Investigacion />
      
      <FooterStanford />
    </main>
  );
}
