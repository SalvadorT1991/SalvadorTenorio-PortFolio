import { stackContent } from "@/content/stack";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type StackSectionProps = {
  locale: Locale;
};

export function StackSection({ locale }: StackSectionProps) {
  const copy = stackContent[locale];

  return (
    <section
      id="stack"
      className="scroll-mt-24 border-b border-stroke/70 py-20 md:py-28"
      aria-labelledby="stack-title"
    >
      <Container className="space-y-12">
        <SectionHeading
          id="stack-title"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.04}>
            <article
              className={cn(
                "flex h-full flex-col rounded-2xl border border-stroke bg-surface/20 p-5 sm:p-6",
                group.prominence === "primary" &&
                  "md:col-span-1 xl:row-span-1 border-stroke-strong/80 bg-surface/35",
              )}
            >
              <header className="mb-5 space-y-2 border-b border-stroke/70 pb-4">
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {group.title[locale]}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {group.description[locale]}
                </p>
              </header>

              <ul className="mt-auto flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const isCore = item.emphasis === "core";
                  return (
                    <li key={item.name}>
                      <span
                        className={cn(
                          "inline-flex items-center rounded-md border px-2.5 py-1.5 font-mono text-[11px] tracking-wide transition-colors",
                          isCore
                            ? "border-accent/35 bg-accent/10 text-accent"
                            : "border-stroke bg-canvas/40 text-ink-muted",
                        )}
                      >
                        {item.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </article>
            </Reveal>
          ))}
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted/80">
          {copy.coreHint}
        </p>
      </Container>
    </section>
  );
}
