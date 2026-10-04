import type { PageSchema } from "./types";

/**
 * Describes the dashboard form for the Home page.
 * Every `key` must match a key in lib/defaults/home.ts and backend/src/pages/home.defaults.js
 */
export const homeSchema: PageSchema = {
  label: "Home",
  path: "/",
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
      label: "About section",
      fields: [
        { type: "boolean", key: "visible", label: "Show this section" },
        { type: "image", key: "image", label: "Image" },
        { type: "text", key: "imageAlt", label: "Image description (for accessibility)" },
        { type: "text", key: "heading", label: "Small heading" },
        { type: "textarea", key: "headline", label: "Big headline", rows: 2 },
        {
          type: "list",
          key: "paragraphs",
          label: "Paragraphs",
          itemLabel: "Paragraph",
          titleKey: "text",
          fields: [{ type: "textarea", key: "text", label: "Text", rows: 4 }],
        },
        { type: "color", key: "sectionBg", label: "Outer background color" },
        { type: "color", key: "panelBg", label: "Panel background color" },
        { type: "color", key: "cardBg", label: "Text card background color" },
      ],
    },
    {
      key: "services",
      label: "Services section",
      fields: [
        { type: "boolean", key: "visible", label: "Show this section" },
        { type: "text", key: "headingAccent", label: "Heading (colored word)" },
        { type: "text", key: "headingRest", label: "Heading (rest)" },
        { type: "textarea", key: "description", label: "Description", rows: 4 },
        { type: "text", key: "buttonText", label: "Button text", help: "Leave empty to hide the button." },
        { type: "url", key: "buttonLink", label: "Button link" },
        {
          type: "group",
          key: "mainService",
          label: "Main (large) service",
          fields: [
            { type: "text", key: "head", label: "Title" },
            { type: "textarea", key: "pra", label: "Description", rows: 3 },
            { type: "image", key: "icon", label: "Icon" },
          ],
        },
        {
          type: "list",
          key: "items",
          label: "Other services",
          itemLabel: "Service",
          titleKey: "head",
          fields: [
            { type: "text", key: "head", label: "Title" },
            { type: "textarea", key: "pra", label: "Description", rows: 3 },
            { type: "image", key: "icon", label: "Icon" },
          ],
        },
        { type: "color", key: "bgColor", label: "Background color" },
        { type: "color", key: "accentColor", label: "Accent (colored word) color" },
      ],
    },
    {
      key: "contact",
      label: "Contact call-to-action",
      fields: [
        { type: "boolean", key: "visible", label: "Show this section" },
        { type: "boolean", key: "showStatus", label: "Show availability status" },
        { type: "text", key: "statusText", label: "Status text" },
        { type: "color", key: "statusColor", label: "Status dot color" },
        { type: "text", key: "headingLine1", label: "Heading line 1" },
        { type: "text", key: "headingLine2", label: "Heading line 2", help: "Leave empty for a one-line heading." },
        { type: "text", key: "buttonText", label: "Button text", help: "Leave empty to hide the button." },
        { type: "url", key: "buttonLink", label: "Button link" },
        { type: "color", key: "buttonBg", label: "Button color" },
        { type: "color", key: "buttonTextColor", label: "Button text color" },
        { type: "color", key: "bgColor", label: "Background color" },
        { type: "color", key: "textColor", label: "Text color" },
      ],
    },
  ],
};
