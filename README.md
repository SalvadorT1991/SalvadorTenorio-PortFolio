# Salvador Tenorio — Portfolio

Presencia digital profesional de **Salvador Tenorio Alba** — Lead Software Architect | Senior Full Stack Engineer.

Marca freelance: **STA Solutions** · Guadalajara, Jalisco, México.

**Live repo:** [github.com/SalvadorT1991/SalvadorTenorio-PortFolio](https://github.com/SalvadorT1991/SalvadorTenorio-PortFolio)

## Qué incluye

- Landing bilingüe (`/es` · `/en`) con hero, experiencia, casos de estudio, stack y contacto
- SEO (metadata por locale, sitemap, robots, Open Graph, Twitter card, JSON-LD Person)
- Formulario de contacto honesto (abre el cliente de correo; sin backend fingido)
- Analytics ligero listo para GTM (`window.dataLayer`) + logs en desarrollo
- CV PDF y fotos autorizadas para uso público

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | Next.js 16 (App Router) + TypeScript |
| UI | Tailwind CSS v4, Motion, Lucide |
| Tipografía | Instrument Sans · Source Sans 3 · IBM Plex Mono |
| i18n | Rutas `/es` y `/en` |

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) (redirige según `Accept-Language`).

```bash
npm run build
npm start
```

## Estructura

```
src/
  app/                 # rutas, metadata, OG/icon, sitemap, robots
  components/          # layout, secciones, UI, SEO
  content/             # copy de UI / secciones
  data/                # perfil, experiencia, proyectos, skills
  lib/                 # i18n, analytics, site URL, utils
public/
  cv/                  # CV PDF
  images/              # fotos del portfolio
  favicon.svg
```

## Seguridad y privacidad

- No hay autenticación, base de datos ni APIs con secretos.
- `.env*` está en `.gitignore`; el historial Git no contiene claves ni tokens.
- Los datos de contacto publicados (email, teléfono, LinkedIn, GitHub, CV) fueron autorizados por el autor.
- Headers de seguridad básicos: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, `HSTS`.

## Visibilidad del repositorio

Repositorio **público de solo lectura**: puedes clonar y consultar el código. Las contribuciones no están abiertas salvo acuerdo explícito.

© Salvador Tenorio Alba. Todos los derechos reservados.
