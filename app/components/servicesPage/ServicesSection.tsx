// components/ServicesSection.tsx
import ServiceBox from "./ServiceBox";
const ServicesSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 space-y-16">
      <ServiceBox
        title="Business Development Courses"
        description="Practical, industry-focused courses designed to build essential business skills and provide participants with the knowledge and tools they need to succeed."
        image={"serv3"}
        imageAlt="Mechanical Design"
        imagePosition="right"
      />

      <ServiceBox
        title="Business Consulting"
        description="Helping businesses identify opportunities, overcome challenges, and develop practical strategies for sustainable growth and improved performance."
        image={"serv1"}
        imageAlt="Structural Design"
        imagePosition="right"
        highlighted
      />

      <ServiceBox
        title="Corporate Training"
        description="Customized training programs designed for companies to strengthen their teams’ capabilities, improve performance, and develop essential business and leadership skills."
        image={"serv4"}
        imageAlt="Mechanical Design"
        imagePosition="left"
      />
    </section>
  );
};

export default ServicesSection;