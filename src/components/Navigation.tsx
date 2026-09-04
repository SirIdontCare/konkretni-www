"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";

type NavLink = { label: string; href: string };

export function Navigation({
  variant = "hero",
  links,
  cta,
}: {
  variant?: "hero" | "light";
  /** Optional link overrides (e.g. campaign landings). Defaults to site navigation. */
  links?: NavLink[];
  /** Optional CTA override. Defaults to site navigation CTA. */
  cta?: NavLink;
}) {
  const [open, setOpen] = useState(false);
  const navLinks = links ?? siteConfig.nav.links;
  const navCta = cta ?? siteConfig.nav.cta;

  // Close on escape and on resize to desktop
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const mql = window.matchMedia("(min-width: 881px)");
    const onChange = () => {
      if (mql.matches) setOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mql.removeEventListener("change", onChange);
    };
  }, []);

  // Lock body scroll when open on mobile
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHero = variant === "hero";
  const navClass = isHero ? "site-nav site-nav--hero hero-nav" : "site-nav";

  return (
    <header className={navClass} role="banner">
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="nav-brand" aria-label={`${siteConfig.brand.name} — strona główna`}>
            <Image
              src={isHero ? siteConfig.brand.logo.dark : siteConfig.brand.logo.light}
              alt={siteConfig.brand.logo.alt}
              width={42}
              height={42}
              className="nav-logo"
              priority
              style={{ objectFit: "contain" }}
            />
            <span className="nav-word" aria-hidden="true">
              {siteConfig.brand.name}
              <small>{siteConfig.brand.tagline}</small>
            </span>
          </Link>

          <nav aria-label="Główna nawigacja" className="hidden md:flex">
            <ul className="nav-links">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <Link href={navCta.href} className="btn btn--primary nav-desktop" style={{ display: open ? "none" : undefined }}>
              {navCta.label}
            </Link>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="mobile-panel"
              aria-label={open ? "Zamknij menu" : "Otwórz menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>

        <div id="mobile-panel" className="mobile-panel" hidden={!open}>
          <nav aria-label="Menu mobilne">
            <ul className="mobile-links">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
              <Link href={navCta.href} className="btn btn--primary" style={{ flex: 1 }} onClick={() => setOpen(false)}>
                {navCta.label}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
