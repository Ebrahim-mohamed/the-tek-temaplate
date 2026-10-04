"use client";

import { useCallback, useEffect, useState } from "react";
import { adminFetch } from "../../lib/admin/client";
import { pageSchemas } from "../../lib/schemas";
import type { JsonObject } from "../../lib/schemas/types";
import { FieldGroup } from "./FieldRenderer";

type PageResponse = { data: JsonObject; source: "database" | "defaults"; revalidated?: boolean };

export function PageEditor({ slug }: { slug: string }) {
  const schema = Object.hasOwn(pageSchemas, slug) ? pageSchemas[slug] : undefined;

  const [data, setData] = useState<JsonObject | null>(null);
  const [saved, setSaved] = useState("");
  const [source, setSource] = useState<"database" | "defaults">("defaults");
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(() => {
    adminFetch<PageResponse>(`/pages/${slug}`)
      .then((r) => {
        setData(r.data);
        setSaved(JSON.stringify(r.data));
        setSource(r.source);
      })
      .catch((e) => setStatus({ ok: false, msg: e instanceof Error ? e.message : "Failed to load" }));
  }, [slug]);

  useEffect(() => {
    if (schema) load();
  }, [schema, load]);

  const dirty = data !== null && JSON.stringify(data) !== saved;

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  async function save() {
    if (!data) return;
    setBusy(true);
    setStatus(null);
    try {
      const r = await adminFetch<PageResponse>(`/pages/${slug}`, { method: "PUT", body: JSON.stringify({ data }) });
      setData(r.data);
      setSaved(JSON.stringify(r.data));
      setSource("database");
      setStatus({ ok: true, msg: r.revalidated ? "Saved. Your website is updated." : "Saved. The website refreshes within a minute." });
    } catch (e) {
      setStatus({ ok: false, msg: e instanceof Error ? e.message : "Save failed" });
    } finally {
      setBusy(false);
    }
  }

  async function reset() {
    if (!window.confirm("Throw away all your changes on this page and go back to the original content?")) return;
    setBusy(true);
    setStatus(null);
    try {
      const r = await adminFetch<PageResponse>(`/pages/${slug}/reset`, { method: "POST" });
      setData(r.data);
      setSaved(JSON.stringify(r.data));
      setSource("defaults");
      setStatus({ ok: true, msg: "Original content restored." });
    } catch (e) {
      setStatus({ ok: false, msg: e instanceof Error ? e.message : "Reset failed" });
    } finally {
      setBusy(false);
    }
  }

  if (!schema) return <p>This page does not exist.</p>;

  return (
    <div className="mx-auto max-w-3xl space-y-6 pb-28">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">{schema.label} page</h1>
          <p className="text-sm text-neutral-500">
            {source === "defaults" ? "Showing the original content. Nothing saved yet." : "Showing your saved content."}
          </p>
        </div>
        <a href={schema.path} target="_blank" rel="noreferrer" className="rounded-lg border border-neutral-300 px-4 py-2 text-sm">
          View page
        </a>
      </div>

      {!data && !status && <p className="text-neutral-500">Loading...</p>}

      {data &&
        schema.sections.map((section, idx) => {
          const sectionValue = (typeof data[section.key] === "object" && data[section.key] !== null && !Array.isArray(data[section.key])
            ? data[section.key]
            : {}) as JsonObject;
          return (
            <details key={section.key} open={idx === 0} className="rounded-2xl bg-white ring-1 ring-black/5">
              <summary className="cursor-pointer px-5 py-4 text-lg font-medium">
                {section.label}
                {section.description && <span className="mt-0.5 block text-sm font-normal text-neutral-500">{section.description}</span>}
              </summary>
              <div className="border-t border-neutral-100 p-5">
                <FieldGroup
                  fields={section.fields}
                  value={sectionValue}
                  onChange={(next) => setData({ ...data, [section.key]: next })}
                />
              </div>
            </details>
          );
        })}

      {/* sticky action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 p-3 backdrop-blur md:left-64">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-3">
          <button
            onClick={save}
            disabled={busy || !dirty}
            className="rounded-lg bg-black px-6 py-2.5 font-medium text-white disabled:opacity-40"
          >
            {busy ? "Working..." : "Save changes"}
          </button>
          <button
            onClick={reset}
            disabled={busy || source === "defaults"}
            className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm disabled:opacity-40"
          >
            Restore original content
          </button>
          <span role="status" className={`text-sm ${status ? (status.ok ? "text-green-700" : "text-red-700") : "text-neutral-500"}`}>
            {status ? status.msg : dirty ? "You have unsaved changes" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
