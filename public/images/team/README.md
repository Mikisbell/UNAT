# Fotos de la Comisión Organizadora

Coloca aquí las fotos de los miembros de la comisión organizadora.

## Especificaciones:

- **Formato:** JPG o PNG
- **Tamaño recomendado:** 400x400px (cuadrado)
- **Peso máximo:** 200KB
- **Fondo:** Preferiblemente neutro o profesional
- **Calidad:** Alta resolución, bien iluminada

## Nombres de archivo:

Usa nombres descriptivos, por ejemplo:
- `presidente.jpg`
- `secretaria.jpg`
- `coordinador.jpg`
- etc.

## Foto placeholder:

Mientras no tengas fotos reales, el sistema usa `placeholder.jpg`.
Puedes crear un placeholder descargando una imagen genérica de avatar profesional.

## Actualizar en el código:

Edita el archivo `/components/ComisionOrganizadora.tsx` y cambia las rutas:

```typescript
{
  nombre: "Dr. Juan Pérez García",
  cargo: "PRESIDENTE DE COMISIÓN",
  foto: "/images/team/presidente.jpg",  // ← Cambia aquí
  id: "COM-001"
}
```
