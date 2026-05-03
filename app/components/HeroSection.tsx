export function HeroSection({text,img}:{text:string,img:string}){
    return <div className=" rounded-b-[7rem] w-full overflow-hidden h-dvh flex items-center  justify-center text-white text-[2rem] bg-center bg-cover " style={{backgroundImage:`url(assets/${img}.jpg)`}}>
        <div className="absolute z-10 w-full rounded-b-[7rem] h-dvh bg-[#00000091]"></div>
        
        <p className="z-50">{text}</p>
        
        </div>
}