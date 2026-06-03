import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Casos de Éxito · Astra Agency",
  description:
    "Resultados reales de fundadores que dejaron de adivinar y empezaron a escalar. SaaS, DTC y Healthcare en LATAM.",
  openGraph: {
    title: "Casos de Éxito · Astra Agency",
    description:
      "Resultados reales de fundadores que dejaron de adivinar y empezaron a escalar. SaaS, DTC y Healthcare en LATAM.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${barlowCondensed.variable} ${dmSans.variable}`}
      style={{ fontFamily: "var(--font-body), sans-serif" }}
    >
      <body>{children}</body>
    </html>
  );
}
