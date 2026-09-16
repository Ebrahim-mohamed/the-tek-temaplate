// components/ProjectBox.tsx
import Image, { StaticImageData } from "next/image";

interface ProjectMeta {
  label: string;
  value: string;
}

interface ProjectBoxProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  meta: ProjectMeta[];
  shaded?: boolean;
}

const ProjectBox = ({
  title,
  description,
  image,
  imageAlt,
  meta,
  shaded = false,
}: ProjectBoxProps) => {
  return (
    <div
      className={`w-full py-12 ${
        shaded ? "bg-gray-100" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-start">
        <div className="relative rounded-2xl overflow-hidden ">
          <Image
            src={`/assets/workPage/${image}.png`}
            alt={imageAlt}
            
            className="object-cover"
           width={500}
           height={500}
          />
        </div>

        <div className="flex flex-col justify-center h-full py-4">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {description}
          </p>

          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {meta.map((item) => (
              <div
                key={item.label}
                className="flex justify-between py-3 text-sm"
              >
                <span className="text-gray-500">{item.label}:</span>
                <span className="font-medium text-gray-800">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;