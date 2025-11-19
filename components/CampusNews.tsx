'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  href: string;
  featured?: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'UNAT lidera innovación en ingeniería de sistemas en la región Huancavelica',
    excerpt: 'Estudiantes de Ingeniería de Sistemas desarrollan aplicaciones móviles que impulsan el desarrollo tecnológico regional.',
    category: 'Investigación',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    date: 'Nov 6, 2025',
    href: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'Nueva infraestructura: Laboratorios de última generación para estudiantes',
    excerpt: 'La universidad inaugura modernos laboratorios equipados con tecnología de punta.',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
    date: 'Nov 5, 2025',
    href: '#',
  },
  {
    id: '3',
    title: 'Convenio internacional: Intercambio estudiantil con universidades de prestigio',
    excerpt: 'UNAT firma acuerdos que permitirán a estudiantes realizar intercambios académicos internacionales.',
    category: 'Internacional',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    date: 'Nov 4, 2025',
    href: '#',
  },
  {
    id: '4',
    title: 'Investigación en educación: Nuevas metodologías de enseñanza-aprendizaje',
    excerpt: 'Docentes de UNAT publican investigación sobre innovación pedagógica en revistas indexadas.',
    category: 'Educación',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
    date: 'Nov 3, 2025',
    href: '#',
  },
  {
    id: '5',
    title: 'Proyectos de responsabilidad social impactan comunidades de Tayacaja',
    excerpt: 'Estudiantes implementan proyectos que mejoran la calidad de vida en comunidades rurales.',
    category: 'Responsabilidad Social',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
    date: 'Nov 2, 2025',
    href: '#',
  },
  {
    id: '6',
    title: 'Egresados UNAT destacan en sector público y privado regional',
    excerpt: 'Alumni de UNAT ocupan posiciones de liderazgo en instituciones y empresas de la región.',
    category: 'Egresados',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
    date: 'Nov 1, 2025',
    href: '#',
  },
];

export default function CampusNews() {
  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Noticias del Campus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Historias sobre personas, investigación e innovación en UNAT
          </p>
        </motion.div>

        {/* Featured News */}
        {featuredNews && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <Link
              href={featuredNews.href}
              className="group block relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-96 md:h-full overflow-hidden">
                  <Image
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                      ⭐ En el Spotlight
                    </span>
                    <span className="ml-3 text-gray-500 text-sm">{featuredNews.date}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {featuredNews.title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>

                  <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                    Leer más
                    <svg
                      className="w-5 h-5 ml-1 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="group block h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-primary-700 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="#noticias"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Ver todas las noticias
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
