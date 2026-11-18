import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl space-y-3", className)}>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent/80">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-ink-muted">{description}</p>
      ) : null}
    </div>
  );
}
