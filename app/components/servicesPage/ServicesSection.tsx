// components/servicesPage/ServicesSection.tsx
import { ServiceRow, type ServiceItem } from "./ServiceRow";

export type ServicesPageSectionContent = {
  items: ServiceItem[];
};

const ServicesSection = ({ content }: { content: ServicesPageSectionContent }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 space-y-16">
      {content.items.map((item, i) => (
        <ServiceRow key={`${i}-${item.title}`} {...item} />
      ))}
    </section>
  );
};

export default ServicesSection;
