'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';

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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Top bar links estilo Stanford
  const topBarLinks = [
    { title: 'Estudiantes', href: '#estudiantes' },
    { title: 'Docentes', href: '#docentes' },
    { title: 'Familias', href: '#familias' },
    { title: 'Visitantes', href: '#visitantes' },
    { title: 'Alumni', href: '/egresados' },
  ];

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
              href: '/carreras', 
              icon: '🎓' 
            },
            { 
              title: 'Educación de Posgrado', 
              description: 'Maestrías y especializaciones',
              href: '/posgrado', 
              icon: '📚' 
            },
            { 
              title: 'Calendario Académico', 
              description: 'Fechas importantes 2025',
              href: '/nosotros#calendario', 
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
              href: '/biblioteca', 
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
              href: '/investigacion', 
              icon: '🔬' 
            },
            { 
              title: 'Grupos de Investigación', 
              description: 'Equipos multidisciplinarios',
              href: '/investigacion#grupos', 
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
              href: '/admision', 
              icon: '📝',
              badge: 'Abierto' 
            },
            { 
              title: 'Cronograma', 
              description: 'Fechas importantes',
              href: '/admision#cronograma', 
              icon: '📅' 
            },
            { 
              title: 'Modalidades', 
              description: 'Diferentes vías de ingreso',
              href: '/admision#modalidades', 
              icon: '🎯' 
            },
            { 
              title: 'Vacantes por Carrera', 
              description: 'Cupos disponibles',
              href: '/admision#vacantes', 
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
              href: '/admision#documentos', 
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
              href: '/vida-universitaria', 
              icon: '🎯' 
            },
            { 
              title: 'Deportes y Recreación', 
              description: 'Instalaciones deportivas',
              href: '/vida-universitaria#deportes', 
              icon: '⚽' 
            },
            { 
              title: 'Arte y Cultura', 
              description: 'Eventos culturales',
              href: '/vida-universitaria#cultura', 
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
              href: '/vida-universitaria#servicios', 
              icon: '🎓' 
            },
            { 
              title: 'Alumni', 
              description: 'Red de egresados',
              href: '/egresados', 
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
              href: '/nosotros', 
              icon: '📜' 
            },
            { 
              title: 'Autoridades', 
              description: 'Comisión organizadora',
              href: '/nosotros#autoridades', 
              icon: '👥' 
            },
            { 
              title: 'Misión y Visión', 
              description: 'Nuestro compromiso',
              href: '/nosotros#mision', 
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
              href: '/contacto', 
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
      {/* Container Principal - Efecto Stanford */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-transparent'
        }`}
        style={{ 
          top: 0,
          margin: 0, 
          padding: 0, 
          border: 'none',
          boxShadow: isScrolled ? undefined : 'none',
          outline: 'none'
        }}
      >
        {/* Top Bar - Information for: Students, Faculty... */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isScrolled
              ? 'h-12 border-b border-primary-800 bg-primary-900'
              : 'h-0 border-b-0 bg-transparent'
          }`}
          style={{ margin: 0, padding: 0, borderTop: 0 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-end h-12">
              {/* Top Links - Mayor tamaño */}
              <div className="hidden lg:flex items-center space-x-1">
                <span className="text-sm font-medium mr-2 text-white/90 transition-colors duration-500">
                  Información para:
                </span>
                {topBarLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="px-3 py-1.5 text-sm font-medium text-white hover:text-white/80 transition-colors duration-500 hover:underline"
                  >
                    {link.title}
                  </Link>
                ))}
                
                {/* Search Icon */}
                <button className="ml-2 p-1.5 rounded-full text-white hover:bg-white/10 transition-all duration-500">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="relative bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="flex items-center justify-between h-16">
              {/* Logo UNAT - Ajustado */}
              <Link href="/" className="flex justify-start items-center h-full">
                <div 
                  className={`relative transition-all duration-500 ${
                    isScrolled ? 'w-60' : 'w-[600px]'
                  }`} 
                  style={{ height: '100%' }}
                >
                  <Image
                    src={isScrolled ? "/images/logos/logo-gindo.png" : "/images/logos/logo-blanco.png"}
                    alt="UNAT - Universidad Nacional Autónoma de Tayacaja Daniel Hernández Morillo"
                    fill
                    className="object-contain transition-opacity duration-500"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Main Menu - Derecha */}
              <div className="hidden lg:flex items-center space-x-0">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button 
                      className={`px-3 py-2 text-[15px] font-normal transition-all duration-500 flex items-center gap-1 ${
                        isScrolled
                          ? 'text-gray-900 hover:text-primary-600'
                          : 'text-white hover:text-white/80'
                      }`}
                    >
                      {item.title}
                      {item.dropdown && (
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                          activeDropdown === item.title ? 'rotate-180' : ''
                        }`} />
                      )}
                    </button>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-2 w-[600px] bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden"
                        >
                          <div className="p-8">
                            <div className="grid grid-cols-2 gap-8">
                              {item.dropdown.map((category, catIndex) => (
                                <div key={catIndex}>
                                  <div className="mb-4">
                                    <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">
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
                                        className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-primary-50 transition-all duration-200"
                                      >
                                        <span className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
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
                                            <p className="text-xs text-gray-500 mt-0.5">
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-500 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
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
                        className="w-full text-left px-4 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 flex items-center justify-between transition-colors"
                      >
                        <span>{item.title}</span>
                        {item.dropdown && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === item.title ? 'rotate-180' : ''
                            }`}
                          />
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
      </header>
    </>
  );
}
