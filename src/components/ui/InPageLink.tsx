"use client";

import { cn } from "@/lib/utils";
import { scrollToId } from "@/lib/scroll";

type InPageLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
  "aria-current"?: "true" | "page" | "step" | "location" | "date" | "time" | boolean;
};

/** Same-page section link with reliable smooth scroll. */
export function InPageLink({
  href,
  children,
  className,
  onNavigate,
  "aria-current": ariaCurrent,
}: InPageLinkProps) {
  const id = href.startsWith("#") ? href.slice(1) : href;

  return (
    <a
      href={`#${id}`}
      className={cn(className)}
      aria-current={ariaCurrent}
      onClick={(event) => {
        event.preventDefault();
        scrollToId(id);
        onNavigate?.();
      }}
    >
      {children}
    </a>
  );
}
