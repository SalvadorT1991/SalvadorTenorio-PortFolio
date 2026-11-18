import type { Locale } from "@/types/content";

type ArchitectureDiagramProps = {
  locale: Locale;
  title: string;
  caption: string;
};

export function ArchitectureDiagram({
  locale,
  title,
  caption,
}: ArchitectureDiagramProps) {
  const labels =
    locale === "es"
      ? {
          clients: "Clientes",
          api: "APIs .NET",
          data: "SQL / Datos",
          bus: "Mensajería",
          obs: "Observabilidad",
        }
      : {
          clients: "Clients",
          api: ".NET APIs",
          data: "SQL / Data",
          bus: "Messaging",
          obs: "Observability",
        };

  return (
    <figure className="overflow-hidden rounded-2xl border border-stroke bg-surface/25 p-5 sm:p-6">
      <figcaption className="mb-5 space-y-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent/90">
          {title}
        </p>
        <p className="text-sm text-ink-muted">{caption}</p>
      </figcaption>

      <svg
        viewBox="0 0 640 220"
        role="img"
        aria-label={caption}
        className="h-auto w-full"
      >
        <defs>
          <linearGradient id="archGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <rect
          x="8"
          y="8"
          width="624"
          height="204"
          rx="16"
          fill="url(#archGlow)"
          opacity="0.25"
        />

        {/* Clients */}
        <rect x="28" y="70" width="110" height="70" rx="12" fill="#121A2A" stroke="rgba(148,163,184,0.28)" />
        <text x="83" y="110" textAnchor="middle" fill="#E8EEF7" fontSize="13" fontFamily="Segoe UI, sans-serif">
          {labels.clients}
        </text>

        <path d="M145 105 H185" stroke="#14B8A6" strokeWidth="2" markerEnd="url(#arrow)" />
        <polygon points="185,100 198,105 185,110" fill="#14B8A6" />

        {/* API hub */}
        <rect x="210" y="55" width="140" height="100" rx="14" fill="#0B1220" stroke="#14B8A6" strokeOpacity="0.7" />
        <text x="280" y="108" textAnchor="middle" fill="#E8EEF7" fontSize="14" fontWeight="600" fontFamily="Segoe UI, sans-serif">
          {labels.api}
        </text>

        <path d="M358 85 H398" stroke="#14B8A6" strokeWidth="2" />
        <polygon points="398,80 411,85 398,90" fill="#14B8A6" />
        <path d="M358 125 H398" stroke="#38BDF8" strokeWidth="2" />
        <polygon points="398,120 411,125 398,130" fill="#38BDF8" />

        {/* Data */}
        <rect x="425" y="30" width="120" height="56" rx="12" fill="#121A2A" stroke="rgba(148,163,184,0.28)" />
        <text x="485" y="63" textAnchor="middle" fill="#E8EEF7" fontSize="13" fontFamily="Segoe UI, sans-serif">
          {labels.data}
        </text>

        {/* Messaging */}
        <rect x="425" y="118" width="120" height="56" rx="12" fill="#121A2A" stroke="rgba(148,163,184,0.28)" />
        <text x="485" y="151" textAnchor="middle" fill="#E8EEF7" fontSize="13" fontFamily="Segoe UI, sans-serif">
          {labels.bus}
        </text>

        {/* Observability */}
        <rect x="560" y="74" width="56" height="62" rx="12" fill="#121A2A" stroke="#38BDF8" strokeOpacity="0.55" />
        <text x="588" y="110" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="IBM Plex Mono, monospace">
          {labels.obs}
        </text>
        <path d="M545 58 H580 V74" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.6" />
        <path d="M545 146 H580 V136" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.6" />
      </svg>
    </figure>
  );
}
