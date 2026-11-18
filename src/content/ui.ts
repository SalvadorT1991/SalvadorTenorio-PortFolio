import type { Locale } from "@/types/content";

type UiDictionary = {
  navAria: string;
  openMenu: string;
  closeMenu: string;
  language: string;
  skipToContent: string;
  practiceLine: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubhead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  footerRights: string;
  footerNav: string;
};

export const ui: Record<Locale, UiDictionary> = {
  es: {
    navAria: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    skipToContent: "Saltar al contenido",
    practiceLine: "Freelance · STA Solutions",
    heroEyebrow: "Portfolio profesional",
    heroHeadline:
      "Software empresarial que escala — arquitectura, modernización y entrega confiable.",
    heroSubhead:
      "Ayudo a equipos y organizaciones a convertir desafíos de negocio complejos en sistemas .NET robustos, mantenibles y listos para producción.",
    ctaPrimary: "Hablemos",
    ctaSecondary: "Ver experiencia",
    footerRights: "Todos los derechos reservados.",
    footerNav: "Navegación",
  },
  en: {
    navAria: "Primary navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    skipToContent: "Skip to content",
    practiceLine: "Freelance · STA Solutions",
    heroEyebrow: "Professional portfolio",
    heroHeadline:
      "Enterprise software that scales — architecture, modernization, and reliable delivery.",
    heroSubhead:
      "I help teams and organizations turn complex business challenges into robust, maintainable .NET systems ready for production.",
    ctaPrimary: "Let's talk",
    ctaSecondary: "View experience",
    footerRights: "All rights reserved.",
    footerNav: "Navigation",
  },
};
