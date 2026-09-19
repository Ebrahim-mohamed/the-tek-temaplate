
import ProjectBox from "./ProjectBox";

const projects = [
  {
    title: "Business Development for Engineers",
    description1:
      "Real world case studies",
    description2:
      "Turn your technical expertise into revenue. This business development course transforms engineers into industry leaders and growth drivers.",
    description3:
      "Explore and analyze successful business development strategies from leading organizations with real world case studies",
    description4:
      "Reinforce learning through industry-relevant assignments, giving participants firsthand experience in applying concepts having practical assignments.",
    description5:
      "Engage in activities designed to build and adapt approaches to real-world scenarios",
    image: "proj1",
    imageAlt: "Smart Irrigation System - Bridge",
    meta: [
      { label: "Date", value: "23rd of Aug" },
      { label: "TimeLine", value: "3 Month" },
      { label: "Location", value: "Cairo Egypt" },
      { label: "Budget", value: "USD 12,000" },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full">
      {projects.map((project, i) => (
        <ProjectBox
          key={i}
          title={project.title}
          description1={project.description1}
          description2={project.description2}
          description3={project.description3}
          description4={project.description4}
          description5={project.description5}
          image={project.image}
          imageAlt={project.imageAlt}
          meta={project.meta}
          shaded={i % 2 !== 0}
        />
      ))}
    </section>
  );
};

export default ProjectsSection;