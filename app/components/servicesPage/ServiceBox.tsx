// components/ServiceBox.tsx
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ServiceBoxProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  href?: string;
  highlighted?: boolean;
}

const ServiceBox = ({
  title,
  description,
  image,
  imageAlt,
  imagePosition = "right",
  href = "#",
}: ServiceBoxProps) => {
  const textBlock = (
    <div
      className={`p-8 flex flex-col justify-center rounded-xl `}
    >
      <h3 className="text-[2.5rem] font-bold mb-4">{title}</h3>
      <p className="text-gray-500 text-[1.1rem] leading-relaxed mb-6">
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 w-fit border border-gray-300 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-50 transition"
      >
        Learn More
        <span className="text-xs">↗</span>
      </Link>
    </div>
  );

  const imageBlock = (
    <div className="relative rounded-xl overflow-hidden min-h-[280px]">
      <Image
        src={`/assets/servicesPage/${image}.png`}
        alt={imageAlt}
        
        className="object-cover"
width={500}
height={500}
      />
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-12 items-stretch">
      {imagePosition === "left" ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
};

export default ServiceBox;