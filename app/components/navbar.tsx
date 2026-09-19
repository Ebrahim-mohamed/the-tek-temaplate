
import { NavbarTab } from "./NavbarTab";

export function Navbar() {
    return (
        <div className="flex items-center justify-center z-50 py-4 px-8 gap-2 rounded-full bg-[#FFFFFF33] border-[#FFFFFF24] border">
            <NavbarTab name="Home" to="#" />
            <NavbarTab name="About" to="about" />
            <NavbarTab name="Services" to="services" />
            <NavbarTab name="Cources" to="work" />
            {/* <NavbarTab name="Contact" to="contact" /> */}
        </div>
    );
}