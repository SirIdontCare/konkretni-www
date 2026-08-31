"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";

export function FAQ() {
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="faq-wrap">
          <div className="faq-head">
            <div className="eyebrow">
              {faq.label}
            </div>
            <h2 id="faq-heading">{faq.headline}</h2>
            <p>Zero pustych obietnic. Tylko to, co możemy powiedzieć wprost — na podstawie zweryfikowanych informacji.</p>
          </div>

          <div className="faq-list" role="list">
            {faq.items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.q} className="faq-item" role="listitem" data-open={isOpen}>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 3V11M3 7H11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    hidden={!isOpen}
                    className="faq-a"
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
