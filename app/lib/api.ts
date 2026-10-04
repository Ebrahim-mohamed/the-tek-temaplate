export const API_URL = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000").replace(/\/$/, "");

type Obj = Record<string, unknown>;

const isObj = (v: unknown): v is Obj => typeof v === "object" && v !== null && !Array.isArray(v);

/** Fills every missing field of `over` with the value from `base` (the defaults). */
export function deepMerge<T>(base: T, over: unknown): T {
  if (Array.isArray(base)) return (Array.isArray(over) ? over : base) as T;

  if (isObj(base)) {
    const source = isObj(over) ? over : {};
    const out: Obj = {};
    for (const key of Object.keys(base)) {
      out[key] = key in source ? deepMerge(base[key], source[key]) : base[key];
    }
    return out as T;
  }

  return (typeof over === typeof base && over !== null && over !== undefined ? over : base) as T;
}

/**
 * Loads a page's content from the backend (cached 60s, refreshed instantly when the owner saves).
 * If the backend or database is down, or has no data yet, the DEFAULTS are returned.
 */
export async function getPageContent<T>(slug: string, defaults: T): Promise<T> {
  try {
    const res = await fetch(`${API_URL}/api/pages/${slug}`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return defaults;
    const json: unknown = await res.json();
    return deepMerge(defaults, isObj(json) ? json.data : undefined);
  } catch {
    return defaults;
  }
}

/** Uploaded files are stored as "/uploads/xyz.jpg", this makes them absolute. */
export function resolveMedia(src?: string): string {
  if (!src) return "";
  return src.startsWith("/uploads/") ? `${API_URL}${src}` : src;
}

export const isRemote = (src: string) => /^https?:\/\//i.test(src);

/** Only allows safe link targets (blocks javascript: and friends). */
export function safeHref(href?: string, fallback = "#"): string {
  const h = (href || "").trim();
  if (!h || h.startsWith("//")) return fallback;
  return /^(\/|#|https?:\/\/|mailto:|tel:)/i.test(h) ? h : fallback;
}

/** "#000000" + 0.57  ->  "rgba(0,0,0,0.57)" */
export function hexToRgba(hex: string, opacity: number): string {
  const a = Math.min(1, Math.max(0, Number.isFinite(opacity) ? opacity : 1));
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return hex;
  const n = parseInt(m[1], 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}
