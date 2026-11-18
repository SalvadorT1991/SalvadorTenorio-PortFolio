"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { profile } from "@/data/profile";
import { ui } from "@/content/ui";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { InPageLink } from "@/components/ui/InPageLink";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const copy = ui[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const sectionIds = primaryNav.map((item) => item.href.replace("#", ""));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio ||
              a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-stroke/80 bg-canvas/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <InPageLink
          href="#home"
          className="group flex min-w-0 flex-col leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          <span className="font-display text-[0.95rem] font-semibold tracking-tight text-ink sm:text-base">
            {profile.fullName}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted transition-colors group-hover:text-accent">
            {copy.practiceLine}
          </span>
        </InPageLink>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={copy.navAria}>
          {primaryNav.map((item) => {
            const id = item.href.replace("#", "");
            const active = activeId === id;
            return (
              <InPageLink
                key={item.id}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  active
                    ? "bg-accent/10 text-accent"
                    : "text-ink-muted hover:text-ink",
                )}
                aria-current={active ? "true" : undefined}
              >
                {item.label[locale]}
              </InPageLink>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          {profile.cv.published ? (
            <Button
              href={profile.cv.href}
              variant="secondary"
              download
              className="!py-2"
            >
              <Download className="size-3.5" aria-hidden />
              {profile.cv.label[locale]}
            </Button>
          ) : null}
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-stroke text-ink lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? copy.closeMenu : copy.openMenu}</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-stroke bg-canvas lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {primaryNav.map((item) => {
            const id = item.href.replace("#", "");
            const active = activeId === id;
            return (
              <InPageLink
                key={item.id}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-3 text-base",
                  active
                    ? "bg-accent/10 text-accent"
                    : "text-ink-muted hover:bg-surface hover:text-ink",
                )}
                aria-current={active ? "true" : undefined}
                onNavigate={() => setOpen(false)}
              >
                {item.label[locale]}
              </InPageLink>
            );
          })}
          <div className="mt-3 flex items-center justify-between gap-3 border-t border-stroke pt-4">
            <LanguageSwitcher locale={locale} />
            {profile.cv.published ? (
              <Button href={profile.cv.href} variant="primary" download>
                <Download className="size-3.5" aria-hidden />
                {profile.cv.label[locale]}
              </Button>
            ) : null}
          </div>
        </Container>
      </div>
    </header>
  );
}
