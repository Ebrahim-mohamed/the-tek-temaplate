import Link from "next/link";
import { ServiceBox } from "./ServiceBox";

const services=[{head:"Business Consulting",pra:"Helping businesses identify opportunities, overcome challenges, and develop practical strategies for sustainable growth and improved performance.",icon:"serv"},{head:"Individual Mentoring",pra:"One-on-one mentoring designed to help professionals and entrepreneurs develop their skills, make better decisions, and achieve their career and business goals.",icon:"serv"},{head:"Professional Courses",pra:"Practical, industry-focused courses designed to build essential business skills and provide participants with the knowledge and tools they need to succeed.",icon:"serv"},{head:"Corporate Training",pra:"Customized training programs designed for companies to strengthen their teams’ capabilities, improve performance, and develop essential business and leadership skills.",icon:"serv"}]

export function ServicesSection(){
    return <div className=" flex max-[920px]:flex-col max-[920px]:justify-center max-[920px]:items-center justify-between w-dvw gap-[3rem] rounded-b-[7rem] p-[2rem] bg-[#1A1916] p-[var(--sectionPadding)] ">
        <div className="flex flex-col gap-[3rem] text-white max-[920px]:items-center">
            <h1 className="text-[5rem] max-[600px]:text-[4rem] max-[570px]:text-[3rem] "><span className="text-[#C8A96E]">Services</span> We Present</h1>
            <p className="text-[1rem] max-w-[35rem]">Explore the range of services we offer, thoughtfully designed to meet different needs and deliver meaningful, high-quality results. Each service is crafted with care, precision, and a focus on what truly matters.</p>
        <Link href={"/contact"} className="py-[0.75rem] w-fit px-[2rem] rounded-[1rem] border-white border">Learn More</Link>
        </div>
        <div className="grid gap-[2rem] grid-cols-2 max-[570px]:grid-cols-1 ">
            {services.map(serv=><ServiceBox head={serv.head} pra={serv.pra} img={serv.icon} key={serv.head} />)}
        </div>
    </div>
}