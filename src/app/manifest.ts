import type { MetadataRoute } from "next";
import { siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} — Portfolio`,
    short_name: "STA Portfolio",
    description:
      "Lead Software Architect and Senior Full Stack Engineer — enterprise .NET, modernization, and reliable delivery.",
    start_url: "/es",
    display: "standalone",
    background_color: "#0B1220",
    theme_color: "#0B1220",
    lang: "es",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
