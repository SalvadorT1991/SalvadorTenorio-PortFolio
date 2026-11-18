# Análisis y Planificación — Página Personal / Portfolio Comercial

> **Propósito de este documento:** servir como base de decisión.  
> Tú seleccionarás qué puntos y tecnologías continuar. Más adelante se incorporará tu CV (proyectos, casos de éxito, experiencia).  
> **Estado actual:** PoC de presentación profesional, con arquitectura pensada para crecer a sitio comercial (catálogo, formularios, chatbot, careers, etc.).

---

## 1. Visión del producto

### 1.1 Objetivo principal (PoC)
Una página web de presentación que te posicione como **Software Engineer con más de 10 años de experiencia en .NET**, lista para:

- Generar confianza (credibilidad técnica y profesional)
- Captar contactos / leads (formularios, WhatsApp, email, calendario)
- Mostrar experiencia, stack y casos de éxito (cuando adjunte CV)
- Funcionar bien en **web desktop, móvil web, Android e iOS** (PWA / responsive primero)

### 1.2 Objetivo de expansión (Fase comercial)
Evolucionar a un sitio con capacidad de **venta / oferta de sistemas y servicios**:

- Catálogo de productos / soluciones
- Formularios de cotización y contacto
- Preguntas frecuentes / base de conocimiento
- Chatbot de atención
- Careers / vacantes
- Quiénes somos / empresa
- Login, roles y paneles (admin / cliente / candidato)

### 1.3 Posicionamiento sugerido
| Elemento | Propuesta |
|----------|-----------|
| Rol | Software Engineer / .NET Specialist / Solution Builder |
| Experiencia | 10+ años en ecosistema .NET |
| Diferenciador | Experiencia real + capacidad de construir y entregar sistemas |
| Público | Empresas, startups, reclutadores técnicos, clientes de software a medida |
| Idioma | Español (primario) + Inglés (recomendado desde fase 2) |

---

## 2. Alcance por fases

### Fase 0 — Decisiones (esta etapa)
- Revisar este documento
- Marcar puntos a incluir / excluir / posponer
- Elegir stack (recomendación abajo)
- Definir dominio, marca y tono

### Fase 1 — PoC mínimo viable (MVP de presentación)
**Meta:** página pública lista para compartir en LinkedIn / CV / WhatsApp.

Incluye:
1. Landing / Home con propuesta de valor
2. Sobre mí / Quién soy
3. Experiencia / Timeline (placeholder hasta CV)
4. Skills / Stack técnico
5. Proyectos / Casos de éxito (placeholder)
6. Contacto (formulario + links)
7. Diseño responsive + PWA básica
8. SEO básico + Open Graph
9. Analytics ligero
10. Deploy en hosting (Firebase Hosting recomendado)

**No incluye aún (salvo que lo priorices):**
- Login completo
- Roles
- Catálogo de productos
- Chatbot
- Careers
- CMS complejo
- App nativa Android/iOS

### Fase 2 — Credibilidad y conversión
- Blog / artículos técnicos
- Testimonials / logos de clientes
- Calendario de agendar llamada
- Multidioma ES/EN
- Página de servicios con precios o paquetes
- Optimización de conversión (CTA claros)

### Fase 3 — Plataforma comercial expandible
- Catálogo de sistemas / productos
- Formularios avanzados (cotización, soporte)
- FAQ / Knowledge base
- Chatbot
- Careers
- Quiénes somos (versión empresa)
- Auth + roles (admin, cliente, candidato)
- Panel admin para editar contenido
- Notificaciones, CRM ligero, integraciones

### Fase 4 — Apps / multiplataforma avanzada (opcional)
- PWA instalable completa
- O app híbrida (Flutter / Capacitor) si necesitas stores
- Push notifications
- Área de cliente / portal

---

## 3. Requisitos mínimos del PoC (checklist de producto)

### 3.1 Contenido mínimo
- [ ] Nombre / marca personal o comercial
- [ ] Headline claro (ej. “Software Engineer .NET · 10+ años”)
- [ ] Subheadline de valor (qué resuelves)
- [ ] CTA principal (Contactar / Agendar / Ver proyectos)
- [ ] Sección Sobre mí
- [ ] Skills técnicas (.NET, Azure, SQL, etc.)
- [ ] Experiencia (años + roles; detalle con CV)
- [ ] Proyectos / portafolio (3–6 piezas o placeholders)
- [ ] Formulario o canal de contacto
- [ ] Footer con redes / legal mínimo

