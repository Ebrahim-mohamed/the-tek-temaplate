import Image from "next/image";
import { isRemote, resolveMedia } from "../../lib/api";

/**
 * NOTE: this replaces your previous ServiceBox (I couldn't see its source).
 * `img` is now a full image path / URL (e.g. "/assets/serv1.png" or an uploaded "/uploads/..."),
 * not just a name. Adjust the markup/classes below to match your original look.
 */
export function ServiceBox({
  head,
  pra,
  img,
  isMain = false,
}: {
  head: string;
  pra: string;
  img: string;
  isMain?: boolean;
}) {
  const src = resolveMedia(img);

  return (
    <div
      className={`flex gap-[1.25rem] rounded-[1.5rem] border border-white/15 bg-white/5 p-[1.5rem] text-white ${
        isMain ? "flex-col min-[570px]:flex-row min-[570px]:items-center" : "flex-col"
      }`}
    >
      {src && (
        <Image
          alt=""
          width={64}
          height={64}
          src={src}
          unoptimized={isRemote(src)}
          className="h-[4rem] w-[4rem] shrink-0 object-contain"
        />
      )}
      <div className="flex flex-col gap-[0.5rem]">
        <h2 className={isMain ? "text-[1.75rem]" : "text-[1.25rem]"}>{head}</h2>
        <p className="text-[1rem] opacity-80">{pra}</p>
      </div>
    </div>
  );
}
