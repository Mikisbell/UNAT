'use client';

import { useState, useEffect } from 'react';
import MegaMenuModerno from '@/components/MegaMenuModerno';
import PageHero from '@/components/PageHero';
import Alumni from '@/components/Alumni';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import FooterStanford from '@/components/FooterStanford';

export default function EgresadosPage() {
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
        title="Red de Egresados UNAT"
        description="Unidos por la excelencia académica y el compromiso con nuestra región"
        imagePath="/images/campus/hero-background.jpg"
        imageAlt="Egresados UNAT"
      />
      
      <Alumni />
      
      <FooterStanford />
    </main>
  );
}
