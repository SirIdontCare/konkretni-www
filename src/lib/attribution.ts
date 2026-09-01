/**
 * Lead attribution capture — client-side.
 *
 * Preserves Meta Ads click attribution (fbclid + UTM) for the browser session and
 * attaches it to lead submissions. Values are captured from the URL on mount,
 * merged into sessionStorage (survives anchor navigation / reloads within the tab)
 * and never rendered as visible form fields.
 */

const STORAGE_KEY = "konkretni_attribution_v1";

const ATTRIBUTION_PARAMS = [
  "fbclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type LeadAttribution = Partial<Record<(typeof ATTRIBUTION_PARAMS)[number], string>> & {
  /** Page that captured the lead (e.g. "/wideo"). */
  landing_page?: string;
  /** Internal lead-source tag (e.g. "landing-wideo"). */
  source?: string;
};

function sanitize(value: string): string | undefined {
  // Strip control chars & angle quotes to keep downstream transports safe; hard length cap.
  const clean = value
    .replace(/[\u0000-\u001f\u007f<>"'`]/g, "")
    .trim()
    .slice(0, 200);
  return clean.length > 0 ? clean : undefined;
}

function readStored(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

/**
 * Reads attribution params from the current URL (if any), merges them over the
 * session-stored values and persists the result. Returns the merged attribution.
 */
export function captureAttribution(input: { landingPage: string; source: string }): LeadAttribution {
  const merged: Record<string, string> = readStored();

  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    for (const key of ATTRIBUTION_PARAMS) {
      const raw = params.get(key);
      const clean = raw ? sanitize(raw) : undefined;
      if (clean) merged[key] = clean;
    }
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    } catch {
      // Storage unavailable (privacy mode etc.) — in-memory value still used below.
    }
  }

  return { ...merged, landing_page: input.landingPage, source: input.source } as LeadAttribution;
}
