import { ArrowDownRight, FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { ui } from "@/content/ui";
import type { Locale } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PortraitGallery } from "@/components/sections/PortraitGallery";

type HeroFoundationProps = {
  locale: Locale;
};

const focusAreas = {
  es: [
    "Arquitectura de software",
    ".NET / C#",
    "Sistemas empresariales",
    "Cloud y modernización",
  ],
  en: [
    "Software Architecture",
    ".NET / C#",
    "Enterprise Systems",
    "Cloud & Modernization",
  ],
} as const;

export function HeroFoundation({ locale }: HeroFoundationProps) {
  const copy = ui[locale];

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-stroke"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.12),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.10),transparent_40%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <Container className="relative grid items-center gap-8 py-10 sm:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-14 xl:gap-14">
        <div className="space-y-5 lg:space-y-6">
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              {copy.heroEyebrow}
            </p>
            <p className="font-display text-sm font-medium text-ink-muted sm:text-base">
              {profile.fullName}
            </p>
            <h1
              id="hero-heading"
              className="max-w-2xl font-display text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-ink sm:text-3xl lg:text-[2.35rem]"
            >
              {copy.heroHeadline}
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
              <span className="text-ink">{profile.positioning[locale]}</span>
              <span className="mt-2 block">{copy.heroSubhead}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Button href="#contact" variant="primary">
              {copy.ctaPrimary}
              <ArrowDownRight className="size-4" aria-hidden />
            </Button>
            <Button href="#experience" variant="secondary">
              {copy.ctaSecondary}
            </Button>
            {profile.cv.published ? (
              <Button href={profile.cv.href} variant="ghost" download>
                <FileText className="size-4" aria-hidden />
                {profile.cv.label[locale]}
              </Button>
            ) : null}
          </div>

          <ul className="flex flex-wrap gap-2">
            {focusAreas[locale].map((item) => (
              <li
                key={item}
                className="rounded-full border border-stroke bg-surface/50 px-3 py-1 font-mono text-[11px] tracking-wide text-ink-muted"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="inline-flex items-center gap-2 rounded-md border border-accent/20 bg-accent/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            {profile.availability[locale]}
          </p>
        </div>

        <PortraitGallery locale={locale} />
      </Container>
    </section>
  );
}
