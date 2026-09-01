# Meta Tracking — required before enabling on /wideo

## Legacy implementation (audited 2026-09-01)

| Item | Value |
|---|---|
| PIXEL_ID | `1028675786003506` |
| Events on legacy landing | `PageView` only (unconditional, in `<head>`) |
| Lead event | Not found in page source; possibly configured inside GTM `GTM-P5VF2BC` (container content not auditable without access) |
| Consent on legacy | **None** — Pixel and GTM load without any consent gate |

## Current site status

- The new site has **no consent architecture** (no cookie banner, no consent mode, no
  region gating). `src/` contains no cookie/consent/analytics code.
- RODO/ePrivacy: in Poland/EU, marketing cookies & Pixels require prior consent. Installing a
  Meta Pixel without consent infrastructure would create a compliance gap — **the Pixel is
  therefore NOT enabled by default** and no third-party script ships to visitors today.

## What has been prepared (code-ready, disabled)

`src/lib/meta-pixel.ts` implements:

- `initMetaPixel()` — injects `fbevents.js` and fires `PageView`; runs **only** when
  `NEXT_PUBLIC_META_PIXEL_ID` is set **and** `NEXT_PUBLIC_META_PIXEL_ENABLED === "true"`.
- `trackMetaLead()` — fires a single `Lead` event; **only** called after the contact API
  returns a confirmed successful submission (`res.ok === true`). Never on click, form open,
  validation, or failed submission.

Both are no-ops unless the environment flags above are set. Nothing loads for visitors now.

## Requirements to enable later (checklist)

1. **Consent architecture** on the whole site (cookie banner with at minimum:
   `marketing` category, granular accept/reject, log of consent, easy withdrawal).
   Recommended: consent management compatible with Google Consent Mode v2.
2. Gate `initMetaPixel()` behind accepted `marketing` consent (wire into the banner's
   callback). Until consent is granted: do not inject `fbevents.js`, do not set `_fbp`.
3. Confirm Pixel `1028675786003506` ownership in Business Manager and decide whether the
   legacy Pixel should be reused or a new campaign-scoped Pixel created.
4. Decide event strategy:
   - `PageView` — on `/wideo` load (after consent),
   - `Lead` — only after confirmed server-side form success (already implemented),
   - optional `ViewContent` on video play start (only if needed for optimization).
5. Prefer **Meta Conversions API (CAPI)** for the Lead (server-side, from
   `/api/contact` on `ok:true`) with deduplication via `event_id` — more resilient than
   client-only events and independent of ITP/browser restrictions.
6. Verify with Meta Events Manager (Test Events) before switching ads.
7. Document the final consent + tracking decision in this file (date, who approved).

## Explicitly out of scope until the above is done

- Any Meta/Google/third-party tag in production.
- Any "fake compliance" workaround (e.g., firing Pixel on `loaded` with `delay`).
- GTM: legacy container `GTM-P5VF2BC` belongs to the Landingi account; do **not** reuse it on
  the new site without auditing its tags first.
