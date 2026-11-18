import { primaryNav } from "@/data/navigation";
import { profile } from "@/data/profile";
import { ui } from "@/content/ui";
import type { Locale } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { InPageLink } from "@/components/ui/InPageLink";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const year = 2026;
  const copy = ui[locale];
  const enabledSocials = profile.socials.filter((s) => s.enabled);

  return (
    <footer className="border-t border-stroke bg-canvas-deep">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="font-display text-lg font-semibold tracking-tight text-ink">
            {profile.fullName}
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
            {profile.positioning[locale]}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent/80">
            {copy.practiceLine}
          </p>
        </div>

        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            {copy.footerNav}
          </p>
          <ul className="space-y-2">
            {primaryNav.map((item) => (
              <li key={item.id}>
                <InPageLink
                  href={item.href}
                  className="text-sm text-ink-muted transition-colors hover:text-accent"
                >
                  {item.label[locale]}
                </InPageLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            {locale === "es" ? "Contacto" : "Contact"}
          </p>
          <ul className="space-y-2">
            {enabledSocials.map((social) => {
              const isExternal =
                social.id === "linkedin" || social.id === "github";
              return (
                <li key={social.id}>
                  <a
                    href={social.href}
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    {social.label[locale]}
                  </a>
                </li>
              );
            })}
            {profile.cv.published ? (
              <li>
                <a
                  href={profile.cv.href}
                  download
                  className="text-sm text-ink-muted transition-colors hover:text-accent"
                >
                  {profile.cv.label[locale]}
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </Container>

      <div className="border-t border-stroke/70">
        <Container className="flex flex-col gap-2 py-5 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.fullName}. {copy.footerRights}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em]">
            {profile.location[locale]}
          </p>
        </Container>
      </div>
    </footer>
  );
}
