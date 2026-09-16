import Image from "next/image";

export function FeedbackBox({
  feedback,
  job,
}: {
  feedback: string;
  job: string;
}) {
  return (
    <div className=" flex  flex-col gap-6 text-white font-[450] text-[1rem] items-center">
      <p className="text-[3rem] text-center text-[#100000]">{feedback}</p>
      
        
          <p className="text-[#828282] text-[1.5rem]">{job}</p>
        
      
    </div>
  );
}
