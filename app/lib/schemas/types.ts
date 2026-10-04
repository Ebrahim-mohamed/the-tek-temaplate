export type Json = string | number | boolean | null | Json[] | { [key: string]: Json };
export type JsonObject = { [key: string]: Json };

type Base = { key: string; label: string; help?: string };

export type Field =
  | (Base & { type: "text" | "url" })
  | (Base & { type: "textarea"; rows?: number })
  | (Base & { type: "image" })
  | (Base & { type: "color" })
  | (Base & { type: "boolean" })
  | (Base & { type: "range"; min: number; max: number; step: number })
  | (Base & { type: "group"; fields: Field[] })
  | (Base & { type: "list"; itemLabel: string; titleKey?: string; fields: Field[]; max?: number });

export type Section = {
  key: string;
  label: string;
  description?: string;
  fields: Field[];
};

export type PageSchema = {
  label: string;
  /** public URL of the page, used for the "View page" link */
  path: string;
  sections: Section[];
};
