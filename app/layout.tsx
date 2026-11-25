import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/* Títulos: Plus Jakarta Sans (geométrica, firme, corporativa). Texto corrido: Inter (legibilidade máxima em tela). */
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "JG Limpeza de Estofados | Franca/SP e região",
  description:
    "Limpeza e higienização profissional de sofás, poltronas, cadeiras, tapetes e bancos de carro em Franca/SP e região. Peça seu orçamento pelo WhatsApp.",
  openGraph: {
    title: "JG Limpeza de Estofados",
    description: "Seu estofado limpo de verdade. Franca/SP e região.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#F2F5F9", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
