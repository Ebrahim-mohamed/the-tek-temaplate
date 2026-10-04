import Image from "next/image";
import { isRemote, resolveMedia } from "../../lib/api";

export type AboutPageSectionContent = {
  sectionBg: string;
  cardBg: string;
  heading: string;
  image: string;
  imageAlt: string;
  headline: string;
  paragraphs: { text: string }[];
};

export function AboutSection({ content }: { content: AboutPageSectionContent }) {
  const src = resolveMedia(content.image);

  return (
    <div
      className="rounded-b-[7rem] p-[var(--sectionPadding)]"
      style={{ backgroundColor: content.sectionBg }}
    >
      <h1 className="text-[#616161] text-[3rem] mb-[3rem] text-center">{content.heading}</h1>
      <div className="flex max-[800px]:flex-col items-center gap-[4rem] justify-between">
        <Image
          alt={content.imageAlt}
          width={500}
          height={500}
          src={src}
          unoptimized={isRemote(src)}
          className="rounded-[1.5rem] w-full"
        />
        <div
          className="p-[1.5rem] rounded-[0.75rem] max-w-[60rem] ml-[-3rem] max-[750px]:ml-0"
          style={{ backgroundColor: content.cardBg }}
        >
          <p className="text-[2rem] leading-[2.5rem] font-semibold text-[#100000]">{content.headline}</p>
          {content.paragraphs.map((p, i) => (
            <p key={i} className="text-[1.125rem] text-[#444444]">
              {p.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
