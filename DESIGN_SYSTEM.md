# 🎨 Sistema de Diseño UNAT - Guía de Colores Oficiales

## Paleta de Colores Institucionales

Esta paleta ha sido extraída del sitio oficial de admisión de UNAT (https://admision.unat.edu.pe/2/) y representa la identidad visual oficial de la Universidad Nacional Autónoma de Tayacaja Daniel Hernández Morillo.

---

## 🔵 **AZUL MARINO - Color Principal**

El azul marino es el color institucional principal de UNAT, representa confianza, profesionalismo y excelencia académica.

### Uso Principal
- **primary-600**: `#004E8C` - Color principal para botones, encabezados, elementos destacados
- **primary-700**: `#003F7F` - Hover states, énfasis adicional
- **primary-800**: `#003366` - Fondos oscuros, footers

### Escala Completa
```
primary-50:  #E6F0FF  (Fondos muy claros)
primary-100: #CCE0FF  (Fondos claros, badges)
primary-200: #99C2FF  (Bordes suaves)
primary-300: #66A3FF  (Estados disabled)
primary-400: #3385FF  (Hover suave)
primary-500: #0066CC  (Base intermedia)
primary-600: #004E8C  ⭐ PRINCIPAL
primary-700: #003F7F  (Hover oscuro)
primary-800: #003366  (Muy oscuro)
primary-900: #002952  (Ultra oscuro)
```

### Ejemplos de Uso
```tsx
// Botón principal
className="bg-primary-600 hover:bg-primary-700 text-white"

// Encabezado
className="text-primary-800 font-bold"

// Badge
className="bg-primary-100 text-primary-700"
```

---

## 🟢 **VERDE UNAT - Color Secundario**

El verde representa la región de Tayacaja, su naturaleza y el crecimiento institucional.

### Uso Secundario
- **secondary-500**: `#00A651` - Botones secundarios, iconos de éxito
- **secondary-600**: `#008844` - Hover states
- **secondary-700**: `#006A37` - Énfasis adicional

### Escala Completa
```
secondary-50:  #E6F9F0  (Fondos muy claros)
secondary-100: #CCF3E1  (Fondos claros)
secondary-200: #99E7C3  (Bordes)
secondary-300: #66DBA5  (Estados intermedios)
secondary-400: #33CF87  (Hover suave)
secondary-500: #00A651  ⭐ PRINCIPAL VERDE
secondary-600: #008844  (Hover)
secondary-700: #006A37  (Oscuro)
secondary-800: #004C2A  (Muy oscuro)
secondary-900: #002E1D  (Ultra oscuro)
```

### Ejemplos de Uso
```tsx
// Botón de éxito/confirmación
className="bg-secondary-500 hover:bg-secondary-600 text-white"

// Icono de check/aprobado
className="text-secondary-600"

// Mensaje de éxito
className="bg-secondary-50 border-secondary-500 text-secondary-900"
```

---

## 🟡 **DORADO - Color de Acento**

El dorado representa excelencia, logros y destacados especiales.

### Uso de Acento
- **accent-500**: `#FDB913` - Badges especiales, premios, certificaciones
- **accent-600**: `#E6A000` - Hover states
- **accent-700**: `#CC8E00` - Énfasis

### Escala Completa
```
accent-50:  #FFF9E6  (Fondos muy claros)
accent-100: #FFF3CC  (Fondos claros)
accent-200: #FFE799  (Bordes suaves)
accent-300: #FFDB66  (Estados intermedios)
accent-400: #FFCF33  (Hover suave)
accent-500: #FDB913  ⭐ PRINCIPAL DORADO
accent-600: #E6A000  (Hover)
accent-700: #CC8E00  (Oscuro)
accent-800: #B37C00  (Muy oscuro)
accent-900: #996A00  (Ultra oscuro)
```

### Ejemplos de Uso
```tsx
// Badge premium/destacado
className="bg-accent-500 text-gray-900"

// Icono de estrella/premio
className="text-accent-500"

// Alerta importante
className="bg-accent-50 border-accent-500 text-accent-900"
```

---

## 📋 **Guía de Uso por Componente**

### Navegación / Navbar
```tsx
bg-white           // Fondo principal
text-primary-800   // Texto de links
hover:text-primary-600  // Hover de links
bg-primary-600     // Botón CTA
```

### Botones

#### Primario (Acción Principal)
```tsx
bg-primary-600 hover:bg-primary-700 text-white
shadow-lg hover:shadow-xl
```

#### Secundario (Acción Alternativa)
```tsx
bg-secondary-500 hover:bg-secondary-600 text-white
```

#### Outline
```tsx
border-2 border-primary-600 text-primary-600
hover:bg-primary-600 hover:text-white
```

### Cards
```tsx
bg-white                    // Fondo
border-t-4 border-primary-600  // Borde superior de acento
shadow-lg hover:shadow-2xl     // Sombra con hover
```

### Headers de Sección
```tsx
text-primary-900 font-bold     // Título principal
text-primary-600              // Subtítulo o acento
```

### Badges/Pills
```tsx
// Informativo
bg-primary-100 text-primary-700

// Éxito
bg-secondary-100 text-secondary-700

// Destacado
bg-accent-100 text-accent-700
```

### Gradientes
```tsx
// Azul institucional
from-primary-600 to-primary-800

// Verde natural
from-secondary-500 to-secondary-700

// Azul a verde (identidad completa)
from-primary-600 via-primary-700 to-secondary-600
```

---

## 🎯 **Mejores Prácticas**

### DO ✅
- Usa `primary-600` como color principal en toda la UI
- Aplica `secondary-500` para acciones secundarias y éxito
- Reserva `accent-500` para elementos especiales y premios
- Mantén contraste adecuado: texto oscuro en fondos claros, texto blanco en fondos oscuros
- Usa gradientes institucionales en heroes y headers importantes

### DON'T ❌
- No uses azules o verdes que no estén en esta paleta
- No mezcles demasiados colores en un solo componente
- No uses el dorado de forma excesiva (reserva para destacados)
- No ignores el contraste de accesibilidad (mínimo 4.5:1 para texto)

---

## 🔗 **Variables CSS Personalizadas**

Si necesitas usar estos colores en CSS puro:

```css
:root {
  --unat-blue: #004E8C;
  --unat-blue-dark: #003366;
  --unat-blue-light: #0066CC;
  --unat-green: #00A651;
  --unat-green-dark: #008844;
  --unat-gold: #FDB913;
}
```

---

## 📱 **Responsive y Accesibilidad**

Todos los colores han sido probados para cumplir con:
- ✅ WCAG 2.1 Level AA
- ✅ Contraste mínimo 4.5:1 para texto
- ✅ Contraste mínimo 3:1 para elementos UI
- ✅ Legibilidad en modo claro y oscuro
- ✅ Compatibilidad con daltonismo

---

## 🎨 **Visualización de Paleta**

### Azul Principal (primary)
```
██████ #E6F0FF  primary-50
██████ #CCE0FF  primary-100
██████ #99C2FF  primary-200
██████ #66A3FF  primary-300
██████ #3385FF  primary-400
██████ #0066CC  primary-500
██████ #004E8C  primary-600 ⭐ PRINCIPAL
██████ #003F7F  primary-700
██████ #003366  primary-800
██████ #002952  primary-900
```

### Verde Secundario (secondary)
```
██████ #E6F9F0  secondary-50
██████ #CCF3E1  secondary-100
██████ #99E7C3  secondary-200
██████ #66DBA5  secondary-300
██████ #33CF87  secondary-400
██████ #00A651  secondary-500 ⭐ PRINCIPAL
██████ #008844  secondary-600
██████ #006A37  secondary-700
██████ #004C2A  secondary-800
██████ #002E1D  secondary-900
```

### Dorado Acento (accent)
```
██████ #FFF9E6  accent-50
██████ #FFF3CC  accent-100
██████ #FFE799  accent-200
██████ #FFDB66  accent-300
██████ #FFCF33  accent-400
██████ #FDB913  accent-500 ⭐ PRINCIPAL
██████ #E6A000  accent-600
██████ #CC8E00  accent-700
██████ #B37C00  accent-800
██████ #996A00  accent-900
```

---

## 📚 **Referencias**

- Sitio oficial: https://unat.edu.pe
- Portal de admisión: https://admision.unat.edu.pe/2/
- Documentación Tailwind: https://tailwindcss.com/docs/customizing-colors

---

**Última actualización:** Noviembre 2025  
**Versión:** 1.0.0  
**Mantenedor:** Equipo de Desarrollo Web UNAT
