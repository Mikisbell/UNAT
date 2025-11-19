'use client';

import Link from 'next/link';

export default function TopBar() {
  const topLinks = [
    { name: 'Estudiantes', href: '#estudiantes', icon: '🎓' },
    { name: 'Docentes y Personal', href: '#docentes', icon: '👨‍🏫' },
    { name: 'Familias', href: '#familias', icon: '👨‍👩‍👧‍👦' },
    { name: 'Visitantes', href: '#visitantes', icon: '🗺️' },
    { name: 'Alumni', href: '#alumni', icon: '🌟' },
  ];

  return (
    <div className="bg-primary-900 border-b border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Logo pequeño o texto */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-xs font-semibold text-white hover:text-secondary-400 transition-colors"
            >
              UNIVERSIDAD NACIONAL AUTÓNOMA DE TAYACAJA
            </Link>
          </div>

          {/* Links de la barra superior */}
          <nav className="hidden md:flex items-center space-x-6">
            {topLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-xs font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1"
              >
                <span className="text-sm">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* Botón de búsqueda rápido */}
          <div className="flex items-center gap-3">
            <button className="text-xs text-gray-300 hover:text-white transition-colors hidden lg:block">
              Español
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
