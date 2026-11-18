import type { CaseStudy } from "@/types/content";

/**
 * Case studies — copy approved by Salvador (2026-11-16).
 * Qualitative impact only. Do not add invented metrics.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "manufacturing-operations",
    number: "01",
    title: {
      es: "Sistema de operaciones de manufactura",
      en: "Manufacturing Operations System",
    },
    organization: "ASSA ABLOY",
    context: {
      es: "Operaciones de manufactura que requerían visibilidad de órdenes, inventario y priorización para equipos de planta y supervisión.",
      en: "Manufacturing operations needed clearer visibility into orders, inventory, and prioritization for plant and supervisory teams.",
    },
    challenge: {
      es: "Procesar y consultar inventarios y órdenes de forma confiable sobre SQL Server, incluyendo escenarios jerárquicos/recursivos y tableros de seguimiento.",
      en: "Reliably process and query inventory and orders on SQL Server — including hierarchical/recursive scenarios — and surface production status in dashboards.",
    },
    solution: {
      es: "Aplicación empresarial .NET Framework / SQL Server con optimización de consultas (incluyendo enfoques recursivos y CTEs), priorización de órdenes y dashboard de retrasos de producción.",
      en: "Enterprise .NET Framework / SQL Server application with query optimization (including recursive approaches and CTEs), order prioritization, and a dashboard for production delays.",
    },
    architecture: {
      es: "ASP.NET / C#, SQL Server, reporting y visualización operativa para stakeholders de planta.",
      en: "ASP.NET / C#, SQL Server, operational reporting and visualization for plant stakeholders.",
    },
    impact: {
      es: "Mayor claridad operativa sobre órdenes e inventario, con consultas más mantenibles para escenarios complejos de datos.",
      en: "Improved operational clarity around orders and inventory, with more maintainable queries for complex data scenarios.",
    },
    resultLead: {
      es: "Órdenes e inventario más visibles — con SQL mantenible para escenarios jerárquicos reales.",
      en: "Clearer order and inventory visibility — with maintainable SQL for real hierarchical scenarios.",
    },
    technologies: [
      ".NET Framework",
      "C#",
      "SQL Server",
      "CTEs",
      "Crystal Reports",
    ],
    status: "confirmed",
  },
  {
    id: "distributed-notifications",
    number: "02",
    title: {
      es: "Diagnóstico de notificaciones distribuidas",
      en: "Distributed Notifications Troubleshooting",
    },
    organization: "Kwan Tec / Phoenix Energy Technologies",
    context: {
      es: "Plataforma de analítica IoT con procesamiento asíncrono y alertas hacia clientes Angular.",
      en: "IoT analytics platform with asynchronous processing and alerts delivered to Angular clients.",
    },
    challenge: {
      es: "Fallos silenciosos en el flujo de notificaciones: el comportamiento esperado no se cumplía pese a que el sistema aparentaba operar con normalidad.",
      en: "Silent failures in the notification flow — expected behavior did not occur even though the system appeared to be running normally.",
    },
    solution: {
      es: "Diagnóstico mediante logs y monitoreo; identificación de un campo tratado incorrectamente como obligatorio; corrección de validación, mapeo y comportamiento del servicio.",
      en: "Diagnosed via logs and monitoring; identified a field incorrectly treated as required; corrected validation, mapping, and service behavior.",
    },
    architecture: {
      es: "Microservicios .NET, RabbitMQ, Notification Handler, Angular, observabilidad operacional.",
      en: ".NET microservices, RabbitMQ, Notification Handler, Angular, operational observability.",
    },
    impact: {
      es: "Restablecimiento del comportamiento confiable de notificaciones y reducción de fallos silenciosos en el pipeline de eventos.",
      en: "Restored reliable notification behavior and reduced silent failures in the event pipeline.",
    },
    resultLead: {
      es: "Notificaciones estables otra vez — sin fallos silenciosos en el pipeline de eventos.",
      en: "Reliable notifications restored — without silent failures in the event pipeline.",
    },
    technologies: [
      ".NET",
      "RabbitMQ",
      "Microservices",
      "Angular",
      "Dapper",
    ],
    status: "confirmed",
  },
  {
    id: "enterprise-modernization",
    number: "03",
    title: {
      es: "Modernización de aplicaciones empresariales",
      en: "Enterprise Application Modernization",
    },
    organization: "Asinpa LLC / BenefitMall",
    context: {
      es: "Aplicaciones empresariales de beneficios/HR que requerían mantenimiento continuo, seguridad y evolución tecnológica.",
      en: "Enterprise benefits/HR applications requiring ongoing maintenance, security hardening, and technology evolution.",
    },
    challenge: {
      es: "Deuda técnica, vulnerabilidades y frameworks desactualizados en un entorno de negocio sensible.",
      en: "Technical debt, security vulnerabilities, and aging frameworks in a sensitive business domain.",
    },
    solution: {
      es: "Remediación OWASP, upgrades de librerías/frameworks, calidad con SonarCloud, y evolución full-stack con C#, MVC, Angular y SQL Server.",
      en: "OWASP remediation, library/framework upgrades, SonarCloud-driven quality work, and full-stack evolution with C#, MVC, Angular, and SQL Server.",
    },
    architecture: {
      es: "ASP.NET MVC, Angular, SQL Server, SignalR, componentes UI empresariales (Kendo/Telerik), pipelines DevOps.",
      en: "ASP.NET MVC, Angular, SQL Server, SignalR, enterprise UI components (Kendo/Telerik), DevOps pipelines.",
    },
    impact: {
      es: "Mayor seguridad, mantenibilidad y alineación con prácticas modernas de calidad sin interrumpir la operación del negocio.",
      en: "Improved security, maintainability, and alignment with modern quality practices without disrupting business operations.",
    },
    resultLead: {
      es: "Aplicaciones más seguras y mantenibles — sin frenar la operación del negocio.",
      en: "More secure, maintainable applications — without disrupting business operations.",
    },
    technologies: [
      "C#",
      "ASP.NET MVC",
      "Angular",
      "SQL Server",
      "OWASP",
      "SonarCloud",
      "Azure DevOps",
    ],
    status: "confirmed",
  },
];
