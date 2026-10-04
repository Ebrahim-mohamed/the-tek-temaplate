import type { Metadata } from "next";
import { HeroSection } from "../components/HeroSection";
import ServicesSection from "../components/servicesPage/ServicesSection";
import { getPageContent } from "../lib/api";
import { defaultServices } from "../lib/defaults/services";

const getServices = () => getPageContent("services", defaultServices);

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getServices();
  return {
    ...(seo.title ? { title: seo.title } : {}),
    ...(seo.description ? { description: seo.description } : {}),
  };
}

export default async function Services() {
  const c = await getServices();
  const d = defaultServices;

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
      {c.services.visible && <ServicesSection content={c.services} />}
    </div>
  );
}
