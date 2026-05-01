import type { Metadata } from "next";

export const SITE_URL = "https://painmed.bot";
export const SITE_NAME = "PainMed.Bot";
export const SITE_DESCRIPTION =
  "AI-powered pain medication comparison, drug interaction checker, and safety tool. Compare Tylenol vs Advil vs Aleve, check drug interactions, and find the best OTC pain reliever.";

export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords: keywords?.join(", "),
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1 },
    },
  };
}

export const SEO_PAGES = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/compare", changefreq: "weekly", priority: 0.9 },
  { url: "/interactions", changefreq: "weekly", priority: 0.9 },
  { url: "/prescriptions", changefreq: "monthly", priority: 0.8 },
  { url: "/opioid-laws", changefreq: "monthly", priority: 0.8 },
  { url: "/prices", changefreq: "daily", priority: 0.8 },
  { url: "/seo/tylenol-vs-advil-vs-aleve", changefreq: "monthly", priority: 0.7 },
  { url: "/seo/best-otc-pain-reliever", changefreq: "monthly", priority: 0.7 },
  { url: "/seo/opioid-prescription-laws-by-state", changefreq: "monthly", priority: 0.7 },
  { url: "/seo/drug-interaction-checker-guide", changefreq: "monthly", priority: 0.7 },
  { url: "/seo/prescription-pain-medication-guide", changefreq: "monthly", priority: 0.7 },
  { url: "/seo/pharmacy-price-comparison-tips", changefreq: "monthly", priority: 0.7 },
  { url: "/seo/nsaid-vs-acetaminophen", changefreq: "monthly", priority: 0.7 },
  { url: "/seo/chronic-pain-management-medications", changefreq: "monthly", priority: 0.7 },
];
