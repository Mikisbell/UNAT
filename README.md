# UNAT - Universidad Nacional de Tecnología

Página web oficial de la Universidad Nacional de Tecnología (UNAT), diseñada con tecnologías web modernas y un enfoque en la experiencia del usuario.

## 🎓 Descripción

Este proyecto es una página web completa y moderna para una universidad tecnológica, que incluye secciones informativas sobre programas académicos, proceso de admisión, información institucional y formulario de contacto.

## ✨ Características

- **Diseño Moderno y Responsive**: Adaptable a cualquier dispositivo (móvil, tablet, desktop)
- **Navegación Intuitiva**: Menú fijo con navegación suave entre secciones
- **Animaciones Interactivas**: Efectos visuales atractivos y profesionales
- **Secciones Completas**:
  - Hero section con llamado a la acción
  - Estadísticas animadas
  - Información institucional
  - Catálogo de programas académicos
  - Proceso de admisión paso a paso
  - Formulario de contacto
  - Footer informativo

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS, Grid y Flexbox
- **JavaScript ES6+**: Interactividad y animaciones
- **Google Fonts**: Tipografía Inter
- **Unsplash**: Imágenes de alta calidad

## 📁 Estructura del Proyecto

```
UNAT/
│
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── main.js         # JavaScript para interactividad
└── README.md           # Este archivo
```

## 🖥️ Instalación y Uso

### Opción 1: Abrir directamente en el navegador

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` en tu navegador preferido
3. ¡Listo! La página estará funcionando

### Opción 2: Usar un servidor local

Para mejores resultados y evitar problemas con CORS:

#### Con Python 3:
```bash
cd UNAT
python -m http.server 8000
```
Luego abre http://localhost:8000 en tu navegador

#### Con Node.js (http-server):
```bash
npx http-server UNAT -p 8000
```
Luego abre http://localhost:8000 en tu navegador

#### Con Visual Studio Code:
1. Instala la extensión "Live Server"
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

## 🎨 Personalización

### Colores
Los colores principales se definen en variables CSS en `css/styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    /* ... más colores */
}
```

### Contenido
- **Textos**: Edita directamente en `index.html`
- **Programas**: Modifica o agrega tarjetas en la sección `#programas`
- **Imágenes**: Reemplaza las URLs de Unsplash con tus propias imágenes

### Estilos
Todos los estilos están en `css/styles.css` organizados por secciones para fácil edición.

## 📱 Responsive Design

La página está completamente optimizada para:
- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## 🔧 Funcionalidades JavaScript

- Navegación móvil con menú hamburguesa
- Scroll suave entre secciones
- Animación de números en estadísticas
- Efectos de aparición con Intersection Observer
- Validación de formulario de contacto
- Efecto parallax en hero section
- Navegación activa basada en scroll

## 🌐 Navegadores Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## 📝 Secciones de la Página

1. **Navegación**: Menú fijo con enlaces a todas las secciones
2. **Hero**: Sección de bienvenida con llamados a la acción
3. **Estadísticas**: Números clave de la universidad
4. **Nosotros**: Misión, visión y características
5. **Programas**: Catálogo de carreras disponibles
6. **Admisiones**: Proceso y requisitos de admisión
7. **Contacto**: Información de contacto y formulario
8. **Footer**: Enlaces y redes sociales

## 🚧 Mejoras Futuras

- [ ] Integración con backend para formulario de contacto
- [ ] Sistema de gestión de contenidos (CMS)
- [ ] Portal de estudiantes
- [ ] Sistema de inscripciones en línea
- [ ] Blog de noticias y eventos
- [ ] Galería de fotos del campus
- [ ] Testimonios de estudiantes
- [ ] Integración con redes sociales

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

## 👤 Autor

Desarrollado para UNAT - Universidad Nacional de Tecnología

## 📞 Contacto

- **Email**: info@unat.edu.mx
- **Teléfono**: +52 (55) 1234-5678
- **Dirección**: Av. Universidad 1000, Ciudad Universitaria, CP 12345

---

**¡Gracias por visitar UNAT!** 🎓
