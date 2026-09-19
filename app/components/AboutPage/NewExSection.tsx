const history = [
  {
    title: "Founder EG YSMART for Modern Engineers",
    date: "Established Since 2015.",
  },
  {
    title: "Founder and Managing Director of EUROPT",
    date: "Established Since 2016.",
  },
  {
    title: "Managing Director of Acrow AS",
    date: "From 2022 until 2024.",
  },
  {
    title: "Commercial Head – Board member of EGYSMART",
    date: "Present",
  },
  {
    title: "Professional Trainer",
    date: "Present",
  },
];

export function ProfessionalHistory() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 lg:px-20">
      {/* Heading */}
      <h2 className="text-center font-serif text-[48px] leading-none text-[#203D5C] md:text-[64px] lg:text-[82px]">
        Professional History
      </h2>

      {/* Timeline */}
      <div className="mx-auto mt-20 max-w-[1100px] ">
        {/* Timeline line + circles */}
        <div className="relative max-[900px]:hidden">
          {/* Horizontal line */}
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[#30465C]" />

          {/* Circles */}
          <div className="relative flex items-center justify-between">
            {history.map((_, index) => (
              <div
                key={index}
                className="relative z-10 h-[24px] w-[24px] shrink-0 rounded-full border-[1.5px] border-[#30465C] bg-white"
              />
            ))}
          </div>
        </div>

        {/* Timeline content */}
        <div className="mt-8 flex justify-between max-[900px]:flex-col gap-6">
          {history.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Title */}
              <div className="flex h-[112px] max-[900px]:h-fit max-[900px]:gap-[2.5rem] items-start justify-center">
                <h3 className="max-w-[200px] max-[900px]:max-w-full text-[17px] font-medium leading-[1.6] text-[#263F5B] lg:text-[18px]">
                  {item.title}
                </h3>
              </div>

              {/* Date / Current phase */}
              <p className="whitespace-nowrap text-[14px] font-normal text-[#526274] md:text-[15px]">
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}