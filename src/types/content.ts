export type Locale = "es" | "en";

export type ConfirmationStatus = "confirmed" | "needs_confirmation" | "draft";

export type LocalizedString = Record<Locale, string>;

export type NavItem = {
  id: string;
  href: string;
  label: LocalizedString;
};

export type SocialLink = {
  id: "email" | "linkedin" | "github" | "phone";
  label: LocalizedString;
  href: string;
  display: string;
  enabled: boolean;
};

export type ExperienceEntry = {
  id: string;
  company: string;
  location: LocalizedString;
  title: LocalizedString;
  /** Display period string; keep null until employment dates are confirmed. */
  period: LocalizedString | null;
  startYear: number | null;
  endYear: number | null;
  /** true when end is current / present */
  isCurrent: boolean;
  summary: LocalizedString;
  highlights: LocalizedString[];
  technologies: string[];
  clients?: string[];
  /** Featured roles stay expanded by default in the timeline */
  featured?: boolean;
  status: ConfirmationStatus;
  notes?: string;
};

export type CaseStudy = {
  id: string;
  number: string;
  title: LocalizedString;
  organization: string;
  context: LocalizedString;
  challenge: LocalizedString;
  solution: LocalizedString;
  architecture: LocalizedString;
  impact: LocalizedString;
  /** One-line outcome shown before the detail grid */
  resultLead: LocalizedString;
  technologies: string[];
  status: ConfirmationStatus;
  notes?: string;
};

export type ExpertiseArea = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
};

export type SkillItem = {
  name: string;
  /** Visual hierarchy only — not a claimed proficiency score */
  emphasis?: "core" | "standard";
};

export type SkillGroup = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  /** Group-level visual weight */
  prominence: "primary" | "secondary";
  items: SkillItem[];
};
