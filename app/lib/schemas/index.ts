import { aboutSchema } from "./about";
import { coursesSchema } from "./courses";
import { homeSchema } from "./home";
import { servicesSchema } from "./services";
import type { PageSchema } from "./types";

/**
 * Every editable page. When you send me the next page (contact, ...)
 * I add its schema file here and it appears in the dashboard automatically.
 */
export const pageSchemas: Record<string, PageSchema> = {
  home: homeSchema,
  about: aboutSchema,
  services: servicesSchema,
  courses: coursesSchema,
};
