import type { Locale, LocalizedString } from "@/types/content";

export const aboutContent: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    educationLabel: string;
    education: string;
  }
> = {
  es: {
    eyebrow: "Sobre mí",
    title: "De sistemas de planta a plataformas empresariales en la nube",
    paragraphs: [
      "Soy Salvador Tenorio Alba, Lead Software Architect y Senior Full Stack Engineer con más de diez años construyendo, modernizando y estabilizando software empresarial. Mi trabajo conecta necesidades de negocio con arquitectura técnica ejecutable: APIs confiables, datos bien modelados y experiencias que los equipos pueden operar en producción.",
      "He participado en plataformas B2B/B2C, modernización de aplicaciones legacy, microservicios orientados a eventos y diagnóstico de fallos en sistemas distribuidos. El núcleo de mi stack es .NET y C#, complementado con Angular, SQL Server y Azure, siempre con foco en seguridad, mantenibilidad y calidad.",
      "Como freelance a través de STA Solutions, trabajo con equipos de producto, operaciones y tecnología — en remoto con organizaciones en México y Estados Unidos — para entregar soluciones que resisten el uso real, no solo el demo.",
    ],
    educationLabel: "Formación",
    education:
      "Ingeniería en Desarrollo de Software — Instituto Tecnológico Superior de Lerdo (2012)",
  },
  en: {
    eyebrow: "About",
    title: "From plant-floor systems to cloud enterprise platforms",
    paragraphs: [
      "I'm Salvador Tenorio Alba — a Lead Software Architect and Senior Full Stack Engineer with over ten years building, modernizing, and stabilizing enterprise software. My work connects business needs with executable technical architecture: reliable APIs, well-modeled data, and experiences teams can run in production.",
      "I've delivered across B2B/B2C platforms, legacy modernization, event-driven microservices, and production troubleshooting in distributed systems. My core stack is .NET and C#, complemented by Angular, SQL Server, and Azure — always with security, maintainability, and quality in focus.",
      "Through STA Solutions, I work freelance with product, operations, and engineering teams — remotely with organizations in Mexico and the United States — to ship solutions that hold up under real use, not just demos.",
    ],
    educationLabel: "Education",
    education:
      "Bachelor of Engineering, Software Development — Instituto Tecnológico Superior de Lerdo (2012)",
  },
};

export const sectionLabels = {
  experience: {
    eyebrow: { es: "Trayectoria", en: "Career path" },
    title: {
      es: "Experiencia profesional",
      en: "Professional experience",
    },
    description: {
      es: "Los roles recientes se muestran abiertos; el resto se puede expandir para revisar el detalle.",
      en: "Recent roles are expanded by default — open earlier roles when you want the detail.",
    },
    featured: {
      es: "Roles recientes",
      en: "Recent roles",
    },
    earlier: {
      es: "Trayectoria previa",
      en: "Earlier career",
    },
    clients: { es: "Cliente", en: "Client" },
    tech: { es: "Tecnologías", en: "Technologies" },
  },
  projects: {
    eyebrow: { es: "Casos de estudio", en: "Case studies" },
    title: {
      es: "Proyectos seleccionados",
      en: "Selected work",
    },
    description: {
      es: "Problemas reales, decisiones técnicas y resultados — sin métricas inventadas.",
      en: "Real problems, technical decisions, and outcomes — no invented metrics.",
    },
    result: { es: "Resultado", en: "Outcome" },
    context: { es: "Contexto", en: "Context" },
    challenge: { es: "Reto", en: "Challenge" },
    solution: { es: "Solución", en: "Solution" },
    architecture: { es: "Arquitectura", en: "Architecture" },
    impact: { es: "Impacto", en: "Impact" },
  },
  expertise: {
    eyebrow: { es: "Especialización", en: "Focus areas" },
    title: {
      es: "Dónde aporto más valor",
      en: "Where I create the most value",
    },
  },
} as const;

export function tLabel(
  map: LocalizedString,
  locale: Locale,
): string {
  return map[locale];
}
