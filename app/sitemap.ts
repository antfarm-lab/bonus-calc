import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bonus-calc.vercel.app/sitemap.xml",

      lastModified: new Date(),

      changeFrequency: "monthly",

      priority: 1,
    },
  ];
}