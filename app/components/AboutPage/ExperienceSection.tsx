const experiences = [
  {
    position: "Mechanical Engineer",
    company: "Medicaspace",
    type: "Full Time",
    date: "Aug 2025 – Present",
    location: "Alexandria, Egypt • Onsite",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris pretium vel accumsan varius. Nascetur maecenas risus amet morbi enim morbi cursus faucibus. Tortor nisl ac mollis ut tortor. Et pellentesque ultrices turpis convallis sollicitudin suspendisse orci nulla viverra. Quis nibh pulvinar consectetur metus malesuada consequat nascetur lectus ornare. Senectus et et nibh bibendum sed sed nunc. Imperdiet nulla magna commodo in id pellentesque scelerisque. Nulla orci consectetur tincidunt mi tempor morbi.",
  },
  {
    position: "Mechanical Engineer",
    company: "Medicaspace",
    type: "Full Time",
    date: "Aug 2025 – Present",
    location: "Alexandria, Egypt • Onsite",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris pretium vel accumsan varius. Nascetur maecenas risus amet morbi enim morbi cursus faucibus. Tortor nisl ac mollis ut tortor. Et pellentesque ultrices turpis convallis sollicitudin suspendisse orci nulla viverra. Quis nibh pulvinar consectetur metus malesuada consequat nascetur lectus ornare. Senectus et et nibh bibendum sed sed nunc. Imperdiet nulla magna commodo in id pellentesque scelerisque. Nulla orci consectetur tincidunt mi tempor morbi.",
  },
  {
    position: "Mechanical Engineer",
    company: "Medicaspace",
    type: "Full Time",
    date: "Aug 2025 – Present",
    location: "Alexandria, Egypt • Onsite",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris pretium vel accumsan varius. Nascetur maecenas risus amet morbi enim morbi cursus faucibus. Tortor nisl ac mollis ut tortor. Et pellentesque ultrices turpis convallis sollicitudin suspendisse orci nulla viverra. Quis nibh pulvinar consectetur metus malesuada consequat nascetur lectus ornare. Senectus et et nibh bibendum sed sed nunc. Imperdiet nulla magna commodo in id pellentesque scelerisque. Nulla orci consectetur tincidunt mi tempor morbi.",
  },
  {
    position: "Mechanical Engineer",
    company: "Medicaspace",
    type: "Full Time",
    date: "Aug 2025 – Present",
    location: "Alexandria, Egypt • Onsite",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris pretium vel accumsan varius. Nascetur maecenas risus amet morbi enim morbi cursus faucibus. Tortor nisl ac mollis ut tortor. Et pellentesque ultrices turpis convallis sollicitudin suspendisse orci nulla viverra. Quis nibh pulvinar consectetur metus malesuada consequat nascetur lectus ornare. Senectus et et nibh bibendum sed sed nunc. Imperdiet nulla magna commodo in id pellentesque scelerisque. Nulla orci consectetur tincidunt mi tempor morbi.",
  },
];

export function ExperienceSection() {
  return (
    <section className="w-full bg-white p-[var(--sectionPadding)] ">
      {/* Section title */}
      <p className="mb-12 text-[1.1rem] text-[#616161]">
        Experience
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[3px] top-[7px] bottom-[8px] w-[2px] bg-[#dedede]" />

        <div className="space-y-9">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-[4px] z-10 flex h-[8px] w-[8px] items-center justify-center rounded-full bg-[#dedede]">
                <div className="h-[3px] w-[3px] rounded-full bg-white" />
              </div>

              {/* Experience header */}
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-[1.5rem] font-semibold leading-tight text-[#171717]">
                    {experience.position}
                  </h3>

                  <p className="mt-1 text-[0.8rem] text-[#555555]">
                    {experience.company} • {experience.type}
                  </p>
                </div>

                <div className="shrink-0 text-left md:text-right">
                  <p className="text-[0.8rem] font-medium text-[#555555]">
                    {experience.date}
                  </p>

                  <p className="mt-[2px] text-[0.8rem] text-[#777777]">
                    {experience.location}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 max-w-[95%] text-[0.7rem] leading-[1.7] text-[#3f3f3f] md:max-w-none">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}