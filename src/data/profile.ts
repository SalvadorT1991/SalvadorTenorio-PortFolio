import type { LocalizedString, SocialLink } from "@/types/content";

/**
 * Confirmed profile data for the public portfolio.
 * Do not add unverified URLs or private data here.
 */
export const profile = {
  fullName: "Salvador Tenorio Alba",
  shortName: "Salvador Tenorio",
  brandMark: "STA",
  /** Freelance practice name — secondary to personal brand */
  practiceName: "STA Solutions",
  /** Positioning for the site — not a claim of a past exact job title */
  positioning: {
    es: "Lead Software Architect | Senior Full Stack Engineer",
    en: "Lead Software Architect | Senior Full Stack Engineer",
  } satisfies LocalizedString,
  location: {
    es: "Guadalajara, Jalisco, México",
    en: "Guadalajara, Jalisco, Mexico",
  } satisfies LocalizedString,
  availability: {
    es: "Disponibilidad inmediata",
    en: "Available immediately",
  } satisfies LocalizedString,
  photo: {
    src: "/images/salvador-tenorio-alba.jpg",
    alt: {
      es: "Retrato profesional de Salvador Tenorio Alba",
      en: "Professional portrait of Salvador Tenorio Alba",
    } satisfies LocalizedString,
  },
  gallery: [
    {
      id: "portrait",
      src: "/images/salvador-tenorio-alba.jpg",
      alt: {
        es: "Retrato profesional de Salvador Tenorio Alba",
        en: "Professional portrait of Salvador Tenorio Alba",
      } satisfies LocalizedString,
      caption: {
        es: "Ingeniero en Desarrollo de Software",
        en: "Software Development Engineer",
      } satisfies LocalizedString,
      objectPosition: "center 18%",
    },
    {
      id: "office",
      src: "/images/salvador-office-portrait.jpg",
      alt: {
        es: "Salvador Tenorio Alba en entorno profesional",
        en: "Salvador Tenorio Alba in a professional setting",
      } satisfies LocalizedString,
      caption: {
        es: "Compromiso con la excelencia técnica",
        en: "Committed to technical excellence",
      } satisfies LocalizedString,
      objectPosition: "center 20%",
    },
    {
      id: "ethics-oath",
      src: "/images/salvador-ethics-oath.jpg",
      alt: {
        es: "Salvador Tenorio Alba con el Juramento de Ética Profesional del Instituto Tecnológico Superior de Lerdo",
        en: "Salvador Tenorio Alba with the Professional Ethics Oath from Instituto Tecnológico Superior de Lerdo",
      } satisfies LocalizedString,
      caption: {
        es: "Juramento de Ética Profesional · ITS Lerdo",
        en: "Professional Ethics Oath · ITS Lerdo",
      } satisfies LocalizedString,
      objectPosition: "center 15%",
    },
    {
      id: "signing",
      src: "/images/salvador-signing-oath.jpg",
      alt: {
        es: "Firma del Juramento de Ética Profesional",
        en: "Signing the Professional Ethics Oath",
      } satisfies LocalizedString,
      caption: {
        es: "Ética, responsabilidad y servicio",
        en: "Ethics, responsibility, and service",
      } satisfies LocalizedString,
      objectPosition: "center 35%",
    },
  ],
  commitment: {
    es: "Mi compromiso con cada cliente: claridad técnica, entrega confiable y soluciones que respetan el negocio tanto como el código.",
    en: "My commitment to every client: technical clarity, reliable delivery, and solutions that respect the business as much as the code.",
  } satisfies LocalizedString,
  cv: {
    href: "/cv/salvador-tenorio-alba.pdf",
    /** Authorized by Salvador for public download */
    published: true,
    label: {
      es: "Descargar CV",
      en: "Download CV",
    } satisfies LocalizedString,
  },
  socials: [
    {
      id: "email",
      label: { es: "Email", en: "Email" },
      href: "mailto:salvadortenorioalba@gmail.com",
      display: "salvadortenorioalba@gmail.com",
      enabled: true,
    },
    {
      id: "phone",
      label: { es: "Teléfono", en: "Phone" },
      href: "tel:+523330620779",
      display: "+52 333 062 0779",
      /** Authorized by Salvador for public portfolio */
      enabled: true,
    },
    {
      id: "linkedin",
      label: { es: "LinkedIn", en: "LinkedIn" },
      href: "https://www.linkedin.com/in/salvador-tenorio-alba/",
      display: "linkedin.com/in/salvador-tenorio-alba",
      enabled: true,
    },
    {
      id: "github",
      label: { es: "GitHub", en: "GitHub" },
      href: "https://github.com/SalvadorT1991",
      display: "github.com/SalvadorT1991",
      enabled: true,
    },
  ] satisfies SocialLink[],
} as const;
