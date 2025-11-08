'use client';

import { useState, useEffect } from 'react';
import MegaMenu from '@/components/MegaMenu';
import HeroStanford from '@/components/HeroStanford';
import SearchBar from '@/components/SearchBar';
import CampusNews from '@/components/CampusNews';
import AcademicExcellence from '@/components/AcademicExcellence';
import FeaturedProfiles from '@/components/FeaturedProfiles';
import Autoridades from '@/components/Autoridades';
import Carreras from '@/components/Carreras';
import Admision from '@/components/Admision';
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
      <SearchBar />
      
      {/* Hero Section - Stanford Style */}
      <HeroStanford />
      
      {/* Campus News Grid */}
      <CampusNews />
      
      {/* Academic Excellence */}
      <AcademicExcellence />
      
      {/* Featured Profiles */}
      <FeaturedProfiles />
      
      {/* Research & Innovation */}
      <section id="investigacion" className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Investigación e Innovación</h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-10">
            UNAT impulsa la investigación científica y la innovación tecnológica para el desarrollo regional y nacional
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-3">Proyectos de Investigación</h3>
              <p className="text-primary-100">Investigaciones que impactan a nuestra región y país</p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Publicaciones Científicas</h3>
              <p className="text-primary-100">Artículos en revistas indexadas de alto impacto</p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3">Innovación Tecnológica</h3>
              <p className="text-primary-100">Soluciones tecnológicas para desafíos regionales</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Authorities - Premium Version */}
      <Autoridades />
      
      {/* Academic Programs */}
      <Carreras />
      
      {/* Admission CTA */}
      <Admision />
      
      {/* Campus Life */}
      <section id="vida-campus" className="py-20 bg-gradient-to-br from-accent-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Vida en el Campus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una experiencia universitaria integral que va más allá del aula
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                Vida Estudiantil
              </h3>
              <p className="text-gray-600 mb-4">Clubes, organizaciones y actividades extracurriculares</p>
              <a href="#estudiantes" className="text-primary-600 font-semibold hover:gap-2 inline-flex items-center">
                Explorar →
              </a>
            </div>
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="text-5xl mb-4">🏃</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                Deportes y Bienestar
              </h3>
              <p className="text-gray-600 mb-4">Instalaciones deportivas y programas de salud</p>
              <a href="#deportes" className="text-primary-600 font-semibold hover:gap-2 inline-flex items-center">
                Explorar →
              </a>
            </div>
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                Arte y Cultura
              </h3>
              <p className="text-gray-600 mb-4">Eventos culturales, teatro, música y más</p>
              <a href="#cultura" className="text-primary-600 font-semibold hover:gap-2 inline-flex items-center">
                Explorar →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact */}
      <Contact />
      
      {/* Footer */}
      <FooterStanford />
    </main>
  );
}
