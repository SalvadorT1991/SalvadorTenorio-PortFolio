import { ArrowUpRight, Code2, Mail, MapPin, Phone, Users } from "lucide-react";
import { contactContent } from "@/content/stack";
import { profile } from "@/data/profile";
import type { Locale, SocialLink } from "@/types/content";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ContactSectionProps = {
  locale: Locale;
};

function socialIcon(id: SocialLink["id"]) {
  switch (id) {
    case "email":
      return Mail;
    case "phone":
      return Phone;
    case "linkedin":
      return Users;
    case "github":
      return Code2;
    default:
      return Mail;
  }
}

export function ContactSection({ locale }: ContactSectionProps) {
  const copy = contactContent[locale];
  const email = profile.socials.find((s) => s.id === "email" && s.enabled);
  const publicLinks = profile.socials.filter((s) => s.enabled);

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-b border-stroke/70 py-20 md:py-28"
      aria-labelledby="contact-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,184,166,0.10),transparent_45%),radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.08),transparent_40%)]"
      />

      <Container className="relative space-y-12">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <Reveal>
            <div className="space-y-8">
              <SectionHeading
                id="contact-title"
                eyebrow={copy.eyebrow}
                title={copy.title}
                description={copy.description}
              />

              <div className="flex flex-wrap items-center gap-3">
                {email ? (
                  <Button href={email.href} variant="primary">
                    <Mail className="size-4" aria-hidden />
                    {copy.ctaEmail}
                  </Button>
                ) : null}
                <p className="inline-flex items-center gap-2 rounded-md border border-accent/20 bg-accent/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                  {copy.availability}
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-stroke bg-surface/30 px-4 py-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  aria-hidden
                />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                    {copy.locationLabel}
                  </p>
                  <p className="mt-1 text-sm text-ink">
                    {profile.location[locale]}
                  </p>
                </div>
              </div>

              <ul className="grid gap-3">
                {publicLinks.map((social) => {
                  const Icon = socialIcon(social.id);
                  const external =
                    social.id === "linkedin" || social.id === "github";

                  return (
                    <li key={social.id}>
                      <a
                        href={social.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between gap-4 rounded-2xl border border-stroke bg-surface/25 px-5 py-4 transition-colors hover:border-accent/40 hover:bg-surface/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        <span className="flex min-w-0 items-center gap-4">
                          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-stroke bg-canvas/50 text-accent">
                            <Icon className="size-4" aria-hidden />
                          </span>
                          <span className="min-w-0">
                            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                              {social.label[locale]}
                            </span>
                            <span className="mt-1 block truncate text-sm text-ink transition-colors group-hover:text-accent">
                              {social.display}
                            </span>
                          </span>
                        </span>
                        <ArrowUpRight
                          className="size-4 shrink-0 text-ink-muted transition-colors group-hover:text-accent"
                          aria-hidden
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                {copy.formLabel}
              </p>
              <ContactForm locale={locale} />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
