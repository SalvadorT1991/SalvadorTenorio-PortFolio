import { processContent, processSteps } from "@/data/process";
import type { Locale } from "@/types/content";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type HowIWorkSectionProps = {
  locale: Locale;
};

export function HowIWorkSection({ locale }: HowIWorkSectionProps) {
  const copy = processContent;

  return (
    <section
      id="approach"
      className="scroll-mt-24 border-b border-stroke/70 py-20 md:py-28"
      aria-labelledby="approach-title"
    >
      <Container className="space-y-12">
        <SectionHeading
          id="approach-title"
          eyebrow={copy.eyebrow[locale]}
          title={copy.title[locale]}
          description={copy.description[locale]}
        />

        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.id} delay={index * 0.06}>
              <li className="h-full rounded-2xl border border-stroke bg-surface/25 p-5 transition-colors hover:border-accent/30">
                <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
                  {step.number}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">
                  {step.title[locale]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description[locale]}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <ArchitectureDiagram
            locale={locale}
            title={copy.architectureTitle[locale]}
            caption={copy.architectureCaption[locale]}
          />
        </Reveal>
      </Container>
    </section>
  );
}
