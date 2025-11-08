'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">UNAT</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Universidad Nacional Autónoma de Tayacaja &quot;Daniel Hernández
              Morillo&quot; - Formando profesionales comprometidos con el
              desarrollo regional
            </p>
            <p className="text-gray-400 text-sm mt-4">
              <strong>Jr. Bolognesi N° 418, Pampas - Tayacaja - Huancavelica</strong>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#nosotros"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#autoridades"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Autoridades
                </a>
              </li>
              <li>
                <a
                  href="#carreras"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Carreras
                </a>
              </li>
              <li>
                <a
                  href="#admision"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Admisión 2025
                </a>
              </li>
              <li>
                <a
                  href="#cronograma"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cronograma
                </a>
              </li>
              <li>
                <a
                  href="#documentos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Portales UNAT</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://unat.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portal Principal
                </a>
              </li>
              <li>
                <a
                  href="https://vpa.unat.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Vicepresidencia Académica
                </a>
              </li>
              <li>
                <a
                  href="https://vri.unat.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Vicepresidencia de Investigación
                </a>
              </li>
              <li>
                <a
                  href="https://admision.unat.edu.pe/2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portal de Admisión
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Investigación y Editorial</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://llamkasun.unat.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Revista Llamkasun
                </a>
              </li>
              <li>
                <a
                  href="https://revistas.unat.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Revista Tayacaja
                </a>
              </li>
              <li>
                <a
                  href="https://fondoeditorial.unat.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fondo Editorial
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">
            &copy; 2025 UNAT - Universidad Nacional Autónoma de Tayacaja &quot;Daniel
            Hernández Morillo&quot;. Todos los derechos reservados.
          </p>
          <p>Dirección de Admisión | Pampas, Tayacaja, Huancavelica, Perú</p>
        </div>
      </div>
    </footer>
  );
}
