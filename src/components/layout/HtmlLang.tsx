"use client";

import { useLayoutEffect } from "react";
import type { Locale } from "@/types/content";

/** Syncs <html lang> after mount without blocking first paint. */
export function HtmlLang({ locale }: { locale: Locale }) {
  useLayoutEffect(() => {
    if (document.documentElement.lang !== locale) {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return null;
}
