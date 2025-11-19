'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function InvestigacionDestacada() {
  const proyectos = [
    {
      titulo: 'Recursos Hídricos en la Región',
      area: 'Ingeniería Ambiental',
      color: 'bg-green-100 text-green-700'
    },
    {
      titulo: 'Desarrollo de Bioplásticos',
      area: 'Industrias Alimentarias',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      titulo: 'Salud Comunitaria Rural',
      area: 'Enfermería',
      color: 'bg-pink-100 text-pink-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-bold">🔬 Investigación de Alto Impacto</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              121+ Publicaciones SCOPUS
            </h2>
            
            <p className="text-xl text-primary-100 mb-8">
              Liderando la investigación científica en Tayacaja con proyectos que transforman nuestra región.
            </p>

            {/* Proyectos destacados */}
            <div className="space-y-4 mb-8">
              {proyectos.map((proyecto, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-300 rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-lg">{proyecto.titulo}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${proyecto.color}`}>
                      {proyecto.area}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/investigacion"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Explorar Investigación
              <ExternalLink className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Imagen/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/campus/hero-background.jpg"
                alt="Investigación UNAT"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-3xl font-black">25+</div>
                    <div className="text-sm text-primary-100">Proyectos</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-3xl font-black">121+</div>
                    <div className="text-sm text-primary-100">Papers</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center">
                    <div className="text-3xl font-black">8</div>
                    <div className="text-sm text-primary-100">Grupos</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
