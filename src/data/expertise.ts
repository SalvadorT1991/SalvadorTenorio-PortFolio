import type { ExpertiseArea } from "@/types/content";

/** Six focused expertise areas — denser than a long checklist. */
export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "software-architecture",
    title: {
      es: "Arquitectura de software",
      en: "Software Architecture",
    },
    description: {
      es: "Diseño de sistemas mantenibles, separación de responsabilidades y decisiones técnicas alineadas al negocio.",
      en: "Maintainable system design, clear separation of concerns, and technical decisions tied to business goals.",
    },
  },
  {
    id: "backend-engineering",
    title: {
      es: "Ingeniería backend .NET",
      en: ".NET Backend Engineering",
    },
    description: {
      es: "APIs REST, C# / ASP.NET Core, autenticación, multi-tenancy y servicios listos para producción.",
      en: "REST APIs, C# / ASP.NET Core, authentication, multi-tenancy, and production-ready services.",
    },
  },
  {
    id: "enterprise-applications",
    title: {
      es: "Aplicaciones empresariales",
      en: "Enterprise Applications",
    },
    description: {
      es: "Entrega full-stack en dominios B2B/B2C: workflows complejos, cumplimiento y operación continua.",
      en: "Full-stack delivery in B2B/B2C domains — complex workflows, compliance-aware features, continuous operation.",
    },
  },
  {
    id: "database-design",
    title: {
      es: "Datos y rendimiento SQL",
      en: "Data & SQL Performance",
    },
    description: {
      es: "Modelado relacional, SQL Server, CTEs, stored procedures y optimización en escenarios reales.",
      en: "Relational modeling, SQL Server, CTEs, stored procedures, and optimization in real production scenarios.",
    },
  },
  {
    id: "distributed-cloud",
    title: {
      es: "Sistemas distribuidos y cloud",
      en: "Distributed Systems & Cloud",
    },
    description: {
      es: "Microservicios, RabbitMQ, Azure Functions/App Services, CI/CD y diagnóstico operacional.",
      en: "Microservices, RabbitMQ, Azure Functions/App Services, CI/CD, and operational diagnosis.",
    },
  },
  {
    id: "legacy-modernization",
    title: {
      es: "Modernización legacy",
      en: "Legacy Modernization",
    },
    description: {
      es: "Upgrades de frameworks, remediación OWASP, refactorización y evolución controlada de sistemas existentes.",
      en: "Framework upgrades, OWASP remediation, refactoring, and controlled evolution of existing systems.",
    },
  },
];
