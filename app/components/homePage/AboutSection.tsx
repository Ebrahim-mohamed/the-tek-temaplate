import Image from "next/image";

export function AboutSection(){
    return <div className=" bg-[#1A1916] " >
        <div className="bg-white rounded-b-[7rem] flex items-center justify-center p-[var(--sectionPadding)]">
            <Image alt="about iamge" width={500} height={500} src="/assets/HomeAbout.png" className="rounded-[1.5rem] w-[35rem] aspect-square " />
        <div className="rounded-2xl p-[1.5rem] rounded-[0.75rem] bg-[#E9E9E9] max-w-[60rem] ml-[-3rem]">
            <h1 className="text-[3rem] text-[#616161] mb-[1rem]">About</h1>
            <p className="text-[2rem] leading-[2.5rem] font-semibold text-[#100000]">We believe that behind every service, brand, or idea, there’s intention.</p>
            <p className="text-[1.125rem] text-[#444444]">Our role is to shape that intention into something clear, meaningful, and impactful.Because when things are built with care, people feel the difference.</p>
        </div>
        </div>
    </div>
}