'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

export default function NoticiasDestacadas() {
  const noticias = [
    {
      id: 1,
      titulo: 'Admisión 2025-I: Inscripciones Abiertas',
      categoria: 'ADMISIÓN',
      fecha: '10 Nov 2024',
      descripcion: 'Proceso 100% gratuito. Inscríbete hasta el 30 de enero y asegura tu vacante para el semestre 2025-I. Examen programado para el 6 de abril.',
      imagen: '/images/campus/hero-background.jpg',
      link: '/admision',
      destacada: true
    },
    {
      id: 2,
      titulo: 'UNAT recibe Acreditación SINEACE',
      categoria: 'ACADÉMICO',
      fecha: '8 Nov 2024',
      descripcion: 'Nuestras carreras de Ingeniería reciben reconocimiento de calidad educativa.',
      imagen: '/images/campus/hero-background.jpg',
      link: '/noticias'
    },
    {
      id: 3,
      titulo: 'Nueva Publicación en SCOPUS',
      categoria: 'INVESTIGACIÓN',
      fecha: '5 Nov 2024',
      descripcion: 'Docentes UNAT publican investigación sobre recursos hídricos en revista indexada.',
      imagen: '/images/campus/hero-background.jpg',
      link: '/investigacion'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-bold mb-6 text-gray-700">
            ACTUALIDAD UNAT
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Últimas Noticias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mantente informado sobre lo que sucede en UNAT
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Noticia Principal (destacada) */}
          {noticias.filter(n => n.destacada).map((noticia, index) => (
            <motion.div
              key={noticia.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer"
            >
              <Link href={noticia.link}>
                <div className="relative h-80">
                  <Image
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {noticia.categoria}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-2 mb-3 text-sm text-primary-100">
                      <Calendar className="w-4 h-4" />
                      <span>{noticia.fecha}</span>
                    </div>
                    <h3 className="text-3xl font-black mb-3 group-hover:text-primary-300 transition-colors">
                      {noticia.titulo}
                    </h3>
                    <p className="text-lg text-gray-100 mb-4">
                      {noticia.descripcion}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary-300 font-bold group-hover:gap-4 transition-all">
                      Leer más <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Noticias secundarias */}
          <div className="space-y-6">
            {noticias.filter(n => !n.destacada).map((noticia, index) => (
              <motion.div
                key={noticia.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group cursor-pointer"
              >
                <Link href={noticia.link}>
                  <div className="flex gap-4 p-6">
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                      <Image
                        src={noticia.imagen}
                        alt={noticia.titulo}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-bold mb-2 ${
                        noticia.categoria === 'ACADÉMICO' 
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {noticia.categoria}
                      </span>
                      <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {noticia.titulo}
                      </h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {noticia.fecha}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/noticias"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Ver Todas las Noticias
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
