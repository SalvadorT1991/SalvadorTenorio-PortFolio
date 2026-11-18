"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { sectionLabels } from "@/content/about";
import { experience } from "@/data/experience";
import type { ExperienceEntry, Locale } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type ExperienceSectionProps = {
  locale: Locale;
};

function ExperienceCard({
  entry,
  locale,
  expanded,
  onToggle,
  showCurrent,
}: {
  entry: ExperienceEntry;
  locale: Locale;
  expanded: boolean;
  onToggle: () => void;
  showCurrent: boolean;
}) {
  const labels = sectionLabels.experience;

  return (
    <li className="relative grid gap-4 py-5 pl-8 md:grid-cols-[minmax(11rem,14rem)_1fr] md:gap-10 md:pl-12">
      <div
        aria-hidden
        className={cn(
          "absolute top-8 left-0 size-3 rounded-full border-2 md:top-9",
          entry.isCurrent
            ? "border-accent bg-accent shadow-[0_0_16px_rgba(20,184,166,0.45)]"
            : "border-stroke-strong bg-canvas",
        )}
      />

      <div className="space-y-1 md:pt-1">
        <p className="font-mono text-[11px] tracking-wide text-accent">
          {entry.period?.[locale]}
        </p>
        <p className="text-sm text-ink-muted">{entry.location[locale]}</p>
        {showCurrent ? (
          <span className="mt-2 inline-flex rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
            {locale === "es" ? "Actual" : "Current"}
          </span>
        ) : null}
      </div>

      <article className="rounded-2xl border border-stroke bg-surface/25">
        <button
          type="button"
          className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-expanded={expanded}
          onClick={onToggle}
        >
          <header className="min-w-0 space-y-1">
            <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
              {entry.title[locale]}
            </h3>
            <p className="text-sm text-ink-muted">{entry.company}</p>
            {!expanded ? (
              <p className="mt-2 line-clamp-2 text-sm text-ink-muted">
                {entry.summary[locale]}
              </p>
            ) : null}
          </header>
          <ChevronDown
            className={cn(
              "mt-1 size-5 shrink-0 text-ink-muted transition-transform",
              expanded && "rotate-180 text-accent",
            )}
            aria-hidden
          />
        </button>

        {expanded ? (
          <div className="border-t border-stroke px-5 pb-5 sm:px-6 sm:pb-6">
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {entry.summary[locale]}
            </p>

            <ul className="mt-4 space-y-2">
              {entry.highlights.map((item) => (
                <li
                  key={item.en}
                  className="flex gap-2 text-sm leading-relaxed text-ink"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  <span>{item[locale]}</span>
                </li>
              ))}
            </ul>

            {entry.clients?.length ? (
              <p className="mt-4 text-sm text-ink-muted">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                  {labels.clients[locale]}:{" "}
                </span>
                {entry.clients.join(" · ")}
              </p>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-2">
              {entry.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-stroke bg-canvas/50 px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </article>
    </li>
  );
}

export function ExperienceSection({ locale }: ExperienceSectionProps) {
  const labels = sectionLabels.experience;
  const entries = useMemo(
    () => experience.filter((entry) => entry.status === "confirmed"),
    [],
  );

  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(entries.map((e) => [e.id, Boolean(e.featured)])),
  );

  const featured = entries.filter((e) => e.featured);
  const earlier = entries.filter((e) => !e.featured);

  const toggle = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section
      id="experience"
      className="scroll-mt-24 border-b border-stroke/70 py-20 md:py-28"
      aria-labelledby="experience-title"
    >
      <Container className="space-y-10">
        <SectionHeading
          id="experience-title"
          eyebrow={labels.eyebrow[locale]}
          title={labels.title[locale]}
          description={labels.description[locale]}
        />

        <Reveal>
          <div className="space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
              {labels.featured[locale]}
            </p>
            <ol className="relative">
              <div
                aria-hidden
                className="absolute top-2 bottom-2 left-[0.55rem] w-px bg-gradient-to-b from-accent/50 via-stroke to-transparent md:left-[0.7rem]"
              />
              {featured.map((entry) => (
                <ExperienceCard
                  key={entry.id}
                  entry={entry}
                  locale={locale}
                  expanded={expanded[entry.id]}
                  onToggle={() => toggle(entry.id)}
                  showCurrent={Boolean(entry.isCurrent)}
                />
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
              {labels.earlier[locale]}
            </p>
            <ol className="relative">
              <div
                aria-hidden
                className="absolute top-2 bottom-2 left-[0.55rem] w-px bg-gradient-to-b from-stroke via-stroke to-transparent md:left-[0.7rem]"
              />
              {earlier.map((entry) => (
                <ExperienceCard
                  key={entry.id}
                  entry={entry}
                  locale={locale}
                  expanded={expanded[entry.id]}
                  onToggle={() => toggle(entry.id)}
                  showCurrent={false}
                />
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
