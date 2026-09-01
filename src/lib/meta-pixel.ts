/**
 * Meta Pixel — architecture-ready, DISABLED by default.
 *
 * Activation requires BOTH env vars (see docs/meta-tracking-required.md):
 *   NEXT_PUBLIC_META_PIXEL_ID=<pixel id>
 *   NEXT_PUBLIC_META_PIXEL_ENABLED="true"
 *
 * Before enabling, a consent architecture must exist on the site (RODO/ePrivacy) and
 * these calls must be gated behind accepted "marketing" consent. Until then every
 * function below is a no-op and no third-party script is ever injected.
 *
 * Event policy:
 *   - PageView: on landing view (after consent, once enabled)
 *   - Lead: ONLY after a confirmed successful server-side form submission.
 *     Never on button click, form open, validation, or failed submission.
 */

type Fbq = ((...args: unknown[]) => void) & {
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const PIXEL_ENABLED = process.env.NEXT_PUBLIC_META_PIXEL_ENABLED === "true";

export function metaPixelEnabled(): boolean {
  return PIXEL_ENABLED && typeof PIXEL_ID === "string" && PIXEL_ID.length > 0;
}

let initialized = false;

/** Injects fbevents.js and fires PageView. No-op unless enabled. Idempotent. */
export function initMetaPixel(): void {
  if (initialized || !metaPixelEnabled() || typeof window === "undefined") return;
  initialized = true;

  const w = window;
  if (!w.fbq) {
    const fbq: Fbq = (...args: unknown[]) => {
      fbq.queue?.push(args);
    };
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    w.fbq = fbq;
    w._fbq = fbq;
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  w.fbq("init", PIXEL_ID);
  w.fbq("track", "PageView");
}

/**
 * Fires a single Lead event. MUST be called only after the contact API confirmed
 * successful delivery (res.ok === true). Optional eventId enables CAPI deduplication.
 */
export function trackMetaLead(eventId?: string): void {
  if (!metaPixelEnabled() || typeof window === "undefined") return;
  window.fbq?.("track", "Lead", { content_name: "landing-wideo" }, eventId ? { eventID: eventId } : undefined);
}
