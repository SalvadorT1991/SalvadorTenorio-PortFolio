import type { LocalizedString } from "@/types/content";

export const processContent = {
  eyebrow: {
    es: "Método",
    en: "Approach",
  } satisfies LocalizedString,
  title: {
    es: "Cómo trabajo con equipos y stakeholders",
    en: "How I work with teams and stakeholders",
  } satisfies LocalizedString,
  description: {
    es: "Un ciclo claro de discovery a entrega — con arquitectura explícita y foco en operación real.",
    en: "A clear path from discovery to delivery — with explicit architecture and a focus on real operations.",
  } satisfies LocalizedString,
  architectureTitle: {
    es: "Vista de arquitectura típica",
    en: "Typical architecture view",
  } satisfies LocalizedString,
  architectureCaption: {
    es: "Clientes y APIs .NET, datos relacionales, mensajería y observabilidad — acoplados con intención.",
    en: "Clients and .NET APIs, relational data, messaging, and observability — coupled with intent.",
  } satisfies LocalizedString,
};

export const processSteps = [
  {
    id: "discover",
    number: "01",
    title: {
      es: "Descubrir",
      en: "Discover",
    } satisfies LocalizedString,
    description: {
      es: "Entiendo el problema de negocio, restricciones, riesgos y el estado real del sistema — no solo el ticket.",
      en: "I clarify the business problem, constraints, risks, and the system's real state — not just the ticket.",
    } satisfies LocalizedString,
  },
  {
    id: "architect",
    number: "02",
    title: {
      es: "Arquitectar",
      en: "Architect",
    } satisfies LocalizedString,
    description: {
      es: "Defino límites, contratos, datos y trade-offs. La solución debe ser mantenible por el equipo después.",
      en: "I define boundaries, contracts, data, and trade-offs. The solution must stay maintainable by the team afterward.",
    } satisfies LocalizedString,
  },
  {
    id: "build",
    number: "03",
    title: {
      es: "Construir e integrar",
      en: "Build & integrate",
    } satisfies LocalizedString,
    description: {
      es: "Implemento backend/frontend, integraciones y flujos — con calidad, seguridad y revisiones en el camino.",
      en: "I implement backend/frontend, integrations, and flows — with quality, security, and reviews along the way.",
    } satisfies LocalizedString,
  },
  {
    id: "deliver",
    number: "04",
    title: {
      es: "Endurecer y entregar",
      en: "Harden & deliver",
    } satisfies LocalizedString,
    description: {
      es: "Valido en escenarios reales, estabilizo producción y dejo la entrega operable, no solo desplegada.",
      en: "I validate against real scenarios, stabilize production, and leave the delivery operable — not just deployed.",
    } satisfies LocalizedString,
  },
];

export const proofItems = [
  {
    id: "years",
    label: {
      es: "10+ años",
      en: "10+ years",
    } satisfies LocalizedString,
    detail: {
      es: "Software empresarial",
      en: "Enterprise software",
    } satisfies LocalizedString,
  },
  {
    id: "education",
    label: {
      es: "Ingeniería",
      en: "Engineering degree",
    } satisfies LocalizedString,
    detail: {
      es: "ITS Lerdo · 2012",
      en: "ITS Lerdo · 2012",
    } satisfies LocalizedString,
  },
  {
    id: "ethics",
    label: {
      es: "Ética profesional",
      en: "Professional ethics",
    } satisfies LocalizedString,
    detail: {
      es: "Juramento ITS Lerdo",
      en: "ITS Lerdo oath",
    } satisfies LocalizedString,
  },
  {
    id: "domains",
    label: {
      es: "Dominios",
      en: "Domains",
    } satisfies LocalizedString,
    detail: {
      es: ".NET · Azure · Angular",
      en: ".NET · Azure · Angular",
    } satisfies LocalizedString,
  },
];
