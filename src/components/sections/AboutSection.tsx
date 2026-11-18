import { aboutContent, sectionLabels } from "@/content/about";
import { expertiseAreas } from "@/data/expertise";
import type { Locale } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type AboutSectionProps = {
  locale: Locale;
};

export function AboutSection({ locale }: AboutSectionProps) {
  const copy = aboutContent[locale];
  const labels = sectionLabels.expertise;

  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-stroke/70 py-20 md:py-28"
      aria-labelledby="about-title"
    >
      <Container className="space-y-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <div className="space-y-6">
              <SectionHeading
                id="about-title"
                eyebrow={copy.eyebrow}
                title={copy.title}
              />
              <div className="space-y-4 text-base leading-relaxed text-ink-muted">
                {copy.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <div className="rounded-xl border border-stroke bg-surface/40 px-5 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                  {copy.educationLabel}
                </p>
                <p className="mt-1 text-sm text-ink">{copy.education}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent/80">
                {labels.eyebrow[locale]}
              </p>
              <h3 className="mb-6 font-display text-xl font-semibold tracking-tight text-ink">
                {labels.title[locale]}
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {expertiseAreas.map((area) => (
                  <li
                    key={area.id}
                    className="rounded-xl border border-stroke bg-surface/30 p-4 transition-colors hover:border-accent/30"
                  >
                    <p className="font-display text-sm font-medium text-ink">
                      {area.title[locale]}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {area.description[locale]}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
