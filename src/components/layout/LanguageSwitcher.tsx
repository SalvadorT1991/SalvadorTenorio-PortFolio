"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ui } from "@/content/ui";
import { locales } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const copy = ui[locale];

  const hrefFor = (next: Locale) => {
    const segments = pathname.split("/");
    if (segments.length > 1) {
      segments[1] = next;
      return segments.join("/") || `/${next}`;
    }
    return `/${next}`;
  };

  return (
    <div
      className="inline-flex items-center rounded-md border border-stroke bg-surface/60 p-0.5"
      role="group"
      aria-label={copy.language}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={hrefFor(code)}
            hrefLang={code}
            className={cn(
              "rounded px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
              active
                ? "bg-accent/15 text-accent"
                : "text-ink-muted hover:text-ink",
            )}
            aria-current={active ? "true" : undefined}
          >
            {code}
          </Link>
        );
      })}
    </div>
  );
}
