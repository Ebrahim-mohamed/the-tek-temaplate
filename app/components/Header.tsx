import Link from "next/link";
import { Navbar } from "./navbar";


export function Header(){
    return <div className="absolute z-50 flex p-[2rem]  flex items-center justify-between w-full bg-transparent">
        <h1 className="text-white text-[3rem]">Logo</h1>
<Navbar/>
        <Link className="text-[0.8rem] px-[3rem] py-[1rem] rounded-full text-black bg-white" href={"/contact"}>Let's talk</Link>
    </div>
}