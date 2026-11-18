import { sectionLabels } from "@/content/about";
import { caseStudies } from "@/data/projects";
import type { Locale } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ProjectsSectionProps = {
  locale: Locale;
};

export function ProjectsSection({ locale }: ProjectsSectionProps) {
  const labels = sectionLabels.projects;
  const studies = caseStudies.filter((study) => study.status === "confirmed");

  const blocks = [
    { key: "context" as const, label: labels.context },
    { key: "challenge" as const, label: labels.challenge },
    { key: "solution" as const, label: labels.solution },
    { key: "architecture" as const, label: labels.architecture },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-stroke/70 py-20 md:py-28"
      aria-labelledby="projects-title"
    >
      <Container className="space-y-12">
        <SectionHeading
          id="projects-title"
          eyebrow={labels.eyebrow[locale]}
          title={labels.title[locale]}
          description={labels.description[locale]}
        />

        <div className="space-y-8">
          {studies.map((study, index) => (
            <Reveal key={study.id} delay={index * 0.05}>
              <article className="overflow-hidden rounded-2xl border border-stroke bg-surface/20">
                <header className="border-b border-stroke bg-surface/40 px-5 py-5 sm:px-7 sm:py-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-2xl space-y-3">
                      <p className="font-mono text-[11px] tracking-[0.2em] text-accent">
                        {study.number}
                      </p>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                        {study.title[locale]}
                      </h3>
                      <p className="text-sm text-ink-muted">
                        {study.organization}
                      </p>
                      <p className="rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm leading-relaxed text-ink">
                        <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                          {labels.result[locale]}
                        </span>
                        {study.resultLead[locale]}
                      </p>
                    </div>
                    <ul className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                      {study.technologies.slice(0, 5).map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-stroke bg-canvas/40 px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </header>

                <div className="grid gap-0 md:grid-cols-2">
                  {blocks.map((block) => (
                    <div
                      key={block.key}
                      className="border-b border-stroke p-5 last:border-b-0 sm:p-6 md:border-r md:odd:border-r md:even:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent/80">
                        {block.label[locale]}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {study[block.key][locale]}
                      </p>
                    </div>
                  ))}
                </div>

                <footer className="border-t border-stroke bg-canvas-deep/40 px-5 py-4 sm:px-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent/80">
                    {labels.impact[locale]}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">
                    {study.impact[locale]}
                  </p>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
