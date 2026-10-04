"use client";

import Link from "next/link";
import { pageSchemas } from "../../lib/schemas";

export default function OverviewPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="text-neutral-500">Choose what you want to edit.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {Object.entries(pageSchemas).map(([slug, s]) => (
          <div key={slug} className="space-y-3 rounded-2xl bg-white p-5 ring-1 ring-black/5">
            <h2 className="text-lg font-medium">{s.label} page</h2>
            <p className="text-sm text-neutral-500">{s.sections.length} editable sections</p>
            <div className="flex gap-2">
              <Link href={`/admin/pages/${slug}`} className="rounded-lg bg-black px-4 py-2 text-sm text-white">
                Edit
              </Link>
              <a
                href={s.path}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-neutral-300 px-4 py-2 text-sm"
              >
                View page
              </a>
            </div>
          </div>
        ))}

        <div className="space-y-3 rounded-2xl bg-white p-5 ring-1 ring-black/5">
          <h2 className="text-lg font-medium">Media library</h2>
          <p className="text-sm text-neutral-500">Upload and manage your images.</p>
          <Link href="/admin/media" className="inline-block rounded-lg bg-black px-4 py-2 text-sm text-white">
            Open
          </Link>
        </div>
      </div>
    </div>
  );
}
