import Link from "next/link";

export function Footer(){
    return <div className="w-full flex flex-wrap items-center justify-between py-[2rem] px-[3rem] text-[#100000] text-[1rem] border-t border-[#EFE6D5]">
<p>© 2026  All rights reserved.</p>
<p>eng.mostafa.naguib89@gmail.com</p>
<p>+20 10 50508931</p>
<Link href={"https://www.linkedin.com/in/mostafa-naguib-1b599485/"}>Linkedin</Link>
{/* <Link href={"/contact"}>CV</Link> */}
    </div>
}