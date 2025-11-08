'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
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

        {/* Logo and Info Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-6">
                <Image
                  src="/images/logos/logo.png"
                  alt="Logo UNAT"
                  width={200}
                  height={67}
                  className="h-16 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-4">
                Universidad Nacional Autónoma de Tayacaja &quot;Daniel Hernández Morillo&quot;
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-gray-300">Jr. Bolognesi N° 418</strong><br />
                Pampas, Tayacaja, Huancavelica, Perú
              </p>
            </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#nosotros"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#autoridades"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Autoridades
                </a>
              </li>
              <li>
                <a
                  href="#carreras"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Carreras
                </a>
              </li>
              <li>
                <a
                  href="#admision"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Admisión 2025
                </a>
              </li>
              <li>
                <a
                  href="#cronograma"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cronograma
                </a>
              </li>
              <li>
                <a
                  href="#documentos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Portales UNAT</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://unat.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portal Principal
                </a>
              </li>
              <li>
                <a
                  href="https://vpa.unat.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Vicepresidencia Académica
                </a>
              </li>
              <li>
                <a
                  href="https://vri.unat.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Vicepresidencia de Investigación
                </a>
              </li>
              <li>
                <a
                  href="https://admision.unat.edu.pe/2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portal de Admisión
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Investigación y Editorial</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://llamkasun.unat.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Revista Llamkasun
                </a>
              </li>
              <li>
                <a
                  href="https://revistas.unat.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Revista Tayacaja
                </a>
              </li>
              <li>
                <a
                  href="https://fondoeditorial.unat.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fondo Editorial
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">
            &copy; 2025 UNAT - Universidad Nacional Autónoma de Tayacaja &quot;Daniel
            Hernández Morillo&quot;. Todos los derechos reservados.
          </p>
          <p>Dirección de Admisión | Pampas, Tayacaja, Huancavelica, Perú</p>
        </div>
      </div>
    </footer>
  );
}
