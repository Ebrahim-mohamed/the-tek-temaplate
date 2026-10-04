import type { PageSchema } from "./types";

/**
 * Dashboard form for the About page.
 * Every `key` must match lib/defaults/about.ts and backend/src/pages/about.defaults.js
 */
export const aboutSchema: PageSchema = {
  label: "About",
  path: "/about",
  sections: [
    {
      key: "seo",
      label: "Page title and description (SEO)",
      description: "Shown in the browser tab and on Google. Leave empty to keep the site default.",
      fields: [
        { type: "text", key: "title", label: "Page title" },
        { type: "textarea", key: "description", label: "Meta description", rows: 3 },
      ],
    },
    {
      key: "hero",
      label: "Hero (top banner)",
      fields: [
        { type: "text", key: "title", label: "Main text" },
        { type: "text", key: "subtitle", label: "Second line", help: "Leave empty to hide." },
        { type: "image", key: "desktopImage", label: "Background image (desktop)" },
        { type: "image", key: "mobileImage", label: "Background image (mobile)" },
        { type: "color", key: "overlayColor", label: "Overlay color" },
        { type: "range", key: "overlayOpacity", label: "Overlay strength", min: 0, max: 1, step: 0.01 },
      ],
    },
    {
      key: "about",
      label: "About me section",
      fields: [
        { type: "boolean", key: "visible", label: "Show this section" },
        { type: "text", key: "heading", label: "Heading" },
        { type: "image", key: "image", label: "Image" },
        { type: "text", key: "imageAlt", label: "Image description (for accessibility)" },
        { type: "textarea", key: "headline", label: "Big headline", rows: 2 },
        {
          type: "list",
          key: "paragraphs",
          label: "Paragraphs",
          itemLabel: "Paragraph",
          titleKey: "text",
          fields: [{ type: "textarea", key: "text", label: "Text", rows: 4 }],
        },
        { type: "color", key: "sectionBg", label: "Section background color" },
        { type: "color", key: "cardBg", label: "Text card background color" },
      ],
    },
    {
      key: "history",
      label: "Professional history",
      description: "The content of this section is fixed in the code. You can only show or hide it.",
      fields: [{ type: "boolean", key: "visible", label: "Show this section" }],
    },
  ],
};
