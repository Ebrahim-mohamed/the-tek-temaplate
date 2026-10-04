"use client";

import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { resolveMedia } from "../../lib/api";
import { adminFetch } from "../../lib/admin/client";

type MediaItem = { id: string; url: string; originalName: string; size: number };

/** Grid of uploaded images. With `onSelect` it works as a picker; without it, as a manager. */
export function MediaLibrary({ onSelect }: { onSelect?: (url: string) => void }) {
  const [items, setItems] = useState<MediaItem[] | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const load = useCallback(() => {
    adminFetch<{ items: MediaItem[] }>("/media")
      .then((r) => setItems(r.items))
      .catch((e) => setError(e instanceof Error ? e.message : "Failed to load"));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function onUpload(e: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    e.target.value = "";
    if (!files.length) return;
    setBusy(true);
    setError("");
    for (const file of files) {
      const form = new FormData();
      form.append("file", file);
      try {
        await adminFetch("/media", { method: "POST", body: form });
      } catch (err) {
        setError(`${file.name}: ${err instanceof Error ? err.message : "upload failed"}`);
      }
    }
    setBusy(false);
    load();
  }

  async function remove(item: MediaItem) {
    if (!window.confirm("Delete this image? If a page still uses it, that image will disappear from the site.")) return;
    try {
      await adminFetch(`/media/${item.id}`, { method: "DELETE" });
      load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <label className="cursor-pointer rounded-lg bg-black px-4 py-2 text-sm text-white">
          {busy ? "Uploading..." : "Upload images"}
          <input type="file" accept="image/jpeg,image/png,image/webp,image/gif,image/avif" multiple onChange={onUpload} disabled={busy} className="hidden" />
        </label>
        <span className="text-sm text-neutral-500">JPG, PNG, WEBP, GIF or AVIF, up to 10 MB each</span>
      </div>

      {error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

      {items === null && !error && <p className="text-neutral-500">Loading...</p>}
      {items && items.length === 0 && <p className="text-neutral-500">No images yet. Upload your first one.</p>}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items?.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-xl bg-white ring-1 ring-black/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={resolveMedia(item.url)} alt={item.originalName} className="aspect-square w-full bg-neutral-200 object-cover" />
            <div className="space-y-2 p-2">
              <p className="truncate text-xs text-neutral-500" title={item.originalName}>{item.originalName || item.url}</p>
              <div className="flex gap-2">
                {onSelect && (
                  <button type="button" onClick={() => onSelect(item.url)} className="flex-1 rounded-md bg-black py-1.5 text-xs text-white">
                    Use this
                  </button>
                )}
                <button type="button" onClick={() => remove(item)} className="rounded-md border border-red-300 px-2 py-1.5 text-xs text-red-700">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
