'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import MegaMenuModerno from './MegaMenuModerno';
import { ChevronDown } from 'lucide-react';

export default function HeroWithMenu() {
  // Countdown hasta 30 de Marzo 2026 - Extraordinaria
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  const [exploraOpen, setExploraOpen] = useState(false);
  const [modalReglamentosOpen, setModalReglamentosOpen] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2026-03-30T23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (exploraOpen && !(e.target as Element).closest('.explora-dropdown-container')) {
        setExploraOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [exploraOpen]);

  return (
    <div 
      className="relative h-screen"
      style={{
        backgroundImage: 'url(/images/campus/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Nota: Altura del nav ahora es 112px (48px top bar + 64px main nav) */}
      {/* Overlay minimalista */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Menú - Posición absoluta arriba */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <MegaMenuModerno />
      </div>

      {/* OPCIÓN 3: Banner Lateral Izquierdo - Compacto y Expandible */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-40 group">
        <div className="bg-primary-900 text-white rounded-r-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)] p-3 transition-all duration-700 ease-out w-[260px] hover:w-[550px]">
          <div className="space-y-2.5">
            {/* Imagen del banner - más compacta */}
            <div className="relative w-full h-28 hover:h-36 rounded-lg overflow-hidden transition-all duration-700">
              <Image
                src="/images/Students/Estudiantes_2.png"
                alt="Admisión UNAT 2026"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Título principal */}
            <div className="text-center">
              <div className="text-xl font-black text-white">ADMISIÓN 2026</div>
            </div>
            
            {/* Fechas - Diseño compacto */}
            <div className="bg-white rounded-lg p-3 shadow-md relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Modalidad Extraordinaria */}
                <div className="text-center">
                  <div className="text-amber-500 text-xs font-bold mb-1">MODALIDAD</div>
                  <div className="text-black text-xs font-bold mb-1">EXTRAORDINARIO</div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-primary-900 text-sm font-bold">DOM.</span>
                    <span className="text-amber-500 text-4xl font-black">30</span>
                  </div>
                  <div className="text-gray-500 text-xs font-semibold mb-2">MARZO</div>
                  {/* Botón Google Calendar */}
                  <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Examen+Admisi%C3%B3n+UNAT+2026+-+Extraordinaria&dates=20260330T100000/20260330T130000&details=Examen+de+Admisi%C3%B3n+Modalidad+Extraordinaria+-+Universidad+Nacional+Aut%C3%B3noma+de+Tayacaja&location=UNAT+-+Pampas,+Tayacaja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-primary-900 hover:text-amber-500 transition"
                  >
                    📅 Agregar
                  </a>
                </div>
                
                {/* Modalidad Ordinaria */}
                <div className="text-center">
                  <div className="text-amber-500 text-xs font-bold mb-1">MODALIDAD</div>
                  <div className="text-black text-xs font-bold mb-1 tracking-widest">ORDINARIO</div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-primary-900 text-sm font-bold">DOM.</span>
                    <span className="text-amber-500 text-4xl font-black">06</span>
                  </div>
                  <div className="text-gray-500 text-xs font-semibold mb-2">ABRIL</div>
                  {/* Botón Google Calendar */}
                  <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Examen+Admisi%C3%B3n+UNAT+2026+-+Ordinaria&dates=20260406T100000/20260406T130000&details=Examen+de+Admisi%C3%B3n+Modalidad+Ordinaria+-+Universidad+Nacional+Aut%C3%B3noma+de+Tayacaja&location=UNAT+-+Pampas,+Tayacaja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-primary-900 hover:text-amber-500 transition"
                  >
                    📅 Agregar
                  </a>
                </div>
              </div>
              {/* Línea separadora central */}
              <div className="absolute top-4 bottom-4 left-1/2 transform -translate-x-1/2 w-px bg-gray-300"></div>
            </div>
            
            {/* Countdown compacto */}
            <div className="text-center">
              <div className="text-white text-xs font-semibold mb-1">⏰ QUEDAN:</div>
              <div className="flex justify-center space-x-1 text-xs">
                <span className="bg-amber-400 text-primary-900 px-1.5 py-1 rounded font-bold">{timeLeft.days}d</span>
                <span className="bg-amber-400 text-primary-900 px-1.5 py-1 rounded font-bold">{timeLeft.hours}h</span>
                <span className="bg-amber-400 text-primary-900 px-1.5 py-1 rounded font-bold">{timeLeft.minutes}m</span>
              </div>
            </div>
            
            <Link
              href="https://admision.unat.edu.pe/2/"
              target="_blank"
              className="block w-full text-center bg-amber-400 text-primary-900 rounded py-2 text-sm font-bold hover:bg-amber-300 transition"
            >
              POSTULAR
            </Link>
            
            {/* Botón Ver Reglamentos - Llamativo con brillo */}
            <button
              onClick={() => setModalReglamentosOpen(true)}
              className="relative w-full text-center bg-gradient-to-r from-amber-400 to-amber-500 text-primary-900 rounded-lg py-3 text-sm font-bold hover:from-amber-300 hover:to-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-amber-600 overflow-hidden group"
            >
              <span className="relative z-10">📄 Ver Reglamentos 2025-I</span>
              {/* Efecto de brillo */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Modal Reglamentos - Versión Ligera */}
      {modalReglamentosOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" onClick={() => setModalReglamentosOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-primary-900">📄 Reglamentos de Admisión</h3>
              <button 
                onClick={() => setModalReglamentosOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-3xl leading-none transition"
              >
                ×
              </button>
            </div>
            
            <p className="text-gray-600 mb-8">
              Consulta los reglamentos oficiales del proceso de admisión 2025-I
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Tarjeta Ordinario */}
              <div className="border-2 border-primary-900 rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary-900 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                    📄
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-lg">Modalidad Ordinaria</h4>
                    <p className="text-sm text-gray-500">2025-I</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>📋</span>
                    <span>15 páginas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>📅</span>
                    <span>Actualizado Nov 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>✅</span>
                    <span>Descarga gratuita</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href="https://admision.unat.edu.pe/2/pdf/consideraciones-ordinario-2025-I.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary-900 text-white rounded-lg py-3 px-4 text-center font-semibold hover:bg-primary-800 transition"
                  >
                    👁️ Ver PDF
                  </a>
                  <a
                    href="https://admision.unat.edu.pe/2/pdf/consideraciones-ordinario-2025-I.pdf"
                    download
                    className="block w-full bg-gray-100 text-primary-900 rounded-lg py-3 px-4 text-center font-semibold hover:bg-gray-200 transition"
                  >
                    ⬇️ Descargar
                  </a>
                </div>
              </div>
              
              {/* Tarjeta Otras Modalidades */}
              <div className="border-2 border-amber-500 rounded-xl p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                    📄
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-600 text-lg">Otras Modalidades</h4>
                    <p className="text-sm text-gray-500">2025-I</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>📋</span>
                    <span>12 páginas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>📅</span>
                    <span>Actualizado Nov 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>✅</span>
                    <span>Descarga gratuita</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href="https://admision.unat.edu.pe/2/pdf/consideraciones-otras-modalidades-2025-I.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-amber-500 text-white rounded-lg py-3 px-4 text-center font-semibold hover:bg-amber-400 transition"
                  >
                    👁️ Ver PDF
                  </a>
                  <a
                    href="https://admision.unat.edu.pe/2/pdf/consideraciones-otras-modalidades-2025-I.pdf"
                    download
                    className="block w-full bg-gray-100 text-amber-600 rounded-lg py-3 px-4 text-center font-semibold hover:bg-gray-200 transition"
                  >
                    ⬇️ Descargar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contenido Hero - Layout Stanford con título centrado */}
      <div className="absolute inset-0 z-10 flex flex-col">
        {/* Espaciador superior flexible */}
        <div className="flex-1"></div>
        
        {/* Título - Centrado vertical y horizontal - Fuente condensada profesional */}
        <div className="px-4 text-center">
          <h1 className="text-7xl md:text-8xl lg:text-[8rem] xl:text-[9.6rem] font-bold text-white tracking-tight leading-none mb-6" style={{ fontFamily: 'var(--font-oswald), "Arial Narrow", "Helvetica Condensed", sans-serif', fontWeight: 700, textShadow: '4px 4px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7)' }}>
            UNAT
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 font-light tracking-wide" style={{ fontFamily: 'var(--font-source-sans), system-ui, -apple-system, sans-serif', textShadow: '2px 2px 10px rgba(0,0,0,0.8)' }}>
            Universidad Nacional Autónoma de Tayacaja
          </p>
        </div>
        
        {/* Espaciador inferior flexible */}
        <div className="flex-1"></div>

        {/* Barra "Explora UNAT" - Pegada al fondo */}
        <div className="w-full relative explora-dropdown-container mt-auto">
          <button
            onClick={() => setExploraOpen(!exploraOpen)}
            className="w-full bg-primary-900 hover:bg-primary-800 text-white py-4 px-6 flex items-center justify-center gap-2 transition-all duration-300 text-lg font-semibold"
          >
            <span>Explora UNAT</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${exploraOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {exploraOpen && (
            <div className="absolute bottom-full left-0 right-0 bg-white shadow-2xl border-t-4 border-amber-400 z-50 transition-all duration-300">
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Académico */}
                  <div>
                    <h3 className="text-primary-900 font-bold text-lg mb-3 border-b-2 border-amber-400 pb-2">Académico</h3>
                    <ul className="space-y-2">
                      <li><Link href="/carreras" className="text-gray-700 hover:text-primary-600 transition">Carreras Profesionales</Link></li>
                      <li><Link href="/pregrado" className="text-gray-700 hover:text-primary-600 transition">Pregrado</Link></li>
                      <li><Link href="/posgrado" className="text-gray-700 hover:text-primary-600 transition">Posgrado</Link></li>
                      <li><Link href="/calendario" className="text-gray-700 hover:text-primary-600 transition">Calendario Académico</Link></li>
                    </ul>
                  </div>

                  {/* Admisión */}
                  <div>
                    <h3 className="text-primary-900 font-bold text-lg mb-3 border-b-2 border-amber-400 pb-2">Admisión</h3>
                    <ul className="space-y-2">
                      <li><Link href="https://admision.unat.edu.pe/2/" className="text-gray-700 hover:text-primary-600 transition">Proceso de Admisión</Link></li>
                      <li><Link href="/modalidades" className="text-gray-700 hover:text-primary-600 transition">Modalidades</Link></li>
                      <li>
                        <a 
                          href="https://admision.unat.edu.pe/2/pdf/consideraciones-ordinario-2025-I.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-primary-600 transition flex items-center gap-1"
                        >
                          📄 Reglamento Ordinario 2025-I
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://admision.unat.edu.pe/2/pdf/consideraciones-otras-modalidades-2025-I.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-primary-600 transition flex items-center gap-1"
                        >
                          📄 Reglamento Otras Modalidades
                        </a>
                      </li>
                      <li><Link href="/cronograma" className="text-gray-700 hover:text-primary-600 transition">Cronograma</Link></li>
                      <li><Link href="/requisitos" className="text-gray-700 hover:text-primary-600 transition">Requisitos</Link></li>
                    </ul>
                  </div>

                  {/* Investigación */}
                  <div>
                    <h3 className="text-primary-900 font-bold text-lg mb-3 border-b-2 border-amber-400 pb-2">Investigación</h3>
                    <ul className="space-y-2">
                      <li><Link href="/investigacion" className="text-gray-700 hover:text-primary-600 transition">Proyectos</Link></li>
                      <li><Link href="/publicaciones" className="text-gray-700 hover:text-primary-600 transition">Publicaciones</Link></li>
                      <li><Link href="/institutos" className="text-gray-700 hover:text-primary-600 transition">Institutos</Link></li>
                      <li><Link href="/repositorio" className="text-gray-700 hover:text-primary-600 transition">Repositorio</Link></li>
                    </ul>
                  </div>

                  {/* Campus */}
                  <div>
                    <h3 className="text-primary-900 font-bold text-lg mb-3 border-b-2 border-amber-400 pb-2">Campus</h3>
                    <ul className="space-y-2">
                      <li><Link href="/vida-universitaria" className="text-gray-700 hover:text-primary-600 transition">Vida Universitaria</Link></li>
                      <li><Link href="/servicios" className="text-gray-700 hover:text-primary-600 transition">Servicios</Link></li>
                      <li><Link href="/biblioteca" className="text-gray-700 hover:text-primary-600 transition">Biblioteca</Link></li>
                      <li><Link href="/instalaciones" className="text-gray-700 hover:text-primary-600 transition">Instalaciones</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
