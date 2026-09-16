import Link from "next/link";

export function ContactSection(){
    return <div className=" flex justify-between flex-col w-dvw gap-[3rem] bg-white p-[var(--sectionPadding)] ">
        <div className="flex items-center justify-center gap-[1rem]">
            <div className="w-[1rem] aspect-square rounded-full bg-[#00D720]"></div>
            <p className="text-black text-[1.5rem]">Available For Work</p>
        </div>
        <p className="text-[4rem] text-center text-black">Let’s Build Something <br></br>
Great Together</p>
<div className="flex items-center justify-center">

<Link href={"/contact"} className="px-[4rem] text-center py-[1rem] text-[1rem] rounded-[2rem] w-fit bg-black text-white">Let’s Talk</Link>
</div>
    </div>
}