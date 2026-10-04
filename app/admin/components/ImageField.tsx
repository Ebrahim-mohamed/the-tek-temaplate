"use client";

import { ChangeEvent, useState } from "react";
import { resolveMedia } from "../../lib/api";
import { adminFetch } from "../../lib/admin/client";
import { MediaLibrary } from "./MediaLibrary";

export function ImageField({ value, onChange }: { value: string; onChange: (url: string) => void }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [picking, setPicking] = useState(false);

  async function onFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setBusy(true);
    setError("");
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await adminFetch<{ media: { url: string } }>("/media", { method: "POST", body: form });
      onChange(res.media.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-start gap-3">
        <div className="h-24 w-36 shrink-0 overflow-hidden rounded-lg bg-neutral-200 ring-1 ring-black/10">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={resolveMedia(value)} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-neutral-500">No image</div>
          )}
        </div>

        <div className="min-w-0 flex-1 space-y-2">
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Image URL or path"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
          />
          <div className="flex flex-wrap gap-2">
            <label className="cursor-pointer rounded-lg bg-black px-3 py-1.5 text-sm text-white">
              {busy ? "Uploading..." : "Upload new"}
              <input type="file" accept="image/jpeg,image/png,image/webp,image/gif,image/avif" onChange={onFile} disabled={busy} className="hidden" />
            </label>
            <button type="button" onClick={() => setPicking(true)} className="rounded-lg border border-neutral-300 px-3 py-1.5 text-sm">
              Choose from library
            </button>
            {value && (
              <button type="button" onClick={() => onChange("")} className="rounded-lg border border-neutral-300 px-3 py-1.5 text-sm">
                Reset to default
              </button>
            )}
          </div>
          {error && <p className="text-sm text-red-700">{error}</p>}
        </div>
      </div>

      {picking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
          <div className="max-h-[90dvh] w-full max-w-4xl space-y-4 overflow-y-auto rounded-2xl bg-neutral-100 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Choose an image</h3>
              <button type="button" onClick={() => setPicking(false)} className="rounded-lg border border-neutral-300 px-3 py-1.5 text-sm">
                Close
              </button>
            </div>
            <MediaLibrary
              onSelect={(url) => {
                onChange(url);
                setPicking(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
