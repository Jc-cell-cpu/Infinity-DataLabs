import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Infinity DataLabs", short_name: "Infinity", description: "AI and software engineering partner.", start_url: "/", display: "standalone", background_color: "#05070c", theme_color: "#05070c", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}
