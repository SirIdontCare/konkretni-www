# Video Replacement Required — legacy VSL must not be published on /wideo

## Decision

**DO NOT embed Vimeo `1111598398` on the new `/wideo` route.** The route ships video-ready: the
moment a replacement video is approved, it is enabled by setting a single environment variable
(see below). No code changes required.

## Why the legacy VSL cannot be reused

Evidence gathered 2026-09-01:

1. **Content cannot be verified.** The oEmbed metadata (`"Konkretni VSL"`, 5:23, uploaded
   2025-08-20) and the poster frame were inspected. The poster is an on-brand title card
   ("KONKRETY, NIE OBIETNICE" + current logo) and shows **no people** — the interior of the
   video (speakers, narration claims, supers) is technically unverifiable from the outside.
2. **The funnel it belongs to is outdated.** The same legacy landing still presents
   **Aleksandra Sikora** as team and Piotr Cegła with outdated credentials
   (18 lat / 6× TOP Doradca 2019–2024 / "Członek MDRT" without count) vs. verified current
   data (**20 lat / 8× MDRT / Senior Dyrektor Agencji Pru / Współtwórca KONKRETNYCH**).
   A VSL recorded in that era may carry outdated people or claims.
3. **Policy: never silently publish unverified video content.** Until the client confirms the
   recording contains no removed team members and only current claims, it stays unpublished.
   (Consistent with the earlier recommendation in `docs/video-refresh.md`.)

## What the replacement video must contain (brief for Piotr)

- Opening consistent with the brand: "Nie sprzedajemy ubezpieczeń. Budujemy bezpieczeństwo."
- How we work: rozmowa → plan → rozwiązania.
- Three areas: oszczędności / posag dla bliskich / leczenie na własnych zasadach.
- Team facts — **current only**: Piotr (20 lat, 8× MDRT, Senior Dyrektor Agencji Pru,
  współtwórca), Marcin (ubezpieczenia na życie, ochrona firm), Aneta (sukcesja, 19 lat
  likwidatorem szkód).
- **No Aleksandra Sikora in frame, narration, or captions.**
- No specific amounts, guarantees, or market comparisons that are not verified.
- Closing: "Najpierw rozmowa…" + CTA to the consultation form.
- Production: Vimeo hosting, embed with `dnt=1`, 16:9, clear audio; length ≈ 3–6 min.

## How to enable the video once approved (no code change)

1. Upload the new video to the KONKRETNI Vimeo account.
2. Set environment variable on the Vercel project (Production + Preview):
   ```
   NEXT_PUBLIC_VIMEO_VIDEO_ID=<new_vimeo_id>
   ```
3. Redeploy. The `/wideo` route automatically:
   - renders the video section (click-to-play facade, 16:9, `dnt=1`, lazy iframe),
   - switches the hero primary CTA to "Obejrzyj wideo" (scroll to the player),
   - shows the "KROK 1 / KROK 2" step framing.
   Until then, the video section is omitted in production and the hero primary CTA is
   "Porozmawiajmy" (direct to the lead form) — no broken or "missing video" UI is ever shown.
4. QA checklist after switching: video plays on iOS Safari + Android Chrome, no console errors,
   hero CTA scroll works, form still submits, Meta Pixel (if enabled) still fires only
   PageView/Lead as documented.
