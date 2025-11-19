# 📁 Carpeta Public - Archivos Estáticos UNAT

Esta carpeta contiene todos los archivos estáticos del sitio web UNAT (imágenes, documentos, logos, etc.)

## 📂 Estructura de Carpetas

```
public/
├── images/
│   ├── logos/           ← COLOCA AQUÍ TU LOGO DE UNAT
│   │   ├── logo-unat.png
│   │   ├── logo-unat.svg
│   │   ├── logo-unat-white.png
│   │   └── favicon.ico
│   ├── autoridades/     ← Fotos de autoridades
│   ├── carreras/        ← Imágenes de carreras
│   ├── campus/          ← Fotos del campus
│   └── hero/            ← Imágenes para el hero
├── documents/           ← Documentos PDF oficiales
│   ├── reglamentos/
│   ├── prospecto/
│   └── normas/
└── cv/                  ← CVs de autoridades
    ├── luis-abanto-cv.pdf
    ├── segundo-rodriguez-cv.pdf
    ├── charo-jauregui-cv.pdf
    └── aron-aliaga-cv.pdf
```

## 🖼️ **LOGO DE UNAT**

### Dónde colocar tu logo:
```
/public/images/logos/logo-unat.png    ← Logo principal
/public/images/logos/logo-unat.svg    ← Logo vectorial (mejor calidad)
/public/images/logos/logo-unat-white.png  ← Logo blanco para fondos oscuros
/public/favicon.ico                   ← Favicon del navegador
```

### Cómo usar el logo en tu código:

#### En componentes React/Next.js:
```tsx
import Image from 'next/image'

<Image 
  src="/images/logos/logo-unat.png" 
  alt="Logo UNAT"
  width={200}
  height={80}
  priority
/>
```

#### En HTML simple:
```html
<img src="/images/logos/logo-unat.png" alt="Logo UNAT" />
```

#### En Tailwind/CSS:
```tsx
<div className="w-48 h-auto">
  <img src="/images/logos/logo-unat.png" alt="Logo UNAT" />
</div>
```

## 📋 **RECOMENDACIONES:**

### Formatos de Logo:
- **PNG**: Con fondo transparente, 800x300px aprox.
- **SVG**: Ideal para escalabilidad, tamaño pequeño
- **WebP**: Formato moderno, mejor compresión

### Tamaños Recomendados:
- **Logo navbar**: 150-200px de ancho
- **Logo footer**: 120-150px de ancho
- **Favicon**: 32x32px, 64x64px

### Optimización:
- Usa herramientas como TinyPNG para comprimir
- PNG con fondo transparente para versatilidad
- SVG para mejor calidad en todas las resoluciones

## 🎨 **VARIANTES DEL LOGO:**

Crea estas variantes para diferentes usos:

1. **logo-unat.png** - Logo completo a color (guindo y dorado)
2. **logo-unat-white.png** - Logo blanco para fondos oscuros
3. **logo-unat-icon.png** - Solo el escudo/símbolo (cuadrado)
4. **logo-unat-horizontal.png** - Logo en formato horizontal
5. **logo-unat-vertical.png** - Logo en formato vertical

## 📸 **OTRAS IMÁGENES:**

### Fotos de Autoridades:
```
/public/images/autoridades/presidente.jpg
/public/images/autoridades/vicepresidente-academico.jpg
/public/images/autoridades/vicepresidente-investigacion.jpg
```

### Hero/Banner:
```
/public/images/hero/campus-unat.jpg
/public/images/hero/estudiantes.jpg
/public/images/hero/graduacion.jpg
```

### Campus:
```
/public/images/campus/biblioteca.jpg
/public/images/campus/laboratorios.jpg
/public/images/campus/aulas.jpg
```

## 🔗 **ACCESO DESDE EL CÓDIGO:**

En Next.js, todos los archivos en `/public` se acceden desde la raíz `/`:

```tsx
// ✅ CORRECTO
<img src="/images/logos/logo-unat.png" />

// ❌ INCORRECTO
<img src="/public/images/logos/logo-unat.png" />
<img src="public/images/logos/logo-unat.png" />
```

## 📦 **DOCUMENTOS PDF:**

Guarda aquí los documentos oficiales:
```
/public/documents/prospecto-2025.pdf
/public/documents/reglamento-admision.pdf
/public/documents/plan-estudios-sistemas.pdf
```

Enlázalos así:
```tsx
<a href="/documents/prospecto-2025.pdf" download>
  Descargar Prospecto
</a>
```

## 🚀 **PRÓXIMOS PASOS:**

1. **Consigue el logo oficial** de UNAT (contacta con la oficina de comunicaciones)
2. **Guárdalo** en `/public/images/logos/logo-unat.png`
3. **Actualiza** los componentes Navbar y Footer para usar el logo
4. **Crea el favicon** desde el logo y guárdalo en `/public/favicon.ico`

---

**Nota:** Esta carpeta es pública y todos los archivos son accesibles desde el navegador.
No pongas información sensible aquí.
