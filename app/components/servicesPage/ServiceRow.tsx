import Image from "next/image";
import { isRemote, resolveMedia } from "../../lib/api";

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageLeft: boolean;
  highlighted: boolean;
};

/**
 * NOTE: stand-in for your previous servicesPage/ServiceBox (I couldn't see its source).
 * It takes a full image path / URL, not just a name like "serv3".
 * Send me your ServiceBox and I will make this match its exact look.
 */
export function ServiceRow({ title, description, image, imageAlt, imageLeft, highlighted }: ServiceItem) {
  const src = resolveMedia(image);

  return (
    <div
      className={`flex items-center gap-[2rem] rounded-[1.5rem] p-[2rem] max-[800px]:flex-col ${
        imageLeft ? "flex-row-reverse max-[800px]:flex-col" : "flex-row"
      } ${highlighted ? "bg-[#1A1916] text-white" : "bg-transparent text-[#100000]"}`}
    >
      <div className="flex flex-1 flex-col gap-[1rem]">
        <h2 className="text-[2rem] font-semibold">{title}</h2>
        <p className={`text-[1.125rem] ${highlighted ? "text-white/80" : "text-[#444444]"}`}>{description}</p>
      </div>

      {src && (
        <Image
          alt={imageAlt}
          width={600}
          height={450}
          src={src}
          unoptimized={isRemote(src)}
          className="h-auto w-full max-w-[24rem] shrink-0 rounded-[1rem] object-contain"
        />
      )}
    </div>
  );
}
