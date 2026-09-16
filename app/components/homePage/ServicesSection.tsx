import Link from "next/link";
import { ServiceBox } from "./ServiceBox";

const services=[{head:"Mechanical Design",pra:"Lorem ipsum dolor sit amet consectetur. Sed nulla eget hac ornare turpis tincidunt. ",icon:"serv"},{head:"Electrical Design",pra:"Lorem ipsum dolor sit amet consectetur. Sed nulla eget hac ornare turpis tincidunt. ",icon:"serv"},{head:"Project Management",pra:"Lorem ipsum dolor sit amet consectetur. Sed nulla eget hac ornare turpis tincidunt. ",icon:"serv"},{head:"Consulting",pra:"Lorem ipsum dolor sit amet consectetur. Sed nulla eget hac ornare turpis tincidunt. ",icon:"serv"}]

export function ServicesSection(){
    return <div className=" flex justify-between w-dvw gap-[3rem] rounded-b-[7rem] p-[2rem] bg-[#1A1916] p-[var(--sectionPadding)] ">
        <div className="flex flex-col gap-[3rem] text-white">
            <h1 className="text-[5rem]"><span className="text-[#C8A96E]">Services</span> We Present</h1>
            <p className="text-[1rem] max-w-[35rem]">Explore the range of services we offer, thoughtfully designed to meet different needs and deliver meaningful, high-quality results. Each service is crafted with care, precision, and a focus on what truly matters.</p>
        <Link href={"/contact"} className="py-[0.75rem] w-fit px-[2rem] rounded-[1rem] border-white border">Learn More</Link>
        </div>
        <div className="grid gap-[2rem] grid-cols-2">
            {services.map(serv=><ServiceBox head={serv.head} pra={serv.pra} img={serv.icon} key={serv.head} />)}
        </div>
    </div>
}