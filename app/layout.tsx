import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UNAT - Universidad Nacional Autónoma de Tayacaja",
  description: "Universidad Nacional Autónoma de Tayacaja Daniel Hernández Morillo. Admisión 2025 - Formación profesional de calidad en Pampas, Tayacaja, Huancavelica, Perú.",
  keywords: "UNAT, universidad tayacaja, pampas, admisión 2025, ingeniería, educación superior perú",
  authors: [{ name: "UNAT" }],
  openGraph: {
    title: "UNAT - Universidad Nacional Autónoma de Tayacaja",
    description: "Formación profesional de calidad en Tayacaja, Huancavelica",
    type: "website",
  },
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
