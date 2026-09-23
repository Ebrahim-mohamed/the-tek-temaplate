import FaqSection from "../components/contactPage/FaqSection";
import ContactSection from "../components/contactPage/FormSection";
import { HeroSection } from "../components/HeroSection";

export default function Contact(){
    return <div>
        <HeroSection text="Let’s Talk" />
        <ContactSection/>
        {/* <FaqSection/> */}
    </div>
}