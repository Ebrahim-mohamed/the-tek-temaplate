import { CourseBox, type CourseItem } from "./CourseBox";

export type CoursesSectionContent = {
  items: CourseItem[];
};

const ProjectsSection = ({ content }: { content: CoursesSectionContent }) => {
  return (
    <section className="w-full">
      {content.items.map((course, i) => (
        <CourseBox key={`${i}-${course.title}`} course={course} shaded={i % 2 !== 0} />
      ))}
    </section>
  );
};

export default ProjectsSection;
