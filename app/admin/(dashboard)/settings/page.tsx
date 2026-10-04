"use client";

import { FormEvent, useState } from "react";
import { adminFetch } from "../../../lib/admin/client";

export default function SettingsPage() {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus(null);
    if (next !== confirm) return setStatus({ ok: false, msg: "The new passwords do not match" });
    setBusy(true);
    try {
      await adminFetch("/auth/change-password", {
        method: "POST",
        body: JSON.stringify({ currentPassword: current, newPassword: next }),
      });
      setStatus({ ok: true, msg: "Password updated" });
      setCurrent("");
      setNext("");
      setConfirm("");
    } catch (err) {
      setStatus({ ok: false, msg: err instanceof Error ? err.message : "Failed" });
    } finally {
      setBusy(false);
    }
  }

  const input = "w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:border-black";

  return (
    <div className="mx-auto max-w-md space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-neutral-500">Change your dashboard password (at least 10 characters).</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4 rounded-2xl bg-white p-6 ring-1 ring-black/5">
        <label className="block space-y-1">
          <span className="text-sm font-medium">Current password</span>
          <input type="password" value={current} onChange={(e) => setCurrent(e.target.value)} required className={input} autoComplete="current-password" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium">New password</span>
          <input type="password" value={next} onChange={(e) => setNext(e.target.value)} required minLength={10} className={input} autoComplete="new-password" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium">Repeat new password</span>
          <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required minLength={10} className={input} autoComplete="new-password" />
        </label>

        {status && (
          <p role="status" className={`rounded-lg px-3 py-2 text-sm ${status.ok ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
            {status.msg}
          </p>
        )}

        <button disabled={busy} className="rounded-lg bg-black px-5 py-2.5 font-medium text-white disabled:opacity-60">
          {busy ? "Saving..." : "Update password"}
        </button>
      </form>
    </div>
  );
}
