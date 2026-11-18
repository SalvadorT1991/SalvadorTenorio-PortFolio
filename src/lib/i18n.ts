import type { Locale } from "@/types/content";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromParam(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}
