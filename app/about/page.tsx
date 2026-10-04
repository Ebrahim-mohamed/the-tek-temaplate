import type { Metadata } from "next";
import { AboutSection } from "../components/AboutPage/AboutSection";
// import { TrustedEngineerSection } from "../components/AboutPage/Data";
// import { ExperienceSection } from "../components/AboutPage/ExperienceSection";
import { ProfessionalHistory } from "../components/AboutPage/NewExSection";
import { HeroSection } from "../components/HeroSection";
import { getPageContent } from "../lib/api";
import { defaultAbout } from "../lib/defaults/about";

const getAbout = () => getPageContent("about", defaultAbout);

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getAbout();
  return {
    ...(seo.title ? { title: seo.title } : {}),
    ...(seo.description ? { description: seo.description } : {}),
  };
}

export default async function About() {
  const c = await getAbout();
  const d = defaultAbout;

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
      {c.about.visible && <AboutSection content={{ ...c.about, image: c.about.image || d.about.image }} />}
      {/* <TrustedEngineerSection/> */}
      {/* <ExperienceSection/> */}
      {c.history.visible && <ProfessionalHistory />}
    </div>
  );
}
