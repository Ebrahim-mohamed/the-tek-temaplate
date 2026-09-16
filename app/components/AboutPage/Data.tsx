const stats = [
  {
    value: "12K+",
    label: "Projects",
  },
  {
    value: "12K+",
    label: "Clients",
  },
  {
    value: "1+",
    label: "Years of Experience",
  },
  {
    value: "1+",
    label: "Locations",
  },
];

export function TrustedEngineerSection() {
  return (
    <section className="relative overflow-hidden rounded-b-[7rem] bg-[#363225] p-[var(--sectionPadding)]">
      
      {/* Background Glow */}
    

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="text-center text-[2rem] font-semibold leading-tight tracking-[-0.03em] text-white md:text-[2.6rem] lg:text-[3rem]">
          Get Started With a Trusted Engineer
        </h2>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex  flex-col items-center min-h-[12rem] justify-center rounded-[1.5rem] bg-[#55544f]/80 text-center backdrop-blur-sm "
            >
              <span className="text-[3.5rem] font-semibold leading-none text-white ">
                {stat.value}
              </span>

              <span className="mt-2 text-[1.1rem] font-medium text-white/65 ">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}