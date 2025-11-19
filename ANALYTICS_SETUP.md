# 📊 Guía de Configuración de Analytics UNAT

## ✅ **YA ESTÁ INSTALADO**

El código de Google Analytics 4 y Meta Pixel ya está integrado en el sitio. Solo necesitas configurar tus IDs.

---

## 🎯 **1. GOOGLE ANALYTICS 4**

### Paso 1: Crear cuenta
1. Ve a https://analytics.google.com/
2. Haz clic en "Comenzar a medir"
3. Nombre de la cuenta: **UNAT**
4. Nombre de la propiedad: **Sitio Web UNAT**

### Paso 2: Configurar propiedad
- Zona horaria: **Peru (GMT-5)**
- Moneda: **PEN (Soles peruanos)**
- Categoría: **Education**

### Paso 3: Configurar flujo de datos
1. Selecciona "Web"
2. URL: **https://unat.edu.pe**
3. Nombre del stream: **Sitio Web UNAT**
4. Habilita medición mejorada

### Paso 4: Obtener ID de medición
- Busca **"ID de medición"** en la configuración
- Formato: `G-XXXXXXXXXX`
- Copia este ID

### Paso 5: Configurar en el proyecto
```bash
# Crea archivo .env.local en la raíz del proyecto
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TU-ID-AQUI
```

---

## 📘 **2. META PIXEL (Facebook Ads)**

### Paso 1: Crear Pixel
1. Ve a https://business.facebook.com/events_manager
2. Haz clic en "Conectar orígenes de datos"
3. Selecciona "Web"
4. Selecciona "Meta Pixel"
5. Nombre: **UNAT Website**

### Paso 2: Obtener Pixel ID
- Busca tu Pixel ID (número de 15 dígitos)
- Formato: `123456789012345`

### Paso 3: Configurar en el proyecto
```bash
# Agrega al archivo .env.local
NEXT_PUBLIC_META_PIXEL_ID=TU-PIXEL-ID-AQUI
```

### Paso 4: Verificar instalación
1. Instala "Meta Pixel Helper" (extensión Chrome)
2. Abre tu sitio
3. Verifica que el pixel esté activo (ícono verde)

---

## 🎨 **3. GOOGLE ADS (Opcional)**

Si usas Google Ads, agrega tu Conversion ID:
```bash
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
```

---

## 📊 **EVENTOS PERSONALIZADOS IMPLEMENTADOS**

Ya están configurados estos eventos específicos de UNAT:

### 1. **Eventos de Admisión**
```typescript
import { trackAdmissionClick } from '@/lib/analytics';

// Cuando hacen clic en inscripción
trackAdmissionClick('Ordinaria');
trackAdmissionClick('Extraordinaria');
```

### 2. **Eventos de Carreras**
```typescript
import { trackCareerView } from '@/lib/analytics';

// Cuando ven una carrera
trackCareerView('Ingeniería Civil');
```

### 3. **Descargas de PDFs**
```typescript
import { trackPDFDownload } from '@/lib/analytics';

// Cuando descargan documentos
trackPDFDownload('Prospecto 2025-I');
trackPDFDownload('Reglamento Ordinario');
```

### 4. **Formularios**
```typescript
import { trackFormSubmit } from '@/lib/analytics';

// Cuando envían un formulario
trackFormSubmit('Contacto');
trackFormSubmit('Inscripción');
```

### 5. **WhatsApp**
```typescript
import { trackWhatsAppClick } from '@/lib/analytics';

// Cuando hacen clic en WhatsApp
trackWhatsAppClick();
```

---

## 🧪 **CÓMO PROBAR QUE FUNCIONA**

### Google Analytics:
1. Ve a https://analytics.google.com/
2. Click en "Informes" > "Tiempo real"
3. Abre tu sitio web
4. Deberías ver tu visita en tiempo real

### Meta Pixel:
1. Instala "Meta Pixel Helper" (Chrome)
2. Abre tu sitio
3. Click en el ícono de la extensión
4. Debe mostrar "Pixel encontrado" en verde

---

## 📈 **REPORTES RECOMENDADOS**

### En Google Analytics 4:

**1. Adquisición:**
- ¿De dónde vienen los visitantes?
- Orgánico, directo, redes sociales, Google Ads

**2. Engagement:**
- ¿Qué páginas ven más?
- ¿Cuánto tiempo permanecen?
- Tasa de rebote

**3. Conversiones:**
- Inscripciones iniciadas
- PDFs descargados
- Formularios enviados

**4. Tiempo Real:**
- Usuarios activos ahora
- Páginas populares en este momento

### En Meta Pixel:

**1. Eventos:**
- PageView (vistas de página)
- Lead (personas interesadas)
- CompleteRegistration (inscripciones)

**2. Audiencias:**
- Crear audiencias personalizadas
- Retargeting de visitantes
- Lookalike audiences

---

## 🎯 **OBJETIVOS SUGERIDOS (KPIs)**

### Fase 1 - Awareness (Conocimiento):
- **10,000 visitantes/mes**
- Tasa de rebote < 60%
- Duración promedio > 2 minutos

### Fase 2 - Consideration (Consideración):
- **500 descargas de prospecto/mes**
- 200 vistas de carreras/día
- 100 clicks en WhatsApp/semana

### Fase 3 - Conversion (Conversión):
- **300 inscripciones/periodo**
- Tasa de conversión > 3%
- 50 formularios de consulta/mes

---

## 🔒 **PRIVACIDAD Y CUMPLIMIENTO**

### IMPORTANTE:
Debes agregar un aviso de cookies y política de privacidad que informe:

1. ✅ Uso de cookies de analytics
2. ✅ Datos recopilados (anónimos)
3. ✅ Propósito (mejorar experiencia)
4. ✅ Opción de rechazo
5. ✅ Cumplimiento GDPR/LGPD

**Sugerencia:** Usa herramientas como:
- Cookiebot
- OneTrust
- Termly

---

## 📞 **SOPORTE**

**Documentación oficial:**
- GA4: https://support.google.com/analytics
- Meta Pixel: https://www.facebook.com/business/help/742478679120153

**Videos tutoriales:**
- GA4: https://www.youtube.com/googleanalytics
- Meta Pixel: https://www.facebook.com/business/learn

---

## ✅ **CHECKLIST DE IMPLEMENTACIÓN**

- [ ] Crear cuenta Google Analytics 4
- [ ] Obtener ID de medición (G-XXXXXXXXXX)
- [ ] Crear Meta Pixel
- [ ] Obtener Pixel ID (15 dígitos)
- [ ] Crear archivo `.env.local` con los IDs
- [ ] Reiniciar servidor de desarrollo
- [ ] Probar con Meta Pixel Helper
- [ ] Verificar en Google Analytics tiempo real
- [ ] Documentar IDs en lugar seguro
- [ ] Configurar alertas de eventos importantes
- [ ] Crear dashboards personalizados

---

**🎉 ¡Una vez configurado, tendrás tracking completo sin escribir más código!**
