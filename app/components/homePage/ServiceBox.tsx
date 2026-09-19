import Image from "next/image";

export function ServiceBox({head,pra,img}:{head:string,pra:string,img:string}){
    return <div className="p-[1.5rem] flex flex-col max-w-[30rem] items-center justify-center gap-[0.5rem] bg-[#000] rounded-[1rem] ">
        <div className="p-[1.5rem] bg-[#BC9D61] rounded-full">

        <Image alt="icon" src={`/assets/homePage/${img}.svg`} width={500} height={500}  className="w-[5rem] aspect-square"/>
        </div>
        <h3 className="text-[1.5rem] text-white">{head}</h3>
        <p className="text-[0.75rem] text-[#888] text-center">{pra}</p>
    </div>
}