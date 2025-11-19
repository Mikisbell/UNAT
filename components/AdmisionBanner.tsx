'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function AdmisionBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Fecha del examen de admisión (ajustar según fecha real)
  const examDate = new Date('2025-02-15T10:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = examDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [examDate]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        className="fixed top-[120px] left-0 right-0 z-30 bg-gradient-to-r from-secondary-500 via-secondary-600 to-secondary-500 text-primary-900 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Mensaje principal */}
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="hidden md:block text-3xl animate-pulse">⏰</div>
              <div>
                <p className="font-black text-lg md:text-xl">
                  ADMISIÓN 2025-I ABIERTA
                </p>
                <p className="text-sm font-semibold">
                  Inscripciones hasta el 30 de Enero • Universidad Pública GRATUITA
                </p>
              </div>
            </div>

            {/* Contador regresivo */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 bg-primary-900 text-white px-4 py-2 rounded-lg">
                <span className="text-xs font-bold">EXAMEN EN:</span>
                <div className="flex gap-2">
                  <div className="text-center">
                    <div className="text-xl font-black">{timeLeft.days}</div>
                    <div className="text-xs">días</div>
                  </div>
                  <div className="text-xl font-black">:</div>
                  <div className="text-center">
                    <div className="text-xl font-black">{timeLeft.hours}</div>
                    <div className="text-xs">hrs</div>
                  </div>
                  <div className="text-xl font-black">:</div>
                  <div className="text-center">
                    <div className="text-xl font-black">{timeLeft.minutes}</div>
                    <div className="text-xs">min</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="https://admision.unat.edu.pe/2/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary-900 text-white px-6 py-3 rounded-lg font-black text-sm hover:bg-primary-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              >
                <span>INSCRÍBETE GRATIS</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="text-primary-900 hover:text-primary-950 transition-colors"
                aria-label="Cerrar banner"
              >
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
