import { proofItems } from "@/data/process";
import type { Locale } from "@/types/content";
import { Container } from "@/components/ui/Container";

type ProofStripProps = {
  locale: Locale;
};

export function ProofStrip({ locale }: ProofStripProps) {
  return (
    <section
      aria-label={locale === "es" ? "Señales de confianza" : "Trust signals"}
      className="border-b border-stroke/70 bg-canvas-deep/60"
    >
      <Container className="grid grid-cols-2 gap-px overflow-hidden rounded-none bg-stroke/40 py-0 md:grid-cols-4">
        {proofItems.map((item) => (
          <div
            key={item.id}
            className="bg-canvas px-4 py-5 sm:px-6 sm:py-6"
          >
            <p className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
              {item.label[locale]}
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
              {item.detail[locale]}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
