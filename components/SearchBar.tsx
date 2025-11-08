'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const quickLinks = [
    { title: 'Admisión 2025', href: '#admision', icon: '📝' },
    { title: 'Carreras', href: '#carreras', icon: '🎓' },
    { title: 'Biblioteca', href: '#biblioteca', icon: '📚' },
    { title: 'Calendario', href: '#calendario', icon: '📅' },
  ];

  return (
    <>
      {/* Search Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-72 right-6 z-40 bg-white text-primary-600 p-4 rounded-full shadow-2xl hover:shadow-primary-300/50 border-2 border-primary-200 hover:border-primary-400 transition-all group"
      >
        <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          !
        </span>
      </motion.button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-3xl z-50 px-4"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Search Input */}
                <div className="p-6 border-b border-gray-200">
                  <div className="relative">
                    <svg
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Buscar en UNAT..."
                      autoFocus
                      className="w-full pl-14 pr-4 py-4 text-lg border-none focus:ring-0 outline-none"
                    />
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="p-6">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Enlaces Rápidos
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {quickLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 p-4 rounded-xl hover:bg-primary-50 transition-colors group"
                      >
                        <span className="text-2xl">{link.icon}</span>
                        <span className="font-medium text-gray-700 group-hover:text-primary-600">
                          {link.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span>Presiona</span>
                    <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-semibold">
                      ESC
                    </kbd>
                    <span>para cerrar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Búsqueda avanzada</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
