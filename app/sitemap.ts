import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/talent", "/about", "/contact", "/privacy"];
  return routes.map((route) => ({ url: `https://infinity-datalabs.com${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route === "/contact" ? 0.8 : 0.9 }));
}
