export function HeroSection({
  text,
  secText,
  img,
}: {
  text: string;
  secText?: string;
  img: string;
}) {
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
          "--mobile-bg": `url('/assets/${img}-mobile.jpg')`,
          "--desktop-bg": `url('/assets/${img}.jpg')`,
        } as React.CSSProperties
      }
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-10 rounded-b-[7rem] bg-[#00000091]" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
        <p>{text}</p>

        {secText && <p>{secText}</p>}
      </div>
    </div>
  );
}