### 3.2 Técnicos mínimos
- [ ] Responsive (móvil primero)
- [ ] Carga rápida (< 3s en 4G aproximado)
- [ ] HTTPS
- [ ] Meta tags SEO + share preview (OG/Twitter)
- [ ] Favicon + manifest PWA básico
- [ ] Formulario funcional (email o Firestore + notificación)
- [ ] Deploy reproducible (CI o script)
- [ ] Accesibilidad básica (contraste, focus, labels)

### 3.3 Operativos mínimos
- [ ] Dominio (o subdomain temporal)
- [ ] Analytics (Firebase Analytics / GA4 / Plausible)
- [ ] Política de privacidad simple (si capturas datos)
- [ ] Backup / control de versiones (Git)

---

## 4. Módulos futuros a cubrir (lista de puntos para tu selección)

Marca cada punto: **Incluir ahora / Fase 2 / Fase 3 / Descartar**.

### A. Presentación profesional
1. Home / Landing hero
2. Sobre mí
3. Experiencia laboral (timeline)
4. Educación / certificaciones
5. Skills & tecnologías
6. Proyectos / casos de éxito
7. Testimonios
8. Descargar CV (PDF)
9. Blog / artículos
10. Versión EN/ES

### B. Conversión y contacto
11. Formulario de contacto
12. Formulario de cotización
13. WhatsApp / Telegram flotante
14. Calendario (Calendly / Google Calendar)
15. Newsletter
16. Lead magnet (guía, checklist técnico)

### C. Comercial / venta de sistemas
17. Catálogo de productos / soluciones
18. Detalle de producto (features, precio, demo)
19. Filtros / categorías
20. Carrito o “solicitar demo” (sin e-commerce completo al inicio)
21. Pagos (Stripe / PayPal) — solo si vendes digital o licencias
22. Contratos / propuestas PDF

### D. Contenido y soporte
23. FAQ
24. Base de conocimiento / docs
25. Blog técnico SEO
26. Chatbot (FAQ primero; IA después)
27. Tickets de soporte

### E. Empresa / careers
28. Quiénes somos
29. Misión / valores
30. Equipo
31. Careers / vacantes
32. Formulario de aplicación + adjunto CV
33. Portal candidato (estado de postulación)

### F. Auth, roles y paneles
34. Login (email/password)
35. Login social (Google, Microsoft, Apple, GitHub)
36. Magic link / OTP
37. Roles: `guest`, `user`, `client`, `candidate`, `admin`
38. Panel admin (CRUD contenido, leads, vacantes)
39. Área de cliente (proyectos, documentos)
40. Protección de rutas / reglas de seguridad

### G. Plataforma y calidad
41. PWA (instalable en Android/iOS/desktop)
42. App nativa / híbrida en stores
43. SEO avanzado / sitemap / schema.org
44. i18n
45. Dark/light theme
46. Performance budget
47. Observabilidad (errores, logs)
48. Tests (unit / e2e)
49. CI/CD
50. Cumplimiento (GDPR / aviso de privacidad MX)

---

## 5. Análisis de tecnologías (recomendación)

### 5.1 Criterios de decisión
| Criterio | Peso |
|----------|------|
| Compatible web + móvil (Android/iOS vía browser/PWA) | Alto |
| Fácil integración con **Firebase** (ya lo tienes) | Alto |
| Velocidad para PoC | Alto |
| Expansión a catálogo, auth, roles, formularios | Alto |
| Costo operativo bajo al inicio | Medio |
| Curva de aprendizaje / mantenimiento | Medio |
| Posible app store más adelante | Bajo–Medio |

### 5.2 Opciones evaluadas

#### Opción A — **Next.js + Firebase** (recomendada)
| Aspecto | Detalle |
|---------|---------|
| Frontend | Next.js (React) + TypeScript |
| Estilos | Tailwind CSS (+ componente UI ligero: shadcn/ui) |
| Hosting | Firebase Hosting o Vercel |
| Auth | Firebase Authentication (Google, Microsoft, email, Apple, GitHub…) |
| DB | Cloud Firestore |
| Storage | Firebase Storage (CV, imágenes, adjuntos) |
| Functions | Cloud Functions (formularios, webhooks, chatbot backend) |
| Roles | Custom claims en Firebase Auth + Firestore rules |
| Multiplataforma | Web responsive + PWA; luego Capacitor si quieres stores |

**Por qué encaja:**
- Excelente para SEO (importante en página de presentación)
- Firebase cubre auth, DB, storage, hosting, analytics
- Escala bien a catálogo, admin, careers
- Un solo codebase para web; PWA cubre “casi app” en Android/iOS

**Contras:**
- SSR/SSG añade un poco más de setup que un SPA puro
- Si hosteas 100% en Firebase Hosting estático, conviene export estático o usar Cloud Functions/Cloud Run para SSR

