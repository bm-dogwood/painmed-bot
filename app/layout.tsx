import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PAINMED.BOT - Independent Drug Reference Tool",
    template: "%s | PAINMED.BOT",
  },
  description:
    "The independent reference for what's in your pillbox. Compare OTC medications, lookup prescriptions, check interactions, and find pharmacy prices using FDA, NIH, and OpenStates open data.",
  keywords: [
    "drug reference",
    "medication comparison",
    "OTC compare",
    "prescription lookup",
    "drug interactions",
    "pharmacy prices",
    "opioid laws",
  ],
  authors: [{ name: "PAINMED.BOT" }],
  creator: "PAINMED.BOT",
  publisher: "PAINMED.BOT",
  metadataBase: new URL("https://painmed.bot"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PAINMED.BOT - Independent Drug Reference Tool",
    description:
      "The independent reference for what's in your pillbox. Built on FDA, NIH, and OpenStates open data.",
    url: "https://painmed.bot",
    siteName: "PAINMED.BOT",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "PAINMED.BOT - Drug Reference Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAINMED.BOT - Independent Drug Reference Tool",
    description:
      "The independent reference for what's in your pillbox. Built on FDA, NIH, and OpenStates open data.",
    images: ["/hero.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1 pt-24">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
