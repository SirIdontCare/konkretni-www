"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";

export function Navigation({ variant = "hero" }: { variant?: "hero" | "light" }) {
  const [open, setOpen] = useState(false);

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
          <a href="#" className="nav-brand" aria-label={`${siteConfig.brand.name} — strona główna`}>
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
          </a>

          <nav aria-label="Główna nawigacja" className="hidden md:flex">
            <ul className="nav-links">
              {siteConfig.nav.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a href={siteConfig.nav.cta.href} className="btn btn--primary nav-desktop" style={{ display: open ? "none" : undefined }}>
              {siteConfig.nav.cta.label}
            </a>
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
              {siteConfig.nav.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
              <a href={siteConfig.nav.cta.href} className="btn btn--primary" style={{ flex: 1 }} onClick={() => setOpen(false)}>
                {siteConfig.nav.cta.label}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
