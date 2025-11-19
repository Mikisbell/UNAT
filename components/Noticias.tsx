'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Noticias() {
  const noticias = [
    {
      id: 1,
      categoria: 'ADMISIÓN',
      titulo: 'Proceso de Admisión 2025-I: Inscripciones Abiertas',
      fecha: 'Marzo 2025',
      imagen: '/images/campus/hero-background.jpg',
      descripcion: 'Ya están abiertas las inscripciones para el proceso de admisión 2025-I. Postula 100% gratis.',
      link: '#admision'
    },
    {
      id: 2,
      categoria: 'ACADÉMICO',
      titulo: 'UNAT recibe acreditación institucional',
      fecha: 'Febrero 2025',
      imagen: '/images/campus/hero-background.jpg',
      descripcion: 'La UNAT ha sido acreditada por SINEACE, reconociendo la calidad académica de nuestra institución.',
      link: '#'
    },
    {
      id: 3,
      categoria: 'INVESTIGACIÓN',
      titulo: 'Proyecto de conservación forestal gana financiamiento',
      fecha: 'Enero 2025',
      imagen: '/images/campus/hero-background.jpg',
      descripcion: 'Docentes de Ingeniería Forestal lideran proyecto de S/500,000 para conservación de bosques.',
      link: '#'
    },
    {
      id: 4,
      categoria: 'VIDA UNIVERSITARIA',
      titulo: 'Inauguración de nuevos laboratorios de Industrias Alimentarias',
      fecha: 'Enero 2025',
      imagen: '/images/campus/hero-background.jpg',
      descripcion: 'Modernos laboratorios equipados con tecnología de punta para nuestros estudiantes.',
      link: '#'
    }
  ];

  return (
    <section id="noticias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Últimas Noticias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado de las novedades y logros de nuestra comunidad universitaria
          </p>
        </motion.div>

        {/* Grid de Noticias */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {noticias.map((noticia, index) => (
            <motion.article
              key={noticia.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
            >
              {/* Imagen */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {noticia.categoria}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {noticia.fecha}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {noticia.titulo}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {noticia.descripcion}
                </p>

                <a
                  href={noticia.link}
                  className="inline-flex items-center text-primary-600 font-bold text-sm hover:text-primary-700 transition-colors"
                >
                  Leer más
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Ver todas las noticias */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Ver todas las noticias
            <svg className="w-5 h-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
