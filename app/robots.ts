import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: ["/api/"] }, sitemap: "https://infinity-datalabs.com/sitemap.xml", host: "https://infinity-datalabs.com" };
}
