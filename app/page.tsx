'use client';

import { useState, useEffect } from 'react';
import TopBar from '@/components/TopBar';
import MegaMenuPremium from '@/components/MegaMenuPremium';
import AdmisionBanner from '@/components/AdmisionBanner';
import HeroAdmision from '@/components/HeroAdmision';
import ComoPostular from '@/components/ComoPostular';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SearchBar from '@/components/SearchBar';
import StatsCounter from '@/components/StatsCounter';
import CampusGallery from '@/components/CampusGallery';
import TestimoniosVideo from '@/components/TestimoniosVideo';
import CampusNews from '@/components/CampusNews';
import AcademicExcellence from '@/components/AcademicExcellence';
import Carreras from '@/components/Carreras';
import Autoridades from '@/components/Autoridades';
import Contact from '@/components/Contact';
import FooterStanford from '@/components/FooterStanford';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white">
      {/* Top Bar - Estilo Stanford */}
      <TopBar />
      
      {/* Main Menu */}
      <MegaMenuPremium />
      
      {/* Banner de Admisión Sticky */}
      <AdmisionBanner />
      
      {/* Search Bar Flotante */}
      <SearchBar />
      
      {/* WhatsApp Widget Flotante */}
      <WhatsAppWidget />
      
      {/* Hero Section - Enfocado en Admisión */}
      <HeroAdmision />
      
      {/* Cómo Postular - Proceso Paso a Paso */}
      <ComoPostular />
      
      {/* Stats Counter - Números que impresionan */}
      <StatsCounter />
      
      {/* Carreras Profesionales */}
      <Carreras />
      
      {/* Academic Excellence */}
      <AcademicExcellence />
      
      {/* Campus Gallery - Galería Visual */}
      <CampusGallery />
      
      {/* Testimonios en Video */}
      <TestimoniosVideo />
      
      {/* Campus News - Noticias y Eventos */}
      <CampusNews />
      
      {/* Autoridades */}
      <Autoridades />
      
      {/* Contact */}
      <Contact />
      
      {/* Footer */}
      <FooterStanford />
    </main>
  );
}