#### Opción B — **Angular + Firebase**
| Aspecto | Detalle |
|---------|---------|
| Frontend | Angular + TypeScript |
| Backend BaaS | Firebase (Auth, Firestore, Hosting, Functions) |

**Por qué considerarla:**
- Encaja con perfil **.NET + enterprise**; Angular es familiar en ese mundo
- Muy estructurado para apps grandes con roles

**Contras:**
- Más verboso para un PoC de marketing/landing
- SEO requiere Angular Universal (más fricción que Next.js)

#### Opción C — **Blazor WASM / Blazor + ASP.NET + Firebase o Azure**
| Aspecto | Detalle |
|---------|---------|
| Frontend/Backend | .NET (tu stack fuerte) |
| Hosting | Azure Static Web Apps / App Service; o híbrido con Firebase solo Auth |

**Por qué considerarla:**
- Máximo aprovechamiento de tu expertise .NET
- Un solo lenguaje C#

**Contras:**
- Blazor WASM: SEO y peso inicial peores para landing
- Firebase + .NET es posible pero menos “nativo” que JS/TS
- Para PoC de presentación + PWA + marketing, suele ser más lento de pulir

#### Opción D — **Flutter Web + Firebase**
| Aspecto | Detalle |
|---------|---------|
| UI | Flutter |
| Backend | Firebase |

**Por qué:** una base para Android/iOS/Web.

**Contras:** Flutter Web aún no es ideal para SEO/landing de marketing. Mejor si el producto principal será app, no sitio comercial.

#### Opción E — **Astro / HTML estático + Firebase**
Muy rápido para PoC estático, pero se queda corto cuando lleguen auth, roles, catálogo dinámico y paneles.

### 5.3 Recomendación final de stack (PoC → expansión)

```text
UI:           Next.js 15 + TypeScript + Tailwind + shadcn/ui
Hosting:      Firebase Hosting (estático/export)  O  Vercel + Firebase services
Auth:         Firebase Authentication (multi-provider)
DB:           Cloud Firestore
Files:        Firebase Storage
Backend:      Cloud Functions (Node)  [opcional: .NET en Cloud Run más adelante]
Roles:        Firebase custom claims + Security Rules
Forms:        Firestore + Function + email (Resend/SendGrid)
Analytics:    Firebase Analytics / GA4
PWA:          next-pwa / Serwist
Chatbot (F3): Dialogflow CX  o  API propia + LLM + knowledge en Firestore
CMS futuro:   Firestore admin panel  o  Sanity/Contentful si prefieres headless
```

### 5.4 ¿Por qué no empezar con app nativa?
Para un PoC de presentación, **web responsive + PWA** cubre:
- Desktop
- Android (Chrome / instalable)
- iOS (Safari / “Añadir a inicio”; PWA con limitaciones conocidas en iOS)

Las apps en stores tienen costo, revisión y mantenimiento. Conviene **después** de validar el sitio, si el portal de cliente o chatbot lo justifican (Capacitor sobre Next, o Flutter aparte).

### 5.5 Login “cualquier sistema” — diseño recomendado
Firebase Auth soporta de forma nativa o vía OIDC/SAML (Identity Platform):

| Provider | Uso típico |
|----------|------------|
| Email/password | Básico |
| Google | Usuarios generales |
| Microsoft | Clientes enterprise |
| Apple | Requisito App Store si hay app iOS con social login |
| GitHub | Perfil técnico / developers |
| Phone OTP | Alternativa móvil |
| SAML/OIDC | Empresas con IdP propio (fase avanzada, Identity Platform) |

**Roles sugeridos (Firestore + claims):**

```text
guest        → solo público
user         → registrado (newsletter, guardar favoritos)
client       → cliente con acceso a portal
candidate    → postulante careers
editor       → edita contenido
admin        → todo
```

Reglas: **nunca confiar solo en el frontend**; Security Rules + custom claims.

### 5.6 Compatibilidad multiplataforma (estrategia)

| Plataforma | Estrategia PoC | Estrategia expansión |
|------------|----------------|----------------------|
| Web desktop | Next.js responsive | Igual + admin |
| Móvil web | Mobile-first CSS | Igual |
| Android | PWA instalable | Capacitor o Flutter (opcional) |
| iOS | Safari + Add to Home Screen | Capacitor / Flutter (opcional) |
| Offline | Cache PWA de páginas estáticas | Sync selectivo Firestore |

---

## 6. Arquitectura propuesta (alto nivel)

