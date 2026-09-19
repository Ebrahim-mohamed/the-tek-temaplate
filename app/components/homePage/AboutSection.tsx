import Image from "next/image";

export function AboutSection(){
    return <div className=" bg-[#1A1916] " >
        <div className="bg-white max-[750px]:flex-col max-[750px]:gap-[1.5rem] rounded-b-[7rem] flex items-center justify-center p-[var(--sectionPadding)]">
            <Image alt="about iamge" width={500} height={500} src="/assets/HomeAbout.png" className="rounded-[1.5rem] w-[35rem] aspect-square " />
        <div className="rounded-2xl p-[1.5rem] rounded-[0.75rem] bg-[#E9E9E9] max-w-[60rem] ml-[-3rem] max-[750px]:ml-0">
            <h1 className="text-[3rem] text-[#616161] mb-[1rem]">About</h1>
            <p className="text-[2rem] leading-[2.5rem] font-semibold text-[#100000]">Building Businesses. Driving Growth. Creating Impact.</p>
            <p className="text-[1.125rem] text-[#444444]">With over 10 years of experience in business development and entrepreneurship, Mostafa Naguib combines engineering expertise with strategic business thinking to build businesses, develop new opportunities, and drive sustainable growth.</p>
            <p className="text-[1.125rem] text-[#444444]">As the Founder and Commercial Director of EGYSMART, Mostafa has led the company’s growth from an initial investment of EGP 30,000 to a business generating over EGP 450 million in revenue over the last three years.</p>
            <p className="text-[1.125rem] text-[#444444]">Beyond business, he is passionate about developing people and empowering individuals and organizations through practical strategies, professional training, and effective business development.</p>
        </div>
        </div>
    </div>
}