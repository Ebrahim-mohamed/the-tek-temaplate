"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { adminFetch, clearToken, getToken } from "../../lib/admin/client";
import { pageSchemas } from "../../lib/schemas";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [username, setUsername] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);

  const retry = useCallback(() => {
    setError("");
    setAttempt((n) => n + 1);
  }, []);

  useEffect(() => {
    if (!getToken()) {
      router.replace("/admin/login");
      return;
    }
    adminFetch<{ user: { username: string } }>("/auth/me")
      .then((r) => setUsername(r.user.username))
      .catch((e) => setError(e instanceof Error ? e.message : "Something went wrong"));
  }, [router, attempt]);

  function logout() {
    clearToken();
    router.replace("/admin/login");
  }

  if (error) {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center gap-4 p-4 text-center">
        <p className="text-red-700">{error}</p>
        <button onClick={retry}className="rounded-lg bg-black px-4 py-2 text-white">
          Try again
        </button>
      </main>
    );
  }

  if (!username) {
    return <main className="flex min-h-dvh items-center justify-center text-neutral-500">Loading...</main>;
  }

  const links = [
    { href: "/admin", label: "Overview" },
    ...Object.entries(pageSchemas).map(([slug, s]) => ({ href: `/admin/pages/${slug}`, label: `${s.label} page` })),
    { href: "/admin/media", label: "Media library" },
    { href: "/admin/settings", label: "Settings" },
  ];

  return (
    <div className="flex min-h-dvh flex-col md:flex-row">
      <aside className="flex shrink-0 flex-col gap-4 bg-neutral-900 p-4 text-white md:w-64 md:p-6">
        <p className="text-lg font-semibold">Site dashboard</p>
        <nav className="flex flex-wrap gap-1 md:flex-col">
          {links.map((l) => {
            const active = l.href === "/admin" ? pathname === "/admin" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-lg px-3 py-2 text-sm ${active ? "bg-white text-black" : "text-neutral-300 hover:bg-white/10"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto flex items-center justify-between gap-2 text-sm text-neutral-400 md:flex-col md:items-start">
          <span className="truncate">{username}</span>
          <button onClick={logout} className="rounded-lg border border-white/20 px-3 py-1.5 text-white hover:bg-white/10">
            Log out
          </button>
        </div>
      </aside>

      <main className="min-w-0 flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
}
