'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Building2, Camera } from 'lucide-react';

export default function QuickLinks() {
  const links = [
    {
      title: 'Admisión 2025-I',
      description: 'Inscripciones abiertas',
      icon: GraduationCap,
      href: '/admision',
      color: 'from-red-500 to-red-600',
      badge: 'ABIERTO'
    },
    {
      title: 'Carreras',
      description: '5 programas profesionales',
      icon: BookOpen,
      href: '/carreras',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Biblioteca Digital',
      description: 'Recursos 24/7',
      icon: Building2,
      href: '/biblioteca',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Campus Virtual',
      description: 'Tour interactivo',
      icon: Camera,
      href: '/vida-universitaria',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={link.href}>
                <div className="relative bg-white border-2 border-gray-100 rounded-3xl p-10 hover:shadow-2xl hover:border-gray-200 transition-all duration-300 cursor-pointer h-full group">
                  {link.badge && (
                    <span className="absolute top-6 right-6 bg-green-50 text-green-700 border-2 border-green-200 px-3 py-1.5 rounded-full text-xs font-bold">
                      {link.badge}
                    </span>
                  )}
                  <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <link.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight">{link.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{link.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
