'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Carreras from '@/components/Carreras';
import Admision from '@/components/Admision';
import Cronograma from '@/components/Cronograma';
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
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Carreras />
      <Admision />
      <Cronograma />
      <Contact />
      <Footer />
    </main>
  );
}
