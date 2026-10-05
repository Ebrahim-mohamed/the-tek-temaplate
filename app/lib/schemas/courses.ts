import type { PageSchema } from "./types";

/**
 * Dashboard form for the Courses page.
 * Every `key` must match lib/defaults/courses.ts and backend/src/pages/courses.defaults.js
 */
export const coursesSchema: PageSchema = {
  label: "Courses",
  path: "/work",
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
        
      ],
    },
    {
      key: "courses",
      label: "Courses list",
      description: "Add as many courses as you want. Use the arrows to change their order.",
      fields: [
        { type: "boolean", key: "visible", label: "Show this section" },
        {
          type: "list",
          key: "items",
          label: "Courses",
          itemLabel: "Course",
          titleKey: "title",
          fields: [
            { type: "text", key: "title", label: "Course title" },
            { type: "image", key: "image", label: "Image" },
            { type: "text", key: "imageAlt", label: "Image description (for accessibility)" },
            { type: "text", key: "description1", label: "Small label above the title", help: "Leave empty to hide." },
            { type: "textarea", key: "description2", label: "Introduction", rows: 3 },
            { type: "textarea", key: "description3", label: "Point 1", rows: 3, help: "Leave empty to hide." },
            { type: "textarea", key: "description4", label: "Point 2", rows: 3, help: "Leave empty to hide." },
            { type: "textarea", key: "description5", label: "Point 3", rows: 3, help: "Leave empty to hide." },
          ],
        },
      ],
    },
  ],
};
