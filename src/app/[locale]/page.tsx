import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroFoundation } from "@/components/sections/HeroFoundation";
import { HowIWorkSection } from "@/components/sections/HowIWorkSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { StackSection } from "@/components/sections/StackSection";
import { getLocaleFromParam, isLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = getLocaleFromParam(raw);
  const title =
    locale === "es"
      ? "Salvador Tenorio Alba | Arquitecto de Software & Full Stack Senior"
      : "Salvador Tenorio Alba | Lead Software Architect & Senior Full Stack";
  const description =
    locale === "es"
      ? "Arquitectura de software empresarial, ingeniería .NET, modernización de sistemas y entrega confiable. Freelance · STA Solutions."
      : "Enterprise software architecture, .NET engineering, system modernization, and reliable delivery. Freelance · STA Solutions.";

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === "es" ? "es_MX" : "en_US",
      url: `/${locale}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = getLocaleFromParam(raw);

  return (
    <>
      <HeroFoundation locale={locale} />
      <ProofStrip locale={locale} />
      <AboutSection locale={locale} />
      <HowIWorkSection locale={locale} />
      <ExperienceSection locale={locale} />
      <ProjectsSection locale={locale} />
      <StackSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
