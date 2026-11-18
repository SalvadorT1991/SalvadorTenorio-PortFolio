import type { ExperienceEntry } from "@/types/content";

/**
 * Professional timeline — dates confirmed by Salvador (2026-11-16).
 * Capgemini and Intro Software retained from CV to cover chronological gaps;
 * remove if Salvador requests exclusion.
 */
export const experience: ExperienceEntry[] = [
  {
    id: "inhabit-western-reporting",
    company: "Inhabit / Western Reporting",
    location: {
      es: "Salt Lake City, UT (Remoto)",
      en: "Salt Lake City, UT (Remote)",
    },
    title: {
      es: "Senior Full-Stack Software Engineer",
      en: "Senior Full-Stack Software Engineer",
    },
    period: {
      es: "Feb 2026 — Actualidad",
      en: "Feb 2026 — Present",
    },
    startYear: 2026,
    endYear: null,
    isCurrent: true,
    summary: {
      es: "Arquitectura y mantenimiento de módulos B2B/B2C para CreditPath, plataforma empresarial de reporte de renta con feeds automatizados a burós de crédito.",
      en: "Architected and maintained B2B/B2C modules for CreditPath, an enterprise rent-reporting platform delivering automated data feeds to credit bureaus.",
    },
    highlights: [
      {
        es: "Flujos frontend complejos con Angular y TypeScript.",
        en: "Complex frontend workflows with Angular and TypeScript.",
      },
      {
        es: "APIs REST seguras con C# / .NET Core, JWT y control multi-tenant por roles.",
        en: "Secure REST APIs with C# / .NET Core, JWT authentication, and multi-tenant role guarding.",
      },
      {
        es: "Auditoría de calidad en módulos Platform Admin (/clients, /disputes) alineados a Metro 2 y SLAs FCRA.",
        en: "Quality audit for Platform Admin modules (/clients, /disputes) aligned with Metro 2 structures and FCRA dispute SLAs.",
      },
    ],
    technologies: [
      "C#",
      ".NET Core",
      "Angular",
      "TypeScript",
      "REST APIs",
      "JWT",
    ],
    featured: true,
    status: "confirmed",
  },
  {
    id: "capgemini",
    company: "Capgemini",
    location: {
      es: "Dallas, TX (Remoto)",
      en: "Dallas, TX (Remote)",
    },
    title: {
      es: ".NET / Angular Developer",
      en: ".NET / Angular Developer",
    },
    period: {
      es: "Feb 2025 — Feb 2026",
      en: "Feb 2025 — Feb 2026",
    },
    startYear: 2025,
    endYear: 2026,
    isCurrent: false,
    summary: {
      es: "Desarrollo full-stack empresarial con C#, .NET Core Web APIs y Angular; estabilidad, migraciones e integraciones cloud en Azure.",
      en: "Full-stack enterprise delivery with C#, .NET Core Web APIs, and Angular — defect resolution, migrations, and Azure cloud solutions.",
    },
    highlights: [
      {
        es: "Resolución de defectos en backend .NET y frontend Angular con análisis de causa raíz.",
        en: "Resolved defects across .NET backend and Angular frontend through root-cause analysis.",
      },
      {
        es: "Migración de APIs legacy e integración de componentes con Angular, Vue.js y TypeScript.",
        en: "Migrated legacy APIs and integrated frontend components using Angular, Vue.js, and TypeScript.",
      },
      {
        es: "Soluciones en Azure Functions y App Services con prácticas DevOps.",
        en: "Built and maintained Azure Functions and App Services solutions with DevOps practices.",
      },
    ],
    technologies: [
      "C#",
      ".NET Core",
      "Angular",
      "Vue.js",
      "TypeScript",
      "SQL Server",
      "Azure Functions",
      "Azure App Services",
    ],
    clients: ["DDI Technology", "Opus Behavioral Inc"],
    featured: true,
    status: "confirmed",
    notes:
      "Kept from CV (Feb 2025–Feb 2026). Not listed in the latest confirmation message — remove if Salvador prefers exclusion.",
  },
  {
    id: "kwan-tec",
    company: "Kwan Tec",
    location: {
      es: "México (Remoto)",
      en: "Mexico (Remote)",
    },
    title: {
      es: ".NET / Angular Developer",
      en: ".NET / Angular Developer",
    },
    period: {
      es: "Feb 2024 — Feb 2025",
      en: "Feb 2024 — Feb 2025",
    },
    startYear: 2024,
    endYear: 2025,
    isCurrent: false,
    summary: {
      es: "Arquitectura de microservicios .NET e interfaces Angular para analítica IoT; mensajería asíncrona y acceso a datos de alto rendimiento.",
      en: "Architected .NET microservices and Angular dashboards for IoT analytics — asynchronous messaging and high-performance data access.",
    },
    highlights: [
      {
        es: "Microservicios con .NET 6/8 y dashboards administrativos en Angular/TypeScript.",
        en: "Microservices with .NET 6/8 and administrative dashboards in Angular/TypeScript.",
      },
      {
        es: "RabbitMQ como broker y Notification Handler para alertas en tiempo real.",
        en: "RabbitMQ as message broker and a Notification Handler for real-time alerts.",
      },
      {
        es: "Dapper para consultas de baja latencia; EF Core para CRUD; Clean Architecture.",
        en: "Dapper for low-latency queries; EF Core for standard CRUD; Clean Architecture refactor.",
      },
    ],
    technologies: [
      ".NET 6/8",
      "Angular",
      "TypeScript",
      "RabbitMQ",
      "Dapper",
      "Entity Framework Core",
      "Azure DevOps",
    ],
    clients: ["Phoenix Energy Technologies"],
    featured: true,
    status: "confirmed",
  },
  {
    id: "asinpa",
    company: "Asinpa LLC",
    location: {
      es: "Dallas, TX (Remoto)",
      en: "Dallas, TX (Remote)",
    },
    title: {
      es: ".NET Developer",
      en: ".NET Developer",
    },
    period: {
      es: "Feb 2021 — Feb 2024",
      en: "Feb 2021 — Feb 2024",
    },
    startYear: 2021,
    endYear: 2024,
    isCurrent: false,
    summary: {
      es: "Modernización, remediación de seguridad OWASP y evolución de aplicaciones empresariales con C#, MVC, Angular y SQL Server.",
      en: "Security remediation (OWASP), framework upgrades, and feature development for enterprise applications with C#, MVC, Angular, and SQL Server.",
    },
    highlights: [
      {
        es: "Remediación de vulnerabilidades alineada a OWASP.",
        en: "Led security remediation aligned with OWASP best practices.",
      },
      {
        es: "Upgrades de librerías y frameworks; control de deuda técnica con SonarCloud.",
        en: "Upgraded shared libraries and frameworks; addressed technical debt with SonarCloud.",
      },
      {
        es: "Componentes en tiempo real e UI con SignalR, Kendo, Telerik y Bootstrap.",
        en: "Real-time and UI components with SignalR, Kendo, Telerik, and Bootstrap.",
      },
    ],
    technologies: [
      "C#",
      "ASP.NET MVC",
      "Angular",
      "SQL Server",
      "SignalR",
      "Kendo UI",
      "Telerik",
      "SonarCloud",
      "OWASP",
      "Azure DevOps",
    ],
    clients: ["BenefitMall / CRC Benefits"],
    featured: true,
    status: "confirmed",
  },
  {
    id: "exigo",
    company: "Exigo Office",
    location: {
      es: "Dallas, TX (Remoto)",
      en: "Dallas, TX (Remote)",
    },
    title: {
      es: "Custom Development Developer",
      en: "Custom Development Developer",
    },
    period: {
      es: "Sep 2020 — Dic 2020",
      en: "Sep 2020 — Dec 2020",
    },
    startYear: 2020,
    endYear: 2020,
    isCurrent: false,
    summary: {
      es: "Soporte y mejora de sistemas cliente: fulfillment, pagos, comisiones, reporting, CRM y herramientas de distribuidores.",
      en: "Stabilized and enhanced client-facing systems spanning fulfillment, payments, commissions, reporting, CRM, and distributor tools.",
    },
    highlights: [
      {
        es: "Monitoreo, troubleshooting y resolución de incidencias según prioridad y SLA.",
        en: "Monitored, troubleshot, and resolved application issues by priority and SLA.",
      },
      {
        es: "Backend con C#, .NET Core y SQL Server en entornos Azure.",
        en: "Maintained backend components with C#, .NET Core, and SQL Server on Azure.",
      },
    ],
    technologies: ["C#", ".NET Core", "SQL Server", "Azure", "GitHub"],
    status: "confirmed",
  },
  {
    id: "assa-abloy",
    company: "ASSA ABLOY S.A. de C.V.",
    location: {
      es: "Tequepexpan, México",
      en: "Tequepexpan, Mexico",
    },
    title: {
      es: "Software Developer",
      en: "Software Developer",
    },
    period: {
      es: "Sep 2016 — Sep 2020",
      en: "Sep 2016 — Sep 2020",
    },
    startYear: 2016,
    endYear: 2020,
    isCurrent: false,
    summary: {
      es: "Desarrollo de soluciones operativas para manufactura: reportes, flujos de trabajo y aplicaciones web ASP.NET / SQL Server.",
      en: "Built operational software for manufacturing workflows, reporting, and web applications with ASP.NET and SQL Server.",
    },
    highlights: [
      {
        es: "Reportes operativos y de gestión con Crystal Reports y SQL Server.",
        en: "Operational and management reports with Crystal Reports and SQL Server.",
      },
      {
        es: "Aplicaciones web con ASP.NET, C#, MVC, Bootstrap, JavaScript, jQuery, SignalR y Highcharts.",
        en: "Web apps with ASP.NET, C#, MVC, Bootstrap, JavaScript, jQuery, SignalR, and Highcharts.",
      },
      {
        es: "Soluciones que mejoraron eficiencia para operadores, supervisores, planners y management.",
        en: "Solutions that improved efficiency for operators, supervisors, planners, buyers, and management.",
      },
    ],
    technologies: [
      "ASP.NET",
      "C#",
      "MVC",
      "SQL Server",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "SignalR",
      "Highcharts",
      "Crystal Reports",
    ],
    status: "confirmed",
  },
  {
    id: "intro-software",
    company: "Intro Software",
    location: {
      es: "Lázaro Cárdenas, México",
      en: "Lázaro Cárdenas, Mexico",
    },
    title: {
      es: "Software Developer (Proyecto)",
      en: "Software Developer (Project)",
    },
    period: {
      es: "Mar 2016 — Ago 2016 · 6 meses",
      en: "Mar 2016 — Aug 2016 · 6 months",
    },
    startYear: 2016,
    endYear: 2016,
    isCurrent: false,
    summary: {
      es: "Desarrollo de aplicaciones desktop para proyectos de gobierno con arquitectura Smart Client y patrón MVP.",
      en: "Developed desktop applications for government projects using Smart Client architecture and the MVP pattern.",
    },
    highlights: [
      {
        es: "Apps desktop con C#, datasets e Infragistics.",
        en: "Desktop apps with C#, datasets, and Infragistics controls.",
      },
      {
        es: "Integración con Enterprise Library y control de código en TFS.",
        en: "Enterprise Library configuration and source control with TFS.",
      },
    ],
    technologies: [
      "C#",
      "Smart Client",
      "MVP",
      "Infragistics",
      "Enterprise Library",
      "TFS",
    ],
    status: "confirmed",
    notes:
      "Salvador confirmed ~6 months in 2016. Months placed Mar–Aug 2016 (before ASSA ABLOY Sep 2016). Adjust if exact months differ.",
  },
  {
    id: "muebles-america",
    company: "Comercializadora Muebles América S.A. de C.V.",
    location: {
      es: "Lázaro Cárdenas, México",
      en: "Lázaro Cárdenas, Mexico",
    },
    title: {
      es: "SQL Programmer",
      en: "SQL Programmer",
    },
    period: {
      es: "May 2015 — Dic 2015",
      en: "May 2015 — Dec 2015",
    },
    startYear: 2015,
    endYear: 2015,
    isCurrent: false,
    summary: {
      es: "Desarrollo y optimización SQL dentro del ERP Intelisis para ventas, inventario y reporting.",
      en: "Developed and optimized SQL within the Intelisis ERP for sales, inventory, and reporting.",
    },
    highlights: [
      {
        es: "Stored procedures, views y functions para integridad y procesamiento de datos.",
        en: "Stored procedures, views, and functions for data integrity and processing.",
      },
      {
        es: "Consultas complejas y mejoras de flujo en el ERP.",
        en: "Complex queries and workflow improvements inside the ERP.",
      },
    ],
    technologies: ["SQL Server", "Stored Procedures", "Intelisis ERP"],
    status: "confirmed",
  },
  {
    id: "reso-sistemas",
    company: "Reso Sistemas",
    location: {
      es: "México",
      en: "Mexico",
    },
    title: {
      es: ".NET Developer — Internship",
      en: ".NET Developer — Internship",
    },
    period: {
      es: "2012 — 2013 · Internship",
      en: "2012 — 2013 · Internship",
    },
    startYear: 2012,
    endYear: 2013,
    isCurrent: false,
    summary: {
      es: "Sistema web para instituciones educativas con ASP.NET Web Forms, C# y SQL Server.",
      en: "Web-based system for educational institutions using ASP.NET Web Forms, C#, and SQL Server.",
    },
    highlights: [
      {
        es: "Páginas dinámicas, APIs JSON, LINQ y AJAX.",
        en: "Dynamic pages, JSON APIs, LINQ, and AJAX for interactive UX.",
      },
    ],
    technologies: [
      "ASP.NET Web Forms",
      "C#",
      "SQL Server 2008 R2",
      "LINQ",
      "AJAX",
    ],
    status: "confirmed",
  },
];
