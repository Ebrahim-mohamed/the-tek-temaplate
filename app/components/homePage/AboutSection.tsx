import Image from "next/image";
import { isRemote, resolveMedia } from "../../lib/api";

export type AboutContent = {
  sectionBg: string;
  panelBg: string;
  cardBg: string;
  image: string;
  imageAlt: string;
  heading: string;
  headline: string;
  paragraphs: { text: string }[];
};

export function AboutSection({ content }: { content: AboutContent }) {
  const src = resolveMedia(content.image);

  return (
    <div style={{ backgroundColor: content.sectionBg }}>
      <div
        className="max-[750px]:flex-col max-[750px]:gap-[1.5rem] rounded-b-[7rem] flex items-center justify-center p-[var(--sectionPadding)]"
        style={{ backgroundColor: content.panelBg }}
      >
        <Image
          alt={content.imageAlt}
          width={500}
          height={500}
          src={src}
          unoptimized={isRemote(src)}
          className="rounded-[1.5rem]"
        />
        <div
          className="p-[1.5rem] rounded-[0.75rem] max-w-[60rem] ml-[-3rem] max-[750px]:ml-0"
          style={{ backgroundColor: content.cardBg }}
        >
          <h1 className="text-[3rem] text-[#616161] mb-[1rem]">{content.heading}</h1>
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
