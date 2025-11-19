// Google Analytics 4
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Eventos de Google Analytics
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Eventos específicos de UNAT
export const trackAdmissionClick = (modalidad: string) => {
  event({
    action: 'click_admision',
    category: 'Admisión',
    label: modalidad,
  });
};

export const trackCareerView = (carrera: string) => {
  event({
    action: 'view_carrera',
    category: 'Carreras',
    label: carrera,
  });
};

export const trackPDFDownload = (documento: string) => {
  event({
    action: 'download_pdf',
    category: 'Documentos',
    label: documento,
  });
};

export const trackFormSubmit = (formulario: string) => {
  event({
    action: 'submit_form',
    category: 'Formularios',
    label: formulario,
  });
};

export const trackWhatsAppClick = () => {
  event({
    action: 'click_whatsapp',
    category: 'Contacto',
    label: 'WhatsApp Widget',
  });
};

// Meta Pixel
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';

export const pageviewMeta = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

export const trackLeadMeta = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead');
  }
};

export const trackCompleteRegistrationMeta = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration');
  }
};

// Google Ads Conversion
export const trackConversion = (conversionId: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
    });
  }
};

// Types para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
  }
}
