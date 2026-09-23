import Image from "next/image";

export function AboutSection(){
    return <div className=" bg-[#1A1916] " >
        <div className="bg-white max-[750px]:flex-col max-[750px]:gap-[1.5rem] rounded-b-[7rem] flex items-center justify-center p-[var(--sectionPadding)]">
            <Image alt="about iamge" width={500} height={500} src="/assets/HomeAbout.jpeg" className="rounded-[1.5rem]  aspect-square " />
        <div className="rounded-2xl p-[1.5rem] rounded-[0.75rem] bg-[#E9E9E9] max-w-[60rem] ml-[-3rem] max-[750px]:ml-0">
            <h1 className="text-[3rem] text-[#616161] mb-[1rem]">About</h1>
            <p className="text-[2rem] leading-[2.5rem] font-semibold text-[#100000]">Empowering Engineers. Building Leaders. Driving Professional Growth.</p>
            <p className="text-[1.125rem] text-[#444444]">With over 10 years of experience in business development and entrepreneurship, I combine engineering expertise with practical business knowledge to help engineers develop the skills they need to lead businesses and advance their professional careers.</p>
            <p className="text-[1.125rem] text-[#444444]">Through specialized courses and practical training, I help engineers understand how to lead teams, manage businesses, identify new opportunities, make effective business decisions, and build the mindset needed for long-term professional success.</p>
            <p className="text-[1.125rem] text-[#444444]">My mission is to bridge the gap between engineering expertise and business leadership — empowering engineers to become confident leaders, build successful businesses, and achieve sustainable professional growth.</p>
        </div>
        </div>
    </div>
}