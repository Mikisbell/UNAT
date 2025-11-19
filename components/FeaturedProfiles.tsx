'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Profile {
  id: string;
  name: string;
  role: string;
  category: string;
  quote: string;
  image: string;
  href: string;
  background: string;
}

const profiles: Profile[] = [
  {
    id: '1',
    name: 'Ana María Torres',
    role: 'Estudiante destacada de Ingeniería de Sistemas',
    category: 'Estudiante',
    quote: 'UNAT me ha brindado las herramientas para desarrollar soluciones tecnológicas que impactan mi comunidad.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    href: '#',
    background: 'from-primary-500 to-primary-700',
  },
  {
    id: '2',
    name: 'Dr. Carlos Mendoza',
    role: 'Investigador en Educación',
    category: 'Investigación',
    quote: 'Nuestra meta es construir puentes entre el laboratorio y el aula, transformando la educación regional.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    href: '#',
    background: 'from-secondary-500 to-secondary-700',
  },
  {
    id: '3',
    name: 'María Elena Huamán, Egresada 2020',
    role: 'Líder en Desarrollo Regional',
    category: 'Alumni',
    quote: 'UNAT formó no solo mi conocimiento técnico, sino también mi compromiso con el desarrollo de Tayacaja.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    href: '#',
    background: 'from-primary-600 to-secondary-600',
  },
];

export default function FeaturedProfiles() {
  return (
    <section className="py-24 bg-white">
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
            Voces de UNAT
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a las personas que hacen de UNAT una comunidad de excelencia
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                href={profile.href}
                className="group block h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image with Gradient Overlay */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${profile.background} opacity-60 group-hover:opacity-70 transition-opacity`} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900">
                      {profile.category}
                    </span>
                  </div>

                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{profile.name}</h3>
                    <p className="text-white/90 text-sm">{profile.role}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-6 bg-gray-50 group-hover:bg-white transition-colors">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-8 h-8 text-primary-300 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-700 italic leading-relaxed">
                      {profile.quote}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Descubre más historias inspiradoras de nuestra comunidad
          </p>
          <Link
            href="#historias"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Explorar más perfiles
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
