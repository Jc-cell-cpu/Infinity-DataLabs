import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/products", "/talent", "/about", "/contact", "/privacy"];
  return routes.map((route) => ({ url: `${SITE_URL}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route === "/contact" ? 0.8 : 0.9 }));
}
