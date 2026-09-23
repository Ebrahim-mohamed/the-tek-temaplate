import Image from "next/image";

export function AboutSection(){
    return <div className=" bg-white rounded-b-[7rem] p-[var(--sectionPadding)] " >
        <h1 className="text-[#616161] text-[3rem] mb-[3rem] text-center">About Me</h1>
        <div className=" flex max-[800px]:flex-col items-center gap-[4rem] justify-between ">
            <Image alt="about iamge" width={500} height={500} src="/assets/homeAbout.jpeg" className="rounded-[1.5rem]  w-full aspect-square " />
        <div className="rounded-2xl p-[1.5rem] rounded-[0.75rem] bg-white max-w-[60rem] ml-[-3rem] max-[750px]:ml-0">
            <p className="text-[2rem] leading-[2.5rem] font-semibold text-[#100000]">Empowering Engineers. Building Leaders. Driving Professional Growth.</p>
            <p className="text-[1.125rem] text-[#444444]">With over 10 years of experience in business development and entrepreneurship, I combine engineering expertise with practical business knowledge to help engineers develop the skills they need to lead businesses and advance their professional careers.</p>
            <p className="text-[1.125rem] text-[#444444]">Through specialized courses and practical training, I help engineers understand how to lead teams, manage businesses, identify new opportunities, make effective business decisions, and build the mindset needed for long-term professional success.</p>
            <p className="text-[1.125rem] text-[#444444]">My mission is to bridge the gap between engineering expertise and business leadership — empowering engineers to become confident leaders, build successful businesses, and achieve sustainable professional growth.</p>
        </div>
        </div>
    </div>
}