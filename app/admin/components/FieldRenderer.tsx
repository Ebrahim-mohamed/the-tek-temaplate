"use client";

import type { Field, Json, JsonObject } from "../../lib/schemas/types";
import { ImageField } from "./ImageField";

const inputCls = "w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 outline-none focus:border-black";

const asObj = (v: Json | undefined): JsonObject =>
  typeof v === "object" && v !== null && !Array.isArray(v) ? v : {};
const asStr = (v: Json | undefined) => (typeof v === "string" ? v : "");
const asNum = (v: Json | undefined) => (typeof v === "number" ? v : 0);

/** An empty object for a new list item, built from the field definitions. */
function blankItem(fields: Field[]): JsonObject {
  const item: JsonObject = {};
  for (const f of fields) {
    if (f.type === "boolean") item[f.key] = true;
    else if (f.type === "range") item[f.key] = f.min;
    else if (f.type === "group") item[f.key] = blankItem(f.fields);
    else if (f.type === "list") item[f.key] = [];
    else item[f.key] = "";
  }
  return item;
}

export function FieldGroup({
  fields,
  value,
  onChange,
}: {
  fields: Field[];
  value: JsonObject;
  onChange: (next: JsonObject) => void;
}) {
  return (
    <div className="space-y-5">
      {fields.map((field) => (
        <FieldItem
          key={field.key}
          field={field}
          value={value[field.key]}
          onChange={(v) => onChange({ ...value, [field.key]: v })}
        />
      ))}
    </div>
  );
}

function Label({ field, children }: { field: Field; children: React.ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium">{field.label}</span>
      {children}
      {field.help && <span className="block text-xs text-neutral-500">{field.help}</span>}
    </label>
  );
}

function FieldItem({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: Json | undefined;
  onChange: (v: Json) => void;
}) {
  switch (field.type) {
    case "text":
    case "url":
      return (
        <Label field={field}>
          <input
            type="text"
            inputMode={field.type === "url" ? "url" : undefined}
            value={asStr(value)}
            onChange={(e) => onChange(e.target.value)}
            className={inputCls}
          />
        </Label>
      );

    case "textarea":
      return (
        <Label field={field}>
          <textarea rows={field.rows ?? 4} value={asStr(value)} onChange={(e) => onChange(e.target.value)} className={inputCls} />
        </Label>
      );

    case "image":
      return (
        <div className="space-y-1.5">
          <span className="text-sm font-medium">{field.label}</span>
          <ImageField value={asStr(value)} onChange={onChange} />
          {field.help && <span className="block text-xs text-neutral-500">{field.help}</span>}
        </div>
      );

    case "color": {
      const color = asStr(value);
      const valid = /^#[0-9a-f]{6}$/i.test(color);
      return (
        <Label field={field}>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={valid ? color : "#000000"}
              onChange={(e) => onChange(e.target.value.toUpperCase())}
              className="h-10 w-14 cursor-pointer rounded-lg border border-neutral-300 bg-white p-1"
            />
            <input value={color} onChange={(e) => onChange(e.target.value)} className={`${inputCls} max-w-40 font-mono text-sm`} />
          </div>
        </Label>
      );
    }

    case "boolean":
      return (
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={value === true}
            onChange={(e) => onChange(e.target.checked)}
            className="h-5 w-5 accent-black"
          />
          <span className="text-sm font-medium">{field.label}</span>
        </label>
      );

    case "range":
      return (
        <Label field={field}>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={field.min}
              max={field.max}
              step={field.step}
              value={asNum(value)}
              onChange={(e) => onChange(Number(e.target.value))}
              className="w-full max-w-xs accent-black"
            />
            <span className="w-12 text-sm tabular-nums text-neutral-500">{asNum(value).toFixed(2)}</span>
          </div>
        </Label>
      );

    case "group":
      return (
        <fieldset className="space-y-4 rounded-xl border border-neutral-200 p-4">
          <legend className="px-2 text-sm font-semibold">{field.label}</legend>
          <FieldGroup fields={field.fields} value={asObj(value)} onChange={onChange} />
        </fieldset>
      );

    case "list": {
      const items = Array.isArray(value) ? value : [];
      const update = (next: Json[]) => onChange(next);
      const move = (i: number, dir: -1 | 1) => {
        const j = i + dir;
        if (j < 0 || j >= items.length) return;
        const next = [...items];
        [next[i], next[j]] = [next[j], next[i]];
        update(next);
      };

      return (
        <div className="space-y-3">
          <span className="text-sm font-medium">{field.label}</span>

          {items.map((item, i) => {
            const obj = asObj(item);
            const title = field.titleKey ? asStr(obj[field.titleKey]) : "";
            return (
              <details key={i} className="rounded-xl border border-neutral-200 bg-neutral-50" open={items.length <= 3}>
                <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-sm font-medium">
                  <span className="truncate">
                    {field.itemLabel} {i + 1}
                    {title ? `: ${title.slice(0, 50)}` : ""}
                  </span>
                  <span className="flex shrink-0 gap-1" onClick={(e) => e.preventDefault()}>
                    <button type="button" onClick={() => move(i, -1)} disabled={i === 0} aria-label="Move up" className="rounded border border-neutral-300 px-2 disabled:opacity-30">
                      ↑
                    </button>
                    <button type="button" onClick={() => move(i, 1)} disabled={i === items.length - 1} aria-label="Move down" className="rounded border border-neutral-300 px-2 disabled:opacity-30">
                      ↓
                    </button>
                    <button
                      type="button"
                      onClick={() => update(items.filter((_, k) => k !== i))}
                      className="rounded border border-red-300 px-2 text-red-700"
                    >
                      Remove
                    </button>
                  </span>
                </summary>
                <div className="border-t border-neutral-200 p-4">
                  <FieldGroup
                    fields={field.fields}
                    value={obj}
                    onChange={(next) => update(items.map((it, k) => (k === i ? next : it)))}
                  />
                </div>
              </details>
            );
          })}

          {items.length === 0 && <p className="text-sm text-neutral-500">Nothing here yet.</p>}

          {(field.max === undefined || items.length < field.max) && (
            <button
              type="button"
              onClick={() => update([...items, blankItem(field.fields)])}
              className="rounded-lg border border-dashed border-neutral-400 px-4 py-2 text-sm hover:bg-white"
            >
              + Add {field.itemLabel.toLowerCase()}
            </button>
          )}
        </div>
      );
    }
  }
}
