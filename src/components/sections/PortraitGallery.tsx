"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

type PortraitGalleryProps = {
  locale: Locale;
};

const AUTO_MS = 5500;

export function PortraitGallery({ locale }: PortraitGalleryProps) {
  const slides = profile.gallery;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    if (reduceMotion || paused || slides.length < 2) return;
    const id = window.setInterval(() => goTo(index + 1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [goTo, index, paused, reduceMotion, slides.length]);

  const current = slides[index];

  return (
    <div
      className="relative mx-auto w-full max-w-[22rem] lg:mx-0 lg:max-w-sm lg:justify-self-end"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        aria-hidden
        className="absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-accent/20 via-transparent to-accent-blue/20 blur-2xl"
      />

      <figure className="relative overflow-hidden rounded-[1.15rem] border border-stroke bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
        <div className="relative aspect-[4/5] max-h-[min(52vh,420px)] w-full overflow-hidden sm:max-h-[min(56vh,460px)]">
          {slides.map((slide, i) => (
            <Image
              key={slide.id}
              src={slide.src}
              alt={slide.alt[locale]}
              width={720}
              height={900}
              priority={i === 0}
              sizes="(max-width: 1024px) 22rem, 24rem"
              quality={82}
              className={cn(
                "absolute inset-0 h-full w-full object-cover",
                !reduceMotion && "transition-opacity duration-700 ease-out",
                i === index ? "opacity-100" : "opacity-0",
              )}
              style={{ objectPosition: slide.objectPosition }}
            />
          ))}

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-canvas via-canvas/80 to-transparent px-4 pb-3.5 pt-16">
            <p className="font-display text-base font-medium text-ink">
              {profile.shortName}
            </p>
            <p
              className="text-xs text-ink-muted sm:text-sm"
              aria-live="polite"
            >
              {current.caption[locale]}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-stroke bg-canvas-deep/80 px-2.5 py-2">
          <button
            type="button"
            aria-label={locale === "es" ? "Imagen anterior" : "Previous image"}
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-stroke text-ink-muted transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => goTo(index - 1)}
          >
            <ChevronLeft className="size-4" aria-hidden />
          </button>

          <ul className="flex min-w-0 flex-1 items-center justify-center gap-1.5">
            {slides.map((slide, i) => (
              <li key={slide.id} className="min-w-0 flex-1">
                <button
                  type="button"
                  aria-label={slide.caption[locale]}
                  aria-current={i === index}
                  className={cn(
                    "relative block aspect-square w-full overflow-hidden rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    i === index
                      ? "border-accent/60"
                      : "border-stroke opacity-65 hover:opacity-100",
                  )}
                  onClick={() => goTo(i)}
                >
                  <Image
                    src={slide.src}
                    alt=""
                    width={72}
                    height={72}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: slide.objectPosition }}
                  />
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label={locale === "es" ? "Imagen siguiente" : "Next image"}
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-stroke text-ink-muted transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => goTo(index + 1)}
          >
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </div>

        <figcaption className="border-t border-stroke bg-surface/40 px-4 py-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent/90">
            {locale === "es" ? "Compromiso" : "Commitment"}
          </p>
          <p className="mt-1.5 line-clamp-3 text-[13px] leading-snug text-ink-muted">
            “{profile.commitment[locale]}”
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
