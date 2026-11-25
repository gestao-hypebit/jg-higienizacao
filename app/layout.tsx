import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BUSINESS_NAME, SITE_URL } from "@/lib/site";

/* Títulos: Plus Jakarta Sans (geométrica, firme, corporativa). Texto corrido: Inter (legibilidade máxima em tela). */
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const TITLE = "Limpeza e Higienização de Estofados em Franca/SP | J.G";
const DESCRIPTION =
  "Limpeza e higienização de sofás, poltronas, cadeiras, tapetes e bancos de carro em Franca/SP e região. Atendimento no local, com equipamento profissional. Orçamento grátis pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: BUSINESS_NAME,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: BUSINESS_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  formatDetection: { telephone: true },
  other: { "geo.region": "BR-SP", "geo.placename": "Franca" },
};

export const viewport: Viewport = { themeColor: "#F2F5F9", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
