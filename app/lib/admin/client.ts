import { API_URL } from "../api";

const TOKEN_KEY = "cms_token";

export function getToken(): string | null {
  try {
    return typeof window === "undefined" ? null : window.localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token: string) {
  try {
    window.localStorage.setItem(TOKEN_KEY, token);
  } catch {
    /* storage blocked */
  }
}

export function clearToken() {
  try {
    window.localStorage.removeItem(TOKEN_KEY);
  } catch {
    /* storage blocked */
  }
}

/** fetch wrapper for the admin API: adds the JWT, parses JSON, throws readable errors. */
export async function adminFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers = new Headers(init.headers);
  if (token) headers.set("Authorization", `Bearer ${token}`);
  if (init.body && !(init.body instanceof FormData) && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  let res: Response;
  try {
    res = await fetch(`${API_URL}/api${path}`, { ...init, headers, cache: "no-store" });
  } catch {
    throw new Error("Cannot reach the server. Check your connection and that the backend is running.");
  }

  const json: unknown = await res.json().catch(() => null);
  const message =
    typeof json === "object" && json !== null && "message" in json && typeof json.message === "string"
      ? json.message
      : `Request failed (${res.status})`;

  if (res.status === 401 && !path.startsWith("/auth/login")) {
    clearToken();
    if (typeof window !== "undefined") window.location.href = "/admin/login";
    throw new Error(message);
  }
  if (!res.ok) throw new Error(message);

  return json as T;
}

export async function login(username: string, password: string) {
  const data = await adminFetch<{ token: string; user: { username: string } }>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  setToken(data.token);
  return data.user;
}
