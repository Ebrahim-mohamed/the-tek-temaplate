import type { Metadata } from "next";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/homePage/AboutSection";
import { ServicesSection } from "./components/homePage/ServicesSection";
// import { ClientsSection } from "./components/homePage/ClientsSection";
// import { ProjectSection } from "./components/homePage/ProjectSection";
// import { FeedbacksSection } from "./components/homePage/FeedbacksSection";
import { ContactSection } from "./components/homePage/ContactSection";
import { getPageContent } from "./lib/api";
import { defaultHome } from "./lib/defaults/home";

const getHome = () => getPageContent("home", defaultHome);

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getHome();
  return {
    ...(seo.title ? { title: seo.title } : {}),
    ...(seo.description ? { description: seo.description } : {}),
  };
}

export default async function Home() {
  const c = await getHome();
  const d = defaultHome;

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
      {c.services.visible && <ServicesSection content={c.services} />}
      {/* <ClientsSection/> */}
      {/* <ProjectSection/> */}
      {/* <FeedbacksSection/> */}
      {c.contact.visible && <ContactSection content={c.contact} />}
    </div>
  );
}
