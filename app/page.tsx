'use client';

import { useState, useEffect } from 'react';
import MegaMenu from '@/components/MegaMenu';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Autoridades from '@/components/Autoridades';
import Carreras from '@/components/Carreras';
import Admision from '@/components/Admision';
import Cronograma from '@/components/Cronograma';
import Documentos from '@/components/Documentos';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white">
      <MegaMenu />
      <Hero />
      <Stats />
      <About />
      <Autoridades />
      <Carreras />
      <Admision />
      <Cronograma />
      <Documentos />
      <Contact />
      <Footer />
    </main>
  );
}
