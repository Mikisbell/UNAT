'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MegaMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: 'Inicio',
      href: '#inicio',
      dropdown: null,
    },
    {
      title: 'Académico',
      href: '#',
      dropdown: [
        {
          category: 'Pregrado',
          links: [
            { title: 'Carreras Profesionales', href: '#carreras', icon: '🎓' },
            { title: 'Plan de Estudios', href: '#plan-estudios', icon: '📚' },
            { title: 'Calendario Académico', href: '#calendario', icon: '📅' },
          ],
        },
        {
          category: 'Gestión',
          links: [
            { 
              title: 'Vicepresidencia Académica', 
              href: 'https://vpa.unat.edu.pe', 
              icon: '🏛️',
              external: true 
            },
          ],
        },
      ],
    },
    {
      title: 'Investigación',
      href: '#',
      dropdown: [
        {
          category: 'Investigación',
          links: [
            { 
              title: 'Vicepresidencia de Investigación', 
              href: 'https://vri.unat.edu.pe', 
              icon: '🔬',
              external: true 
            },
            { title: 'Proyectos Activos', href: '#proyectos', icon: '📊' },
            { title: 'Grupos de Investigación', href: '#grupos', icon: '👥' },
          ],
        },
        {
          category: 'Publicaciones',
          links: [
            { 
              title: 'Revista Llamkasun', 
              href: 'https://llamkasun.unat.edu.pe', 
              icon: '📖',
              external: true 
            },
            { 
              title: 'Revista Tayacaja', 
              href: 'https://revistas.unat.edu.pe', 
              icon: '📚',
              external: true 
            },
            { 
              title: 'Fondo Editorial', 
              href: 'https://fondoeditorial.unat.edu.pe', 
              icon: '📕',
              external: true 
            },
          ],
        },
      ],
    },
    {
      title: 'Admisión',
      href: '#',
      dropdown: [
        {
          category: 'Proceso de Admisión',
          links: [
            { title: 'Admisión 2025-I', href: '#admision', icon: '📝' },
            { title: 'Cronograma', href: '#cronograma', icon: '📅' },
            { title: 'Modalidades', href: '#modalidades', icon: '🎯' },
            { title: 'Vacantes', href: '#vacantes', icon: '👥' },
          ],
        },
        {
          category: 'Documentos',
          links: [
            { title: 'Prospecto 2025', href: '#documentos', icon: '📘' },
            { title: 'Reglamento', href: '#documentos', icon: '📋' },
            { title: 'Inscripción Online', href: '#inscripcion', icon: '💻' },
          ],
        },
      ],
    },
    {
      title: 'Universidad',
      href: '#',
      dropdown: [
        {
          category: 'Sobre UNAT',
          links: [
            { title: 'Nosotros', href: '#nosotros', icon: '📖' },
            { title: 'Autoridades', href: '#autoridades', icon: '👥' },
            { title: 'Historia', href: '#nosotros', icon: '📜' },
            { 
              title: 'Portal GOB UNAT', 
              href: 'https://unat.edu.pe', 
              icon: '🌐',
              external: true 
            },
          ],
        },
        {
          category: 'Contacto',
          links: [
            { title: 'Contacto', href: '#contacto', icon: '📞' },
            { title: 'Ubicación', href: '#contacto', icon: '📍' },
            { title: 'Transparencia', href: '#transparencia', icon: '🔍' },
          ],
        },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-lg shadow-xl'
          : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-16 w-auto transform group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logos/logo.png"
                alt="Universidad Nacional Autónoma de Tayacaja - UNAT"
                width={180}
                height={64}
                priority
                className="h-16 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button className="px-4 py-2 text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200 flex items-center space-x-1">
                    <span>{item.title}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                )}

                {/* Dropdown Mega Menu */}
                {item.dropdown && activeDropdown === item.title && (
                  <div className="absolute left-0 mt-2 w-screen max-w-md bg-white rounded-xl shadow-2xl border border-gray-100 py-6 px-8 animate-fade-in">
                    <div className="grid gap-8">
                      {item.dropdown.map((category, catIndex) => (
                        <div key={catIndex}>
                          <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                            {category.category}
                          </h3>
                          <div className="space-y-2">
                            {category.links.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.href}
                                target={link.external ? '_blank' : undefined}
                                rel={link.external ? 'noopener noreferrer' : undefined}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary-50 transition-colors duration-200 group"
                              >
                                <span className="text-2xl">{link.icon}</span>
                                <div className="flex-1">
                                  <span className="text-gray-700 group-hover:text-primary-600 font-medium">
                                    {link.title}
                                  </span>
                                  {link.external && (
                                    <span className="ml-1 text-xs text-gray-400">↗</span>
                                  )}
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#admision"
              className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Postular Ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 animate-slide-down">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <div key={index} className="space-y-2">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.title ? null : item.title
                        )
                      }
                      className="w-full text-left px-4 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 flex items-center justify-between"
                    >
                      <span>{item.title}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.title ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    {activeDropdown === item.title && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((category, catIndex) => (
                          <div key={catIndex} className="space-y-1">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider px-4 py-2">
                              {category.category}
                            </p>
                            {category.links.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.href}
                                target={link.external ? '_blank' : undefined}
                                rel={link.external ? 'noopener noreferrer' : undefined}
                                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                              >
                                <span>{link.icon}</span>
                                <span className="text-sm">{link.title}</span>
                                {link.external && (
                                  <span className="text-xs text-gray-400">↗</span>
                                )}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gray-50"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
            <a
              href="#admision"
              className="block w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center font-semibold rounded-lg"
            >
              Postular Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
