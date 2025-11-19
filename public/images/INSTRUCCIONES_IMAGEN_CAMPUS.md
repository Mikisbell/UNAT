# 📸 Instrucciones para Configurar Imagen del Campus

## Ubicación de la imagen

Para activar la imagen de fondo del campus UNAT, necesitas:

### 1. **Conseguir la imagen**
   - Foto de alta calidad del campus UNAT
   - Resolución recomendada: **1920x1080px** o superior
   - Formato: **JPG** o **WebP** (para mejor rendimiento)
   - Peso optimizado: menos de 300KB si es posible

### 2. **Guardar la imagen**
   - Crear carpeta: `public/images/campus/`
   - Guardar la imagen como: `hero-background.jpg`
   - Ruta final: `public/images/campus/hero-background.jpg`

### 3. **Activar en el código**
   
Abrir: `components/HeroWithMenu.tsx`

**Buscar estas líneas (aprox. línea 14):**

```tsx
{/* Opción 1: Con imagen (descomentar cuando tengas la imagen) */}
{/* <Image 
  src="/images/campus/hero-background.jpg" 
  alt="Campus UNAT - Tayacaja"
  fill
  priority
  className="object-cover brightness-75"
  quality={90}
/> */}

{/* Opción 2: Gradiente temporal con colores UNAT */}
<div className="w-full h-full bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600">
```

**Cambiar a:**

```tsx
{/* Opción 1: Con imagen */}
<Image 
  src="/images/campus/hero-background.jpg" 
  alt="Campus UNAT - Tayacaja"
  fill
  priority
  className="object-cover brightness-75"
  quality={90}
/>

{/* Opción 2: Gradiente temporal (comentado)
<div className="w-full h-full bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600">
*/}
```

### 4. **Optimizar la imagen (Recomendado)**

Si la imagen es muy pesada, puedes optimizarla con:

- **TinyPNG** - https://tinypng.com/
- **Squoosh** - https://squoosh.app/
- **ImageOptim** (Mac)

### 5. **Características del diseño actual**

✅ **Menú transparente** con texto blanco sobre la imagen
✅ **Efecto de scroll**: Al bajar, el menú cambia a fondo blanco sólido
✅ **Overlay oscuro**: La imagen tiene `brightness-75` para mejor contraste
✅ **Responsive**: Funciona en todos los dispositivos

---

## 🎨 Alternativas mientras no tengas la foto

El diseño actual usa un **gradiente temporal** con los colores institucionales:
- Primary (guindo)
- Accent (dorado)
- Pattern overlay para textura

Esto se ve profesional hasta que consigas la foto del campus.

---

## 📋 Recomendaciones para la foto

**Buena foto de hero debe tener:**
- ✅ Vista panorámica del campus
- ✅ Cielo despejado o nubes interesantes
- ✅ Buena iluminación (luz del día)
- ✅ Edificios principales visibles
- ✅ Áreas verdes/jardines
- ✅ Espacio en el centro para el texto

**Evitar:**
- ❌ Fotos oscuras o con sombras fuertes
- ❌ Elementos que distraigan del mensaje
- ❌ Imágenes pixeladas o de baja calidad
- ❌ Demasiado texto o carteles en la foto

---

## 🔗 Fuentes sugeridas para conseguir la foto

1. **Oficina de Comunicaciones** de UNAT
2. **Redes sociales oficiales** de UNAT (Facebook, Instagram)
3. **Archivo fotográfico** de la universidad
4. **Contratar fotógrafo profesional** (recomendado para mejor resultado)

---

## 💡 Tip Pro

Si tienes varias fotos del campus, puedes crear un **carousel/slider** en el hero. 
¡Contacta al equipo de desarrollo si quieres implementar esta funcionalidad!
