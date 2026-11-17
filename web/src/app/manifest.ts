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
      {
        src: "/favicon.png",
        sizes: "1080x1080",
        type: "image/png",
      },
    ],
  };
}
