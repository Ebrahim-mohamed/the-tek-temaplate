import Image from "next/image";
import { isRemote, resolveMedia } from "../../lib/api";

export type CourseItem = {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  image: string;
  imageAlt: string;
  meta: { label: string; value: string }[];
};

/**
 * NOTE: stand-in for your previous workPage/ProjectBox (I couldn't see its source).
 * It takes a full image path / URL, not just a name like "proj1".
 * Send me your ProjectBox and I will make this match its exact look.
 */
export function CourseBox({ course, shaded }: { course: CourseItem; shaded: boolean }) {
  const src = resolveMedia(course.image);
  const points = [course.description3, course.description4, course.description5].filter(Boolean);

  return (
    <article className={`w-full p-[var(--sectionPadding)] ${shaded ? "bg-[#F1F1F1]" : "bg-white"}`}>
      <div className="mx-auto flex max-w-6xl items-start gap-[3rem] max-[900px]:flex-col">
        {src && (
          <Image
            alt={course.imageAlt}
            width={600}
            height={450}
            src={src}
            unoptimized={isRemote(src)}
            className="h-auto w-full max-w-[28rem] shrink-0 rounded-[1.5rem] object-cover"
          />
        )}

        <div className="flex flex-1 flex-col gap-[1.25rem] text-[#100000]">
          {course.description1 && (
            <span className="w-fit rounded-full bg-[#1A1916] px-[1rem] py-[0.25rem] text-[0.875rem] text-[#C8A96E]">
              {course.description1}
            </span>
          )}

          <h2 className="text-[2.25rem] font-semibold leading-[2.75rem]">{course.title}</h2>

          {course.description2 && <p className="text-[1.25rem] font-medium">{course.description2}</p>}

          {points.map((p, i) => (
            <p key={i} className="text-[1.125rem] text-[#444444]">
              {p}
            </p>
          ))}

          {course.meta.length > 0 && (
            <dl className="mt-[0.5rem] grid grid-cols-2 gap-[1rem] min-[700px]:grid-cols-4">
              {course.meta.map((m, i) => (
                <div key={i} className="rounded-[1rem] border border-black/10 bg-white/60 p-[1rem]">
                  <dt className="text-[0.875rem] text-[#616161]">{m.label}</dt>
                  <dd className="text-[1.125rem] font-semibold">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </article>
  );
}
