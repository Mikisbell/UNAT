'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Stat {
  value: number;
  label: string;
  suffix?: string;
  icon: string;
  color: string;
}

export default function StatsCounter() {
  const stats: Stat[] = [
    { value: 2000, label: 'Estudiantes Activos', suffix: '+', icon: '👨‍🎓', color: 'from-blue-500 to-blue-600' },
    { value: 150, label: 'Docentes Especializados', suffix: '+', icon: '👨‍🏫', color: 'from-purple-500 to-purple-600' },
    { value: 5, label: 'Carreras Profesionales', icon: '🎓', color: 'from-green-500 to-green-600' },
    { value: 15, label: 'Años de Trayectoria', icon: '⭐', color: 'from-orange-500 to-orange-600' },
    { value: 90, label: 'Empleabilidad', suffix: '%', icon: '💼', color: 'from-red-500 to-red-600' },
    { value: 50, label: 'Proyectos de Investigación', suffix: '+', icon: '🔬', color: 'from-cyan-500 to-cyan-600' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            UNAT en Números
          </h2>
          <p className="text-xl text-primary-100">
            Más de una década formando profesionales de excelencia
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const displayValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(stat.value);
    }
  }, [isInView, motionValue, stat.value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      displayValue.set(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue, displayValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 2 }}
      className={`relative p-6 bg-gradient-to-br ${stat.color} rounded-2xl text-white shadow-2xl transform transition-all group`}
    >
      {/* Icon */}
      <motion.div
        className="text-5xl mb-3 text-center"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {stat.icon}
      </motion.div>

      {/* Value */}
      <motion.div className="text-4xl font-black text-center mb-2">
        <motion.span>{displayValue}</motion.span>
        <span>{stat.suffix}</span>
      </motion.div>

      {/* Label */}
      <div className="text-sm text-center font-semibold opacity-90 leading-tight">
        {stat.label}
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
    </motion.div>
  );
}
