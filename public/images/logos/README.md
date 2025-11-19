# 🎨 Logos UNAT

## 📍 **COLOCA AQUÍ TU LOGO DE UNAT**

Esta carpeta es para guardar el logo oficial de la Universidad Nacional Autónoma de Tayacaja.

### Archivos que debes colocar:

1. **logo-unat.png** - Logo principal a color (PNG con transparencia)
2. **logo-unat.svg** - Logo vectorial (mejor calidad, escalable)
3. **logo-unat-white.png** - Logo blanco para fondos oscuros
4. **logo-unat-icon.png** - Solo el escudo/símbolo (para favicon)

### Especificaciones técnicas:

- **Formato**: PNG con transparencia o SVG
- **Tamaño recomendado**: 800x300px (horizontal) o 500x500px (cuadrado)
- **Colores**: Guindo (#800020) y Dorado (#D4AF37)
- **Peso máximo**: 100KB (optimizar con TinyPNG)

### Cómo obtener el logo oficial:

1. Contacta con la **Oficina de Comunicaciones** de UNAT
2. Solicita el **Manual de Identidad Visual**
3. O descárgalo del sitio oficial: https://unat.edu.pe

### Uso en el código:

Una vez que coloques el logo aquí, actualiza estos componentes:

- `/components/MegaMenu.tsx` - Logo del navbar
- `/components/Footer.tsx` - Logo del footer
- `/app/layout.tsx` - Favicon

```tsx
// Ejemplo de uso:
<Image 
  src="/images/logos/logo-unat.png" 
  alt="UNAT Logo"
  width={180}
  height={60}
/>
```

---

**¿No tienes el logo?** Puedes usar temporalmente un placeholder o texto mientras lo consigues.