```text
                    ┌─────────────────────────┐
                    │   Usuarios (Web/PWA)    │
                    └────────────┬────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │  Next.js (App Router)   │
                    │  Landing + App routes   │
                    └─────┬─────────────┬─────┘
                          │             │
              ┌───────────▼───┐   ┌─────▼──────────┐
              │ Firebase Auth │   │ Cloud Firestore│
              │ (providers)   │   │ (contenido,    │
              └───────────────┘   │  leads, roles) │
                                  └─────┬──────────┘
                                        │
                    ┌───────────────────┼───────────────────┐
                    │                   │                   │
           ┌────────▼──────┐  ┌─────────▼──────┐  ┌─────────▼──────┐
           │ Storage       │  │ Cloud Functions│  │ Analytics      │
           │ (CV, media)   │  │ (mail, bot,    │  │                │
           │               │  │  webhooks)     │  │                │
           └───────────────┘  └────────────────┘  └────────────────┘
```

### Colecciones Firestore sugeridas (expansión fácil)

```text
profiles/          → datos públicos del ingeniero / empresa
projects/          → portafolio y casos de éxito
skills/            → tecnologías
services/          → servicios ofrecidos
products/          → catálogo de sistemas
leads/             → formularios de contacto/cotización
faq/               → preguntas frecuentes
posts/             → blog
careers/           → vacantes
applications/      → postulaciones
users/             → perfil app + role
chatSessions/      → chatbot
settings/          → configuración del sitio
```

Diseñar el modelo **desde el PoC** con estas colecciones (aunque solo uses 3–4) evita rewrites grandes.

---

## 7. Mapa de páginas (IA / UX)

### PoC (Fase 1)
| Ruta | Descripción |
|------|-------------|
| `/` | Landing: marca + headline + CTA + prueba social breve |
| `/about` | Quién soy / trayectoria |
| `/experience` | Experiencia (o sección en about) |
| `/projects` | Portafolio |
| `/skills` | Stack (o sección) |
| `/contact` | Formulario + canales |
| `/privacy` | Aviso de privacidad |

### Expansión (Fases 2–3)
| Ruta | Descripción |
|------|-------------|
| `/services` | Servicios |
| `/products` | Catálogo |
| `/products/[slug]` | Detalle |
| `/faq` | Preguntas |
| `/blog` | Artículos |
| `/careers` | Vacantes |
| `/careers/[id]/apply` | Postulación |
| `/about-company` | Quiénes somos (empresa) |
| `/login` | Auth |
| `/admin/*` | Panel |
| `/client/*` | Portal cliente |
| `/chat` | Chatbot / widget |

---

## 8. Requisitos no funcionales

| Área | Meta PoC |
|------|----------|
| Performance | Lighthouse Performance ≥ 90 en móvil |
| SEO | Title/description únicos; sitemap; schema Person/Organization |
| Seguridad | HTTPS; reglas Firestore; sanitizar inputs; rate limit en forms |
| Disponibilidad | Hosting Firebase/Vercel (SLA del proveedor) |
| Privacidad | Aviso + consentimiento si hay cookies/analytics |
| Mantenibilidad | TypeScript estricto; estructura modular por features |
| Costo inicial | Free tier Firebase suficiente para PoC/tráfico bajo |

---

## 9. Plan de implementación sugerido (PoC ~ 1–2 semanas)

### Sprint 1 — Fundación
1. Repo + Next.js + Tailwind + TypeScript
2. Diseño base (tokens CSS, tipografía, layout)
3. Firebase project (Hosting, Auth opcional, Firestore)
4. Rutas públicas estáticas / SSG
5. Home + About + Contact (UI)

### Sprint 2 — Contenido y conversión
6. Skills + Projects (placeholders tipados)
7. Formulario → Firestore + email Function
8. SEO + OG images + sitemap
9. PWA básica
10. Deploy + dominio

### Sprint 3 — Preparar expansión (sin construir todo)
11. Modelo Firestore completo (colecciones vacías documentadas)
12. Esqueleto de roles (claims) aunque admin no esté listo
13. Feature flags / módulos desactivados
14. Documento de backlog priorizado (este archivo actualizado)

---

## 10. Contenido pendiente de tu CV (próximo input)

Cuando adjunte tu CV, este documento se enriquecerá con:

- [ ] Resumen profesional definitivo (bio corta + bio larga)
- [ ] Timeline de experiencia (empresas, roles, años)
- [ ] Proyectos destacados (problema → solución → impacto)
- [ ] Casos de éxito cuantificables (%, tiempos, usuarios, $$$)
- [ ] Stack real dominado vs. familiar
- [ ] Certificaciones
- [ ] Idiomas
- [ ] Links (GitHub, LinkedIn, demos)
- [ ] Testimonios si existen
- [ ] Foto / branding personal

