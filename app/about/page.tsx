import { AboutSection } from "../components/AboutPage/AboutSection";
import { TrustedEngineerSection } from "../components/AboutPage/Data";
import { ExperienceSection } from "../components/AboutPage/ExperienceSection";
import { HeroSection } from "../components/HeroSection";

export default function About(){
    return <div>
        <HeroSection text="I’m Mostafa Naguib" img="homePage" />
        <AboutSection/>
        {/* <TrustedEngineerSection/> */}
        <ExperienceSection/>
    </div>
}