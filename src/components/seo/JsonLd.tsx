import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import type { Locale } from "@/types/content";

type JsonLdProps = {
  locale: Locale;
};

export function JsonLd({ locale }: JsonLdProps) {
  const email = profile.socials.find((s) => s.id === "email")?.display;
  const sameAs = profile.socials
    .filter((s) => s.enabled && (s.id === "linkedin" || s.id === "github"))
    .map((s) => s.href);

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    jobTitle: profile.positioning[locale],
    description:
      locale === "es"
        ? "Arquitecto de software y Full Stack Senior especializado en sistemas empresariales .NET, modernización y entrega confiable."
        : "Lead Software Architect and Senior Full Stack Engineer specializing in enterprise .NET systems, modernization, and reliable delivery.",
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}${profile.photo.src}`,
    email,
    telephone: profile.socials.find((s) => s.id === "phone" && s.enabled)
      ?.display,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guadalajara",
      addressRegion: "Jalisco",
      addressCountry: "MX",
    },
    worksFor: {
      "@type": "Organization",
      name: profile.practiceName,
    },
    sameAs,
    knowsAbout: [
      "Software Architecture",
      ".NET",
      "C#",
      "Enterprise Systems",
      "Cloud Modernization",
      "Full Stack Engineering",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
