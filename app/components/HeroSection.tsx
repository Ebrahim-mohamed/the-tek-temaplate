import { hexToRgba, resolveMedia } from "../lib/api";

/**
 * Reusable hero banner for every page.
 * - Dynamic pages pass `desktopImage` / `mobileImage` (any URL or /uploads path).
 * - Old usage `img="homePage"` still works (loads /assets/homePage.jpg + homePage-mobile.jpg).
 */
export function HeroSection({
  text,
  secText,
  img,
  desktopImage,
  mobileImage,
  overlayColor = "#000000",
  overlayOpacity = 0.57,
}: {
  text: string;
  secText?: string;
  img?: string;
  desktopImage?: string;
  mobileImage?: string;
  overlayColor?: string;
  overlayOpacity?: number;
}) {
  const clean = (url: string) => resolveMedia(url).replace(/["'\\()\n\r]/g, (c) => encodeURIComponent(c));

  const desktop = desktopImage || (img ? `/assets/${img}.jpg` : "");
  const mobile = mobileImage || (img ? `/assets/${img}-mobile.jpg` : desktop);

  return (
    <div
      className="
        relative
        rounded-b-[7rem]
        w-full
        overflow-hidden
        h-dvh
        flex
        items-center
        justify-center
        text-white
        text-[2rem]
        bg-cover
        bg-center
        bg-[image:var(--mobile-bg)]
        min-[1000px]:bg-[image:var(--desktop-bg)]
      "
      style={
        {
          "--mobile-bg": `url('${clean(mobile || desktop)}')`,
          "--desktop-bg": `url('${clean(desktop || mobile)}')`,
        } as React.CSSProperties
      }
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 z-10 rounded-b-[7rem]"
        style={{ backgroundColor: hexToRgba(overlayColor, overlayOpacity) }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
        <p>{text}</p>

        {secText && <p>{secText}</p>}
      </div>
    </div>
  );
}
