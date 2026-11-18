import type { Locale } from "@/types/content";

export const stackContent: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    coreHint: string;
  }
> = {
  es: {
    eyebrow: "Stack técnico",
    title: "Tecnologías con las que construyo sistemas empresariales",
    description:
      "Enfoque en el ecosistema .NET, datos relacionales y frontend empresarial — con arquitectura, cloud y calidad como capas de soporte.",
    coreHint: "Mayor protagonismo visual en tecnologías centrales de mi práctica.",
  },
  en: {
    eyebrow: "Technical stack",
    title: "Technologies I use to build enterprise systems",
    description:
      "Centered on the .NET ecosystem, relational data, and enterprise frontend — with architecture, cloud, and quality as supporting layers.",
    coreHint: "Visual emphasis highlights core technologies in my practice.",
  },
};

export const contactContent: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    locationLabel: string;
    ctaEmail: string;
    availability: string;
    formLabel: string;
  }
> = {
  es: {
    eyebrow: "Contacto",
    title: "Hablemos de tu próximo sistema",
    description:
      "Si buscas arquitectura .NET, modernización de aplicaciones empresariales o liderazgo técnico full-stack, escríbeme. Respondo con claridad y enfoque práctico.",
    locationLabel: "Ubicación",
    ctaEmail: "Email directo",
    availability: "Disponibilidad inmediata",
    formLabel: "Mensaje rápido",
  },
  en: {
    eyebrow: "Contact",
    title: "Let's talk about your next system",
    description:
      "Looking for .NET architecture, enterprise modernization, or senior full-stack leadership? Reach out — I reply with clarity and a practical focus.",
    locationLabel: "Location",
    ctaEmail: "Direct email",
    availability: "Available immediately",
    formLabel: "Quick message",
  },
};
