import Image from "next/image";

export function AboutSection(){
    return <div className=" bg-white rounded-b-[7rem] p-[var(--sectionPadding)] " >
        <h1 className="text-[#616161] text-[3rem] mb-[3rem] text-center">About Me</h1>
        <div className=" flex items-center gap-[4rem] justify-between ">
            <Image alt="about iamge" width={500} height={500} src="/assets/aboutPage/about.png" className="rounded-[1.5rem] w-[40rem] aspect-square " />
        <p className="text-[1.75rem] max-w-[40rem] font-semibold text-[#100000]">Lorem ipsum dolor sit amet consectetur. Sed nulla eget hac ornare turpis tincidunt. Ullamcorper tristique quam id a vestibulum cursus consequat varius. Magnis quisque nibh maecenas fermentum ac cras vitae </p>
        
        </div>
    </div>
}