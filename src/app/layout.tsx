import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Source_Sans_3 } from "next/font/google";
import { siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1220",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Lead Software Architect`,
    template: "%s",
  },
  applicationName: `${siteName} Portfolio`,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  keywords: [
    "Salvador Tenorio Alba",
    "Lead Software Architect",
    "Senior Full Stack Engineer",
    ".NET",
    "C#",
    "enterprise software",
    "STA Solutions",
    "Guadalajara",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  description:
    "Lead Software Architect and Senior Full Stack Engineer specializing in enterprise .NET systems, modernization, and reliable delivery.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: ["en_US"],
    title: `${siteName} | Lead Software Architect`,
    description:
      "Enterprise software architecture, .NET engineering, and modernization — STA Solutions.",
    siteName,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Lead Software Architect`,
    description:
      "Enterprise software architecture, .NET engineering, and modernization.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${instrumentSans.variable} ${sourceSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-canvas font-sans text-ink">{children}</body>
    </html>
  );
}
