"use client";

import { MediaLibrary } from "../../components/MediaLibrary";

export default function MediaPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Media library</h1>
        <p className="text-neutral-500">Upload images once, reuse them anywhere on the site.</p>
      </div>
      <MediaLibrary />
    </div>
  );
}
