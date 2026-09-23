import Image from "next/image";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/homePage/AboutSection";
import { ServicesSection } from "./components/homePage/ServicesSection";
import { ClientsSection } from "./components/homePage/ClientsSection";
import { ProjectSection } from "./components/homePage/ProjectSection";
import { FeedbacksSection } from "./components/homePage/FeedbacksSection";
import { ContactSection } from "./components/homePage/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection text="Scaling Businesses"  />
      <AboutSection/>
      <ServicesSection/>
      {/* <ClientsSection/> */}
      {/* <ProjectSection/> */}
      {/* <FeedbacksSection/> */}
      <ContactSection/>
    </div>  );
}
