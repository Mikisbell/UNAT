'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface SubLink {
  title: string;
  description?: string;
  href: string;
  icon?: string;
  external?: boolean;
  badge?: string;
}

interface DropdownCategory {
  category: string;
  description?: string;
  links: SubLink[];
}

interface MenuItem {
  title: string;
  href: string;
  dropdown?: DropdownCategory[];
}

export default function MegaMenuPremium() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuItem[] = [
    {
      title: 'Académico',
      href: '#',
      dropdown: [
        {
          category: 'Programas',
          description: 'Explora nuestra oferta académica',
          links: [
            { 
              title: 'Carreras Profesionales', 
              description: '5 carreras de pregrado',
              href: '#carreras', 
              icon: '🎓' 
            },
            { 
              title: 'Educación de Posgrado', 
              description: 'Maestrías y especializaciones',
              href: '#posgrado', 
              icon: '📚' 
            },
            { 
              title: 'Calendario Académico', 
              description: 'Fechas importantes 2025',
              href: '#calendario', 
              icon: '📅' 
            },
          ],
        },
        {
          category: 'Recursos',
          links: [
            { 
              title: 'Biblioteca Digital', 
              description: 'Acceso a recursos académicos',
              href: '#biblioteca', 
              icon: '📖' 
            },
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
          description: 'Innovación y descubrimiento',
          links: [
            { 
              title: 'Proyectos de Investigación', 
              description: 'Investigaciones en curso',
              href: '#investigacion', 
              icon: '🔬' 
            },
            { 
              title: 'Grupos de Investigación', 
              description: 'Equipos multidisciplinarios',
              href: '#grupos', 
              icon: '👥' 
            },
            { 
              title: 'Vicepresidencia de Investigación', 
              href: 'https://vri.unat.edu.pe', 
              icon: '🏆',
              external: true 
            },
          ],
        },
        {
          category: 'Publicaciones',
          description: 'Conocimiento compartido',
          links: [
            { 
              title: 'Revista Llamkasun', 
              description: 'Revista científica indexada',
              href: 'https://llamkasun.unat.edu.pe', 
              icon: '📄',
              external: true 
            },
            { 
              title: 'Fondo Editorial', 
              description: 'Libros y publicaciones',
              href: 'https://fondoeditorial.unat.edu.pe', 
              icon: '📚',
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
          category: 'Proceso de Admisión 2025',
          description: 'Tu futuro comienza aquí',
          links: [
            { 
              title: 'Admisión 2025-I', 
              description: 'Proceso ordinario',
              href: '#admision', 
              icon: '📝',
              badge: 'Abierto' 
            },
            { 
              title: 'Cronograma', 
              description: 'Fechas importantes',
              href: '#cronograma', 
              icon: '📅' 
            },
            { 
              title: 'Modalidades', 
              description: 'Diferentes vías de ingreso',
              href: '#modalidades', 
              icon: '🎯' 
            },
            { 
              title: 'Vacantes por Carrera', 
              description: 'Cupos disponibles',
              href: '#vacantes', 
              icon: '👥' 
            },
          ],
        },
        {
          category: 'Documentación',
          links: [
            { 
              title: 'Prospecto 2025', 
              description: 'Guía completa de admisión',
              href: '#documentos', 
              icon: '📘' 
            },
            { 
              title: 'Inscripción Online', 
              description: 'Portal de postulantes',
              href: 'https://admision.unat.edu.pe/2/', 
              icon: '💻',
              external: true 
            },
          ],
        },
      ],
    },
    {
      title: 'Campus',
      href: '#',
      dropdown: [
        {
          category: 'Vida Universitaria',
          description: 'Más que solo clases',
          links: [
            { 
              title: 'Vida Estudiantil', 
              description: 'Clubes y organizaciones',
              href: '#vida-campus', 
              icon: '🎯' 
            },
            { 
              title: 'Deportes y Recreación', 
              description: 'Instalaciones deportivas',
              href: '#deportes', 
              icon: '⚽' 
            },
            { 
              title: 'Arte y Cultura', 
              description: 'Eventos culturales',
              href: '#cultura', 
              icon: '🎨' 
            },
          ],
        },
        {
          category: 'Servicios',
          links: [
            { 
              title: 'Servicios Estudiantiles', 
              description: 'Apoyo integral',
              href: '#servicios', 
              icon: '🎓' 
            },
            { 
              title: 'Alumni', 
              description: 'Red de egresados',
              href: '#alumni', 
              icon: '🌟' 
            },
          ],
        },
      ],
    },
    {
      title: 'Acerca de UNAT',
      href: '#',
      dropdown: [
        {
          category: 'Universidad',
          description: 'Conoce nuestra institución',
          links: [
            { 
              title: 'Nuestra Historia', 
              description: 'Legado y tradición',
              href: '#historia', 
              icon: '📜' 
            },
            { 
              title: 'Autoridades', 
              description: 'Comisión organizadora',
              href: '#autoridades', 
              icon: '👥' 
            },
            { 
              title: 'Misión y Visión', 
              description: 'Nuestro compromiso',
              href: '#mision', 
              icon: '🎯' 
            },
          ],
        },
        {
          category: 'Contacto',
          links: [
            { 
              title: 'Ubicación', 
              description: 'Pampas, Tayacaja',
              href: '#contacto', 
              icon: '📍' 
            },
            { 
              title: 'Portal Principal', 
              href: 'https://unat.edu.pe', 
              icon: '🌐',
              external: true 
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-10 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100'
            : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative h-16 w-auto"
              >
                <Image
                  src="/images/logos/logo.png"
                  alt="Universidad Nacional Autónoma de Tayacaja - UNAT"
                  width={180}
                  height={64}
                  priority
                  className="h-16 w-auto object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="px-5 py-2 text-gray-700 hover:text-primary-600 font-semibold transition-all duration-200 flex items-center gap-2 rounded-lg hover:bg-gray-50 group">
                    <span>{item.title}</span>
                    {item.dropdown && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.title ? 'rotate-180 text-primary-600' : ''
                        }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7"></path>
                      </svg>
                    )}
                  </button>

                  {/* Dropdown Mega Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        <div className="p-8">
                          <div className="grid grid-cols-2 gap-8">
                            {item.dropdown.map((category, catIndex) => (
                              <div key={catIndex}>
                                <div className="mb-4">
                                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">
                                    {category.category}
                                  </h3>
                                  {category.description && (
                                    <p className="text-xs text-gray-500">{category.description}</p>
                                  )}
                                </div>
                                <div className="space-y-1">
                                  {category.links.map((link, linkIndex) => (
                                    <Link
                                      key={linkIndex}
                                      href={link.href}
                                      target={link.external ? '_blank' : undefined}
                                      rel={link.external ? 'noopener noreferrer' : undefined}
                                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 transition-all duration-200"
                                    >
                                      <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                        {link.icon}
                                      </span>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                            {link.title}
                                          </span>
                                          {link.badge && (
                                            <span className="px-2 py-0.5 bg-secondary-500 text-white text-xs font-bold rounded-full">
                                              {link.badge}
                                            </span>
                                          )}
                                          {link.external && (
                                            <svg className="w-3 h-3 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                          )}
                                        </div>
                                        {link.description && (
                                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                                            {link.description}
                                          </p>
                                        )}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Bottom Bar with CTA */}
                        <div className="bg-gradient-to-r from-gray-50 to-accent-50 px-8 py-4 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-semibold text-gray-900">¿Necesitas ayuda?</p>
                              <p className="text-xs text-gray-600">Contáctanos: +51 067 453016</p>
                            </div>
                            <Link
                              href="#contacto"
                              className="px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                            >
                              Contactar
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="https://admision.unat.edu.pe/2/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <span>Postular Ahora</span>
                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
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
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 space-y-3 max-h-[70vh] overflow-y-auto">
                {menuItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.title ? null : item.title)
                      }
                      className="w-full text-left px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 flex items-center justify-between transition-colors"
                    >
                      <span>{item.title}</span>
                      {item.dropdown && (
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
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
                      )}
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.title && item.dropdown && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 space-y-3 overflow-hidden"
                        >
                          {item.dropdown.map((category, catIndex) => (
                            <div key={catIndex} className="space-y-2">
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider px-4">
                                {category.category}
                              </p>
                              {category.links.map((link, linkIndex) => (
                                <Link
                                  key={linkIndex}
                                  href={link.href}
                                  target={link.external ? '_blank' : undefined}
                                  rel={link.external ? 'noopener noreferrer' : undefined}
                                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                                >
                                  <span className="text-xl">{link.icon}</span>
                                  <div className="flex-1">
                                    <span className="text-sm font-medium">{link.title}</span>
                                    {link.description && (
                                      <p className="text-xs text-gray-500">{link.description}</p>
                                    )}
                                  </div>
                                  {link.external && (
                                    <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  )}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                <Link
                  href="https://admision.unat.edu.pe/2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center font-bold rounded-xl mt-4"
                >
                  Postular Ahora
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-30" />
    </>
  );
}
