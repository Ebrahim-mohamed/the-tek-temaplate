import type { PageSchema } from "./types";

/**
 * Dashboard form for the Services page.
 * Every `key` must match lib/defaults/services.ts and backend/src/pages/services.defaults.js
 */
export const servicesSchema: PageSchema = {
  label: "Services",
  path: "/services",
  sections: [
    // {
    //   key: "seo",
    //   label: "Page title and description (SEO)",
    //   description: "Shown in the browser tab and on Google. Leave empty to keep the site default.",
    //   fields: [
    //     { type: "text", key: "title", label: "Page title" },
    //     { type: "textarea", key: "description", label: "Meta description", rows: 3 },
    //   ],
    // },
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
      key: "services",
      label: "Services list",
      description: "Add as many services as you want. Use the arrows to change their order.",
      fields: [
        { type: "boolean", key: "visible", label: "Show this section" },
        {
          type: "list",
          key: "items",
          label: "Services",
          itemLabel: "Service",
          titleKey: "title",
          fields: [
            { type: "text", key: "title", label: "Title" },
            { type: "textarea", key: "description", label: "Description", rows: 4 },
            { type: "image", key: "image", label: "Image" },
            { type: "text", key: "imageAlt", label: "Image description (for accessibility)" },
            { type: "boolean", key: "imageLeft", label: "Show the image on the left" },
            { type: "boolean", key: "highlighted", label: "Highlight this service" },
          ],
        },
      ],
    },
  ],
};
