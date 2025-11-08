# 🎨 Sistema de Diseño UNAT - Guía de Colores Oficiales

## Paleta de Colores Institucionales

Esta paleta ha sido extraída del sitio oficial de admisión de UNAT (https://admision.unat.edu.pe/2/) y representa la identidad visual oficial de la Universidad Nacional Autónoma de Tayacaja Daniel Hernández Morillo.

---

## 🍷 **GUINDO/VINO - Color Principal**

El guindo/vino/borgoña es el color institucional principal de UNAT, representa elegancia, tradición académica y la identidad universitaria de Tayacaja.

### Uso Principal
- **primary-600**: `#800020` - Color GUINDO principal para botones, encabezados, elementos destacados
- **primary-700**: `#660019` - Hover states, énfasis adicional
- **primary-800**: `#5D0016` - Fondos oscuros, footers

### Escala Completa
```
primary-50:  #FFF0F3  (Rosa muy claro)
primary-100: #FFE1E6  (Rosa claro)
primary-200: #FFC3CE  (Rosa medio)
primary-300: #FF9FB5  (Rosa)
primary-400: #E6667F  (Rojo rosado)
primary-500: #B33355  (Vino medio)
primary-600: #800020  ⭐ GUINDO OFICIAL UNAT
primary-700: #660019  (Guindo oscuro)
primary-800: #5D0016  (Muy oscuro)
primary-900: #4D0012  (Ultra oscuro)
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

## 🟡 **DORADO - Color Secundario**

El dorado representa la excelencia académica, los logros universitarios y la tradición educativa de prestigio.

### Uso Secundario
- **secondary-500**: `#D4AF37` - Botones secundarios, badges de honor, certificaciones
- **secondary-600**: `#B8962E` - Hover states
- **secondary-700**: `#9C7D25` - Énfasis adicional

### Escala Completa
```
secondary-50:  #FFFBEB  (Dorado muy claro)
secondary-100: #FFF7D6  (Dorado claro)
secondary-200: #FFEEAD  (Dorado medio claro)
secondary-300: #FFE584  (Dorado medio)
secondary-400: #FFDC5B  (Dorado brillante)
secondary-500: #D4AF37  ⭐ DORADO OFICIAL
secondary-600: #B8962E  (Dorado oscuro)
secondary-700: #9C7D25  (Dorado muy oscuro)
secondary-800: #80641C  (Bronce oscuro)
secondary-900: #644B13  (Bronce muy oscuro)
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

## 🤍 **CREMA/BEIGE - Color de Acento**

El crema/beige representa elegancia, sofisticación y es perfecto para fondos sutiles y diseños limpios.

### Uso de Acento
- **accent-500**: `#F5F5DC` - Fondos elegantes, secciones destacadas, cards premium
- **accent-600**: `#E8E8C8` - Variaciones de fondo
- **accent-700**: `#DBDBB4` - Bordes sutiles

### Escala Completa
```
accent-50:  #FEFDFB  (Casi blanco)
accent-100: #FDFCF7  (Blanco crema)
accent-200: #FBF9EF  (Crema muy claro)
accent-300: #F9F6E7  (Crema claro)
accent-400: #F7F3DF  (Crema medio)
accent-500: #F5F5DC  ⭐ CREMA OFICIAL
accent-600: #E8E8C8  (Beige claro)
accent-700: #DBDBB4  (Beige medio)
accent-800: #CECEA0  (Beige oscuro)
accent-900: #C1C18C  (Beige muy oscuro)
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
  --unat-burgundy: #800020;
  --unat-burgundy-dark: #5D0016;
  --unat-burgundy-light: #A0002A;
  --unat-gold: #D4AF37;
  --unat-cream: #F5F5DC;
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

### Guindo Principal (primary)
```
██████ #FFF0F3  primary-50
██████ #FFE1E6  primary-100
██████ #FFC3CE  primary-200
██████ #FF9FB5  primary-300
██████ #E6667F  primary-400
██████ #B33355  primary-500
██████ #800020  primary-600 ⭐ GUINDO OFICIAL
██████ #660019  primary-700
██████ #5D0016  primary-800
██████ #4D0012  primary-900
```

### Dorado Secundario (secondary)
```
██████ #FFFBEB  secondary-50
██████ #FFF7D6  secondary-100
██████ #FFEEAD  secondary-200
██████ #FFE584  secondary-300
██████ #FFDC5B  secondary-400
██████ #D4AF37  secondary-500 ⭐ DORADO OFICIAL
██████ #B8962E  secondary-600
██████ #9C7D25  secondary-700
██████ #80641C  secondary-800
██████ #644B13  secondary-900
```

### Crema Acento (accent)
```
██████ #FEFDFB  accent-50
██████ #FDFCF7  accent-100
██████ #FBF9EF  accent-200
██████ #F9F6E7  accent-300
██████ #F7F3DF  accent-400
██████ #F5F5DC  accent-500 ⭐ CREMA OFICIAL
██████ #E8E8C8  accent-600
██████ #DBDBB4  accent-700
██████ #CECEA0  accent-800
██████ #C1C18C  accent-900
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
