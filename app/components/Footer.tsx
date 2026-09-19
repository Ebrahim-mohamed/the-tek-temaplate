import Link from "next/link";

export function Footer(){
    return <div className="w-full flex flex-wrap items-center justify-between py-[2rem] px-[3rem] text-[#100000] text-[1rem] border-t border-[#EFE6D5]">
<p>© 2026  All rights reserved.</p>
<p>hello@example.com</p>
<p>+20 10 50508931</p>
<Link href={"/contact"}>Linkedin</Link>
{/* <Link href={"/contact"}>CV</Link> */}
    </div>
}