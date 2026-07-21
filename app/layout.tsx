import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { CursorGlow } from "@/components/motion/cursor-glow";
import { SITE_URL } from "@/lib/site-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Infinity DataLabs — AI & Software Engineering Partner", template: "%s | Infinity DataLabs" },
  description: "Infinity DataLabs builds AI systems, scalable software, secure cloud platforms, and high-performing engineering teams for enterprises, governments, and startups.",
  keywords: ["AI engineering", "agentic AI", "software development", "IT consulting", "resource augmentation", "cloud engineering", "cyber security", "data engineering"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: SITE_URL, siteName: "Infinity DataLabs", title: "Infinity DataLabs — Intelligent systems. Serious engineering.", description: "AI engineering, software platforms, and technology talent for ambitious organizations." },
  twitter: { card: "summary_large_image", title: "Infinity DataLabs", description: "Intelligent systems. Serious engineering." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#05070c", colorScheme: "dark" };

// Organization + WebSite as a linked graph. WebSite is what search engines read to
// pick the site name shown above the result, and the raster logo is what a knowledge
// panel can actually use — Google requires the logo to be a real image of at least
// 112x112px, which an SVG doesn't reliably satisfy.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Infinity DataLabs",
      alternateName: "Infinity Data Labs",
      url: SITE_URL,
      logo: `${SITE_URL}/brand/infinity-datalabs-icon-512.png`,
      image: `${SITE_URL}/brand/infinity-datalabs-icon-512.png`,
      email: "hello@infinity-datalabs.com",
      description: "AI engineering, software engineering, cyber security, data, cloud, and technology resource partner.",
      knowsAbout: ["Agentic AI", "Software Engineering", "Cloud Platforms", "Cyber Security", "Data Engineering", "Quality Engineering"],
      address: { "@type": "PostalAddress", streetAddress: "IDCO Tower", addressLocality: "Bhubaneswar", addressRegion: "Odisha", addressCountry: "IN" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Infinity DataLabs",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}><body className="noise"><a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-white px-4 py-3 text-sm font-semibold text-black transition-transform focus:translate-y-0">Skip to content</a><SmoothScroll /><CursorGlow /><SiteHeader /><main id="main-content">{children}</main><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /></body></html>;
}
