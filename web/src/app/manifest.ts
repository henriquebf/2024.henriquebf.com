import type { MetadataRoute } from "next";
import { siteDescription, siteName, themeColor } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Henrique",
    description: siteDescription,
    start_url: "/",
    display: "browser",
    background_color: themeColor,
    theme_color: themeColor,
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
