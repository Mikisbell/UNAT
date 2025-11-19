'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X, Menu, Search } from 'lucide-react';

interface SubLink {
  title: string;
  description?: string;
  href: string;
  icon?: string;
  badge?: string;
}

interface DropdownSection {
  title: string;
  links: SubLink[];
}

interface MenuItem {
  title: string;
  dropdown?: DropdownSection[];
  featured?: {
    title: string;
    description: string;
    image: string;
    link: string;
    cta: string;
  };
}

export default function MegaMenuModerno() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuItem[] = [
    {
      title: 'Admisión',
      dropdown: [
        {
          title: 'Admisión 2025-I',
          links: [
            { title: 'Inscripción Online', href: 'https://admision.unat.edu.pe/2/', badge: 'ABIERTO' },
            { title: 'Cronograma', href: '/admision#cronograma' },
            { title: 'Modalidades', href: '/admision#modalidades' },
            { title: 'Vacantes por Carrera', href: '/admision#vacantes' },
          ]
        },
        {
          title: 'Requisitos',
          links: [
            { title: 'Prospecto 2025', href: '/admision#documentos' },
            { title: 'Documentos', href: '/admision#requisitos' },
            { title: 'Costos', href: '/admision#costos' },
          ]
        }
      ],
      featured: {
        title: 'Proceso de Admisión 2025-I Abierto',
        description: 'Examen: 6 de Abril, 2025',
        image: '/images/campus/hero-background.jpg',
        link: '/admision',
        cta: 'VER MÁS'
      }
    },
    {
      title: 'Académico',
      dropdown: [
        {
          title: 'Carreras Profesionales',
          links: [
            { title: 'Ingeniería Civil', href: '/carreras#civil' },
            { title: 'Ing. Forestal y Ambiental', href: '/carreras#forestal' },
            { title: 'Ing. Industrias Alimentarias', href: '/carreras#alimentarias' },
            { title: 'Ingeniería Industrial', href: '/carreras#industrial' },
            { title: 'Enfermería', href: '/carreras#enfermeria' },
          ]
        },
        {
          title: 'Posgrado',
          links: [
            { title: 'Maestrías', href: '/posgrado' },
            { title: 'Especializaciones', href: '/posgrado' },
          ]
        },
        {
          title: 'Recursos',
          links: [
            { title: 'Biblioteca Digital', href: '/biblioteca' },
            { title: 'Calendario Académico', href: '/nosotros#calendario' },
          ]
        }
      ],
      featured: {
        title: '5 Carreras Profesionales Acreditadas',
        description: '',
        image: '/images/campus/hero-background.jpg',
        link: '/carreras',
        cta: 'VER CARRERAS'
      }
    },
    {
      title: 'Investigación',
      dropdown: [
        {
          title: 'Investigación UNAT',
          links: [
            { title: 'Proyectos de Investigación', href: '/investigacion' },
            { title: 'Publicaciones SCOPUS', href: '/investigacion#publicaciones' },
            { title: 'Grupos de Investigación', href: '/investigacion#grupos' },
            { title: 'Convocatorias', href: '/investigacion#convocatorias' },
          ]
        },
        {
          title: 'Publicaciones',
          links: [
            { title: 'Revista Llamkasun', href: 'https://llamkasun.unat.edu.pe' },
            { title: 'Fondo Editorial', href: 'https://fondoeditorial.unat.edu.pe' },
            { title: 'Repositorio Institucional', href: '/investigacion#repositorio' },
          ]
        },
        {
          title: 'Recursos',
          links: [
            { title: 'VRI Portal', href: 'https://vri.unat.edu.pe' },
            { title: 'Reglamentos', href: '/investigacion#reglamentos' },
          ]
        }
      ],
      featured: {
        title: '121+ Publicaciones SCOPUS - Investigación de Alto Impacto',
        description: '',
        image: '/images/campus/hero-background.jpg',
        link: '/investigacion',
        cta: 'EXPLORAR'
      }
    },
    {
      title: 'Campus',
      dropdown: [
        {
          title: 'Campus UNAT',
          links: [
            { title: 'Tour Virtual', href: '/vida-universitaria' },
            { title: 'Clubes Estudiantiles', href: '/vida-universitaria#clubes' },
            { title: 'Deportes', href: '/vida-universitaria#deportes' },
            { title: 'Arte y Cultura', href: '/vida-universitaria#cultura' },
            { title: 'Eventos', href: '/vida-universitaria#eventos' },
          ]
        },
        {
          title: 'Servicios',
          links: [
            { title: 'Bienestar Estudiantil', href: '/vida-universitaria#servicios' },
            { title: 'Comedor Universitario', href: '/vida-universitaria#comedor' },
            { title: 'Transporte', href: '/vida-universitaria#transporte' },
          ]
        },
        {
          title: 'Alumni',
          links: [
            { title: 'Red de Egresados', href: '/egresados' },
            { title: 'Bolsa de Trabajo', href: '/egresados#bolsa' },
          ]
        }
      ],
      featured: {
        title: 'Experiencia Universitaria Integral',
        description: '',
        image: '/images/campus/hero-background.jpg',
        link: '/vida-universitaria',
        cta: 'EXPLORAR CAMPUS'
      }
    },
    {
      title: 'Universidad',
      dropdown: [
        {
          title: 'Universidad UNAT',
          links: [
            { title: 'Misión y Visión', href: '/nosotros#mision' },
            { title: 'Historia', href: '/nosotros' },
            { title: 'Autoridades', href: '/nosotros#autoridades' },
            { title: 'Transparencia', href: '/nosotros#transparencia' },
          ]
        },
        {
          title: 'Actualidad',
          links: [
            { title: 'Noticias', href: '/noticias' },
            { title: 'Eventos', href: '/noticias#eventos' },
            { title: 'Comunicados', href: '/noticias#comunicados' },
          ]
        },
        {
          title: 'Contacto',
          links: [
            { title: 'Ubicación', href: '/contacto' },
            { title: 'Directorio', href: '/contacto#directorio' },
            { title: 'Portal unat.edu.pe', href: 'https://unat.edu.pe' },
          ]
        }
      ],
      featured: {
        title: 'Universidad Nacional Autónoma de Tayacaja',
        description: '',
        image: '/images/campus/hero-background.jpg',
        link: '/nosotros',
        cta: 'CONOCE UNAT'
      }
    }
  ];

  // Top bar links
  const topBarLinks = [
    { title: 'Estudiantes', href: '#estudiantes' },
    { title: 'Docentes', href: '#docentes' },
    { title: 'Familias', href: '#familias' },
    { title: 'Visitantes', href: '#visitantes' },
    { title: 'Alumni', href: '/egresados' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-11 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-11">
            <div className="hidden lg:flex items-center space-x-1">
              <span className="text-xs font-semibold mr-2 text-white/80 uppercase tracking-wide">
                Información para:
              </span>
              {topBarLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-semibold text-white/90 hover:text-white transition-colors hover:underline"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-14 w-48">
              <Image
                src={isScrolled ? "/images/logos/logo-gindo.png" : "/images/logos/logo-blanco.png"}
                alt="UNAT"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-5 py-3 rounded-lg text-base font-bold transition-all duration-200 flex items-center gap-2 ${
                    activeDropdown === item.title
                      ? isScrolled
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-primary-300'
                      : isScrolled
                      ? 'text-gray-800 hover:text-primary-600'
                      : 'text-white hover:text-primary-200'
                  }`}
                >
                  {item.title}
                  {item.dropdown && (
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Mega Dropdown - Estilo Dataiku */}
                <AnimatePresence>
                  {activeDropdown === item.title && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`fixed inset-x-0 flex justify-center z-50 ${
                        isScrolled ? 'top-[80px]' : 'top-[124px]'
                      }`}
                    >
                      <div className={`w-full px-4 ${
                        item.dropdown.length === 2 ? 'max-w-3xl' :
                        item.dropdown.length === 3 ? 'max-w-4xl' :
                        item.dropdown.length === 4 ? 'max-w-5xl' :
                        'max-w-6xl'
                      }`}>
                      <div className="bg-[#F5F5F0] shadow-2xl overflow-hidden" style={{ backgroundColor: '#F5F5F0' }}>
                        {/* Sections Grid */}
                        <div className="p-12">
                          <div className={`grid gap-12 ${
                            item.dropdown.length === 2 ? 'grid-cols-2' :
                            item.dropdown.length === 3 ? 'grid-cols-3' :
                            item.dropdown.length === 4 ? 'grid-cols-4' :
                            'grid-cols-3'
                          }`}>
                            {/* Primera columna - Destacada */}
                            {item.dropdown[0] && (
                              <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                  {item.dropdown[0].title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-6">
                                  {item.dropdown[0].links[0]?.description || ''}
                                </p>
                                <ul className="space-y-2">
                                  {item.dropdown[0].links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                      <Link
                                        href={link.href}
                                        className="text-sm text-gray-700 hover:text-primary-600 transition-colors block"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        {link.title}
                                        {link.badge && (
                                          <span className="ml-2 px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded">
                                            {link.badge}
                                          </span>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {/* Resto de columnas */}
                            {item.dropdown.slice(1).map((section, sIdx) => (
                              <div key={sIdx}>
                                <h3 className="text-base font-bold text-gray-900 mb-4">
                                  {section.title}
                                </h3>
                                <ul className="space-y-2">
                                  {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                      <Link
                                        href={link.href}
                                        className="text-sm text-gray-700 hover:text-primary-600 transition-colors block"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        {link.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Línea separadora */}
                        {item.featured && (
                          <div className="border-t border-gray-300" />
                        )}

                        {/* Featured Section */}
                        {item.featured && (
                          <div className="px-12 py-6 flex items-center gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-36 h-20 bg-white rounded overflow-hidden">
                                <Image
                                  src={item.featured.image}
                                  alt={item.featured.title}
                                  width={144}
                                  height={80}
                                  className="object-cover w-full h-full"
                                />
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-bold text-gray-900 mb-0.5">
                                {item.featured.title}
                              </p>
                              <Link
                                href={item.featured.link}
                                className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-primary-600 transition-colors uppercase"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.featured.cta} →
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className={`p-2.5 rounded-lg transition-all ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}>
              <Search className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            </button>
            <Link
              href="/admision"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-bold text-base hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
            >
              Postular
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4">
                  <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                  {item.dropdown && item.dropdown.map((section, sIdx) => (
                    <div key={sIdx} className="mb-3">
                      <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
                        {section.title}
                      </p>
                      <ul className="space-y-2">
                        {section.links.map((link, lIdx) => (
                          <li key={lIdx}>
                            <Link
                              href={link.href}
                              className="block text-sm text-gray-600 hover:text-primary-600"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
              <Link
                href="/admision"
                className="block w-full text-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Postular Ahora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
