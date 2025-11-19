'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tema: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      tema: '',
      mensaje: '',
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600">Estamos aquí para ayudarte</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <span className="text-4xl">📍</span>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Dirección
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Jr. Bolognesi N° 418
                  <br />
                  Pampas, Tayacaja
                  <br />
                  Huancavelica, Perú
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-4xl">📞</span>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Teléfono
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Informes en oficina de admisión
                  <br />
                  Jr. Bolognesi 418 - Pampas
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-4xl">✉️</span>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-700 leading-relaxed">
                  admision@unat.edu.pe
                  <br />
                  Portal:{' '}
                  <a
                    href="https://unat.edu.pe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    unat.edu.pe
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-4xl">🕐</span>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Horario de Atención
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Lunes a Viernes: 8:00 - 17:00
                  <br />
                  Oficina de Admisión UNAT
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <select
                  value={formData.tema}
                  onChange={(e) =>
                    setFormData({ ...formData, tema: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all outline-none"
                >
                  <option value="">Selecciona un tema</option>
                  <option value="admision">Admisión</option>
                  <option value="programas">Programas académicos</option>
                  <option value="becas">Becas</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Mensaje"
                  rows={5}
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
