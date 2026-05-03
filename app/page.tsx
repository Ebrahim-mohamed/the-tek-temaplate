import Image from "next/image";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/homePage/AboutSection";

export default function Home() {
  return (
    <div>
      <HeroSection text="Built Around What Matters" img="homePage" />
      <AboutSection/>
    </div>  );
}
