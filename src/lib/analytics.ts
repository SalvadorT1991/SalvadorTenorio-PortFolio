type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

/**
 * Lightweight analytics hook.
 * - Pushes to `window.dataLayer` when present (GTM/GA-compatible).
 * - No-ops safely when analytics is not configured.
 */
export function trackEvent(event: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  const detail = { event, ...payload, ts: Date.now() };

  const dataLayer = (
    window as Window & { dataLayer?: Record<string, unknown>[] }
  ).dataLayer;

  if (Array.isArray(dataLayer)) {
    dataLayer.push(detail);
  }

  if (process.env.NODE_ENV === "development") {
    // Helpful during local verification; silent in production.
    console.info("[analytics]", detail);
  }
}
