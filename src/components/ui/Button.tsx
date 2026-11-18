"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { scrollToId } from "@/lib/scroll";

type ButtonVariant = "primary" | "secondary" | "ghost";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-ink-inverse hover:bg-accent-soft focus-visible:ring-accent shadow-[0_0_0_1px_rgba(20,184,166,0.28)]",
  secondary:
    "bg-transparent text-ink border border-stroke hover:border-accent/50 hover:text-accent focus-visible:ring-accent",
  ghost:
    "bg-transparent text-ink-muted hover:text-ink focus-visible:ring-accent",
};

function isNativeAnchor(href: string, download?: boolean | string) {
  return (
    Boolean(download) ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("/cv/") ||
    href.startsWith("/images/")
  );
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-40",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, download, target, rel, onClick } = props;

    // Hash / mailto / file downloads must use native <a> —
    // Next.js Link ignores same-route hash navigation.
    if (isNativeAnchor(href, download)) {
      const isHash = href.startsWith("#");
      return (
        <a
          href={href}
          className={classes}
          download={download}
          target={target}
          rel={rel}
          onClick={(event) => {
            if (href.startsWith("/cv/")) {
              trackEvent("cv_download", { href });
            } else if (href === "#contact") {
              trackEvent("cta_contact");
            } else if (href === "#experience") {
              trackEvent("cta_experience");
            } else if (href.startsWith("mailto:")) {
              trackEvent("cta_mailto");
            }

            if (isHash) {
              event.preventDefault();
              scrollToId(href.slice(1));
            }
            onClick?.(event);
          }}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} target={target} rel={rel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
