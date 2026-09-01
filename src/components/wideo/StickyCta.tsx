"use client";

import { useEffect, useState } from "react";

/**
 * Sticky mobile-style CTA bar (pattern recovered from the legacy funnel).
 * Appears once the hero scrolls out of view and hides while the lead form
 * or footer is visible (never covers the form CTA).
 */
export function StickyCta({ label, href }: { label: string; href: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-wl-hero]");
    const lead = document.getElementById("kontakt");
    const footer = document.querySelector("[data-wl-footer]");

    if (!hero || !lead) return;

    let heroGone = false;
    let leadSeen = false;
    let footerSeen = false;
    const update = () => setVisible(heroGone && !leadSeen && !footerSeen);

    const observer = (cb: (seen: boolean) => void, entryCheck: (isIntersecting: boolean) => boolean) =>
      new IntersectionObserver(
        (entries) => {
          for (const entry of entries) cb(entryCheck(entry.isIntersecting));
          update();
        },
        { threshold: 0.12 },
      );

    const oHero = observer((seen) => (heroGone = seen), (i) => !i);
    const oLead = observer((seen) => (leadSeen = seen), (i) => i);
    const oFooter = footer ? observer((seen) => (footerSeen = seen), (i) => i) : null;

    oHero.observe(hero);
    oLead.observe(lead);
    if (footer && oFooter) oFooter.observe(footer);

    return () => {
      oHero.disconnect();
      oLead.disconnect();
      oFooter?.disconnect();
    };
  }, []);

  return (
    <div className={`wl-sticky${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <a
        href={href}
        className="btn btn--primary wl-sticky-btn"
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
      >
        {label}
      </a>
    </div>
  );
}
