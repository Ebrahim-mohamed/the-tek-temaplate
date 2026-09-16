const projects = [
  {
    image: "pro3",
    name: "Smart Irrigation System",
  },
  {
    image: "pro2",
    name: "Smart Irrigation System",
  },
  {
    image: "pro3",
    name: "Smart Irrigation System",
  },
  {
    image: "pro4",
    name: "Smart Irrigation System",
  },
];

export function ProjectSection() {
  return (
    <div className="bg-[#F1F0EE] rounded-t-[7rem] p-[var(--sectionPadding)]">
      <h1 className="text-[1.5rem] text-center text-[#616161] mb-[3rem]">
        Featured Work
      </h1>

      <div className="grid grid-cols-2 gap-[2rem]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative h-[32rem] overflow-hidden rounded-[2rem] cursor-pointer"
          >
            {/* Image */}
            <img
              src={`/assets/homePage/${project.image}.png`}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/60" />

            {/* Project Name */}
            <div className="absolute inset-0 flex items-end justify-start p-[1.5rem] opacity-0 transition-all duration-500 group-hover:opacity-100">
              <h2 className="text-white text-[2rem] font-medium translate-y-5 transition-transform duration-500 group-hover:translate-y-0">
                {project.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
