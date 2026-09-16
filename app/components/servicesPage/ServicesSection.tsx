// components/ServicesSection.tsx
import ServiceBox from "./ServiceBox";
const ServicesSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 space-y-16">
      <ServiceBox
        title="Structural Design"
        description="Integer placerat nunc massa at leo. Blandit nulla curabitur feugiat lacus diam etiam felis. Commodo vitae sodales quam at sed sit amet. Nulla odio blandit blandit tortor feugiat sit nunc faucibus vitae. Malesuada."
        image={"serv1"}
        imageAlt="Structural Design"
        imagePosition="right"
        highlighted
      />

      <ServiceBox
        title="Mechanical Design"
        description="Lorem ipsum dolor sit amet consectetur. Ut tempor proin ultricies massa tristique scelerisque egestas vulputate aenean. Integer placerat nunc massa at leo. Blandit nulla curabitur feugiat lacus diam etiam felis. Commodo vitae sodales quam at sed sit amet. Nulla odio blandit blandit tortor feugiat sit nunc faucibus vitae. Malesuada."
        image={"serv2"}
        imageAlt="Mechanical Design"
        imagePosition="left"
      />
    </section>
  );
};

export default ServicesSection;