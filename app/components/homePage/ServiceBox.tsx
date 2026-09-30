import Image from "next/image";

export function ServiceBox({head,pra,img,isMain}:{head:string,pra:string,img:string,isMain?:boolean}){
    return <div className={`p-[1.5rem] flex flex-col ${isMain?" max-w-full ":" max-w-[30rem] "} items-center justify-center gap-[0.5rem] bg-[#000] rounded-[1rem] `}>
        {/* <div className="p-[1.5rem] bg-[#BC9D61] rounded-full aspect-square flex items-center justify-center"> */}

        <Image alt="icon" src={`/assets/servicesPage/${img}.png`} width={500} height={500}  className={`${img==="serv4"?" w-[15rem] ":" w-[15rem] "}`}/>
        {/* </div> */}
        <h3 className="text-[1.5rem] text-white">{head}</h3>
        <p className="text-[0.75rem] text-[#888] text-center">{pra}</p>
    </div>
}