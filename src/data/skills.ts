import type { SkillGroup } from "@/types/content";

/**
 * Technical stack for the public portfolio.
 * Only technologies backed by the CV or confirmed project brief.
 * `emphasis: "core"` = visual priority, not a proficiency meter.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: { es: "Backend & APIs", en: "Backend & APIs" },
    description: {
      es: "Servicios empresariales, APIs seguras y acceso a datos en el ecosistema .NET.",
      en: "Enterprise services, secure APIs, and data access on the .NET ecosystem.",
    },
    prominence: "primary",
    items: [
      { name: "C#", emphasis: "core" },
      { name: ".NET / ASP.NET Core", emphasis: "core" },
      { name: "ASP.NET MVC", emphasis: "standard" },
      { name: "REST APIs", emphasis: "core" },
      { name: "Entity Framework", emphasis: "standard" },
      { name: "Dapper", emphasis: "standard" },
    ],
  },
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    description: {
      es: "Interfaces empresariales y SPAs para flujos de negocio complejos.",
      en: "Enterprise interfaces and SPAs for complex business workflows.",
    },
    prominence: "primary",
    items: [
      { name: "Angular", emphasis: "core" },
      { name: "AngularJS", emphasis: "standard" },
      { name: "TypeScript", emphasis: "core" },
      { name: "JavaScript", emphasis: "standard" },
      { name: "Vue.js", emphasis: "standard" },
    ],
  },
  {
    id: "databases",
    title: { es: "Bases de datos", en: "Databases" },
    description: {
      es: "Diseño relacional y rendimiento en entornos de producción.",
      en: "Relational design and performance in production environments.",
    },
    prominence: "primary",
    items: [
      { name: "SQL Server", emphasis: "core" },
      { name: "PostgreSQL", emphasis: "standard" },
    ],
  },
  {
    id: "cloud-devops",
    title: { es: "Cloud & DevOps", en: "Cloud & DevOps" },
    description: {
      es: "Entrega continua y operación en la nube de Microsoft.",
      en: "Continuous delivery and operations on Microsoft Azure.",
    },
    prominence: "secondary",
    items: [
      { name: "Microsoft Azure", emphasis: "core" },
      { name: "CI/CD", emphasis: "standard" },
      { name: "Git", emphasis: "standard" },
      { name: "SonarCloud", emphasis: "standard" },
    ],
  },
  {
    id: "architecture",
    title: {
      es: "Arquitectura e integración",
      en: "Architecture & Integration",
    },
    description: {
      es: "Sistemas distribuidos, mensajería y comunicación en tiempo real.",
      en: "Distributed systems, messaging, and real-time communication.",
    },
    prominence: "secondary",
    items: [
      { name: "Microservices", emphasis: "core" },
      { name: "Event-driven architecture", emphasis: "standard" },
      { name: "RabbitMQ", emphasis: "standard" },
      { name: "SignalR", emphasis: "standard" },
    ],
  },
  {
    id: "quality-security",
    title: {
      es: "Calidad y seguridad",
      en: "Quality & Security",
    },
    description: {
      es: "Prácticas de seguridad, observabilidad y calidad de software.",
      en: "Security practices, observability, and software quality.",
    },
    prominence: "secondary",
    items: [
      { name: "OWASP", emphasis: "core" },
      { name: "Application Insights", emphasis: "standard" },
      { name: "Datadog", emphasis: "standard" },
      { name: "Automated Testing", emphasis: "standard" },
    ],
  },
];
