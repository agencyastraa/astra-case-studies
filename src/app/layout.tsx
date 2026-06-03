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
  title: "Case Studies · Astra Agency",
  description:
    "Real brands. Real numbers. Every case below came to us with a real problem — here's what happened when we got to work.",
  openGraph: {
    title: "Case Studies · Astra Agency",
    description:
      "Real brands. Real numbers. Every case below came to us with a real problem — here's what happened when we got to work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
