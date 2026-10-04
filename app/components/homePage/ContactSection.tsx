import Link from "next/link";
import { safeHref } from "../../lib/api";

export type ContactContent = {
  bgColor: string;
  textColor: string;
  showStatus: boolean;
  statusText: string;
  statusColor: string;
  headingLine1: string;
  headingLine2: string;
  buttonText: string;
  buttonLink: string;
  buttonBg: string;
  buttonTextColor: string;
};

export function ContactSection({ content }: { content: ContactContent }) {
  return (
    <div
      className="flex justify-between flex-col w-dvw gap-[3rem] p-[var(--sectionPadding)]"
      style={{ backgroundColor: content.bgColor }}
    >
      {content.showStatus && (
        <div className="flex items-center justify-center gap-[1rem]">
          <div
            className="w-[1rem] aspect-square rounded-full"
            style={{ backgroundColor: content.statusColor }}
          ></div>
          <p className="text-[1.5rem]" style={{ color: content.textColor }}>
            {content.statusText}
          </p>
        </div>
      )}
      <p className="text-[4rem] text-center" style={{ color: content.textColor }}>
        {content.headingLine1}
        {content.headingLine2 && (
          <>
            <br />
            {content.headingLine2}
          </>
        )}
      </p>
      {content.buttonText && (
        <div className="flex items-center justify-center">
          <Link
            href={safeHref(content.buttonLink)}
            className="px-[4rem] text-center py-[1rem] text-[1rem] rounded-[2rem] w-fit"
            style={{ backgroundColor: content.buttonBg, color: content.buttonTextColor }}
          >
            {content.buttonText}
          </Link>
        </div>
      )}
    </div>
  );
}
