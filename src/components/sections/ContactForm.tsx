"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/data/profile";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";
import { Button } from "@/components/ui/Button";

type ContactFormProps = {
  locale: Locale;
};

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm({ locale }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(empty);
  const [error, setError] = useState<string | null>(null);
  const [sentHint, setSentHint] = useState(false);

  const copy =
    locale === "es"
      ? {
          name: "Nombre",
          email: "Email",
          company: "Empresa (opcional)",
          message: "Mensaje",
          submit: "Preparar mensaje",
          hint: "Se abrirá tu cliente de correo con el mensaje listo. No se almacena en un servidor.",
          success: "Cliente de correo abierto. Si no aparece, usa el email directo.",
          required: "Completa nombre, email y mensaje.",
          invalidEmail: "Ingresa un email válido.",
        }
      : {
          name: "Name",
          email: "Email",
          company: "Company (optional)",
          message: "Message",
          submit: "Prepare message",
          hint: "This opens your email client with a drafted message. Nothing is stored on a server.",
          success: "Email client opened. If it didn't, use the direct email link.",
          required: "Please complete name, email, and message.",
          invalidEmail: "Enter a valid email address.",
        };

  const onChange =
    (key: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: event.target.value }));
      setError(null);
      setSentHint(false);
    };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError(copy.required);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError(copy.invalidEmail);
      return;
    }

    const to =
      profile.socials.find((s) => s.id === "email" && s.enabled)?.display ??
      "salvadortenorioalba@gmail.com";

    const subject =
      locale === "es"
        ? `Contacto portfolio — ${form.name.trim()}`
        : `Portfolio inquiry — ${form.name.trim()}`;

    const body = [
      locale === "es" ? `Nombre: ${form.name.trim()}` : `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      form.company.trim()
        ? locale === "es"
          ? `Empresa: ${form.company.trim()}`
          : `Company: ${form.company.trim()}`
        : null,
      "",
      form.message.trim(),
    ]
      .filter(Boolean)
      .join("\n");

    trackEvent("contact_form_submit", {
      locale,
      hasCompany: Boolean(form.company.trim()),
    });

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSentHint(true);
  };

  const fieldClass =
    "w-full rounded-xl border border-stroke bg-canvas/50 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 outline-none transition-colors focus:border-accent/50 focus:ring-2 focus:ring-accent/30";

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-stroke bg-surface/25 p-5 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1.5 text-sm">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
            {copy.name}
          </span>
          <input
            className={fieldClass}
            value={form.name}
            onChange={onChange("name")}
            autoComplete="name"
            required
          />
        </label>
        <label className="space-y-1.5 text-sm">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
            {copy.email}
          </span>
          <input
            type="email"
            className={fieldClass}
            value={form.email}
            onChange={onChange("email")}
            autoComplete="email"
            required
          />
        </label>
      </div>

      <label className="block space-y-1.5 text-sm">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
          {copy.company}
        </span>
        <input
          className={fieldClass}
          value={form.company}
          onChange={onChange("company")}
          autoComplete="organization"
        />
      </label>

      <label className="block space-y-1.5 text-sm">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
          {copy.message}
        </span>
        <textarea
          className={cn(fieldClass, "min-h-32 resize-y")}
          value={form.message}
          onChange={onChange("message")}
          required
        />
      </label>

      {error ? <p className="text-sm text-red-300">{error}</p> : null}
      {sentHint ? <p className="text-sm text-accent">{copy.success}</p> : null}

      <p className="text-xs leading-relaxed text-ink-muted">{copy.hint}</p>

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        <Send className="size-4" aria-hidden />
        {copy.submit}
      </Button>
    </form>
  );
}
