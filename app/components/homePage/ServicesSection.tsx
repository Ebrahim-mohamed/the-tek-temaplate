import Link from "next/link";
import { safeHref } from "../../lib/api";
import { ServiceBox } from "./ServiceBox";

type Service = { head: string; pra: string; icon: string };

export type ServicesContent = {
  bgColor: string;
  accentColor: string;
  headingAccent: string;
  headingRest: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  mainService: Service;
  items: Service[];
};

export function ServicesSection({ content }: { content: ServicesContent }) {
  const { mainService, items } = content;

  return (
    <div
      className="flex max-[920px]:flex-col max-[920px]:justify-center max-[920px]:items-center justify-between w-dvw gap-[3rem] rounded-b-[7rem] p-[var(--sectionPadding)]"
      style={{ backgroundColor: content.bgColor }}
    >
      <div className="flex flex-col gap-[3rem] text-white max-[920px]:items-center">
        <h1 className="text-[4rem] max-[570px]:text-[3rem]">
          <span style={{ color: content.accentColor }}>{content.headingAccent}</span> {content.headingRest}
        </h1>
        <p className="text-[1rem] max-w-[35rem]">{content.description}</p>
        {content.buttonText && (
          <Link
            href={safeHref(content.buttonLink)}
            className="py-[0.75rem] w-fit px-[2rem] rounded-[1rem] border-white border"
          >
            {content.buttonText}
          </Link>
        )}
      </div>
      <div className="flex flex-col gap-[2rem]">
        {mainService.head && (
          <div className="w-full">
            <ServiceBox head={mainService.head} pra={mainService.pra} img={mainService.icon} isMain />
          </div>
        )}
        {items.length > 0 && (
          <div className="grid gap-[2rem] grid-cols-2 max-[570px]:grid-cols-1">
            {items.map((serv, i) => (
              <ServiceBox key={`${i}-${serv.head}`} head={serv.head} pra={serv.pra} img={serv.icon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
