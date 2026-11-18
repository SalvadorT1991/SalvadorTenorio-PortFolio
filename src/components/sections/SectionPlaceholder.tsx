import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SectionPlaceholderProps = {
  id: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionPlaceholder({
  id,
  title,
  description,
  className,
}: SectionPlaceholderProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 border-b border-stroke/70 py-20 md:py-24", className)}
      aria-labelledby={`${id}-title`}
    >
      <Container>
        <div className="max-w-2xl space-y-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent/80">
            {id}
          </p>
          <h2
            id={`${id}-title`}
            className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
          >
            {title}
          </h2>
          <p className="text-base leading-relaxed text-ink-muted">{description}</p>
        </div>
        <div className="mt-10 h-px w-full bg-gradient-to-r from-stroke via-accent/30 to-transparent" />
      </Container>
    </section>
  );
}
