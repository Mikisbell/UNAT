import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "UNAT - Universidad Nacional Autónoma de Tayacaja",
    template: "%s | UNAT"
  },
  description: "Universidad Nacional Autónoma de Tayacaja Daniel Hernández Morillo. Formación profesional de excelencia en Pampas, Tayacaja, Huancavelica, Perú. Admisión 2025 abierta.",
  keywords: ["UNAT", "Universidad Tayacaja", "universidad pública Perú", "Huancavelica", "admisión 2025", "ingeniería de sistemas", "ingeniería civil", "educación", "carreras profesionales", "universidad nacional", "Pampas", "educación superior"],
  authors: [{ name: "UNAT", url: "https://unat.edu.pe" }],
  creator: "UNAT",
  publisher: "Universidad Nacional Autónoma de Tayacaja",
  
  icons: {
    icon: [
      { url: "/images/logos/logo.png" },
      { url: "/images/logos/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logos/logo.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/images/logos/logo.png",
    apple: [
      { url: "/images/logos/logo.png" },
      { url: "/images/logos/logo.png", sizes: "180x180", type: "image/png" }
    ],
  },

  manifest: "/manifest.json",
  
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://unat.edu.pe",
    title: "UNAT - Universidad Nacional Autónoma de Tayacaja",
    description: "Formación profesional de excelencia en Tayacaja, Huancavelica. Admisión 2025.",
    siteName: "UNAT",
    images: [
      {
        url: "/images/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo UNAT - Universidad Nacional Autónoma de Tayacaja",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "UNAT - Universidad Nacional Autónoma de Tayacaja",
    description: "Formación profesional de excelencia en Tayacaja, Huancavelica. Admisión 2025.",
    creator: "@UNAT_Oficial",
    images: ["/images/logos/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },

  alternates: {
    canonical: "https://unat.edu.pe",
    languages: {
      'es-PE': 'https://unat.edu.pe',
    },
  },

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
