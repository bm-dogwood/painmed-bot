import { MetadataRoute } from "next";
import { SITE_URL, SEO_PAGES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return SEO_PAGES.map(({ url, changefreq, priority }) => ({
    url: `${SITE_URL}${url}`,
    lastModified: now,
    changeFrequency: changefreq as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority,
  }));
}
