import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bonus-calc-six.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://bonus-calc-six.vercel.app/privacy-policy",
      lastModified: new Date(),
    },
  ];
}