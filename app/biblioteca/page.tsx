'use client';

import { useState, useEffect } from 'react';
import MegaMenuModerno from '@/components/MegaMenuModerno';
import PageHero from '@/components/PageHero';
import Biblioteca from '@/components/Biblioteca';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import FooterStanford from '@/components/FooterStanford';

export default function BibliotecaPage() {
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
        title="Biblioteca Institucional"
        description="Centro de recursos académicos y científicos al servicio de la comunidad universitaria"
        imagePath="/images/campus/hero-background.jpg"
        imageAlt="Biblioteca UNAT"
      />
      
      <Biblioteca />
      
      <FooterStanford />
    </main>
  );
}