**Placeholder actual de narrativa (editable):**  
> Software Engineer con más de 10 años de experiencia construyendo soluciones en el ecosistema .NET. Enfocado en sistemas robustos, integraciones y entrega de valor de negocio. Disponible para consultoría, desarrollo a medida y liderazgo técnico.

---

## 11. Riesgos y mitigaciones

| Riesgo | Mitigación |
|--------|------------|
| Querer construir “todo” en el PoC | Congelar Fase 1 a lista mínima |
| SEO débil con SPA pura | Preferir Next.js SSG/SSR |
| Reglas Firestore mal configuradas | Empezar deny-by-default; tests de rules |
| Dependencia de un solo vendor | Abstraer repositorios de datos; Auth detrás de interfaz |
| Contenido vacío sin CV | Placeholders honestos + “próximamente” |
| PWA limitada en iOS | Comunicar “mejor experiencia en navegador”; valorar Capacitor después |
| Chatbot prematuro | FAQ + formulario primero; bot en Fase 3 |

---

## 12. Costos estimados (orden de magnitud)

| Concepto | PoC | Crecimiento |
|----------|-----|-------------|
| Firebase Spark (free) | $0 | Suficiente al inicio |
| Dominio | ~$10–15/año | — |
| Firebase Blaze | $0–20/mes tipico bajo tráfico | Según uso Functions/Storage |
| Email (Resend/SendGrid) | Free tier | Pay as you go |
| Vercel (si se usa SSR) | Free hobby | Pro si escala |
| Chatbot IA | $0 al inicio | API tokens después |

---

## 13. Matriz de decisión rápida (para que marques)

### Stack frontend
- [ ] **A. Next.js + TS + Tailwind + Firebase** ← recomendado
- [ ] B. Angular + Firebase
- [ ] C. Blazor / ASP.NET (+ Azure o Firebase Auth)
- [ ] D. Flutter Web + Firebase
- [ ] E. Otro: _______________

### Hosting
- [ ] Firebase Hosting
- [ ] Vercel + Firebase services
- [ ] Azure Static Web Apps
- [ ] Otro: _______________

### Auth en PoC
- [ ] Sin login (solo público) ← más rápido
- [ ] Login Google + email (base lista para roles)
- [ ] Multi-provider completo desde el día 1

### Idioma
- [ ] Solo español
- [ ] ES + estructura lista para EN
- [ ] ES/EN completo

### Marca
- [ ] Personal (tu nombre)
- [ ] Marca comercial / consultora
- [ ] Ambas (personal + “powered by” empresa)

### Expansión prioritaria post-PoC (elige top 5)
- [ ] Catálogo productos
- [ ] Blog
- [ ] Careers
- [ ] Chatbot
- [ ] Panel admin
- [ ] Portal cliente
- [ ] Multidioma
- [ ] Pagos
- [ ] App stores
- [ ] Otro: _______________

---

## 14. Entregables de esta etapa

1. Este documento de análisis y planificación
2. Lista de puntos a cubrir (sección 4) para tu selección
3. Recomendación de tecnologías alineada a Firebase + multiplataforma web
4. Alcance PoC mínimo vs. roadmap expandible
5. Pendiente: incorporar CV y cerrar stack/alcance contigo

---

## 15. Próximos pasos (cuando decidas)

1. Devolver este `.md` con tus marcas en secciones 4 y 13  
2. Adjuntar CV / LinkedIn / proyectos  
3. Confirmar dominio y nombre de marca  
4. Congelar stack  
5. Iniciar scaffold del PoC según lo elegido  

---

## Anexo A — Definición de “Done” del PoC

El PoC se considera listo cuando:

1. La home comunica en < 5 segundos quién eres y qué ofreces  
2. Se ve y se usa bien en móvil y desktop  
3. Hay al menos un canal de contacto funcional  
4. Hay secciones de skills + experiencia/proyectos (aunque parcial)  
5. Está publicada en HTTPS con dominio o URL estable  
6. El repo permite agregar catálogo/auth/admin sin reescribir la base  

---

## Anexo B — Glosario breve

| Término | Significado |
|---------|-------------|
| PoC | Proof of Concept: versión mínima para validar |
| PWA | Progressive Web App: web instalable con rasgos de app |
| SSG/SSR | Generación estática / render en servidor (SEO) |
| Custom claims | Metadatos de rol firmados en el token de Auth |
| BaaS | Backend as a Service (Firebase) |

---

*Documento generado para MyPage — listo para tu revisión y selección de puntos/tecnologías.*
