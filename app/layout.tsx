import type { Metadata } from "next";
import { Inter, Source_Sans_3, Source_Serif_4, Oswald } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: '--font-source-sans',
  display: 'swap',
});
const sourceSerif = Source_Serif_4({ 
  subsets: ["latin"],
  variable: '--font-source-serif',
  display: 'swap',
});
const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'UNAT - Universidad Nacional Autónoma de Tayacaja | Admisión 2025',
  description: 'Universidad Nacional Autónoma de Tayacaja (UNAT). 5 carreras profesionales acreditadas. Admisión 2025-I 100% gratuita. Campus en Pampas, Huancavelica. Excelencia académica y desarrollo regional.',
  keywords: ['UNAT', 'universidad tayacaja', 'admision unat', 'carreras universitarias', 'universidad huancavelica', 'ingenieria civil', 'enfermeria', 'universidad publica'],
  authors: [{ name: 'UNAT' }],
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
        url: "/images/campus/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Campus UNAT Tayacaja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNAT - Universidad Nacional Autónoma de Tayacaja",
    description: "Formación profesional de excelencia en Tayacaja, Huancavelica. Admisión 2025.",
    creator: "@UNAT_Oficial",
    images: ["/images/campus/hero-background.jpg"],
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
    <html lang="es" className="scroll-smooth m-0 p-0">
      <body className={`${inter.className} ${sourceSans.variable} ${sourceSerif.variable} ${oswald.variable} antialiased m-0 p-0`} style={{ margin: 0, padding: 0 }}>
        <GoogleAnalytics />
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
