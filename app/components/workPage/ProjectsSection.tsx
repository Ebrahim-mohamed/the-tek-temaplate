
import ProjectBox from "./ProjectBox";

const projects = [
  {
    title: "Smart Irrigation System",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nisl tempor tempus adipiscing. Tortor morbi nisi netus in urna ipsum tortor sed. Morbi urna mi id sed non in et metus. Sit auctor eget viverra purus tincidunt dictumst habitasse. Sagittis tristique tellus proin proin pulvinar. Integer sem tincidunt tellus id faucibus et. Fringilla sit vitae egestas tortor eu. Pellentesque sed nisi eget purus bibendum blandit proin congue. Euismod at volutpat faucibus id adipiscing quisque. Justo mi eros quisque massa massa. Auctor consectetur ullamcorper in suspendisse tellus viverra.",
    image: "proj1",
    imageAlt: "Smart Irrigation System - Bridge",
    meta: [
      { label: "Date", value: "23rd of Aug" },
      { label: "TimeLine", value: "3 Month" },
      { label: "Location", value: "Cairo Egypt" },
      { label: "Budget", value: "USD 12,000" },
    ],
  },
  {
    title: "Smart Irrigation System",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nisl tempor tempus adipiscing. Tortor morbi nisi netus in urna ipsum tortor sed. Morbi urna mi id sed non in et metus. Sit auctor eget viverra purus tincidunt dictumst habitasse. Sagittis tristique tellus proin proin pulvinar. Integer sem tincidunt tellus id faucibus et. Fringilla sit vitae egestas tortor eu. Pellentesque sed nisi eget purus bibendum blandit proin congue. Euismod at volutpat faucibus id adipiscing quisque. Justo mi eros quisque massa massa. Auctor consectetur ullamcorper in suspendisse tellus viverra.",
    image: "proj2",
    imageAlt: "Smart Irrigation System - Structure",
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
          description={project.description}
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