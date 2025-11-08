import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEOHead({
  title = 'UNAT - Universidad Nacional Autónoma de Tayacaja',
  description = 'Universidad Nacional Autónoma de Tayacaja Daniel Hernández Morillo. Formación profesional de excelencia en Pampas, Tayacaja, Huancavelica, Perú. Admisión 2025.',
  canonical = 'https://unat.edu.pe',
  ogImage = '/images/logos/logo.png',
}: SEOHeadProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Universidad Nacional Autónoma de Tayacaja Daniel Hernández Morillo',
    alternateName: 'UNAT',
    url: 'https://unat.edu.pe',
    logo: 'https://unat.edu.pe/images/logos/logo.png',
    description:
      'Universidad pública peruana comprometida con la formación profesional de excelencia y el desarrollo regional de Tayacaja y Huancavelica.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jr. Bolognesi N° 418',
      addressLocality: 'Pampas',
      addressRegion: 'Tayacaja',
      postalCode: '09156',
      addressCountry: 'PE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+51-067-453016',
      contactType: 'Admissions',
      areaServed: 'PE',
      availableLanguage: ['Spanish'],
    },
    sameAs: [
      'https://www.facebook.com/UNAT.Oficial',
      'https://www.instagram.com/unat.oficial',
      'https://twitter.com/UNAT_Oficial',
      'https://www.youtube.com/@UNATOficial',
    ],
    department: [
      {
        '@type': 'EducationalOrganization',
        name: 'Escuela Profesional de Ingeniería de Sistemas',
        description: 'Formación en desarrollo de software, redes, bases de datos y tecnologías emergentes',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Escuela Profesional de Ingeniería Civil',
        description: 'Formación en construcción, infraestructura y desarrollo urbano sostenible',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Escuela Profesional de Educación',
        description: 'Formación de docentes con enfoque en pedagogía moderna e inclusión educativa',
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'UNAT',
    url: 'https://unat.edu.pe',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://unat.edu.pe/buscar?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://unat.edu.pe',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Admisión',
        item: 'https://unat.edu.pe/admision',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Carreras',
        item: 'https://unat.edu.pe/carreras',
      },
    ],
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="UNAT, Universidad Tayacaja, universidad pública Perú, Huancavelica, admisión 2025, ingeniería de sistemas, ingeniería civil, educación, carreras profesionales, universidad nacional" />
      <meta name="author" content="UNAT" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="es" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="UNAT" />
      <meta property="og:locale" content="es_PE" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@UNAT_Oficial" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#800020" />
      <meta name="msapplication-TileColor" content="#800020" />

      {/* Geo Tags */}
      <meta name="geo.region" content="PE-HV" />
      <meta name="geo.placename" content="Pampas, Tayacaja, Huancavelica" />
      <meta name="geo.position" content="-12.3922;-74.8701" />
      <meta name="ICBM" content="-12.3922, -74.8701" />

      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </Head>
  );
}
