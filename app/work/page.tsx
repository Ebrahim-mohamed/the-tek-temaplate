import type { Metadata } from "next";
import { HeroSection } from "../components/HeroSection";
import ProjectsSection from "../components/workPage/ProjectsSection";
import { getPageContent } from "../lib/api";
import { defaultCourses } from "../lib/defaults/courses";

const getCourses = () => getPageContent("courses", defaultCourses);

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getCourses();
  return {
    ...(seo.title ? { title: seo.title } : {}),
    ...(seo.description ? { description: seo.description } : {}),
  };
}

export default async function Courses() {
  const c = await getCourses();
  const d = defaultCourses;

  return (
    <div>
      <HeroSection
        text={c.hero.title}
        secText={c.hero.subtitle}
        desktopImage={c.hero.desktopImage || d.hero.desktopImage}
        mobileImage={c.hero.mobileImage || c.hero.desktopImage || d.hero.mobileImage}
        overlayColor={c.hero.overlayColor}
        overlayOpacity={c.hero.overlayOpacity}
      />
      {c.courses.visible && <ProjectsSection content={c.courses} />}
    </div>
  );
}
