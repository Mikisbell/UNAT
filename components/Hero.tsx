'use client';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 mt-20"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-primary-900/90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          ¡Tu Futuro Comienza Aquí!
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-4 animate-slide-up">
          Universidad Nacional Autónoma de Tayacaja
        </p>
        <p className="text-xl md:text-2xl text-white/95 mb-4 animate-slide-up font-semibold">
          &quot;Daniel Hernández Morillo&quot;
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-8 animate-slide-up">
          Admisión 2025-I - Examen Ordinario
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <a
            href="#admision"
            className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Proceso de Admisión 2025
          </a>
          <a
            href="#carreras"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
          >
            Ver Carreras
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
