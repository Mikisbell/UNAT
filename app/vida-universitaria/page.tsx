'use client';

import { useState, useEffect } from 'react';
import MegaMenuModerno from '@/components/MegaMenuModerno';
import PageHero from '@/components/PageHero';
import Eventos from '@/components/Eventos';
import CampusGallery from '@/components/CampusGallery';
import TestimoniosVideo from '@/components/TestimoniosVideo';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import FooterStanford from '@/components/FooterStanford';

export default function VidaUniversitariaPage() {
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
        title="Vida Universitaria"
        description="Más que clases: cultura, deporte y experiencias que transforman"
        imagePath="/images/campus/hero-background.jpg"
        imageAlt="Campus UNAT"
      />
      
      <Eventos />
      <CampusGallery />
      <TestimoniosVideo />
      
      <FooterStanford />
    </main>
  );
}
