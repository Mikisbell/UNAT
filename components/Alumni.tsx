'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Alumni() {
  const egresados = [
    {
      id: 1,
      nombre: 'Dr. Juan Carlos Pérez Huamán',
      carrera: 'Ingeniería Civil',
      año: '2018',
      posicion: 'Gerente de Proyectos - Ministerio de Vivienda',
      imagen: '/images/Students/Estudiantes_2.png',
      testimonio: 'La UNAT me dio las bases para desarrollarme profesionalmente y aportar al desarrollo de mi región.'
    },
    {
      id: 2,
      nombre: 'Lic. María Elena Rojas Torres',
      carrera: 'Enfermería',
      año: '2019',
      posicion: 'Jefa de Enfermería - Hospital Regional de Huancavelica',
      imagen: '/images/Students/Estudiantes_2.png',
      testimonio: 'La formación integral que recibí me permite brindar atención de calidad a nuestra comunidad.'
    },
    {
      id: 3,
      nombre: 'Ing. Pedro Quispe Mendoza',
      carrera: 'Ingeniería Forestal y Ambiental',
      año: '2020',
      posicion: 'Especialista Ambiental - SERFOR',
      imagen: '/images/Students/Estudiantes_2.png',
      testimonio: 'Hoy trabajo en la conservación de nuestros bosques amazónicos gracias a mi formación en UNAT.'
    }
  ];

  const estadisticas = [
    { numero: '85%', label: 'Empleabilidad al graduarse' },
    { numero: '2,500+', label: 'Egresados titulados' },
    { numero: '150+', label: 'Empresas empleadoras' },
    { numero: '60%', label: 'En sector público' }
  ];

  return (
    <section id="alumni" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Red de Egresados UNAT
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestros egresados lideran el desarrollo profesional en Tayacaja, Huancavelica y todo el país
          </p>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {estadisticas.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-primary-100"
            >
              <div className="text-3xl md:text-4xl font-black text-primary-600 mb-2">
                {stat.numero}
              </div>
              <div className="text-sm text-gray-600 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonios de Egresados */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {egresados.map((egresado, index) => (
            <motion.div
              key={egresado.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Imagen */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50">
                <Image
                  src={egresado.imagen}
                  alt={egresado.nombre}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-bold bg-primary-600 px-3 py-1 rounded-full inline-block mb-2">
                    {egresado.carrera}
                  </div>
                  <h3 className="text-xl font-bold">{egresado.nombre}</h3>
                  <p className="text-sm text-gray-200">Promoción {egresado.año}</p>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-sm font-bold text-primary-600 mb-1">Posición Actual</div>
                  <div className="text-gray-900 font-semibold">{egresado.posicion}</div>
                </div>

                <div className="border-l-4 border-primary-200 pl-4 py-2">
                  <p className="text-gray-700 italic text-sm leading-relaxed">
                    &quot;{egresado.testimonio}&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA para Egresados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-black mb-4">¿Eres egresado de la UNAT?</h3>
          <p className="text-xl mb-8 text-primary-100">
            Únete a nuestra red de egresados y mantente conectado con tu universidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105"
            >
              📝 Registrarme como egresado
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white rounded-xl font-bold text-lg hover:bg-primary-800 transition-all border-2 border-white/20"
            >
              💼 Bolsa de Trabajo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
