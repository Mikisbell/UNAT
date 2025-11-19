'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function FooterStanford() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Académico',
      links: [
        { name: 'Pregrado', href: '#pregrado' },
        { name: 'Posgrado', href: '#posgrado' },
        { name: 'Carreras Profesionales', href: '#carreras' },
        { name: 'Calendario Académico', href: '#calendario' },
        { name: 'Biblioteca Digital', href: '#biblioteca' },
      ],
    },
    {
      title: 'Admisión',
      links: [
        { name: 'Proceso de Admisión 2025', href: '#admision' },
        { name: 'Requisitos', href: '#requisitos' },
        { name: 'Cronograma', href: '#cronograma' },
        { name: 'Modalidades', href: '#modalidades' },
        { name: 'Resultados', href: '#resultados' },
      ],
    },
    {
      title: 'Investigación',
      links: [
        { name: 'Proyectos de Investigación', href: '#investigacion' },
        { name: 'Revista Llamkasun', href: 'https://llamkasun.unat.edu.pe', external: true },
        { name: 'Revista Tayacaja', href: 'https://revistas.unat.edu.pe', external: true },
        { name: 'Fondo Editorial', href: 'https://fondoeditorial.unat.edu.pe', external: true },
        { name: 'Publicaciones', href: '#publicaciones' },
      ],
    },
    {
      title: 'Campus',
      links: [
        { name: 'Vida Estudiantil', href: '#vida-campus' },
        { name: 'Deportes y Recreación', href: '#deportes' },
        { name: 'Arte y Cultura', href: '#cultura' },
        { name: 'Servicios Estudiantiles', href: '#servicios' },
        { name: 'Alumni', href: '#alumni' },
      ],
    },
    {
      title: 'Acerca de UNAT',
      links: [
        { name: 'Nuestra Historia', href: '#historia' },
        { name: 'Autoridades', href: '#autoridades' },
        { name: 'Misión y Visión', href: '#mision' },
        { name: 'Transparencia', href: '#transparencia' },
        { name: 'Noticias', href: '#noticias' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Portal Principal', href: 'https://unat.edu.pe', external: true },
        { name: 'Vicepresidencia Académica', href: 'https://vpa.unat.edu.pe', external: true },
        { name: 'Vicepresidencia Investigación', href: 'https://vri.unat.edu.pe', external: true },
        { name: 'Portal de Admisión', href: 'https://admision.unat.edu.pe/2/', external: true },
        { name: 'Contacto', href: '#contacto' },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 border-b border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                        >
                          <span>{link.name}</span>
                          <svg
                            className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Logo and Social Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Logo and Description */}
            <div>
              <div className="mb-6">
                <Image
                  src="/images/logos/logo-blanco.png"
                  alt="Logo UNAT"
                  width={400}
                  height={134}
                  className="h-32 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-4">
                Universidad Nacional Autónoma de Tayacaja &quot;Daniel Hernández Morillo&quot;
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-gray-300">Jr. Bolognesi N° 418</strong><br />
                Pampas, Tayacaja, Huancavelica, Perú<br />
                Tel: +51 067 453016
              </p>
            </div>

            {/* Social Media and Newsletter */}
            <div className="flex flex-col items-start md:items-end gap-6">
              {/* Social Media Icons */}
              <div>
                <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Síguenos</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/UNAT.Oficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/unat.oficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/UNAT_Oficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@UNATOficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Accessibility and Language */}
              <div className="flex gap-4 text-sm">
                <button className="text-gray-400 hover:text-white transition-colors">
                  Accesibilidad
                </button>
                <span className="text-gray-600">|</span>
                <button className="text-gray-400 hover:text-white transition-colors">
                  ES
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <p>&copy; {currentYear} UNAT - Universidad Nacional Autónoma de Tayacaja</p>
              <Link href="#privacidad" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#terminos" className="hover:text-white transition-colors">
                Términos de Uso
              </Link>
              <Link href="#cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span>Diseñado con</span>
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>en Tayacaja, Perú</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
